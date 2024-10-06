import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const WhatsAppPieChart = () => {
  const data = {
    labels: [
      "الرسائل المستلمة",
      "الرسائل المرسلة",
      "الرسائل المقروءة",
      "الرسائل الغير مقروءة",
    ],
    datasets: [
      {
        data: [30, 50, 15, 5],
        backgroundColor: ["#AF52DE", "#5CC8BE", "#11C177", "#FF3939"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        rtl: true,

        labels: {
          padding: 20,
          font: {
            size: 18,
            weight: "bold",
          },
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label, i) => ({
              text: label,
              fillStyle: datasets[0].backgroundColor[i],
              hidden: !chart.getDataVisibility(i),
              index: i,
              datasetIndex: 0,
            }));
          },
          boxWidth: 20,
          boxHeight: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        right: 20,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md h-[100%]">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-right mb-4">كفاءة الاستجابة</h2>
        <select className="bg-whiterounded  py-0 text-sm text-gray-600 mt-[-1rem]">
          <option>اظهار حسب: السنة - 2024</option>
        </select>
      </div>
      <div className="h-64 mt-10">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default WhatsAppPieChart;
