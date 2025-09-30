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
                <b>Good Morning,</b> <span>{formatName(User?.name)}</span> .
            </h1>
        </AuthenticatedLayout>
    );
}
