import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function AgeStartup(props) {
  const [options, setOptions] = useState({
    theme: { mode: "white" }, // 다크모드 전환 가능
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
      labels: { show: true }, // label on/off
      axisTicks: { show: false }, // scale 눈금선 on/off
      axisBorder: { show: true }, // 그래프와 label측 구분
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
    yaxis: [
      {
        axisBorder: { show: true },
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        axisBorder: { show: true },
        title: {
          text: "Social Media",
        },
      },
    ],
    fill: {
      type: "gradient", // 그라데이션 끝 색상, stops: 비율 조정
      gradient: { gradientToColors: ["blue"], stops: [100, 100] },
    },
    colors: ["green"], // 그라데이션 시작 색상, 라벨 색상
    tooltip: {
      // fromatter : 데이터 포멧
      y: { formatter: (value) => `$ ${value.toFixed(2)}` },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160], //your data goes here
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16], //your data goes here
    },
  ]);

  return (
    <div className="flex">
      <div className="ml-7 mr-7 mt-10 h-full w-3/4">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
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
  
  // return (
  //   <>
  //     <div>
  //       <div className="px-3 pt-3 text-xl font-bold leading-6 text-gray-900">
  //         연령대별 창업유무
  //       </div>
  //       <div className="px-6 text-sm font-medium leading-6 text-gray-900">
  //         여기에 상위 1위, 해당 퍼센트 입력
  //       </div>
  //       <div className="px-6 text-sm font-medium leading-6 text-gray-900">
  //         여기에 상위 2위, 해당 퍼센트 입력
  //       </div>
  //       <div className="px-6 text-sm font-medium leading-6 text-gray-900">
  //         여기에 상위 3위, 해당 퍼센트 입력
  //       </div>
  //     </div>
  //     <div className="h-full">
  //       <ReactApexChart
  //         options={options}
  //         series={series}
  //         type="line"
  //         height={350}
  //       />
  //     </div>
  //   </>
  // );
}