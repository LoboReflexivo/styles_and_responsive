import React from "react";
import Styles from "./sidebar.module.css";

function SidebarComponent() {
  return (
    <div className={Styles.sidebar}>
      <ul className={Styles.sidebar_menu}>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={`${Styles.sidebar_menu_item_link} active`}>
            Edimburgh
          </a>
        </li>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={Styles.sidebar_menu_item_link}>
            Málaga
          </a>
        </li>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={Styles.sidebar_menu_item_link}>
            Salamanca
          </a>
        </li>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={Styles.sidebar_menu_item_link}>
            Lemon
          </a>
        </li>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={Styles.sidebar_menu_item_link}>
            Amalfi
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarComponent;
