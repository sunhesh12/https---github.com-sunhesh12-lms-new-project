// src/components/sideNavBar/SideNavBarFooter.jsx
import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Settings, User } from "lucide-react";
import style from "@/css/dashboard.module.css";

export default function SideNavBarFooter({ isOpen }) {
  const user = usePage().props.auth.user;

  return (
    <div className={style["sideNavBar-footer"]}>
      <Link href="/settings">
        <Settings size={20} />
        {!isOpen && <span>Settings</span>}
      </Link>
      <Link href="/profile">
        <User size={20} />
        {!isOpen && <span>{user?.name}</span>}
      </Link>
    </div>
  );
}
