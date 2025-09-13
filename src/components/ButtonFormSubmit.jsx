


import styles from "./ButtonFormSubmit.module.css";

const ButtonFormSubmit = ({
  btnData
}) => {
  return <button type={btnData.btnType}  disabled={btnData.btnDisabled} className={styles.cus_btn} >{btnData.btnText}</button>;
};

export default ButtonFormSubmit;