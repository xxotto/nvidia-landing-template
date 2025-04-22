// Typing effect for the title
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: [
      "original",
      "authentic",
      "genuine",
      "novel",
      "distinctive",
      "innovative",
      "creative",
      "exclusive",
      "fresh",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 500,
    loop: true,
    smartBackspace: false,
    contentType: "html",
  });
});

// Draw vertical line on hover in chart.js graph
const verticalLinePlugin = {
  id: "verticalLinePlugin",
  afterDatasetsDraw(chart, args, options) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      ctx.save();
      const activePoint = chart.tooltip._active[0];
      const x = activePoint.element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.stroke();
      ctx.restore();
    }
  },
};

// Draw line graph using chart.js
const ctx = document.getElementById("nvidiaChart").getContext("2d");
const data = {
  labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  datasets: [
    {
      label: "Métrica 1",
      data: [15, 20, 10, 25, 18, 30, 22],
      borderColor: "#76B900",
      backgroundColor: "rgba(118,185,0,0.2)",
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
    {
      label: "Métrica 2",
      data: [8, 12, 6, 18, 12, 20, 15],
      borderColor: "#888888",
      backgroundColor: "rgba(136,136,136,0.2)",
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
    {
      label: "Métrica 3",
      data: [5, 9, 7, 16, 10, 18, 12],
      borderColor: "#FFFFFF",
      backgroundColor: "rgba(255,255,255,0.2)",
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // permite que el canvas use el alto del wrapper
  interaction: { mode: "index", intersect: false },
  plugins: {
    title: {
      display: true,
      text: "Dashboard Nvidia",
      color: "#fff",
      font: { size: 18 },
    },
    legend: {
      position: "bottom",
      labels: { color: "#fff", boxWidth: 20, padding: 20 },
    },
    tooltip: {
      backgroundColor: "#333",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#444",
      borderWidth: 1,
    },
  },
  layout: { padding: { bottom: 20 } },
  scales: {
    x: {
      title: {
        display: true,
        text: "Días del mes",
        color: "#fff",
        font: { size: 18 },
      },
      ticks: { color: "#fff" },
      grid: { color: "rgba(255,255,255,0.1)" },
    },
    y: {
      title: {
        display: true,
        text: "Valores",
        color: "#fff",
        font: { size: 18 },
      },
      ticks: { color: "#fff" },
      grid: { color: "rgba(255,255,255,0.1)" },
    },
  },
  hover: { mode: "nearest", intersect: true },
  animation: { duration: 1500, easing: "easeInOutQuad" },
};

new Chart(ctx, {
  type: "line",
  data,
  options,
  plugins: [verticalLinePlugin],
});
