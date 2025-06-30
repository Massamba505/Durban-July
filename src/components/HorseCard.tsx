import type { Horse } from "../services/horseService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Button } from "./Button";
import { Badge } from "./Badge";

interface HorseCardProps {
  horse: Horse;
  onSelect?: (horseId: number) => void;
  onUnselect?: (horseId: number) => void;
  currentUser?: string;
  isSelected?: boolean;
  disabled?: boolean;
}

export const HorseCard = ({
  horse,
  onSelect,
  onUnselect,
  currentUser,
  isSelected = false,
  disabled = false,
}: HorseCardProps) => {
  const isFullySelected = horse.selectedBy.length >= horse.maxSelections;
  const canSelect = !isFullySelected && !isSelected && !disabled;
  const canUnselect =
    isSelected && currentUser && horse.selectedBy.includes(currentUser);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-400">
      <div className="relative">
        <img
          src={horse.image}
          alt={horse.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant={isFullySelected ? "destructive" : "default"}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {horse.selectedBy.length}/{horse.maxSelections}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-purple-900">
          {horse.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium text-gray-600">Jockey:</span>
            <p className="text-purple-800">{horse.jockey}</p>
          </div>
          <div>
            <span className="font-medium text-gray-600">Trainer:</span>
            <p className="text-purple-800">{horse.trainer}</p>
          </div>
          <div>
            <span className="font-medium text-gray-600">Weight:</span>
            <p className="text-purple-800">{horse.weight}</p>
          </div>
          <div>
            <span className="font-medium text-gray-600">Odds:</span>
            <p className="text-purple-800 font-bold">{horse.odds}</p>
          </div>
        </div>

        {horse.selectedBy.length > 0 && (
          <div className="mt-3">
            <span className="font-medium text-gray-600 text-sm">
              Selected by:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {horse.selectedBy.map((user: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {user}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          {canSelect && onSelect && (
            <Button
              onClick={() => onSelect(horse.id)}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              size="sm"
            >
              Select Horse
            </Button>
          )}

          {canUnselect && onUnselect && (
            <Button
              onClick={() => onUnselect(horse.id)}
              variant="outline"
              className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50"
              size="sm"
            >
              Unselect
            </Button>
          )}

          {isFullySelected && (
            <Button className="flex-1" size="sm">
              Fully Selected
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
