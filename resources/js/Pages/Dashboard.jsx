import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const User = usePage().props.auth.user;

    function formatName(name) {
        if (!name) return "";
        const parts = name.trim().split(" ");
        if (parts.length === 1) return parts[0]; // Single name
        const lastName = parts[parts.length - 1];
        const initials = parts
            .slice(0, -1)
            .map((n) => n[0].toUpperCase() + ".")
            .join(" ");
        return `${initials} ${lastName.toUpperCase()}`;
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning,";
        if (hour < 18) return "Good Afternoon,";
        return "Good Evening,";
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <h1>
                <b>{getGreeting()}</b> <span>{formatName(User?.name)}</span>.
            </h1>
        </AuthenticatedLayout>
    );
}
