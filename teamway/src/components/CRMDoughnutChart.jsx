import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CRMDonutChart = () => {
  const data = {
    labels: ["عميل محتمل", "قيد التواصل", "اجتماع", "مؤهل", "مغلق"],
    datasets: [
      {
        data: [5, 45, 5, 15, 15],
        backgroundColor: [
          "#FFA500", // Orange for 'عميل محتمل'
          "#87CEEB", // Light Blue for 'قيد التواصل'
          "#006400", // Dark Green for 'اجتماع'
          "#90EE90", // Light Green for 'مؤهل'
          "#FF0000", // Red for 'مغلق'
        ],
        borderColor: ["#FFFFFF"],
        borderWidth: 2,
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
          usePointStyle: true,
          pointStyle: "rectRounded",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.formattedValue;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md h-[350px] relative">
      <h2 className="text-base text-[#6B6B6B] font-bold mb-4 text-right">
        العملاء المحتملين حسب الحالة
      </h2>
      <div className="h-[250px]">
        <Doughnut data={data} options={options} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[6rem] -translate-y-1/4 text-center">
        <span className="text-6xl font-bold mr-14  text-[#6B6B6B]">19k</span>
      </div>
    </div>
  );
};

export default CRMDonutChart;
