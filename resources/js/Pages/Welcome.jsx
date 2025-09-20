import React from "react";
import style from "@/css/welcome.module.css";
import GuestLayout from "@/Layouts/GuestLayout";
import { Button } from "@/components/ui/button";
import { Head, Link, useForm } from '@inertiajs/react';
// import '@/../css/app.css';

export default function Welcome() {
    return (
        <>
            <GuestLayout>
                <div className={style["welcome-children-main-container"]}>
                    <div className={style["welcome-main-left-div"]}>
                        <img
                            src="./images/welcome-image.png"
                            alt="Welcome Image"
                            className={style["welcome-main-image"]}
                        />
                    </div>
                    <div className={style["welcome-main-right-div"]}>
                        <div className={style["welcome-main-right-text-h1"]}>
                            <h1>
                                Organize. Learn. <span>Create.</span>
                            </h1>
                            <p>
                                Welcome to the learning management System{" "}
                                <br></br>
                                of the <b>University of Sri Jayawardenepura.</b>
                            </p>
                            <div className={style["welcome-main-buttons"]}>
                                <Link href={route("login")} >
                                    <Button>Sign In</Button>
                                </Link>
                                <Button>Join LMS</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
