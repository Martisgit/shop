import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";

const Main = ({ products }) => {
  return (
    <main className={styles.main}>
      <Wrapper products={products} />
    </main>
  );
};

export default Main;
