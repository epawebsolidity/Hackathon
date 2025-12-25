import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
        <Sidebar />
            <div className="flex-row w-full">
                <Navbar />
                <main className="flex-1 p-8">
                    {children}
                </main> 
            </div>
           
        </div>
    );
}
