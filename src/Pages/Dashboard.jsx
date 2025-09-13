import { Users } from "lucide-react";
import CountCard from "../components/CountCard";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
const Dashboard = () => {
  const countData = [
    { count: "30", color: "blue", title: "Total Users", icon: Users },
    { count: "24", color: "green", title: "Active Users", icon: Users },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 8, 15, 22],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 40,
      },
    ],
  };
  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "5px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {countData.map((item, index) => {
          const data = {
            icon : item.icon,
            count: item.count,
            title : item.title,
            color : item.color
          };
          return (
            <CountCard
              key={index}
              countCardData={data}
             
            ></CountCard>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px",
          flexWrap: "wrap",
        }}
      >
        <BarChart barData={barData}></BarChart>
        <PieChart pieData={pieData}></PieChart>
      </div>
    </>
  );
};

export default Dashboard;
