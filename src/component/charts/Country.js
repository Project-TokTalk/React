import React, { useEffect } from "react";
import Raphael from "raphael/raphael";
import "morris.js/morris.js";
import "morris.js/morris.css";

const Country = () => {
  useEffect(() => {
    // Raphael을 전역 스코프로 설정하여 Morris.js가 사용할 수 있도록 함
    window.Raphael = Raphael;

    // Morris.js 초기화 확인 후 Donut 차트 생성
    if (window.Morris) {
      window.Morris.Donut({
        element: "test", // 차트를 표시할 요소의 ID
        data: [
          { label: "a", value: 15 },
          { label: "b", value: 35 },
          { label: "c", value: 50 },
        ], // 차트에 표시할 데이터
        colors: ["#5f76e8", "#01caf1", "#172072"], // 차트의 색상 설정
        formatter: function (value, data) {
          return value + "%"; // 값의 포맷 지정
        },
      });
    }
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됨

  return (
    <div className="grid h-full grid-rows-3 grid-rows-5">
      <div className="row-span-3 h-80">
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
