


import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import Navbar from './components/navbar/navbar'

function ScatterPlot() {
  const [Flowers, setFlowers] = useState([]);
  const [Prices, setPrices] = useState([]);

  useEffect(() => {
    const sFlowers = [];
    const sPrices = [];

    const getFlowersData = async () => {
      try {
        const reqData = await fetch("http://127.0.0.1:5000/get-data");
        const resData = await reqData.json();
        console.log(resData);

        // Calculate average for repeated questions
        const flowerMap = new Map();
        const flowerCountMap = new Map();

        for (let i = 0; i < resData.length; i++) {
          const question = resData[i].question;
          const answer = parseInt(resData[i].answer);

          if (flowerMap.has(question)) {
            const total = flowerMap.get(question) + answer;
            const count = flowerCountMap.get(question) + 1;
            flowerMap.set(question, total);
            flowerCountMap.set(question, count);
          } else {
            flowerMap.set(question, answer);
            flowerCountMap.set(question, 1);
          }
        }

        flowerMap.forEach((total, question) => {
          sFlowers.push(question);
          const average = total / flowerCountMap.get(question);
          sPrices.push({ x: question, y: average });
        });

        setFlowers(sFlowers);
        setPrices(sPrices);
      } catch (error) {
        console.error(error);
      }
    };

    getFlowersData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="color">
        <h3>Welcome to scatter plot</h3>
        <Chart
          type="scatter"
          width={1500}
          height={640}
          series={[{ data: Prices }]}
          options={{
            title: { text: "Flowers Scatter Plot" },
            noData: { text: "Empty Data" },
            xaxis: { categories: Flowers },
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default ScatterPlot;

