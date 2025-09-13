
import styles from "./NavBar.module.css";
import { MenuIcon} from "lucide-react";

const NavBar = ({openNavBar}) => {
    return(
<div className={styles.navbar_cont}>
    <MenuIcon onClick={() => {openNavBar();}}></MenuIcon>
<p className={styles.logo}>Inaros</p>
{/* <div className={styles.nav}>
    <p className={styles.nav_links}>Home</p>
    <p className={styles.nav_links}>About Us</p>
    <p className={styles.nav_links}>Contact Us</p>
</div> */}
</div>
    );
}
export default NavBar;