import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/formart";
import { BASE_URL } from "utils/requests";

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
}

function BarChart() {

  const [charData, setChartData] = useState<ChartData>({ labels: { categories: [] }, series: [{ name: "", data: [] }] });

  useEffect(() =>{
    axios.get(`${BASE_URL}/sales/success-by-seller`)
    .then(result => {
      const data = result.data as SaleSuccess[];
      const myLabels = data.map(obj => obj.sellerName);
      const mySeries = data.map(obj => round(((100.0 * (obj.deals))/obj.visited) , 1));

      setChartData({ labels: { categories: myLabels }, series: [{ name: "% Success", data: mySeries }] });
    })
  }, [])

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: charData.labels }}
      series={charData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;
