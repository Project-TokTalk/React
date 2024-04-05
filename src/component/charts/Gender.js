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
    colors: ["#4F94CD", "#78C7E3"], // 여러 색상으로 변경
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const gender = w.globals.labels[dataPointIndex];
        const percent = series[seriesIndex][dataPointIndex];
        return `
          <div style="font-family: Arial, sans-serif; font-size: 14px; border: 1px solid #ccc; border-radius: 5px; padding: 10px; background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <div style="font-weight: normal; margin-bottom: 8px;">Gender: ${gender}</div>
            <div>Percent: ${percent}%</div>
          </div>
        `;
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
          color: genderData.gender === "M" ? options.colors[1] : options.colors[0], // 여자는 첫 번째 색상, 남자는 두 번째 색상
        }));

        setSeries([
          {
            data: genderDataWithFullText.map((genderData) => ({
              x: genderData.gender,
              y: Math.floor(genderData.userPercentage),
              fillColor: genderData.color, // 각 막대의 색상을 지정합니다.
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
        <ReactApexChart options={options} series={series} type="bar" height={300} />
      </div>
      <div className="flex flex-col w-1/4 p-4" style={{ width: "35%" }}>
        <div className="text-2xl font-bold mb-4" style={{textAlign:"center", color:"#002267", textDecoration:"underline", textDecorationStyle:"dotted"}}>
          남녀 이용자 수
        </div>
        <div className="space-y-2">
          {genderTexts.map((text, index) => (
            <div key={index} className="flex items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ color: "white", fontWeight: "bold", fontSize: "15px", fontFamily: "Noto Sans", backgroundColor: "#4D8FD3", marginRight: "10px" }}>
                  {index + 1}
              </div>
              <div>
                  <div className="text-lg font-medium" style={{ fontWeight:"bold", fontSize: `${30 - index * 7}px` }}>
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
