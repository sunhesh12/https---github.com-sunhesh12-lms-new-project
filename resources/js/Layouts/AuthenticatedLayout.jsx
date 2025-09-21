import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import style from "@/css/dashboard.module.css";
import SideNavBar from "@/components/sideNavBar/SideNavBar";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <>
            <div className={style["Project-main-container"]}>
                <div
                    className={style["sideNavBar"]}
                    style={{
                        width: isSideBarOpen ? "80px" : "23%", // change 200px to your default width
                        transition: "width 0.5s ease", // smooth animation
                    }}
                >
                    {/* <SideNavBar /> */}
                </div>
                <div className={style["page-main-container"]}>
                    <button className={style["sideNavBar-Button"]} onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                        <img
                            src={
                                isSideBarOpen
                                    ? "./icons/sidebarClose.ico"
                                    : "./icons/sidebarOpen.ico"
                            }
                            alt="toggle sidebar"
                        />
                    </button>

                    <main>{children}</main>
                </div>
            </div>
        </>
    );
}
