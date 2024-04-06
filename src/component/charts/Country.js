import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import "./Font.css"; // CSS 파일을 불러옵니다.

const Country = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/admin/country")
      .then((response) => {
        const data = response.data;
        console.log("백분율 값과 국가 코드:", data);
        const filteredData = data.filter((item) => item.nation !== "ADMIN"); // admin 국가 필터링
        const sortedData = filteredData.sort(
          (a, b) => b.userCount - a.userCount,
        ); // 내림차순 정렬
        setChartData(sortedData);
      })
      .catch((error) => {
        console.error("데이터 요청 실패", error);
      });
  }, []);

  // 국가 코드를 국가 이름으로 변환하는 함수
  const getCountryName = (countryCode) => {
    const countryCodesToNames = {
      KR: "Korea",
      US: "United States",
      JP: "Japan",
      VN: "Vietnam",
      MX: "Mexico",
      CN: "China",
      CA: "Canada",
      UZ: "Uzbekistan",
      TH: "Thailand",
      PH: "Philippines",
    };
    return countryCodesToNames[countryCode] || countryCode;
  };

  // 차트의 데이터 및 옵션 설정
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: chartData.slice(0, 7).map((item) => getCountryName(item.nation)), // 상위 7개 국가만 라벨로 사용
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const country = opts.w.config.labels[opts.seriesIndex];
        return `${country}`;
      },
      position: "center",
    },
    colors: ["#5CACEE", "#3A5FCD", "#4F94CD", "#78C7E3"], // 색상 설정
    legend: {
      show: false,
    },

    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true, // 이름 표시 여부
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Nanum Gothic",
            },
            value: {
              show: true, // 값 표시 여부
              fontSize: "20px",
              formatter: function (val) {
                return val + "명"; // 라벨 값 뒤에 "명" 추가
              },
              fontWeight: "bold",
              fontFamily: "Nanum Gothic",
            },
          },
        },
      },
    },
  };

  // 상위 7개 국가 이외의 국가들의 이용자 수를 합산
  const sumOfOtherCountries = chartData
    .slice(7)
    .reduce((total, item) => total + item.userCount, 0);

  // "기타" 항목을 추가하여 이용자 수를 삽입
  const otherCountriesData = {
    nation: "Other",
    userCount: sumOfOtherCountries,
  };

  // 데이터 라벨 배열에서 "기타" 항목을 "Other"로 변경
  const modifiedLabels = [
    ...chartData.slice(0, 7).map((item) => getCountryName(item.nation)),
    "Other",
  ];

  return (
    <div className="mt-16 flex items-center">
      <div className="w-3/4">
        <ReactApexChart
          options={{ ...chartOptions, labels: modifiedLabels }} // 수정된 데이터 라벨 적용
          series={[
            ...chartData.slice(0, 7).map((item) => item.userCount),
            otherCountriesData.userCount,
          ]}
          type="donut"
          height={400}
        />
      </div>
      <div className="flex w-1/3 flex-col p-2">
        <div className="mb-4 text-center text-2xl font-bold text-color_b underline decoration-dotted">
          국가별 이용자 수
        </div>
        <div className="space-y-2">
          {chartData.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="bg-color_c mr-3 flex h-6 w-6 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{
                  fontFamily: "Noto Sans",
                }}
              >
                {index + 1}
              </div>
              <div>
                <div
                  className="text-lg font-bold"
                  style={{
                    fontSize: `${30 - index * 6}px`,
                  }}
                >
                  {`${getCountryName(item.nation)}`}{" "}
                  {/* 국가 코드를 국가 이름으로 변환 */}
                </div>
                <div className="text-sm text-gray-600">
                  {`${item.userPercentage.toFixed(2)}%`}
                </div>
              </div>
            </div>
          ))}
          {/* "기타" 항목 표시 */}
        </div>
      </div>
    </div>
  );
};

export default Country;
