import React from "react";
import Styles from "./sidebar.module.css";

function SidebarComponent() {
  return (
    <div className={Styles.sidebar}>
      <ul className={Styles.sidebar_menu}>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={`${Styles.sidebar_menu_item_link} active`}>
            Las mejores
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
            Sol y playa
          </a>
        </li>
        <li className={Styles.sidebar_menu_item}>
          <a href="" className={Styles.sidebar_menu_item_link}>
            Los Montes
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarComponent;
