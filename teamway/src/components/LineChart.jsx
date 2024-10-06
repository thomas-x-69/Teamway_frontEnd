import { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const LineChart = () => {
  const chartRef = useRef(null);
  const legendContainerRef = useRef(null);

  const data = {
    labels: ["12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
    datasets: [
      {
        label: "المكالمات الواردة",
        data: [
          2500, 2000, 1800, 1600, 1500, 1200, 1000, 800, 750, 500, 600, 100,
        ],
        borderColor: "#1F94C4",
        backgroundColor: "#1F94C4",
        tension: 0.4,
      },
      {
        label: "مكالمات فائتة",
        data: [800, 700, 650, 600, 580, 550, 500, 450, 400, 300, 250, 50],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.4,
      },
      {
        label: "مكالمات تم الرد عليها",
        data: [
          2400, 2200, 2000, 1900, 1850, 1600, 1500, 1400, 1200, 800, 700, 100,
        ],
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: true, color: "rgba(0, 0, 0, 0.1)" },
        ticks: { color: "#6b7280", font: { size: 10 } },
      },
      y: {
        grid: { display: true, color: "rgba(0, 0, 0, 0.1)" },
        ticks: {
          color: "#6b7280",
          callback: (value) => value.toLocaleString(),
          font: { size: 10 },
        },
        min: 0,
        max: 2500,
        stepSize: 500,
        position: "right",
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    elements: { point: { radius: 0 } },
    animation: { duration: 2500, easing: "easeOutQuart", delay: 3 },
  };

  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart, args, options) {
      const ul = legendContainerRef.current;
      if (!ul) return;

      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach((item, index) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.cursor = "pointer";
        li.style.flex = "1";
        li.style.justifyContent =
          index === 0 ? "flex-start" : index === 1 ? "center" : "flex-end";

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
        boxSpan.style.height = "10px";
        boxSpan.style.width = "10px";
        boxSpan.style.borderRadius = "50%";
        boxSpan.style.marginRight = "6px";

        const textContainer = document.createElement("p");
        textContainer.style.color = item.fillStyle;
        textContainer.style.margin = "0";
        textContainer.style.paddingRight = "4px";
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";
        textContainer.style.fontSize = "12px";
        textContainer.style.fontWeight = "bold";

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      chart.options.plugins.htmlLegend = {
        containerID: "legend-container",
      };
      chart.options.plugins.legend.display = false;
      chart.update();
    }
  }, []);

  return (
    <div className="bg-white p-3 sm:p-5 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-right mb-2 sm:mb-0">
          احصائيات
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <select className="border rounded px-2 py-1 text-xs text-gray-600 mb-2 sm:mb-0 sm:ml-3">
            <option>ترتيب حسب: السنة - 2024 </option>
          </select>
        </div>
      </div>
      <div
        className="h-[140px] lg:h-[220px]"
        style={{
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <div style={{ minWidth: "200px" }} className="h-full">
          <Line
            ref={chartRef}
            options={options}
            data={data}
            plugins={[htmlLegendPlugin]}
          />
        </div>
      </div>
      <ul
        ref={legendContainerRef}
        className="flex flex-wrap justify-between mt-3"
      ></ul>
    </div>
  );
};

export default LineChart;
