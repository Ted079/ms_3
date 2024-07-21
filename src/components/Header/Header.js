import React,{Fragment} from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <ul className={styles.list}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jokes">Jokes</a>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
