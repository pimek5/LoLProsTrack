import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would normally come from an API or database
const getPlayerData = (name: string) => {
  const players: { [key: string]: any } = {
    'faker': {
      name: 'Faker',
      realName: 'Lee Sang-hyeok',
      team: 'T1',
      role: 'Mid',
      nationality: '🇰🇷 South Korea',
      age: 27,
      region: 'KR',
      rank: 1,
      lp: 1547,
      wins: 523,
      losses: 412,
      winRate: 67,
      topChampions: [
        { name: 'Azir', games: 78, wr: 71 },
        { name: 'Orianna', games: 65, wr: 68 },
        { name: 'LeBlanc', games: 52, wr: 73 },
      ],
      socials: {
        twitch: 'faker',
        twitter: 'faker',
        instagram: 'faker',
      }
    },
    'caps': {
      name: 'Caps',
      realName: 'Rasmus Winther',
      team: 'G2 Esports',
      role: 'Mid',
      nationality: '🇩🇰 Denmark',
      age: 24,
      region: 'EUW',
      rank: 3,
      lp: 1498,
      wins: 467,
      losses: 389,
      winRate: 71,
      topChampions: [
        { name: 'Sylas', games: 82, wr: 74 },
        { name: 'LeBlanc', games: 71, wr: 69 },
        { name: 'Akali', games: 58, wr: 76 },
      ],
      socials: {
        twitch: 'caps',
        twitter: 'G2Caps',
        instagram: 'caps',
      }
    }
  };

  return players[name] || null;
};

export default async function PlayerPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const player = getPlayerData(name);

  if (!player) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-2">{player.name}</h1>
              <p className="text-2xl text-gray-300 mb-4">{player.realName}</p>
              <div className="flex flex-wrap gap-4 text-gray-300">
                <span>{player.nationality}</span>
                <span>•</span>
                <span>{player.age} years old</span>
                <span>•</span>
                <Link href={`/team/${player.team.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-400 hover:text-blue-300">
                  {player.team}
                </Link>
                <span>•</span>
                <span>{player.role}</span>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 text-center">
              <p className="text-gray-400 text-sm mb-1">Challenger Rank</p>
              <p className="text-5xl font-bold text-yellow-400 mb-2">#{player.rank}</p>
              <p className="text-blue-400 font-semibold text-xl">{player.lp} LP</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            {player.socials.twitch && (
              <a
                href={`https://twitch.tv/${player.socials.twitch}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Twitch
              </a>
            )}
            {player.socials.twitter && (
              <a
                href={`https://twitter.com/${player.socials.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Twitter
              </a>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Total Games</p>
            <p className="text-4xl font-bold text-white">{player.wins + player.losses}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Wins</p>
            <p className="text-4xl font-bold text-green-400">{player.wins}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Losses</p>
            <p className="text-4xl font-bold text-red-400">{player.losses}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Win Rate</p>
            <p className="text-4xl font-bold text-blue-400">{player.winRate}%</p>
          </div>
        </div>

        {/* Top Champions */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Top Champions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {player.topChampions.map((champ: any, index: number) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-3">{champ.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Games</span>
                    <span className="text-white font-semibold">{champ.games}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Win Rate</span>
                    <span className={`font-semibold ${champ.wr >= 70 ? 'text-green-400' : 'text-white'}`}>
                      {champ.wr}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Matches Placeholder */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Recent Matches</h2>
          <div className="text-center text-gray-400 py-12">
            <p>Match history would be displayed here</p>
            <p className="text-sm mt-2">(Integration with Riot API)</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { name: 'faker' },
    { name: 'caps' },
  ];
}
