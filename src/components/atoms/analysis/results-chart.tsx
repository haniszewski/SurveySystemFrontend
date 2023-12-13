"use client";

import { Chart } from "chart.js/auto";

import { useEffect, useRef } from "react";

const ResultsChart = ({
  labels,
  data,
  type,
}: {
  labels: string[];
  data: number[];
  type: "bar" | "pie";
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const chart = new Chart(chartRef.current!, {
      type,
      data: {
        labels,
        datasets: [
          {
            label: type === "bar" ? "Liczba odpowiedzi" : "Procent odpowiedzi",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        aspectRatio: 16 / 9,
        scales:
          type == "bar"
            ? {
                y: {
                  ticks: {
                    callback: (value) => {
                      return parseInt(String(value)) === value ? value : null;
                    },
                  },
                },
              }
            : undefined,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [labels, data, type]);

  return <canvas ref={chartRef} />;
};

export default ResultsChart;
