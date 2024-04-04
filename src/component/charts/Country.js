import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const Country = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/admin/country")
      .then((response) => {
        const data = response.data;
        console.log("백분율 값과 국가 이름:", data);
        const filteredData = data.filter((item) => item.nation !== "ADMIN"); // admin 국가 필터링
        const sortedData = filteredData.sort((a, b) => b.userCount - a.userCount); // 내림차순 정렬
        setChartData(sortedData);
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
    colors: ["#29635f", "#008953", "#bdda57"], // 색상 설정
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
    
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true, // 이름 표시 여부
              fontSize: '30px',
              fontWeight: 'bold',
              fontFamily: 'Nanum Gothic'
            },
            value: {
              show: true, // 값 표시 여부
              fontSize: '20px',
              formatter: function (val) {
                return val + '명'; // 라벨 값 뒤에 "명" 추가
              },
              fontWeight: 'bold',
              fontFamily: 'Nanum Gothic'
            }
          }
        }
      }
    }
  };  

  return (
    <div className="flex">
      <div className="ml-7 mr-7 mt-10 h-full w-3/4">
        <ReactApexChart
          options={chartOptions}
          series={chartData.map((item) => item.userCount)}
          type="donut"
          height={350}
        />
      </div>
      <div className="col-span-1" style={{ width: "30%" }}>
        <div>
          <div className="px-3 pt-3 text-xl font-bold leading-6">
            국가별 이용자 수
          </div>
          <br></br>
          <br></br>
          {chartData.slice(0, 3).map((item, index) => (
            <div key={index} className="px-6 text-sm font-medium leading-6" style={{ fontFamily: "Nanum Gothic", fontSize: "17px", fontWeight: "bold" }}>
              {`${index + 1}위 : ${item.nation} - ${item.userPercentage.toFixed(2)}%`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
