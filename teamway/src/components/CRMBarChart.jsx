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

const CRMBarChart = () => {
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

  const labels = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"];

  const data = {
    labels,
    datasets: [
      {
        label: "احمد",
        data: [
          1500, 1700, 1700, 1700, 1700, 1700, 1600, 1700, 1700, 1700, 1700,
          1700,
        ],
        backgroundColor: "#FFB331",
        barPercentage: 0.7,
      },
      {
        label: "هشام",
        data: [
          2300, 2200, 1800, 2300, 2200, 2300, 2300, 2300, 2300, 2300, 2300,
          2300,
        ],
        backgroundColor: "#6CE5E8",
        barPercentage: 0.7,
      },
      {
        label: "سارة",
        data: [
          1800, 1700, 300, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800,
        ],
        backgroundColor: "#85C65F",
        barPercentage: 0.7,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md h-[350px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base text-[#6B6B6B] font-bold">
          اداء الوكلاء في ادارة الفرص
        </h2>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <ul
            ref={legendContainerRef}
            className="flex items-center space-x-4 rtl:space-x-reverse"
          ></ul>
        </div>
      </div>
      <div className="h-[260px]">
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

export default CRMBarChart;
