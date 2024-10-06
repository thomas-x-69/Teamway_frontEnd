import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const labels = Array(8).fill("زياد وليد");
  const values = [400, 370, 360, 310, 270, 250, 200, 100];

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: "#1F94C4",
        borderColor: "#1F94C4",
        borderWidth: {
          top: 0,
          right: 3,
          bottom: 0,
          left: 3,
        },
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    layout: {
      padding: {
        left: 35,
      },
    },
    scales: {
      x: {
        reverse: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        position: "right",
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: "bold",
          },
          color: "#666",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 1500,
      easing: "easeInOutQuart",
    },
  };

  const plugins = [
    {
      id: "valueLabels",
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        chart.data.datasets[0].data.forEach((datapoint, index) => {
          const { y } = chart.getDatasetMeta(0).data[index].getCenterPoint();
          ctx.font = "bold 12px Arial";
          ctx.fillStyle = "#1F94C4";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText(datapoint, chart.scales.x.left - 35, y);
        });
      },
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">اداء الموظفين</h2>
        {/* <button className="bg-[#e6f7ff] text-[#1F94C4] px-3 py-1.5 rounded-md text-sm flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
          الفلتر
        </button> */}
      </div>
      <div className="h-64">
        <Bar data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
};

export default BarChart;
