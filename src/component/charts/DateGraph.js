import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const DateGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/admin/date');
      const sortedData = response.data.sort((a, b) => {
        const [aYear, aMonth] = a.year_month.split('-').map(Number);
        const [bYear, bMonth] = b.year_month.split('-').map(Number);
        return aYear === bYear ? aMonth - bMonth : aYear - bYear;
      });
      setData(sortedData);
      console.log("월별 사용자 증가 추이 : ", sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (data.length === 0) return null;

  // 누적 데이터 계산
  let cumulativeCounts = 0;
  const cumulativeData = data.map(item => {
    cumulativeCounts += item.count;
    return cumulativeCounts;
  });

  const labels = data.map(item => item.year_month);

  const options = {
    chart: {
      id: 'user-join-date-chart',
    },
    xaxis: {
      categories: labels,
    },
    dataLabels: {
      enabled: true, // 점에 레이블을 표시
    },
    fill: {
      color: 'rgba(135, 206, 235, 0.5)', // 투명한 하늘색으로 설정
    },
    stroke: {
      curve: 'straight', // 선의 형태 (예: 'smooth', 'straight', 'stepline')
      colors: ['#5CACEE'], // 선의 색상
      width: 4, // 선의 두께
    },
  };

  const series = [
    {
      name: '누적 사용자 수',
      data: cumulativeData,
    },
  ];

  return (
    <div style={{ width: '90%', margin: '0 auto', marginTop: "50px" }}> {/* 80%의 너비를 가지고 중앙 정렬 */}
      <div className="mb-4 text-center text-2xl font-bold text-color_b underline decoration-dotted">
        월별 사용자 증가 추이
      </div>
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default DateGraph;