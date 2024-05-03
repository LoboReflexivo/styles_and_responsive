import React from "react";
import { HeaderComponent } from "@/components/header/header";
import SidebarComponent from "@/components/sidebar/sidebar";
import FooterComponent from "@/components/footer/footer";
import PhotoContainerComponent from "@/components/photoContainer/photoContainer";
import Styles from "./page.module.css";

function HomePage() {
  return (
    <div>
      <div className={Styles.container}>
        <HeaderComponent />
        <SidebarComponent />
        <PhotoContainerComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
