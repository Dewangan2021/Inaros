
import styles from "./IconButton.module.css";

const IconButton = ({ iconBtnData }) => {
    const Icon = iconBtnData.icon;
  return (
    <button
    className={styles.icon_btn}
      type={iconBtnData.type}
      disabled={iconBtnData.disabled}
      onClick={() => {
        iconBtnData.iconBtnFunc();
      }}
    >
      <Icon size={18} color="#ffffff"></Icon>
    </button>
  );
};

export default IconButton;
