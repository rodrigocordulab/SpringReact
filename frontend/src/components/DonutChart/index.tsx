import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
}

function DonutChart() {

  let chartData: ChartData = { labels: [], series: [] };

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(result => {
      const data = result.data as SaleSum[];
      const myLabels = data.map(obj => obj.sellerName);
      const mySeries = data.map(obj => obj.sum);

      chartData = {labels: myLabels, series:mySeries};

      console.log(chartData);
    })

  const options = {
    legend: {
      show: true
    }
  }
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
