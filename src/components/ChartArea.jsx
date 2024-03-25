import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

const ChartAreaComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  Chart.register(LineController, LineElement);
  Chart.register(PointElement);
  Chart.register(LinearScale);
  Chart.register(CategoryScale);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (ctx) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Data 1",
              data: [70, 60, 55, 40, 35, 20],
              backgroundColor: "rgba(75, 192, 192, 1)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              fill: true,
            },
            {
              label: "Data 2",
              data: [80, 60, 55, 50, 40, 30],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              fill: true,
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
      // Destroy chart instance when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} className='w-[500px]'/>;
};

export default ChartAreaComponent;
