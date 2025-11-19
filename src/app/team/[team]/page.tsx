import Link from 'next/link';
import { notFound } from 'next/navigation';

const getTeamData = (team: string) => {
  const teams: { [key: string]: any } = {
    't1': {
      name: 'T1',
      fullName: 'T1 Esports',
      region: 'KR',
      league: 'LCK',
      founded: '2003',
      website: 'https://t1.gg',
      roster: [
        { name: 'Zeus', role: 'Top', realName: 'Choi Woo-je' },
        { name: 'Oner', role: 'Jungle', realName: 'Moon Hyeon-joon' },
        { name: 'Faker', role: 'Mid', realName: 'Lee Sang-hyeok' },
        { name: 'Gumayusi', role: 'ADC', realName: 'Lee Min-hyeong' },
        { name: 'Keria', role: 'Support', realName: 'Ryu Min-seok' },
      ],
      achievements: [
        'World Championship 2023',
        'LCK Spring 2023',
        'LCK Summer 2023',
        'MSI 2023',
      ],
      avgRank: 3.2,
    },
    'g2-esports': {
      name: 'G2 Esports',
      fullName: 'G2 Esports',
      region: 'EUW',
      league: 'LEC',
      founded: '2014',
      website: 'https://g2esports.com',
      roster: [
        { name: 'BrokenBlade', role: 'Top', realName: 'Sergen Çelik' },
        { name: 'Yike', role: 'Jungle', realName: 'Martin Sundelin' },
        { name: 'Caps', role: 'Mid', realName: 'Rasmus Winther' },
        { name: 'Hans Sama', role: 'ADC', realName: 'Steven Liv' },
        { name: 'Mikyx', role: 'Support', realName: 'Mihael Mehle' },
      ],
      achievements: [
        'LEC Spring 2024',
        'MSI 2019',
        'LEC Summer 2020',
        'Worlds Finalist 2019',
      ],
      avgRank: 8.4,
    }
  };

  return teams[team] || null;
};

export default async function TeamPage({ params }: { params: Promise<{ team: string }> }) {
  const { team } = await params;
  const teamData = getTeamData(team);

  if (!teamData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Team Header */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-6xl font-bold text-white mb-2">{teamData.name}</h1>
              <p className="text-2xl text-gray-300 mb-4">{teamData.fullName}</p>
              <div className="flex flex-wrap gap-4 text-gray-300 text-lg">
                <span>{teamData.league}</span>
                <span>•</span>
                <span>{teamData.region}</span>
                <span>•</span>
                <span>Founded {teamData.founded}</span>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 text-center">
              <p className="text-gray-400 text-sm mb-1">Avg Player Rank</p>
              <p className="text-5xl font-bold text-yellow-400">#{teamData.avgRank}</p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href={teamData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Official Website →
            </a>
          </div>
        </div>

        {/* Roster */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <h2 className="text-4xl font-bold text-white mb-6">Roster</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.roster.map((player: any, index: number) => (
              <Link
                key={index}
                href={`/player/${player.name.toLowerCase()}`}
                className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition border border-slate-600 hover:border-blue-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {player.role}
                  </span>
                </div>
                <p className="text-gray-400">{player.realName}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <h2 className="text-4xl font-bold text-white mb-6">🏆 Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamData.achievements.map((achievement: string, index: number) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4 flex items-center gap-4">
                <span className="text-4xl">🏆</span>
                <span className="text-white font-semibold text-lg">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats Placeholder */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-4xl font-bold text-white mb-6">Team Statistics</h2>
          <div className="text-center text-gray-400 py-12">
            <p>Team statistics and match history would be displayed here</p>
            <p className="text-sm mt-2">(Integration with competitive match data)</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { team: 't1' },
    { team: 'g2-esports' },
  ];
}
