export interface Game {
  id: number;
  title: string; // The Korean title
  filename: string; // The filename expected in the folder
  url: string; // The link to the game
  placeholderId: number; // ID for picsum placeholder if local file fails
}

export interface GameCardProps {
  game: Game;
}