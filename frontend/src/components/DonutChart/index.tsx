import Chart from "react-apexcharts";

function DonutChart() {
  const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};

const mockData = {
    labels: {
        categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
        {
            name: "% Sucesso",
            data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
        }
    ]
};
  return (
    <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
  );
}

export default DonutChart;
