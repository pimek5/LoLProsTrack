import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import LiveGameSearch from '@/components/LiveGameSearch';
import TopPlayers from '@/components/TopPlayers';
import RecentNameChanges from '@/components/RecentNameChanges';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e27]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3">
            LOL<span className="text-blue-400">PROS</span>.GG
          </h1>
          <p className="text-gray-400 text-lg">Find your favourite player and follow his soloQ games live!</p>
        </header>

        {/* Main Search */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Quick Access Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Quick access</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/live-game" className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/50">
              Live Game Search
            </Link>
            <Link href="/multi" className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/50">
              Multi LOLPROS.GG
            </Link>
            <Link href="/map" className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/50">
              Challengers Map
            </Link>
            <Link href="/ladder-history" className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/50">
              Ladder History
            </Link>
            <Link href="/missing-challengers" className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/50">
              Missing Challengers
            </Link>
            <Link href="/name-changes" className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/50">
              Name Changes
            </Link>
          </div>
        </div>

        {/* Live Game Search Component */}
        <div className="mb-8">
          <LiveGameSearch />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Players */}
          <TopPlayers />

          {/* Recent Name Changes */}
          <RecentNameChanges />
        </div>

        {/* Region Quick Links */}
        <div className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700/50">
          <h3 className="text-xl font-semibold text-white mb-4">Regions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {['EUW', 'NA', 'KR', 'CN', 'EUNE', 'BR', 'LAN', 'LAS', 'OCE', 'RU', 'TR', 'JP'].map((region) => (
              <Link
                key={region}
                href={`/region/${region.toLowerCase()}`}
                className="bg-slate-700/50 hover:bg-blue-600/80 text-white text-center py-2 px-3 rounded-lg transition-all font-medium text-sm"
              >
                {region}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
