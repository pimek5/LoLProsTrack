import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import TopPlayers from '@/components/TopPlayers';
import RecentNameChanges from '@/components/RecentNameChanges';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1d29]">
      <div className="container mx-auto px-4 py-8 max-w-[1400px]">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Feature Grid - 5 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <Link href="/live-game" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v4m0 12v4M4 12h4m8 0h4m-3-7l-2 2m-6 6l-2 2m10 0l-2-2m-6-6l-2-2"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center">Live Game Search</h2>
          </Link>

          <Link href="/multi" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center">Multi <span className="text-cyan-400">LOLPROS.GG</span></h2>
          </Link>

          <Link href="/map" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center">Challengers Map</h2>
          </Link>

          <Link href="/ladder-history" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20v-8m0 0V4m0 8l-8 4m8-4l8 4"/>
                <circle cx="12" cy="4" r="2"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center">Ladder History</h2>
          </Link>

          <Link href="/missing-challengers" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center">Missing Challengers</h2>
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Players */}
          <TopPlayers />

          {/* Recent Name Changes */}
          <RecentNameChanges />
        </div>
      </div>
    </main>
  );
}
