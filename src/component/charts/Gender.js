import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function Gender(props) {
  const [options] = useState({
    theme: { mode: "white" }, // 다크모드 전환 가능

    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true, // 이게 수평그래프로 변환
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Female", "Male"],
    },

    // colors: ["red"], 이거로 그래프 색 변경

    // annotations: {   보류합시다

    //   points: [
    //     {
    //       x: 1,
    //       y: 10,
    //       yAxisIndex: 0,
    //       seriesIndex: 0,
    //       marker: {
    //         size: 0,
    //         fillColor: "#000080",
    //         strokeColor: "#333",
    //         strokeWidth: 3,
    //         shape: "star",
    //         radius: 2,
    //         OffsetX: 0,
    //         OffsetY: 0,
    //         cssClass: "",
    //       },

    //       image: {
    //         path: "../../image/man.png",
    //         width: 20,
    //         height: 20,
    //         offsetX: 0,
    //         offsetY: 0,
    //       },
    //     },
    //     {
    //       x: 10,
    //       y: 20,
    //       yAxisIndex: 0,
    //       seriesIndex: 0,
    //       marker: {
    //         size: 0,
    //         fillColor: "#0000FF",
    //         strokeColor: "#333",
    //         strokeWidth: 3,
    //         shape: "circle",
    //         radius: 2,
    //         OffsetX: 0,
    //         OffsetY: 0,
    //         cssClass: "",
    //       },

    //       image: {
    //         path: "../../image/woman.png",
    //         width: 20,
    //         height: 20,
    //         offsetX: 0,
    //         offsetY: 0,
    //       },
    //     },
    //   ],
    // },
  });

  const [series, setSeries] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8081/admin/gender").then(response=>{
      const genderDataList = response.data.filter(genderData => genderData.gender !== "ADMIN");;
      setSeries([
        {
          data: genderDataList.map(genderData => ({
            x: genderData.gender,
            y: Math.floor(genderData.userPercentage),
          })),
        },
      ]);
  })
  .catch(error => {
    console.error("에러났다 이놈아 ",error);
  })
},[]);

  return (
    <div className="flex">
      <div className="ml-7 mr-7 mt-10 h-full w-3/4">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
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
}