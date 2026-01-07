import { Game } from './types';

// NOTE: Browsers block direct access to local files (C:\...) for security reasons when served via HTTP.
// However, the code is structured to use this path logic as requested.
// For the web preview to work, we fallback to placeholder images if the local image fails to load.

// Changed prefix to the common parent directory for 'ps' and 'spimage' folders
export const LOCAL_IMAGE_PATH_PREFIX = "C:\\Users\\a1\\Pictures\\";

export const GAMES: Game[] = [
  {
    id: 1,
    title: "Joker's Jewels Hold and Spin",
    // New requested path relative to the prefix
    filename: "spimage\\thumb-0e20e713ddd4c1e2772055f99e2a6f5e_384x200.webp",
    url: "https://www.pragmaticplay.com/ko/",
    placeholderId: 10
  },
  {
    id: 2,
    title: "PUBG: BATTLEGROUNDS",
    filename: "ps\\pubg.png",
    url: "https://pubg.game.daum.net/",
    placeholderId: 20
  },
  {
    id: 3,
    title: "Overwatch 2",
    filename: "ps\\overwatch2.png",
    url: "https://overwatch.blizzard.com/ko-kr/",
    placeholderId: 30
  },
  {
    id: 4,
    title: "VALORANT",
    filename: "ps\\valorant.png",
    url: "https://playvalorant.com/ko-kr/",
    placeholderId: 40
  },
  {
    id: 5,
    title: "Minecraft",
    filename: "ps\\minecraft.png",
    url: "https://www.minecraft.net/ko-kr",
    placeholderId: 50
  },
  {
    id: 6,
    title: "Lost Ark",
    filename: "ps\\lostark.png",
    url: "https://lostark.game.onstove.com/",
    placeholderId: 60
  },
  {
    id: 7,
    title: "MapleStory",
    filename: "ps\\maplestory.png",
    url: "https://maplestory.nexon.com/",
    placeholderId: 70
  },
  {
    id: 8,
    title: "FC Online",
    filename: "ps\\fconline.png",
    url: "https://fconline.nexon.com/",
    placeholderId: 80
  },
  {
    id: 9,
    title: "Sudden Attack",
    filename: "ps\\suddenattack.png",
    url: "https://sa.nexon.com/",
    placeholderId: 90
  },
  {
    id: 10,
    title: "Stardew Valley",
    filename: "ps\\stardewvalley.png",
    url: "https://www.stardewvalley.net/",
    placeholderId: 100
  }
];