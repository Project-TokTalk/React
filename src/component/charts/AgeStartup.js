import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

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
    <div className="flex">
      <div className="ml-7 mr-7 mt-10 h-full w-3/4">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
      <div className="flex flex-col">
        <div className="h-1/4 px-3 pt-3 text-xl font-bold leading-6 text-gray-900">
          연령대별 창업유무
        </div>
        <div className="px-6 text-sm font-medium leading-6 text-gray-900">
          여기에 상위 1위, 해당 퍼센트 입력
        </div>
        <div className="px-6 text-sm font-medium leading-6 text-gray-900">
          여기에 상위 2위, 해당 퍼센트 입력
        </div>
        <div className="px-6 text-sm font-medium leading-6 text-gray-900">
          여기에 상위 3위, 해당 퍼센트 입력
        </div>
      </div>
    </div>
  );
}
