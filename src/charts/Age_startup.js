import React, { Component } from "react";
import ApexChart from "react-apexcharts";

function Age_startup() {
  return (
    <ApexChart
      series={[
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ]}
      options={{
        theme: { mode: "white" },
        chart: {
          height: 350,
          type: "line",
          toolbar: { show: false },
          background: "transparent",
        },
        stroke: { curve: "smooth", width: [0, 4] },
        title: {
          text: "Traffic Sources",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        grid: { show: false },
        yaxis: { show: false }, // true 바꾸기
        xaxis: {
          labels: { show: false }, // label on/off
          axisTicks: { show: false }, // scale 눈금선 on/off
          axisBorder: { show: false }, // 그래프와 label측 구분
          categories: [
            "01 Jan 2001",
            "02 Jan 2001",
            "03 Jan 2001",
            "04 Jan 2001",
            "05 Jan 2001",
            "06 Jan 2001",
            "07 Jan 2001",
            "08 Jan 2001",
            "09 Jan 2001",
            "10 Jan 2001",
            "11 Jan 2001",
            "12 Jan 2001",
          ], // 각각 범례 이름
          type: "datetime",
        },
        fill: {
          type: "gradient", // 그라데이션 끝 색상, stops: 비율 조정
          gradient: { gradientToColors: ["blue"], stops: [0, 100] },
        },
        colors: ["blue"], // 그라데이션 시작 색상
        tooltip: {
          // fromatter : 데이터 포멧
          y: { formatter: (value) => `$ ${value.toFixed(2)}` },
        },
      }}
    />
  );
}

export default Age_startup;
