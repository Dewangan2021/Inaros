import { Bar } from "react-chartjs-2";
import styles from "./BarChart.module.css";


const BarChart = ({barData}) => {
    return(
        <div className={styles.bar_chart_cont}>
        <Bar data={barData}></Bar>
</div>
    )
}

export default BarChart;