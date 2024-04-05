import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import './Font.css'; // CSS 파일을 불러옵니다.

export default function AgeStartup(props) {
  const [options, setOptions] = useState({
    theme: { mode: "white" },
    chart: {
      height: 350,
      type: "bar", // 막대 그래프로 타입 변경
      stacked: true, // 스택된 막대 그래프로 설정
      toolbar: { show: true },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1], // 창업한 사용자 수, 창업하지 않은 사용자 수에만 데이터 라벨 표시
    },
    grid: { show: false },
    xaxis: {
      labels: { show: true },
      axisTicks: { show: false },
      axisBorder: { show: true },
      categories: [],
      type: "string",
    },
    yaxis: {
      axisBorder: { show: true },
      title: {
        text: "Count",
      },
    },
    fill: {
      type: "gradient",
      gradient: { stops: [0, 0] },
    },
    colors: ["#002267", "#7589F3"], // 창업한 사용자와 창업하지 않은 사용자의 막대 색상 설정
    tooltip: {
      style: {
        background: "#ffffff", // 툴팁의 배경색을 원하는 색상으로 변경
      },
    },
  });

  const [series, setSeries] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0); // 전체 사용자 수 상태 추가

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/admin/age");
      const data = response.data;

      const filteredData = Object.keys(data)
        .filter((key) => key !== "ADMIN")
        .reduce((obj, key) => {
          obj[key] = data[key];
          return obj;
        }, {});

      const categories = Object.keys(filteredData);
      const totalCountData = Object.values(filteredData).map(
        (item) => item.totalCount || 0
      );
      const startTrueCountData = Object.values(filteredData).map(
        (item) => item.startTrueCount || 0
      );

      // 창업하지 않은 사용자 수 계산
      const startFalseCountData = totalCountData.map(
        (totalCount, index) => totalCount - startTrueCountData[index]
      );

      // 전체 사용자 수 계산
      const total = totalCountData.reduce((acc, val) => acc + val, 0);
      setTotalUsers(total);

      setOptions((prevState) => ({
        ...prevState,
        xaxis: {
          ...prevState.xaxis,
          categories: categories,
        },
      }));

      setSeries([
        {
          name: "창업한 사용자",
          data: startTrueCountData,
        },
        {
          name: "창업하지 않은 사용자",
          data: startFalseCountData,
        },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center" style={{ marginTop: "30px"}}>
      <div className="w-3/4" style={{boxShadow: "0px 0px 5px 5px gray"}}>
        <ReactApexChart options={options} series={series} type="bar" height={300} />
      </div>
      <div className="flex flex-col w-1/4 p-4" style={{ width: "35%", paddingLeft:"30px" }}>
        <div className="text-2xl font-bold mb-4" style={{textAlign:"center", color:"#002267", textDecoration:"underline", textDecorationStyle:"dotted"}}>
          연령대별 창업유무
        </div>
        {series.length > 0 && series[0].data ? (
          series[0].data
            .map((item, index) => ({ age: options.xaxis.categories[index], startTrueCount: item, startFalseCount: series[1].data[index] }))
            .sort((a, b) => b.startTrueCount + b.startFalseCount - (a.startTrueCount + a.startFalseCount))
            .slice(0, 3)
            .map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ color: "white", fontWeight: "bold", fontSize: "20px", fontFamily: "Hanna", backgroundColor: "#7589F3", marginRight: "10px" }}>
                    {index + 1}
                </div>
                <div>
                    <div className="text-lg font-medium" style={{ fontWeight:"bold", fontSize: `${30 - index * 6}px` }}>
                        {`${item.age}대`}
                    </div>
                    <div className="text-sm text-gray-600" style={{ textAlign: 'left' }}>
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
