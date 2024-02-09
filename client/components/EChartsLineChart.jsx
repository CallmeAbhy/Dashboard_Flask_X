import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EChartsLineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const chartOptions = {
      xAxis: {
        type: "category",
        data: data.map((entry) => entry.start_year),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: data.map((entry) => entry.intensity),
          type: "line",
          name: "Intensity",
        },
        {
          data: data.map((entry) => entry.likelihood),
          type: "line",
          name: "Likelihood",
        },
        {
          data: data.map((entry) => entry.relevance),
          type: "line",
          name: "Relevance",
        },
      ],
      legend: {
        data: ["Intensity", "Likelihood", "Relevance"],
      },
    };

    chartInstance.setOption(chartOptions);

    // Resize chart when window size changes
    window.addEventListener("resize", () => {
      chartInstance.resize();
    });

    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return (
    <div
      className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white"
      ref={chartRef}
      style={{ width: "100%", height: "70vh" }}
    />
  );
};

export default EChartsLineChart;
