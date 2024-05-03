import React from "react";
import Styles from "./header.module.css";

export function HeaderComponent() {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.title_header}>Darío</h1>
      <ul className={Styles.list_header}>
        <li>
          <a href="" className={Styles.link_list_header}>
            Fotos
          </a>
        </li>
        <li>
          <a href="" className={Styles.link_list_header}>
            Sobre mí
          </a>
        </li>
        <li>
          <a href="" className={Styles.link_list_header}>
            Contacto
          </a>
        </li>
      </ul>
    </header>
  );
}
