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
    <div className="bg-[#24283a] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-cyan-400">Top 10</h2>
        <Link
          href="/players"
          className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
        >
          Complete ladder
        </Link>
      </div>

      <div className="space-y-1">
        {topPlayers.map((player) => (
          <Link
            key={player.rank}
            href={`/player/${player.name.toLowerCase()}`}
            className="flex items-center gap-3 p-3 rounded hover:bg-[#2a2f44] transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img 
                src={`https://flagcdn.com/w20/${getCountryCode(player.region)}.png`}
                alt={player.region}
                className="w-5 h-3.5 object-cover"
              />
              <span className="text-white font-medium">{player.name}</span>
            </div>
            <img 
              src={getRoleIcon(player.role)} 
              alt={player.role}
              className="w-5 h-5 opacity-80"
            />
            <img 
              src="/LoLProsTrack/icons/ranks/challenger.svg" 
              alt="Challenger"
              className="w-6 h-6"
            />
            <span className="text-gray-300 font-medium w-16 text-right">{player.lp} LP</span>
            {player.team !== '-' && player.team && (
              <span className="text-gray-400 text-xs hidden lg:block">{player.team}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function getCountryCode(region: string): string {
  const codes: { [key: string]: string } = {
    'EUW': 'pl',
    'NA': 'us',
    'KR': 'kr',
    'CN': 'cn',
    'EUNE': 'pl',
  };
  return codes[region] || 'eu';
}
