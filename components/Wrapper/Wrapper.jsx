import React from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";

const Wrapper = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Wrapper;
