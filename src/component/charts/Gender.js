import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import './Font.css'; // CSS 파일을 불러옵니다.

export default function Gender(props) {
  const [options] = useState({
    theme: { mode: "white" },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Female", "Male"],
    },
    colors: ["#bdda57", '#007bff'], // 색상 변경
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const gender = w.globals.labels[dataPointIndex];
        const percent = series[seriesIndex][dataPointIndex];
        return `<div class="custom-tooltip">Gender: ${gender}<br/>Percent: ${percent}%</div>`;
      }
    }
  });

  const [series, setSeries] = useState([]);
  const [genderTexts, setGenderTexts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/admin/gender")
      .then((response) => {
        const genderDataList = response.data.filter(
          (genderData) => genderData.gender !== "ADMIN"
        );

        // 성별 데이터 변환
        const genderDataWithFullText = genderDataList.map((genderData) => ({
          gender: genderData.gender === "M" ? "남" : "여",
          userPercentage: genderData.userPercentage,
        }));

        setSeries([
          {
            data: genderDataWithFullText.map((genderData) => ({
              x: genderData.gender,
              y: Math.floor(genderData.userPercentage),
            })),
          },
        ]);

        // 남녀 이용자 수 텍스트 생성
        const sortedGenderDataList = genderDataWithFullText.sort(
          (a, b) => b.userPercentage - a.userPercentage
        );
        const top3Genders = sortedGenderDataList.slice(0, 3);
        const genderTexts = top3Genders.map(
          (genderData, index) =>
            `${genderData.gender} - ${genderData.userPercentage.toFixed(2)}%`
        );
        setGenderTexts(genderTexts);
      })
      .catch((error) => {
        console.error("에러가 발생했습니다:", error);
      });
  }, []);

  return (
  <div className="flex items-center">
    <div className="ml-7 mr-7 mt-10 h-full w-3/4">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
    <div className="flex flex-col w-1/4 p-4" style={{ width: "30%" }}>
      <div className="text-2xl font-bold mb-4">
        남녀 이용자 수
      </div>
      <div className="space-y-2">
        {genderTexts.map((text, index) => (
          <div key={index} className="flex items-center">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 mr-2">
              {index + 1}
            </div>
            <div>
                <div className="text-lg font-medium" style={{ fontWeight: "bold" }}>
                  {`${text.split(" - ")[0]}`}
                </div>
                <div className="text-sm text-gray-600">
                  {`${text.split(" - ")[1]}`}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
