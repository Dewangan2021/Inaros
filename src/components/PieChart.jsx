import { Pie } from "react-chartjs-2";
import styles from "./PieChart.module.css";

const PieChart = ({ pieData }) => {
  return (
    <div className={styles.pie_chart_cont}>
      <Pie data={pieData}></Pie>
    </div>
  );
};

export default PieChart;
