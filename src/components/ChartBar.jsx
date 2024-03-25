import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
} from "chart.js";
import { useEffect, useRef } from "react";

const ChartComponent = ({labels, data}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  Chart.register(LinearScale);
  Chart.register(BarController, BarElement);
  Chart.register(CategoryScale);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (ctx) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "# of Votes",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 1)", 
              "rgba(54, 162, 235, 1)", 
              "rgba(255, 206, 86, 1)", 
              "rgba(75, 192, 192, 1)", 
              "rgba(153, 102, 255, 1)", 
              "rgba(255, 159, 64, 1)", 
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
     return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} className='w-[500px] '/>;
};

export default ChartComponent;
