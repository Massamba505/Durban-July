import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { LogIn } from "lucide-react";
import { Label } from "@/components/Label";

interface LoginProps {
  onLogin: (email: string) => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation for company email (you can customize this)
    if (!email.includes("@company.com")) {
      setError("Please use your company email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Simulate login (replace with actual auth later)
    onLogin(email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            Durban July 2025
          </h1>
          <p className="text-purple-600">
            Sign in to make your horse selections
          </p>
        </div>

        {/* Login Form */}
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-purple-900">
              Welcome Back
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-900">
                  Company Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-purple-900">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  required
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md border border-red-200">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                size="lg"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-purple-600">
          <p>Only company employees can access this portal</p>
        </div>
      </div>
    </div>
  );
};
