import Link from 'next/link';
import Image from 'next/image';
import { fetchChallengerLadder, getMockTopPlayers } from '@/lib/api';

interface Player {
  rank: number;
  name: string;
  team: string;
  role: string;
  lp: number;
  region: string;
  winRate: number;
}

export default async function TopPlayers() {
  let topPlayers: Player[] = [];

  try {
    // Try to fetch real data from Riot API
    const challengerData = await fetchChallengerLadder('euw1');
    
    if (challengerData && challengerData.length > 0) {
      // Convert Riot API data to our format
      topPlayers = challengerData.slice(0, 10).map((entry, index) => {
        const wins = entry.wins || 0;
        const losses = entry.losses || 0;
        const total = wins + losses;
        const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
        
        return {
          rank: index + 1,
          name: entry.summonerName,
          team: '-',
          role: 'Mid', // Would need additional API call to determine actual role
          lp: entry.leaguePoints,
          region: 'EUW',
          winRate: winRate,
        };
      });
    } else {
      // Fallback to mock data if API fails
      topPlayers = getMockTopPlayers();
    }
  } catch (error) {
    console.error('Error fetching top players:', error);
    // Use mock data on error
    topPlayers = getMockTopPlayers();
  }

  const getRoleIcon = (role: string) => {
    const roleMap: { [key: string]: string } = {
      'Top': '/icons/roles/top.svg',
      'Jungle': '/icons/roles/jungle.svg',
      'Mid': '/icons/roles/mid.svg',
      'Bottom': '/icons/roles/bottom.svg',
      'Support': '/icons/roles/support.svg',
    };
    return roleMap[role] || '/icons/roles/mid.svg';
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700/50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Top 10</h2>
        <Link
          href="/players"
          className="text-blue-400 hover:text-blue-300 text-sm font-medium hover:underline"
        >
          Complete ladder
        </Link>
      </div>

      <div className="space-y-2">
        {topPlayers.map((player) => (
          <Link
            key={player.rank}
            href={`/player/${player.name.toLowerCase()}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2 w-32">
                <span className="text-white font-semibold">{player.name}</span>
              </div>
              <Image 
                src={getRoleIcon(player.role)} 
                alt={player.role}
                width={16}
                height={16}
                className="w-4 h-4 opacity-70"
              />
            </div>
            <div className="flex items-center gap-3">
              <Image 
                src="/icons/ranks/challenger.svg" 
                alt="Challenger"
                width={20}
                height={20}
                className="w-5 h-5 text-purple-400"
              />
              <span className="text-gray-300 font-medium w-16 text-right">{player.lp} LP</span>
            </div>
            {player.team !== '-' && (
              <span className="text-gray-500 text-sm hidden md:block">{player.team}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
