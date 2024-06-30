import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Font.css"; // CSS 파일을 불러옵니다.

export default function AgeStartup(props) {
  const [options, setOptions] = useState({
    theme: { mode: "white" },
    chart: {
      // 그래프 세부 설정
      height: 350,
      type: "bar",
      stacked: true,
      toolbar: { show: true }, // 툴바 표시 설정
      animations: {
        // 애니메이션 설정
        enabled: true,
        easing: "easeinout", // 애니메이션 완화 방식 설정
        speed: 800, // 애니메이션 속도 설정
        animateGradually: {
          enabled: true, // 점진적 애니메이션 활성화
          delay: 150, // 애니메이션 지연 시간 설정
        },
        dynamicAnimation: {
          enabled: true, // 동적 애니메이션 활성화
          speed: 350, // 동적 애니메이션 속도 설
        },
      },
    },
    dataLabels: { enabled: true, enabledOnSeries: [0, 1] }, // 데이터 라벨 표시 설정
    grid: { show: false }, // 그리드 표시 설정
    xaxis: {
      // x축 설정
      labels: { show: true },
      axisTicks: { show: false }, // x축 눈금 표시 설정
      axisBorder: { show: true }, // x축 경계선 표시 설정
      categories: [],
      type: "string", // x축 데이터 타입 설정
    },
    yaxis: {
      // y축 설정
      axisBorder: { show: true }, // y축 경계선 표시 설정
      title: { text: "Count" }, // y축 제목 설정
    },
    fill: { type: "gradient", gradient: { stops: [0, 0] } },
    colors: ["#5CACEE", "#3A5FCD"], // 막대 색상 설정
    tooltip: {
      // 툴팁 설정
      enabled: false,
      style: {
        background: "rgba(0, 0, 0, 0.9)", // 투명도를 조절하여 툴팁의 배경색 설정
        opacity: 1, // 툴팁의 불투명도를 100%로 설정
      },
    },
  });

  const [series, setSeries] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  // 창업 데이터 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get("http://43.201.239.119:8081/admin/age");
      const data = response.data;

      // admin을 제외한 데이터 새로운 객체로 생성
      const filteredData = Object.keys(data)
        .filter((key) => key !== "ADMIN")
        .reduce((obj, key) => {
          obj[key] = data[key];
          return obj;
        }, {});

      // key값 따로 저장
      const categories = Object.keys(filteredData);
      const totalCountData = Object.values(filteredData).map(
        (item) => item.totalCount || 0,
      );
      // 창업자 수 저장
      const startTrueCountData = Object.values(filteredData).map(
        (item) => item.startTrueCount || 0,
      );
      // 비창업자 수 저장
      const startFalseCountData = totalCountData.map(
        (totalCount, index) => totalCount - startTrueCountData[index],
      );
      // 총 사용자 수 저장
      const total = totalCountData.reduce((acc, val) => acc + val, 0);
      setTotalUsers(total);

      setOptions((prevState) => ({
        ...prevState,
        xaxis: { ...prevState.xaxis, categories: categories },
      }));
      setSeries([
        { name: "창업한 사용자", data: startTrueCountData },
        { name: "창업하지 않은 사용자", data: startFalseCountData },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mt-8 flex items-center">
      <div className="w-3/4">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
      <div className="flex w-1/3 flex-col p-2">
        <div
          className="mb-4 text-center text-3xl text-color_b"
          style={{ fontFamily: "JalnanGothic" }}
        >
          연령대별
          <br /> 창업유무
        </div>
        {series.length > 0 && series[0].data ? (
          series[0].data
            .map((item, index) => ({
              age: options.xaxis.categories[index],
              startTrueCount: item,
              startFalseCount: series[1].data[index],
            }))
            .sort(
              (a, b) =>
                b.startTrueCount +
                b.startFalseCount -
                (a.startTrueCount + a.startFalseCount),
            )
            .slice(0, 3)
            .map((item, index) => (
              <div key={index} className="mb-2 flex items-center">
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
                    {`${item.age}대`}
                  </div>
                  <div className="flex justify-start text-sm text-gray-600">
                    {`${(((item.startTrueCount + item.startFalseCount) / totalUsers) * 100).toFixed(2)}%`}
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="text-gray-600">데이터를 불러오는 중...</div>
        )}
      </div>
    </div>
  );
}
