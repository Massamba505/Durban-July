import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { type User } from "@/services/authService";
import { LogOut, User as UserIcon } from "lucide-react";

interface HeaderProps {
  user?: User;
  onLogout?: () => void;
}

export const Header = ({ user, onLogout }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Durban July 2025</h1>
            <p className="text-purple-100">Horse Selection Portal</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <Badge
                variant="secondary"
                className="bg-white text-purple-800 font-semibold"
              >
                18 Horses Available
              </Badge>
            </div>

            {user && (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center gap-2 text-purple-100">
                    <UserIcon className="w-4 h-4" />
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <div className="text-xs text-purple-200">{user.email}</div>
                </div>

                {onLogout && (
                  <Button
                    onClick={onLogout}
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-100 hover:bg-purple-600 hover:text-white"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
