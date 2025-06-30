import { useState, useEffect } from "react";
import { HorseService, type Horse } from "../services/horseService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Badge } from "../components/Badge";

export const SelectionsOverview = () => {
  const [horses, setHorses] = useState<Horse[]>([]);

  useEffect(() => {
    setHorses(HorseService.getAllHorses());
  }, []);

  const selectedHorses = horses.filter((horse) => horse.selectedBy.length > 0);
  const fullySelectedHorses = horses.filter(
    (horse) => horse.selectedBy.length >= horse.maxSelections
  );
  const availableHorses = horses.filter(
    (horse) => horse.selectedBy.length < horse.maxSelections
  );

  return (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Horses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">
              {horses.length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Fully Selected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              {fullySelectedHorses.length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {availableHorses.length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selected Horses Table */}
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900">Current Selections</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedHorses.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-200">
                    <th className="text-left py-3 px-4 font-medium text-purple-900">
                      Horse
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-purple-900">
                      Jockey
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-purple-900">
                      Trainer
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-purple-900">
                      Odds
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-purple-900">
                      Selected By
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-purple-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedHorses.map((horse) => (
                    <tr
                      key={horse.id}
                      className="border-b border-gray-100 hover:bg-purple-50"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={horse.image}
                            alt={horse.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-medium text-purple-900">
                              {horse.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {horse.weight}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {horse.jockey}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {horse.trainer}
                      </td>
                      <td className="py-3 px-4 font-bold text-purple-800">
                        {horse.odds}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {horse.selectedBy.map(
                            (user: string, index: number) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {user}
                              </Badge>
                            )
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            horse.selectedBy.length >= horse.maxSelections
                              ? "destructive"
                              : "default"
                          }
                          className={
                            horse.selectedBy.length >= horse.maxSelections
                              ? ""
                              : "bg-yellow-500 hover:bg-yellow-600"
                          }
                        >
                          {horse.selectedBy.length >= horse.maxSelections
                            ? "Full"
                            : "Available"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No horses have been selected yet.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
