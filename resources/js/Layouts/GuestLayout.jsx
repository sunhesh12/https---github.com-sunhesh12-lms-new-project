import React from "react";
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import style from "@/css/welcome.module.css";

export default function GuestLayout({children}) {
    return (
        <>
            <div className={style["welcome-navbar-container"]}>
                <div className={style["welcome-navbar-front-div"]}>
                    <div className={style["welcome-navbar-icons"]}><img src="icons/home.ico"></img>Home</div>
                    <div className={style["welcome-navbar-icons"]}><img src="icons/contact.ico"></img>Contact</div>
                    <div className={style["welcome-navbar-icons"]}><img src="icons/help.ico"></img>Need help</div>
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
            <div className={style["welcome-body-container"]}>
                {children}
            </div>
        </>
    );
}
