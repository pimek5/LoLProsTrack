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
          <Link href="/live-game" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px] border border-gray-700 hover:border-cyan-500/50">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-14 h-14 text-cyan-400 group-hover:text-cyan-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
                <circle cx="12" cy="12" r="8" strokeWidth="2"/>
                <path d="M12 2v4m0 12v4M4 12h4m8 0h4"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center text-sm">Live Game Search</h2>
          </Link>

          <Link href="/multi" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px] border border-gray-700 hover:border-cyan-500/50">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-14 h-14 text-cyan-400 group-hover:text-cyan-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center text-sm">Multi <span className="text-cyan-400">LOLPROS.GG</span></h2>
          </Link>

          <Link href="/map" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px] border border-gray-700 hover:border-cyan-500/50">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-14 h-14 text-cyan-400 group-hover:text-cyan-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="currentColor" opacity="0.3"/>
                <circle cx="12" cy="10" r="3" fill="currentColor"/>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center text-sm">Challengers Map</h2>
          </Link>

          <Link href="/ladder-history" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px] border border-gray-700 hover:border-cyan-500/50">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-14 h-14 text-cyan-400 group-hover:text-cyan-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" strokeWidth="2"/>
                <path d="M7 16l4-6 4 4 5-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="16" r="2" fill="currentColor"/>
                <circle cx="11" cy="10" r="2" fill="currentColor"/>
                <circle cx="15" cy="14" r="2" fill="currentColor"/>
                <circle cx="20" cy="6" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center text-sm">Ladder History</h2>
          </Link>

          <Link href="/missing-challengers" className="bg-[#24283a] hover:bg-[#2a2f44] rounded-lg p-6 transition-colors group flex flex-col items-center justify-center min-h-[160px] border border-gray-700 hover:border-cyan-500/50">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-14 h-14 text-cyan-400 group-hover:text-cyan-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M12 8v4" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
                <path d="M8 8h8M8 16h8" opacity="0.3" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-white font-semibold text-center text-sm">Missing Challengers</h2>
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
