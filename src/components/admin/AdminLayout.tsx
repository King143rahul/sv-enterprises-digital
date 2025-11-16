import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/leads", icon: Users, label: "Leads" },
    { path: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-accent">
      <header className="bg-card border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">SV Enterprises Admin</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-73px)] p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => navigate(item.path)}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
