// API utility functions for fetching League of Legends data
// This uses Riot Games API - you'll need to get an API key from https://developer.riotgames.com/

const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY || '';

// Region mappings
export const REGIONS = {
  EUW: 'euw1',
  NA: 'na1',
  KR: 'kr',
  CN: 'cn',
  EUNE: 'eun1',
  BR: 'br1',
  LAN: 'la1',
  LAS: 'la2',
  OCE: 'oc1',
  RU: 'ru',
  TR: 'tr1',
  JP: 'jp1',
};

export const REGIONAL_ENDPOINTS = {
  AMERICAS: 'americas',
  EUROPE: 'europe',
  ASIA: 'asia',
  SEA: 'sea',
};

interface SummonerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

interface LeagueEntry {
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  rank: string;
  tier: string;
  wins: number;
  losses: number;
}

interface CurrentGameInfo {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  participants: Array<{
    summonerName: string;
    championId: number;
    teamId: number;
  }>;
}

// Fetch summoner by name
export async function fetchSummonerByName(
  region: string,
  summonerName: string
): Promise<SummonerData | null> {
  if (!RIOT_API_KEY) {
    console.error('Riot API key not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`,
      {
        headers: {
          'X-Riot-Token': RIOT_API_KEY,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch summoner: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching summoner:', error);
    return null;
  }
}

// Fetch Challenger ladder
export async function fetchChallengerLadder(
  region: string
): Promise<LeagueEntry[]> {
  if (!RIOT_API_KEY) {
    console.error('Riot API key not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://${region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
      {
        headers: {
          'X-Riot-Token': RIOT_API_KEY,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch challenger ladder: ${response.status}`);
    }

    const data = await response.json();
    return data.entries || [];
  } catch (error) {
    console.error('Error fetching challenger ladder:', error);
    return [];
  }
}

// Fetch current game by summoner ID
export async function fetchCurrentGame(
  region: string,
  summonerId: string
): Promise<CurrentGameInfo | null> {
  if (!RIOT_API_KEY) {
    console.error('Riot API key not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}`,
      {
        headers: {
          'X-Riot-Token': RIOT_API_KEY,
        },
        cache: 'no-store', // Don't cache live game data
      }
    );

    if (response.status === 404) {
      // Summoner is not in game
      return null;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch current game: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching current game:', error);
    return null;
  }
}

// Mock data for development (when API key is not configured)
export function getMockTopPlayers() {
  return [
    { rank: 1, name: 'Kenal', team: 'Austrian Force willhaben', role: 'Bottom', lp: 2070, region: 'EUW', winRate: 67 },
    { rank: 2, name: 'Odysseus', team: '-', role: 'Mid', lp: 1788, region: 'EUW', winRate: 64 },
    { rank: 3, name: 'Potent', team: '-', role: 'Top', lp: 1779, region: 'EUW', winRate: 71 },
    { rank: 4, name: 'Lyncas', team: '-', role: 'Jungle', lp: 1759, region: 'EUW', winRate: 69 },
    { rank: 5, name: 'Maynter', team: 'Team Vitality', role: 'Top', lp: 1750, region: 'EUW', winRate: 66 },
    { rank: 6, name: 'Agurin', team: 'Karmine Corp Blue', role: 'Jungle', lp: 1739, region: 'EUW', winRate: 68 },
    { rank: 7, name: 'DenVoksne', team: '-', role: 'Bottom', lp: 1731, region: 'EUW', winRate: 70 },
    { rank: 8, name: 'PARUS', team: 'Unicorns Of Love Sexy Edition', role: 'Support', lp: 1708, region: 'EUW', winRate: 65 },
    { rank: 9, name: 'Nano', team: 'Team BDS', role: 'Mid', lp: 1697, region: 'EUW', winRate: 63 },
    { rank: 10, name: 'Kozi', team: 'Austrian Force willhaben', role: 'Top', lp: 1694, region: 'EUW', winRate: 62 },
  ];
}

export function getMockNameChanges() {
  return [
    { id: '1', playerName: 'yuuki', oldName: 'Dajczman Hubert#gyatt', newName: 'behave do pieca#67xdd', date: '19/11' },
    { id: '2', playerName: 'Rodrick', oldName: 'Rodrick#jgkng', newName: 'sarılara biteriz#izmir', date: '18/11' },
    { id: '3', playerName: 'Mirai', oldName: 'Stargaze#Najam', newName: 'Yuka Okkotsu#Mirai', date: '18/11' },
    { id: '4', playerName: 'Nugi Nugens', oldName: 'TM Nugi Nugens#NUGI', newName: 'Kupiec Korzenny#Nugi', date: '18/11' },
    { id: '5', playerName: 'Baro', oldName: 'iAmNotGrouping#split', newName: 'Tainted Keeper#Greed', date: '18/11' },
    { id: '6', playerName: 'Usan', oldName: 'Lawk#usan', newName: 'Shunkan idô#Usan', date: '18/11' },
    { id: '7', playerName: 'Apollo', oldName: 'Apollo#MCON', newName: 'Apollo#31684', date: '18/11' },
    { id: '8', playerName: 'Lazarus', oldName: 'Δmador Rivas#Gañan', newName: 'Lazarus#Irene', date: '18/11' },
  ];
}

// Data Dragon API (no key required) - for champion data, items, etc.
export async function fetchChampionData() {
  try {
    const version = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
      .then(res => res.json())
      .then(versions => versions[0]);

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`,
      {
        next: { revalidate: 86400 }, // Cache for 24 hours
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch champion data: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching champion data:', error);
    return null;
  }
}
