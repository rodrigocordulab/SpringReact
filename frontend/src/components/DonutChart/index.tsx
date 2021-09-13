import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
}

function DonutChart() {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(result => {
        const data = result.data as SaleSum[];
        const myLabels = data.map(obj => obj.sellerName);
        const mySeries = data.map(obj => obj.sum);

        setChartData({ labels: myLabels, series: mySeries });
      })
  }, [])


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
