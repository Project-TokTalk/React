import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Font.css"; // CSS 파일을 불러옵니다.

const Country = () => {
  const [chartData, setChartData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  // 나라 데이터 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://43.201.239.119:8081/admin/country",
      );
      const data = response.data;
      console.log("백분율 값과 국가 코드:", data);
      const filteredData = data.filter((item) => item.nation !== "ADMIN"); // admin 국가 필터링
      const sortedData = filteredData.sort((a, b) => b.userCount - a.userCount); // 내림차순 정렬
      setChartData(sortedData);
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("데이터 요청 실패", error);
    }
  };

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
      animations: { enabled: true, easing: "easeinout", speed: 800 },
    },
    labels: chartData.slice(0, 6).map((item) => getCountryName(item.nation)), // 상위 6개 국가만 라벨로 사용
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const country = opts.w.config.labels[opts.seriesIndex];
        return `${country}`;
      },
      position: "center",
    },
    colors: [
      "#004DC8",
      "#155DDB",
      "#267DEE",
      "#3A9DF3",
      "#55AEEF",
      "#7BBEEB",
      "#AFD5EE",
    ], // 색상 설정
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

  // 상위 6개 국가 이외의 국가들의 이용자 수를 합산
  const sumOfOtherCountries = chartData
    .slice(6)
    .reduce((total, item) => total + item.userCount, 0);

  // "기타" 항목을 추가하여 이용자 수를 삽입
  const otherCountriesData = {
    nation: "Other",
    userCount: sumOfOtherCountries,
  };

  // 데이터 라벨 배열에서 "기타" 항목을 "Other"로 변경
  const modifiedLabels = [
    ...chartData.slice(0, 6).map((item) => getCountryName(item.nation)),
    "Other",
  ];

  return (
    <div className="mt-12 flex h-3/4 items-center">
      <div className="w-3/4">
        <ReactApexChart
          key={refreshKey}
          options={{ ...chartOptions, labels: modifiedLabels }} // 수정된 데이터 라벨 적용
          series={[
            ...chartData.slice(0, 6).map((item) => item.userCount),
            otherCountriesData.userCount,
          ]}
          type="donut"
          height={400}
        />
      </div>
      <div className="flex w-1/3 flex-col p-4 pl-8">
        <div
          className="mb-4 text-center text-3xl font-bold text-color_b"
          style={{
            fontFamily: "JalnanGothic",
          }}
        >
          국가별
          <br /> 이용자 수
        </div>
        <div className="space-y-2">
          {chartData.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color_c text-lg font-bold text-white"
                style={{
                  fontFamily: "Noto Sans",
                }}
              >
                {index + 1}
              </div>
              <div>
                <div
                  className="text-lg"
                  style={{
                    fontFamily: "JalnanGothic",
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
        </div>
      </div>
    </div>
  );
};

export default Country;
