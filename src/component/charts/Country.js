import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import './Font.css'; // CSS 파일을 불러옵니다.

const Country = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/admin/country")
      .then((response) => {
        const data = response.data;
        console.log("백분율 값과 국가 코드:", data);
        const filteredData = data.filter((item) => item.nation !== "ADMIN"); // admin 국가 필터링
        const sortedData = filteredData.sort((a, b) => b.userCount - a.userCount); // 내림차순 정렬
        setChartData(sortedData);
      })
      .catch((error) => {
        console.error("데이터 요청 실패", error);
      });
  }, []);

  // 국가 코드를 국가 이름으로 변환하는 함수
  const getCountryName = (countryCode) => {
    const countryCodesToNames = {
      KR: "Korea",
      US: "United States",
      JP: "Japan",
      VN: "Vietnam",
      MX: "Mexico",
      CN: "China",
      CA: "Canada",
      UZ: "Uzbekistan",
      TH: "Thailand",
      PH: "Philippines"
    };
    return countryCodesToNames[countryCode] || countryCode;
  };

  // 차트의 데이터 및 옵션 설정
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: chartData.map((item) => getCountryName(item.nation)),
    colors: ["#7589F3", "#002267", "#6FADCF"], // 색상 설정
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
    <div className="flex items-center" style={{ marginTop: "60px" }}>
      <div className="w-3/4" style={{boxShadow: "0px 0px 5px 5px gray"}}>
        <ReactApexChart
          options={chartOptions}
          series={chartData.map((item) => item.userCount)}
          type="donut"
          height={400}
        />
      </div>
      <div className="flex flex-col w-1/4 p-4" style={{ width: "35%", paddingLeft:"30px"}}>
        <div className="text-2xl font-bold mb-4" style={{textAlign:"center", color:"#002267", textDecoration:"underline", textDecorationStyle:"dotted"}}>
          국가별 이용자 수
        </div>
        <div className="space-y-2">
          {chartData.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ color: "white", fontWeight: "bold", fontSize: "20px", fontFamily: "Hanna", backgroundColor: "#7589F3", marginRight: "10px", marginLeft: "5px" }}>
                {index + 1}
              </div>

              <div>
                <div className="text-lg font-medium" style={{ fontWeight:"bold", fontSize: `${30 - index * 6}px` }}>
                  {`${getCountryName(item.nation)}`} {/* 국가 코드를 국가 이름으로 변환 */}
                </div>
                <div className="text-sm text-gray-600">
                  {`${item.userPercentage.toFixed(2)}%`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Country;
