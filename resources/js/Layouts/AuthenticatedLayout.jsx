import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import style from '@/css/dashboard.module.css'

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className={style['Project-main-container']}>
                <div className={style['sideNavBar']}>
                    <h1>hello</h1>
                </div>
                <div className={style['page-main-container']}>
                    <h1>hello 1</h1>
                </div>
            </div>
        </>
    );
}
