import React from "react";
import styles from "./header.module.css";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <FontAwesomeIcon icon={faMapPin} size='2x' />
    <h1 className={styles.title}>Mapmory</h1>
  </header>
);

export default Header;
