import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const WavyLineChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Destroy old chart if it exists
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 50 }, (_, i) => i), // X-axis labels
        datasets: [
          {
            label: "Wavy Line",
            data: Array.from(
              { length: 50 },
              (_, i) => Math.sin(i * 0.5) * 5 + 10 // Generate wave-like data using sine
            ),
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0.4, // Smooth curves
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hides legend for a cleaner look
          },
        },
        scales: {
          x: {
            display: false, // Hide x-axis
          },
          y: {
            display: false, // Hide y-axis
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Clean up on unmount
      }
    };
  }, []);

  return (
    <div style={{ height: "150px", width: "300px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default WavyLineChart;
