import React, { useEffect, useState } from "react";
import Raphael from "raphael/raphael";
import axios from "axios";

const Country = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    window.Raphael = Raphael;

    // 손승아, axios.get 통해 spring boot에서 데이터 받아오기, 20240401
    axios
      .get("http://localhost:8081/admin/country")
      .then((response) => {
        const data = response.data;
        console.log("백분율 값과 국가 이름:", data);
        const filteredData = data.filter((item) => item.nation !== "ADMIN"); // admin 국가 필터링
        setChartData(filteredData);

        // Morris.js 초기화 확인 후 Donut 차트 생성
        if (window.Morris) {
          window.Morris.Donut({
            element: "test",
            data: filteredData.map((item) => ({
              label: item.nation,
              value: item.userCount,
            })),
            colors: ["#5f76e8", "#01caf1", "#172072"],
            formatter: function (value, data) {
              return value + "%";
            },
          });
        }
      })
      .catch((error) => {
        console.error("데이터 요청 실패", error);
      });
  }, []);

  return (
    <div className="grid h-full grid-rows-3 ">
      <div className="row-span-3 w-full">
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
        <div className="row-span-4 grid pl-16 ">
          <div id="test" /> {/* 차트를 표시할 요소 */}
        </div>
      </div>
    </div>
  );
};

export default Country;
