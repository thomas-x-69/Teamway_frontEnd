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

const WhatsAppBarChart = () => {
  const labels = Array(8).fill("زياد وليد");
  const values = [400, 370, 360, 310, 270, 250, 200, 100];

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: "#1F94C4",
        borderColor: "#1F94C4",
        // maintainAspectRatio: true,

        borderWidth: {
          top: 0,
          right: 4,
          bottom: 0,
          left: 4,
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
        left: 40,
      },
    },
    scales: {
      x: {
        reverse: true,
        grid: {
          display: false,
        },
        ticks: {
          // display: false,
        },
        border: {
          // display: false,
        },
      },
      y: {
        position: "right", // This moves the y-axis to the right
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,

            weight: "bold",
          },
          color: "#666",
          // padding: 10, // Add some padding between ticks and bars
        },
        border: {
          // display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        // enabled: false,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  };

  const plugins = [
    {
      id: "valueLabels",
      afterDatasetsDraw(chart, args, options) {
        const { ctx } = chart;
        chart.data.datasets[0].data.forEach((datapoint, index) => {
          const { y } = chart.getDatasetMeta(0).data[index].getCenterPoint();
          ctx.font = "bold 14px Arial";
          ctx.fillStyle = "#1F94C4";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText(datapoint, chart.scales.x.left - 40, y);
        });
      },
    },
  ];

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md" dir="rtl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold">اداء الموظفين</h2>
      </div>
      <div>
        <Bar options={options} data={data} plugins={plugins} />
      </div>
    </div>
  );
};

export default WhatsAppBarChart;
