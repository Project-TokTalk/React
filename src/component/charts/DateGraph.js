import React from "react";
import ReactApexChart from "react-apexcharts";

const DateGraph = () => {
  // 하드코딩된 예시 데이터
  const series = [{
    name: 'Count',
    data: [1, 2, 4, 6, 8, 6, 12, 1]
  }];
  const options = {
    chart: {
      id: 'date-chart',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['2023-09', '2023-10', '2023-11', '2023-12', '2024-01', '2024-02', '2024-03', '2024-04']
    },
    yaxis: {
      title: {
        text: 'Count'
      }
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'solid',
        color: '#87CEEB',
        opacity: 0.3
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
    },
  };

  return (
    <div className="text-2xl font-bold mb-4" style={{textAlign:"center", color:"#002267", textDecoration:"underline", textDecorationStyle:"dotted", marginTop:"50px"}}>
      <h2>이용자 수 증감 추이</h2>
      <div className="date-graph" style={{ maxWidth: "800px", marginLeft:"40px", marginTop:"10px" }} >
        <ReactApexChart options={options} series={series} type="area" height={300} />
      </div>
    </div>
  );
}

export default DateGraph;
