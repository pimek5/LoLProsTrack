import Link from 'next/link';
import { getMockTopPlayers } from '@/lib/api';

interface Player {
  rank: number;
  name: string;
  team: string;
  role: string;
  lp: number;
  region: string;
  winRate: number;
}

export default function TopPlayers() {
  // Using mock data for static export
  const topPlayers: Player[] = getMockTopPlayers();

  const getRoleIcon = (role: string) => {
    const roleMap: { [key: string]: string } = {
      'Top': '/LoLProsTrack/icons/roles/top.svg',
      'Jungle': '/LoLProsTrack/icons/roles/jungle.svg',
      'Mid': '/LoLProsTrack/icons/roles/mid.svg',
      'Bottom': '/LoLProsTrack/icons/roles/bottom.svg',
      'Support': '/LoLProsTrack/icons/roles/support.svg',
    };
    return roleMap[role] || '/LoLProsTrack/icons/roles/mid.svg';
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
              <img 
                src={getRoleIcon(player.role)} 
                alt={player.role}
                className="w-4 h-4 opacity-70"
              />
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="/LoLProsTrack/icons/ranks/challenger.svg" 
                alt="Challenger"
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
