import { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({
  toastData,
  // toastShow,  toastType, toastMsg, setToastShow, setToastType , setToastMsg
}) => {
  useEffect(() => {
    if (toastData.toastShow) {
      const id = setTimeout(() => {
        toastData.setToastShow(false);
        toastData.setToastType("");
        toastData.setToastMsg("");
      }, 6000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [toastData.toastShow]);
  return (
    <div
      className={styles.cus_toast}
      style={{
        backgroundColor:
          toastData.toastType === "success"
            ? "#C1F2B0"
            : toastData.toastType === "fail"
            ? "#FA003F"
            : "blue",
      }}
    >
      {toastData.toastType == "success" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-badge-check-icon lucide-badge-check"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )}

      {toastData.toastType == "fail" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-alert-icon lucide-circle-alert"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      )}

      <p className={styles.toast_msg}>{toastData.toastMsg}</p>
    </div>
  );
};

export default Toast;
