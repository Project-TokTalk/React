import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const Country = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // 손승아, axios.get 통해 spring boot에서 데이터 받아오기, 20240401
    axios
      .get("http://localhost:8081/admin/country")
      .then((response) => {
        const data = response.data;
        console.log("백분율 값과 국가 이름:", data);
        const filteredData = data.filter((item) => item.nation !== "ADMIN"); // admin 국가 필터링
        setChartData(filteredData);
      })
      .catch((error) => {
        console.error("데이터 요청 실패", error);
      });
  }, []);

  // 차트의 데이터 및 옵션 설정
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: chartData.map((item) => item.nation),
    colors: ["#5f76e8", "#01caf1", "#172072"], // 색상 설정
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const country = opts.w.config.labels[opts.seriesIndex];
        return `${country}`;
      },      
      position: "center",
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = chartData.map((item) => item.userCount);

  return (
    <div className="flex">
      <div className="ml-7 mr-7 mt-10 h-full w-3/4">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          height={350}
        />
      </div>
      <div className="col-span-1">
        <div>
          <div className="px-3 pt-3 text-xl font-bold leading-6">
            국가별 이용자 수
          </div>
          <div className="px-6 text-sm font-medium leading-6">
            여기에 상위 1위, 해당 퍼센트 입력
          </div>
          <div className="px-6 text-sm font-medium leading-6">
            여기에 상위 2위, 해당 퍼센트 입력
          </div>
          <div className="px-6 text-sm font-medium leading-6">
            여기에 상위 3위, 해당 퍼센트 입력
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
