import { Link } from "react-router-dom";
import styles from "./NavBarSide.module.css";

const NavBarSide = ({ navBarData }) => {

  return (
    <div className={styles.navBar_cont}>
      <div className={styles.navBar_logo_cont}>
        <img className={styles.navBar_logo}></img>
        <svg
          onClick={() => {
            navBarData.closeNavBar();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-x-icon lucide-circle-x"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </div>

      <div className={styles.link_cont}>
        {navBarData.navBarlinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.linkName}
              to={item.link}
              className={styles.navBar_link}
            >
              <Icon size={20} />

              <p className={styles.navBar_link_txt}>{item.linkName}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarSide;
