import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CallsBarChart = () => {
  const chartRef = useRef(null);
  const legendContainerRef = useRef(null);

  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart) {
      const ul = legendContainerRef.current;
      if (!ul) return;

      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach((item) => {
        const li = document.createElement("li");
        li.style.display = "inline-flex";
        li.style.alignItems = "center";
        li.style.marginRight = "40px";

        li.onclick = () => {
          chart.setDatasetVisibility(
            item.datasetIndex,
            !chart.isDatasetVisible(item.datasetIndex)
          );
          chart.update();
        };

        const boxSpan = document.createElement("span");
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.display = "inline-block";
        boxSpan.style.height = "12px";
        boxSpan.style.width = "12px";
        boxSpan.style.borderRadius = "50%";
        boxSpan.style.marginRight = "8px";
        boxSpan.style.marginLeft = "10px";

        const textContainer = document.createElement("span");
        textContainer.style.color = item.fontColor;
        textContainer.style.margin = "0";
        textContainer.style.padding = "0";
        textContainer.style.fontSize = "14px";
        textContainer.style.fontWeight = "bold";
        textContainer.style.cursor = "pointer";

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "cairo",
            size: 14,
          },
          color: "#666",
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
          lineWidth: 1,
        },
        ticks: {
          font: {
            family: "Arial",
            size: 12,
          },
          color: "#666",
          maxTicksLimit: 5,
        },
        max: 2500,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      duration: 1000,
    },
    hover: {
      animationDuration: 200,
    },
  };

  const labels = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "تم حلها",
        data: [
          1500, 1700, 1700, 1700, 1700, 1700, 1600, 1700, 1700, 1700, 1700,
          1700,
        ],
        backgroundColor: "rgba(143, 219, 187, 0.8)",
        hoverBackgroundColor: "rgba(143, 219, 187, 1)",
        barPercentage: 0.7,
      },
      {
        label: "لم يتم حلها",
        data: [
          2300, 2200, 1800, 2300, 2200, 2300, 2300, 2300, 2300, 2300, 2300,
          2300,
        ],
        backgroundColor: "rgba(255, 131, 131, 0.8)",
        hoverBackgroundColor: "rgba(255, 131, 131, 1)",
        barPercentage: 0.7,
      },
      {
        label: "تم تصعيدها",
        data: [
          1800, 1700, 300, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800,
        ],
        backgroundColor: "rgba(97, 177, 209, 0.8)",
        hoverBackgroundColor: "rgba(97, 177, 209, 1)",
        barPercentage: 0.7,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md h-[430px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">نتيجة المكالمة</h2>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <ul
            ref={legendContainerRef}
            className="flex items-center space-x-4 rtl:space-x-reverse"
          ></ul>
          <select className="bg-white rounded py-1 px-2 text-sm text-gray-600 border border-gray-300">
            <option>اظهار حسب: السنة - 2024</option>
          </select>
        </div>
      </div>
      <div className="h-[340px]">
        <Bar
          data={data}
          options={options}
          ref={chartRef}
          plugins={[htmlLegendPlugin]}
        />
      </div>
    </div>
  );
};

export default CallsBarChart;
