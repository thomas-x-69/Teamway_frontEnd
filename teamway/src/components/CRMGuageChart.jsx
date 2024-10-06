import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ value, color, label }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, "#e0e0e0"],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="relative w-full h-36">
      <div className="absolute inset-0 flex flex-col items-center">
        <div className="relative w-full h-20">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ marginTop: "40px" }}>
              {value}%
            </span>
          </div>
        </div>
        <span className="text-sm text-gray-500 mt-4">{label}</span>
      </div>
    </div>
  );
};

const CRMGuageChart = () => {
  const chartData = [
    { value: 45, color: "#FFA500", label: "التوظيف الدائم" },
    { value: 20, color: "#90EE90", label: "التوظيف الدولي" },
    { value: 30, color: "#87CEFA", label: "تدريب الموظفين" },
    { value: 5, color: "#FF6347", label: "التوظيف الجزئي" },
  ];

  return (
    <div className="bg-white rounded-[1.5rem] shadow-md p-4 h-full flex flex-col">
      <h2 className="text-base text-[#6B6B6B] font-bold text-right mb-10">
        الخدمات الأكثر طلبا
      </h2>
      <div className="flex-grow flex flex-col justify-between">
        {chartData.map((item, index) => (
          <GaugeChart
            key={index}
            value={item.value}
            color={item.color}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CRMGuageChart;
