import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useTheme } from "@emotion/react";

Chart.register(...registerables);

export default function SaleChart(props) {
  let data = props.data;
  const theme = useTheme();
  data.datasets[0].backgroundColor = theme.palette.chartPrimary.main;
  data.datasets[0].borderColor = theme.palette.chartBorderPrimary.main;

  if (data.datasets.length === 2) {
    data.datasets[1].backgroundColor = theme.palette.chartSecondary.main;
    data.datasets[1].borderColor = theme.palette.chartBorderSecondary.main;
  }

  let options = {
    plugins: {
      legend: {
        display: data.datasets.length === 2
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme.palette.text.disabled
        }
      },
      x: {
        grid: {
          color: theme.palette.text.disabled
        }
      }
    }
  };
  return props.type === "bar" ? (
    <Bar data={data} options={options} />
  ) : (
    <Line data={data} options={options} />
  );
}
