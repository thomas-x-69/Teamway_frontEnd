import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const WhatsAppAreaChart = () => {
  const chartRef = useRef(null);
  const legendContainerRef = useRef(null);

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
        boxSpan.style.background = item.strokeStyle;
        boxSpan.style.display = "inline-block";
        boxSpan.style.height = "12px";
        boxSpan.style.width = "12px";
        // boxSpan.style.borderRadius = "50%";

        boxSpan.style.marginRight = "8px";

        const textContainer = document.createElement("p");
        textContainer.style.color = item.strokeStyle;
        textContainer.style.margin = "0";

        textContainer.style.paddingRight = "6px";
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";
        textContainer.style.fontSize = "14px";
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
      const ctx = chart.ctx;
      const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
      gradient1.addColorStop(0, "rgba(147, 51, 234, .3)");
      gradient1.addColorStop(0.7, "rgba(147, 51, 234, 0)");

      const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
      gradient2.addColorStop(0, "rgba(16, 185, 129, .3)");
      gradient2.addColorStop(0.7, "rgba(16, 185, 129, 0)");

      const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
      gradient3.addColorStop(0, "rgba(239, 68, 68, .3");
      gradient3.addColorStop(0.7, "rgba(239, 68, 68, 0)");
      chart.data.datasets[0].backgroundColor = gradient1;
      chart.data.datasets[1].backgroundColor = gradient2;
      chart.data.datasets[2].backgroundColor = gradient3;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
    datasets: [
      {
        label: "الرسائل المستلمة",
        data: [
          1800, 1600, 1700, 1850, 2000, 1900, 2100, 2200, 2000, 1800, 1900,
          2000,
        ],
        borderColor: "rgba(147, 51, 234, 1)",
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "الرسائل المقروءة",
        data: [
          1000, 1200, 1100, 1300, 1400, 1350, 1500, 1600, 1500, 1300, 1400,
          1500,
        ],
        borderColor: "rgba(16, 185, 129, 1)",
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "الرسائل الغير مقروءة",
        data: [800, 400, 600, 550, 600, 550, 600, 600, 500, 500, 500, 500],
        borderColor: "rgba(239, 68, 68, 1)",
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          lineWidth: 0.5,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, .5)",
          lineWidth: 0.5,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md h-[430px]">
      <div className="flex justify-start mb-4">
        <h2 className="text-2xl font-bold text-right pl-2">إحصائيات</h2>
        <select className="bg-white rounded py-0 text-sm text-gray-600 mt-1">
          <option>اظهار حسب: السنة - 2024</option>
        </select>
      </div>
      <div className="h-[300px]">
        <Line
          data={data}
          options={options}
          ref={chartRef}
          plugins={[htmlLegendPlugin]}
        />
      </div>
      <ul
        ref={legendContainerRef}
        className="flex flex-wrap justify-between mt-4 px-4"
      ></ul>
    </div>
  );
};

export default WhatsAppAreaChart;
