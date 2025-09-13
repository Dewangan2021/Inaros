import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ accData }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.cus_acc}>
      <div className={styles.cus_acc_head}>
        <p className={styles.cus_acc_head_txt}>{accData.accHeading}</p>
        {!show && (
          <svg
            onClick={() => {
              setShow(true);
            }}
            className={`${styles.cus_acc_head_btn} lucide lucide-chevron-down-icon lucide-chevron-down`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
        {show && (
          <svg
            onClick={() => {
              setShow(false);
            }}
            className={`${styles.cus_acc_head_btn} lucide lucide-x-icon lucide-x`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </div>

      <div className={`${styles.cus_acc_desc} ${show ? styles.open : ""}`}>
        <p className={styles.cus_acc_desc_txt}>{accData.accDescription}</p>
      </div>
    </div>
  );
};

export default Accordion;
