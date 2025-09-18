import React from "react";
import style from "@/css/welcome.module.css";

export default function Welcome() {
    return (
        <>
            <div className={style["welcome-navbar-container"]}>
                <div className={style["welcome-navbar-front-div"]}>
                    <div>Home</div>
                    <div>Contact</div>
                    <div>Need help</div>
                </div>
                <div className={style["welcome-navbar-right-div"]}>
                    <div className={style["welcome-navbar-right-logo-div"]}>
                        <img src="/images/usjp-logo.png" alt="USJ Logo" />
                    </div>
                    <div className={style["welcome-navbar-right-text-div"]}>
                        <h1>University of Sri Jayewardenepura</h1>
                        <p>Learning Management System</p>
                    </div>
                </div>
            </div>
        </>
    );
}
