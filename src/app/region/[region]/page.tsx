import Link from 'next/link';

interface Player {
  rank: number;
  name: string;
  team: string;
  role: string;
  lp: number;
  winRate: number;
}

const getRegionData = (region: string) => {
  const regions: { [key: string]: any } = {
    'euw': { name: 'Europe West', code: 'EUW', server: 'euw1.api.riotgames.com' },
    'na': { name: 'North America', code: 'NA', server: 'na1.api.riotgames.com' },
    'kr': { name: 'Korea', code: 'KR', server: 'kr.api.riotgames.com' },
    'cn': { name: 'China', code: 'CN', server: 'Tencent Server' },
  };

  return regions[region] || null;
};

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionData = getRegionData(region);

  if (!regionData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
            <h1 className="text-4xl font-bold text-white mb-4">Region Not Found</h1>
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Return to homepage
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Mock data for top players in the region
  const topPlayers: Player[] = [
    { rank: 1, name: 'Player1', team: 'Team A', role: 'Mid', lp: 1498, winRate: 67 },
    { rank: 2, name: 'Player2', team: 'Team B', role: 'Top', lp: 1476, winRate: 65 },
    { rank: 3, name: 'Player3', team: 'Team C', role: 'ADC', lp: 1454, winRate: 71 },
    { rank: 4, name: 'Player4', team: 'Team A', role: 'Jungle', lp: 1432, winRate: 69 },
    { rank: 5, name: 'Player5', team: 'Team D', role: 'Support', lp: 1421, winRate: 64 },
    { rank: 6, name: 'Player6', team: 'Team B', role: 'Mid', lp: 1398, winRate: 68 },
    { rank: 7, name: 'Player7', team: 'Team E', role: 'Top', lp: 1387, winRate: 66 },
    { rank: 8, name: 'Player8', team: 'Team C', role: 'ADC', lp: 1365, winRate: 70 },
    { rank: 9, name: 'Player9', team: 'Team F', role: 'Jungle', lp: 1354, winRate: 63 },
    { rank: 10, name: 'Player10', team: 'Team D', role: 'Support', lp: 1342, winRate: 67 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Region Header */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <h1 className="text-5xl font-bold text-white mb-2">{regionData.name}</h1>
          <p className="text-gray-300 text-lg">Challenger Ladder • {regionData.code}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Total Challengers</p>
            <p className="text-4xl font-bold text-white">300</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Identified Pro Players</p>
            <p className="text-4xl font-bold text-green-400">187</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Average LP</p>
            <p className="text-4xl font-bold text-blue-400">1,234</p>
          </div>
        </div>

        {/* Top 10 Ladder */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Top 10 Challenger</h2>
          <div className="space-y-3">
            {topPlayers.map((player) => (
              <div
                key={player.rank}
                className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`text-2xl font-bold w-8 ${
                      player.rank === 1 ? 'text-yellow-400' :
                      player.rank === 2 ? 'text-gray-300' :
                      player.rank === 3 ? 'text-orange-400' :
                      'text-gray-400'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`/player/${player.name.toLowerCase()}`}
                        className="text-white font-bold text-lg hover:text-blue-400"
                      >
                        {player.name}
                      </Link>
                      <p className="text-gray-400 text-sm">{player.team} • {player.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{player.lp} LP</p>
                    <p className={`text-sm ${player.winRate >= 65 ? 'text-green-400' : 'text-gray-400'}`}>
                      {player.winRate}% WR
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href={`/players?region=${regionData.code.toLowerCase()}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View All Players
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { region: 'euw' },
    { region: 'na' },
    { region: 'kr' },
    { region: 'cn' },
  ];
}
