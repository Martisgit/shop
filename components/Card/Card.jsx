import React from "react";
import styles from "./styles.module.css";

const Card = ({ title, description, price, image, rating }) => {
  const shortDescription = description.split(" ").slice(0, 5).join(" ") + "...";

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{shortDescription}</p>
      <p className={styles.price}>Price: ${price}</p>
      <p className={styles.rating}>Rating: {rating.rate} ★</p>
    </div>
  );
};

export default Card;
