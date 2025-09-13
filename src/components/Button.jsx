import styles from "./Button.module.css";

const Button = ({
  btnData
}) => {
  return <button type={btnData.btnType}  disabled={btnData.btnDisabled} className={styles.cus_btn} onClick={btnData.btnFunc}>{btnData.btnText}</button>;
};

export default Button;
