import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Spinner from "../Spinner/Spinner";
import styles from "./styles.module.css";

const Main = ({ products }) => {
  return (
    <main className={styles.main}>
      {products && products.length > 0 ? (
        <Wrapper products={products} />
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Main;
