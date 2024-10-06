import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["مكالمات تم الرد عليها", "مكالمات لم يرد عليها"],
    datasets: [
      {
        data: [75, 45],
        backgroundColor: ["#10b981", "#ef4444"],
        hoverOffset: 4,
        borderWidth: 0,
        borderRadius: 80,
        spacing: -15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 2500,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="bg-white p-3 sm:p-5 rounded-2xl shadow w-full h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-right mb-2 sm:mb-0">
          نتائج
        </h2>
        <select className="border rounded px-2 py-1 text-xs">
          <option>2024 - اظهار حسب: السنة</option>
        </select>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 flex flex-col items-start space-y-3 sm:pr-10 mb-3 sm:mb-0">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full ml-2 ${
                  index === 0 ? "bg-[#10b981]" : "bg-[#ef4444]"
                }`}
              ></span>
              <span
                className={`text-base font-bold ${
                  index === 0 ? "text-[#10b981]" : "text-[#ef4444] "
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full sm:w-1/2 h-40">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
