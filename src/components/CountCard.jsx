
import styles from "./CountCard.module.css";

const CountCard = ({
  countCardData,
  
}) => {
    const Icon = countCardData.icon;

  return (
    <div className={styles.cus_card_cont}>
      <div className={styles.cus_card_content}>
        <Icon size={24} className={styles.cus_card_icon} />
        <p className={styles.cus_card_count}>{countCardData.count}</p>
        <p className={styles.cus_card_title}>{countCardData.title}</p>
      </div>
      <div
        style={{
          backgroundColor: `${countCardData.color}`,
        }}
        className={styles.cus_card_col}
      ></div>
    </div>
  );
};

export default CountCard;
