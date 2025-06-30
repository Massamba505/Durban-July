import { useState, useEffect } from "react";
import { HorseService, type Horse } from "../services/horseService";
import { HorseCard } from "../components/HorseCard";
import { Badge } from "../components/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

interface HorseSelectionProps {
  currentUser: string;
}

export const HorseSelection = ({ currentUser }: HorseSelectionProps) => {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [selectedHorses, setSelectedHorses] = useState<Horse[]>([]);

  useEffect(() => {
    setHorses(HorseService.getAllHorses());
    setSelectedHorses(HorseService.getUserSelections(currentUser));
  }, [currentUser]);

  const handleSelectHorse = (horseId: number) => {
    if (HorseService.selectHorse(horseId, currentUser)) {
      setHorses([...HorseService.getAllHorses()]);
      setSelectedHorses(HorseService.getUserSelections(currentUser));
    }
  };

  const handleUnselectHorse = (horseId: number) => {
    if (HorseService.unselectHorse(horseId, currentUser)) {
      setHorses([...HorseService.getAllHorses()]);
      setSelectedHorses(HorseService.getUserSelections(currentUser));
    }
  };

  // Only show horses that are not at max capacity and user hasn't selected
  const availableHorses = horses.filter(
    (horse) =>
      horse.selectedBy.length < horse.maxSelections &&
      !horse.selectedBy.includes(currentUser)
  );

  return (
    <div className="space-y-8">
      {/* User's Selection */}
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center gap-2">
            Your Selection
            <Badge className="bg-purple-600">{selectedHorses.length}/1</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedHorses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedHorses.map((horse) => (
                <HorseCard
                  key={horse.id}
                  horse={horse}
                  onUnselect={handleUnselectHorse}
                  currentUser={currentUser}
                  isSelected={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏇</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                No Horse Selected Yet
              </h3>
              <p className="text-gray-600 mb-4">
                Choose your horse from the available options below.
              </p>
              <Badge
                // variant="outline"
                className="border-purple-300 text-purple-700"
              >
                You can select 1 horse
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Horses - Only show if user hasn't selected one yet */}
      {selectedHorses.length === 0 && (
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              Available Horses
              <Badge
                // variant="outline"
                className="border-purple-300 text-purple-700"
              >
                {availableHorses.length} available
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableHorses.map((horse) => (
                <HorseCard
                  key={horse.id}
                  horse={horse}
                  onSelect={handleSelectHorse}
                  currentUser={currentUser}
                  isSelected={false}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Selections View */}
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900">
            All Selections Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {horses
              .filter((horse) => horse.selectedBy.length > 0)
              .map((horse) => (
                <HorseCard
                  key={horse.id}
                  horse={horse}
                  currentUser={currentUser}
                  disabled={true}
                />
              ))}
          </div>
          {horses.filter((horse) => horse.selectedBy.length > 0).length ===
            0 && (
            <p className="text-gray-500 text-center py-8">
              No horses have been selected yet.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
