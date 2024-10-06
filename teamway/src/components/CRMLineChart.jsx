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

const CRMLineChart = () => {
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

      items.forEach((item, index) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.cursor = "pointer";
        li.style.marginLeft = index === 0 ? "0" : "1rem";

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
        boxSpan.style.borderRadius = "50%";
        boxSpan.style.marginRight = "8px";

        const textContainer = document.createElement("p");
        textContainer.style.color = item.strokeStyle;
        textContainer.style.margin = "0";
        textContainer.style.padding = "2px 6px";
        textContainer.style.borderRadius = "12px";
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

  const data = {
    labels: ["12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
    datasets: [
      {
        label: "اعطي الخدمة 3-5 نجوم",
        data: [
          1800, 1600, 1700, 1850, 2000, 1900, 2100, 2200, 2000, 1800, 1900,
          2000,
        ],
        borderColor: "rgba(255, 179, 49, 1)",
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "اعطي الخدمة 1-2 نجوم",
        data: [
          1000, 1200, 1100, 1300, 1400, 1350, 1500, 1600, 1500, 1300, 1400,
          1500,
        ],
        borderColor: "rgba(206, 44, 31, 1)",
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          color: "rgba(0, 0, 0, 0.05)",
          lineWidth: 0.5,
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-md h-[350px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-base text-[#6B6B6B] font-bold text-right ml-6 w-fit">
            معدل رضا العملاء بالخدمة
          </h2>
          <ul ref={legendContainerRef} className="flex"></ul>
        </div>
        {/* <select className="bg-white rounded py-0 text-sm text-gray-600">
          <option>اظهار حسب: السنة - 2024</option>
        </select> */}
      </div>
      <div className="h-[250px]">
        <Line
          data={data}
          options={options}
          ref={chartRef}
          plugins={[htmlLegendPlugin]}
        />
      </div>
    </div>
  );
};

export default CRMLineChart;
