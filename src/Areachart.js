import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import Navbar from './components/navbar/navbar';

function AreaChart() {
  const [Flowers, setFlowers] = useState([]);
  const [Prices, setPrices] = useState([]);

  useEffect(() => {
    const sFlowers = [];
    const sPrices = [];

    const getFlowersData = async () => {
      const reqData = await fetch("http://127.0.0.1:5000/get-data");
      const resData = await reqData.json();
      console.log(resData);

      for (let i = 0; i < resData.length; i++) {
        sFlowers.push(resData[i].question);
        sPrices.push(parseInt(resData[i].answer));
      }
      setFlowers(sFlowers);
      setPrices(sPrices);
    };

    getFlowersData();
  }, []);

  return (
    <React.Fragment>
      <Navbar/>
      <div className="color">
        <h3>Welcome to area chart</h3>
        <Chart
          type="area"
          width={1500}
          height={640}
          series={[
            {
              name: "Prices",
              data: Prices
            }
          ]}
          options={{
            chart: {
              id: "area-chart",
            },
            xaxis: {
              categories: Flowers,
              title: {
                text: "Flowers"
              }
            },
            yaxis: {
              title: {
                text: "Prices"
              }
            },
            title: {
              text: "Flowers Area chat",
            },
            noData: {
              text: "Empty Data",
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default AreaChart;

