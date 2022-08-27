import MenubarDemo from "../../components/Menubar";
import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { Divider } from "primereact/divider";

function Dashboard() {
  const [chartData] = useState({
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#2e424d", "#f54768", "#fdd037"],
        hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });
  const [basicData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#42A5F5",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "#FFA726",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };
  const { basicOptions } = getLightTheme();

  return (
    <div>
      <MenubarDemo />
      <Divider className="mt-5" align="center">
        <h2>Dashboard</h2>
      </Divider>
      <div
        style={{
          boxShadow: "0px 0px 20px rgb(0,0,0,0.1)",
          borderRadius: "10px",
        }}
        className="card flex justify-content-evenly  mx-6"
      >
        <div className="h-22rem  flex justify-content-center align-items-center">
          <Chart type="doughnut" data={chartData} options={lightOptions} />
        </div>

        <div className="h-22rem  flex justify-content-center align-items-center">
          <Chart type="doughnut" data={chartData} options={lightOptions} />
        </div>
        <div className="h-22rem  flex justify-content-center align-items-center">
          <Chart type="doughnut" data={chartData} options={lightOptions} />
        </div>
        <div className="h-22rem  flex justify-content-center align-items-center">
          <Chart type="doughnut" data={chartData} options={lightOptions} />
        </div>
      </div>
      <div className="card mx-6 my-4">
        
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
