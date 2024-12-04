import React from "react";
import styles from "./styles.module.css";

const Header = ({ links }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          {links && links.length > 0 ? (
            links.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <a href={link.link} className={styles.navLink}>
                  {link.title}
                </a>
              </li>
            ))
          ) : (
            <li>No links available</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
