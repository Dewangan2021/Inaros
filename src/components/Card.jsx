
import styles from "./Card.module.css";

const Card = ({
    cardData
    // id , img ,heading , desciption , btnText , handleClick
}) =>{
return(
<div className={styles.cus_card}>
<img className={styles.cus_card_img} src={cardData.img}></img>
<p className={styles.cus_card_head}>{cardData.heading}</p>
<p className={styles.cus_card_desc}>{cardData.desciption}</p>
<button className={styles.cus_card_btn} onClick={
    cardData.cardFunc
   
    }>{cardData.btnText}</button>
</div>
);
}

export default Card;
