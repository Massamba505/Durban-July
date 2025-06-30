// pages/Index.tsx
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HorseSelection } from "@/pages/HorseSelection";
import { SelectionsOverview } from "../pages/SelectionOverview";
import { Login } from "@/pages/Login";
import { AuthService, type User } from "../services/authService";
import { Button } from "../components/Button";
import { Card, CardContent } from "@/components/Card";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"selection" | "overview">(
    "selection"
  );
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogin = (email: string) => {
    const loggedInUser = AuthService.login(email);
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setActiveTab("selection");
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <Header user={user} onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <Card className="mb-8 border-purple-200">
          <CardContent className="p-4">
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setActiveTab("selection")}
                variant={activeTab === "selection" ? "default" : "outline"}
                className={
                  activeTab === "selection"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-300 text-purple-700 hover:bg-purple-50"
                }
              >
                Horse Selection
              </Button>
              <Button
                onClick={() => setActiveTab("overview")}
                variant={activeTab === "overview" ? "default" : "outline"}
                className={
                  activeTab === "overview"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-300 text-purple-700 hover:bg-purple-50"
                }
              >
                Selections Overview
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        {activeTab === "selection" && (
          <HorseSelection currentUser={user.email} />
        )}
        {activeTab === "overview" && <SelectionsOverview />}
      </div>
    </div>
  );
};

export default Index;
