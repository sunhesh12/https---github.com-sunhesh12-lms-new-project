// src/components/sideNavBar/SideNavBarHeader.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import style from "@/css/dashboard.module.css";

export default function SideNavBarHeader({ isOpen, toggleSidebar }) {
  return (
    <div className={style["sideNavBar-header"]}>
      <img
        src="/logo.png"
        alt="University Logo"
        className={style["sideNavBar-logo"]}
      />
      {!isOpen && <h2 className={style["sideNavBar-title"]}>My University</h2>}

      <button className={style["sideNavBar-toggle"]} onClick={toggleSidebar}>
        {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
    </div>
  );
}
