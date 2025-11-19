import Link from 'next/link';

interface NameChange {
  id: string;
  oldName: string;
  newName: string;
  player: string;
  team: string;
  region: string;
  date: string;
  verified: boolean;
}

export default function NameChangesPage() {
  // Mock data
  const nameChanges: NameChange[] = [
    { id: '1', oldName: 'FNC Humanoid', newName: 'TL Humanoid', player: 'Humanoid', team: 'Team Liquid', region: 'NA', date: '2025-11-19 14:32', verified: true },
    { id: '2', oldName: 'G2 BrokenBlade', newName: 'G2 BB', player: 'BrokenBlade', team: 'G2 Esports', region: 'EUW', date: '2025-11-19 09:15', verified: true },
    { id: '3', oldName: 'T1 Gumayusi', newName: 'T1 Gumagod', player: 'Gumayusi', team: 'T1', region: 'KR', date: '2025-11-19 06:42', verified: true },
    { id: '4', oldName: 'FLY Inspired', newName: 'FLY INS', player: 'Inspired', team: 'FlyQuest', region: 'NA', date: '2025-11-18 22:18', verified: true },
    { id: '5', oldName: 'VIT Photon', newName: 'VIT Photo', player: 'Photon', team: 'Vitality', region: 'EUW', date: '2025-11-18 18:05', verified: true },
    { id: '6', oldName: 'C9 Jojopyun', newName: 'C9 Jojo', player: 'Jojopyun', team: 'Cloud9', region: 'NA', date: '2025-11-18 15:33', verified: true },
    { id: '7', oldName: 'MAD Nisqy', newName: 'MAD Nisky', player: 'Nisqy', team: 'MAD Lions', region: 'EUW', date: '2025-11-17 20:47', verified: true },
    { id: '8', oldName: 'DK ShowMaker', newName: 'DK SM', player: 'ShowMaker', team: 'Dplus KIA', region: 'KR', date: '2025-11-17 12:22', verified: true },
    { id: '9', oldName: 'GEN Chovy', newName: 'GEN Choby', player: 'Chovy', team: 'Gen.G', region: 'KR', date: '2025-11-17 08:11', verified: false },
    { id: '10', oldName: 'LNG Tarzan', newName: 'LNG TRZ', player: 'Tarzan', team: 'LNG Esports', region: 'CN', date: '2025-11-16 19:55', verified: true },
    { id: '11', oldName: 'TL CoreJJ', newName: 'TL Core', player: 'CoreJJ', team: 'Team Liquid', region: 'NA', date: '2025-11-16 14:28', verified: true },
    { id: '12', oldName: 'BLG Elk', newName: 'BLG E1k', player: 'Elk', team: 'Bilibili Gaming', region: 'CN', date: '2025-11-16 11:03', verified: true },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">✏️ Name Changes</h1>
        <p className="text-gray-300 text-lg mb-8">Recent summoner name updates from professional players</p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Total Changes</p>
            <p className="text-4xl font-bold text-white">{nameChanges.length}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">Today</p>
            <p className="text-4xl font-bold text-blue-400">
              {nameChanges.filter(nc => nc.date.startsWith('2025-11-19')).length}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-400 text-sm mb-1">This Week</p>
            <p className="text-4xl font-bold text-green-400">
              {nameChanges.filter(nc => {
                const date = new Date(nc.date);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return date >= weekAgo;
              }).length}
            </p>
          </div>
        </div>

        {/* Name Changes List */}
        <div className="space-y-4">
          {nameChanges.map((change) => (
            <div
              key={change.id}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Name Change */}
                <div className="col-span-2">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-lg">{change.oldName}</span>
                    <span className="text-blue-400 text-xl">→</span>
                    <Link
                      href={`/player/${change.player.toLowerCase()}`}
                      className="text-white font-bold text-lg hover:text-blue-400 transition"
                    >
                      {change.newName}
                    </Link>
                    {change.verified && (
                      <span className="text-green-400 text-sm" title="Verified">✓</span>
                    )}
                  </div>
                </div>

                {/* Player Info */}
                <div>
                  <p className="text-gray-400 text-sm">Player</p>
                  <p className="text-white font-semibold">{change.player}</p>
                </div>

                {/* Team & Region */}
                <div>
                  <p className="text-gray-400 text-sm">Team</p>
                  <Link
                    href={`/team/${change.team.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white font-semibold hover:text-blue-400"
                  >
                    {change.team}
                  </Link>
                  <p className="text-gray-400 text-sm">{change.region}</p>
                </div>

                {/* Date */}
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Changed</p>
                  <p className="text-white font-semibold">
                    {new Date(change.date).toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold border border-slate-700 hover:border-blue-500 transition-all">
            Load More
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">About Name Changes</h3>
          <div className="text-gray-300 space-y-2">
            <p>
              We track all summoner name changes from professional players across all regions. 
              Name changes are automatically detected and verified against our player database.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              <span className="text-green-400">✓</span> Verified changes have been confirmed through multiple sources.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
