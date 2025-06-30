export interface Horse {
  id: number;
  name: string;
  jockey: string;
  trainer: string;
  weight: string;
  odds: string;
  image: string;
  selectedBy: string[];
  maxSelections: number;
}

// Dummy data based on the 2025 Durban July field
export const horses: Horse[] = [
  {
    id: 1,
    name: "Royal Flush",
    jockey: "S. Khumalo",
    trainer: "M. de Kock",
    weight: "60.0kg",
    odds: "8/1",
    image:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 2,
    name: "Thunder Strike",
    jockey: "G. Lerena",
    trainer: "S. Tarry",
    weight: "59.5kg",
    odds: "12/1",
    image:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 3,
    name: "Golden Arrow",
    jockey: "R. Fourie",
    trainer: "J. Snaith",
    weight: "59.0kg",
    odds: "6/1",
    image:
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 4,
    name: "Purple Rain",
    jockey: "C. Zackey",
    trainer: "A. Nel",
    weight: "58.5kg",
    odds: "15/1",
    image:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 5,
    name: "Speed Demon",
    jockey: "M. Yeni",
    trainer: "G. van Zyl",
    weight: "58.0kg",
    odds: "10/1",
    image:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 6,
    name: "Silver Bullet",
    jockey: "K. de Melo",
    trainer: "D. Kannemeyer",
    weight: "57.5kg",
    odds: "18/1",
    image:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 7,
    name: "Storm Chaser",
    jockey: "L. Hewitson",
    trainer: "B. Crawford",
    weight: "57.0kg",
    odds: "14/1",
    image:
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 8,
    name: "Diamond Queen",
    jockey: "A. Domeyer",
    trainer: "C. Bass-Robinson",
    weight: "56.5kg",
    odds: "9/1",
    image:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 9,
    name: "Mystic Valley",
    jockey: "W. Kennedy",
    trainer: "F. Robinson",
    weight: "56.0kg",
    odds: "20/1",
    image:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 10,
    name: "Fire Storm",
    jockey: "T. Gould",
    trainer: "M. Miller",
    weight: "55.5kg",
    odds: "7/1",
    image:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 11,
    name: "Ocean Breeze",
    jockey: "J. Gates",
    trainer: "P. Peter",
    weight: "55.0kg",
    odds: "16/1",
    image:
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 12,
    name: "Lightning Bolt",
    jockey: "D. Dillon",
    trainer: "R. Sage",
    weight: "54.5kg",
    odds: "11/1",
    image:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 13,
    name: "Midnight Express",
    jockey: "R. Danielson",
    trainer: "A. Greeff",
    weight: "54.0kg",
    odds: "13/1",
    image:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 14,
    name: "Crystal Star",
    jockey: "P. Strydom",
    trainer: "K. Naidoo",
    weight: "53.5kg",
    odds: "22/1",
    image:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 15,
    name: "Emerald Dream",
    jockey: "M. Byleveld",
    trainer: "L. Crawford",
    weight: "53.0kg",
    odds: "25/1",
    image:
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 16,
    name: "Sapphire Sky",
    jockey: "C. Murray",
    trainer: "G. Woodruff",
    weight: "52.5kg",
    odds: "30/1",
    image:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 17,
    name: "Ruby Rose",
    jockey: "N. Kotzen",
    trainer: "E. Kaknis",
    weight: "52.0kg",
    odds: "35/1",
    image:
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
  {
    id: 18,
    name: "Phoenix Rising",
    jockey: "B. Fayd'Herbe",
    trainer: "C. Hewitson",
    weight: "51.5kg",
    odds: "40/1",
    image:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    selectedBy: [],
    maxSelections: 2,
  },
];

export class HorseService {
  static getAllHorses(): Horse[] {
    return horses;
  }

  static getHorseById(id: number): Horse | undefined {
    return horses.find((horse) => horse.id === id);
  }

  static selectHorse(horseId: number, userId: string): boolean {
    const horse = horses.find((h) => h.id === horseId);
    if (!horse) return false;

    // Check if horse is already at max capacity
    if (horse.selectedBy.length >= horse.maxSelections) return false;

    // Check if user already selected this horse
    if (horse.selectedBy.includes(userId)) return false;

    // Check if user has already selected another horse (limit 1 per user)
    const userCurrentSelection = horses.find((h) =>
      h.selectedBy.includes(userId)
    );
    if (userCurrentSelection) return false;

    horse.selectedBy.push(userId);
    return true;
  }

  static unselectHorse(horseId: number, userId: string): boolean {
    const horse = horses.find((h) => h.id === horseId);
    if (!horse) return false;

    const index = horse.selectedBy.indexOf(userId);
    if (index === -1) return false;

    horse.selectedBy.splice(index, 1);
    return true;
  }

  static getAvailableHorses(): Horse[] {
    return horses.filter(
      (horse) => horse.selectedBy.length < horse.maxSelections
    );
  }

  static getUserSelections(userId: string): Horse[] {
    return horses.filter((horse) => horse.selectedBy.includes(userId));
  }
}
