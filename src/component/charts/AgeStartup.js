import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import './Font.css'; // CSS 파일을 불러옵니다.

export default function AgeStartup(props) {
  const [options, setOptions] = useState({
    theme: { mode: "white" },
    chart: {
      height: 350,
      type: "line",
      toolbar: { show: true },
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    grid: { show: false },
    xaxis: {
      labels: { show: true },
      axisTicks: { show: false },
      axisBorder: { show: true },
      categories: [],
      type: "string",
    },
    yaxis: [
      {
        axisBorder: { show: true },
        title: {
          text: "Count",
        },
      }
    ],
    fill: {
      type: "gradient",
      gradient: { stops: [100, 100] },
    },
    colors: ["#28a745", "#007bff"], 
    tooltip: {
      y: { formatter: (value) => `${value.toFixed(2)}` },
    },
  });

  const [series, setSeries] = useState([]);

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

      const newSeries = [
        {
          name: "Total Count",
          type: "column",
          data: Object.values(filteredData).map((item) => item.totalCount || 0),
        },
        {
          name: "Start True Count",
          type: "line",
          data:Object.values(filteredData).map((item) => item.startTrueCount || 0), 
        },
      ];

      setOptions((prevState) => ({
        ...prevState,
        xaxis: {
          ...prevState.xaxis,
          categories: Object.keys(filteredData),
        },
      }));
      
      setSeries(newSeries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center" style={{ marginTop: "30px" }}>
      <div className="w-3/4">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
      <div className="flex flex-col w-1/4 p-4" style={{ width: "30%" }}>
        <div className="text-2xl font-bold mb-4">
          연령대별 창업유무
        </div>
        {series.length > 0 && series[0].data ? (
          series[0].data
            .map((item, index) => ({ age: options.xaxis.categories[index], count: item }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 3)
            .map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 mr-2">
                  {index + 1}
                </div>
                <div>
                  <div className="text-lg font-medium" style={{ fontWeight: "bold" }}>
                    {`${item.age}대`}
                  </div>
                  <div className="text-sm text-gray-600">
                    {`${((item.count / series[0].data.reduce((a, b) => a + b, 0)) * 100).toFixed(2)}%`}
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
