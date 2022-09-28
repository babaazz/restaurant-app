import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import avatar from "../../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* For desktop */}
      <div className={styles.headerDesktop}>
        <Link to={"/"} className={styles.logo}>
          <img src={logo} className={styles.logoImg} alt="logo" />
          <p className={styles.logoTxt}> City</p>
        </Link>
        <div className={styles.menuContainer}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>Menu</li>
            <li className={styles.menuItem}>About Us</li>
            <li className={styles.menuItem}>Services</li>
          </ul>
          <div className={styles.cart}>
            <MdShoppingBasket className={styles.cartIcon} />
          </div>
          <div className={styles.user}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.cart}>
          <MdShoppingBasket className={styles.cartIcon} />
        </div>
        <Link to={"/"} className={styles.logo}>
          <img src={logo} className={styles.logoImg} alt="logo" />
          <p className={styles.logoTxt}> City</p>
        </Link>
        <div className={styles.user}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
      </div>
    </header>
  );
};

export default Header;
