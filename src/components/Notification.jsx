import styles from "./Notification.module.css";

const Notification = ({ notiData }) => {
  return (
    <div className={styles.noti_cont}>
      <p className={styles.noti_cont_head}>{notiData.notiHead}</p>
      <p className={styles.noti_cont_desc}>{notiData.notiDesc}</p>
      <div className={styles.noti_cont_det}>
        <p className={styles.noti_cont_time}>{notiData.notiDet}</p>
        <div className={styles.noti_cont_act}>
          <svg
            onClick={notiData.handleRead}
            className={` ${styles.noti_cont_btn} lucide lucide-eye-icon lucide-eye`}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
          </svg>

          <svg
            onClick={notiData.handleDelete}
            className={`${styles.noti_cont_btn} lucide lucide-trash-icon lucide-trash `}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           
          >
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Notification;
