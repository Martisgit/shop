import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.css";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Links for Header
  const headerLinks = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];

  return (
    <>
      <Header links={headerLinks} />
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <Main products={filteredProducts} />
      </div>
    </>
  );
};

export default Index;
