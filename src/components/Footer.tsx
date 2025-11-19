import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              LOLPROS.GG tracks professional League of Legends players across all regions,
              providing live game data, rankings, and statistics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/live-game" className="text-gray-400 hover:text-white text-sm">
                  Live Games
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-gray-400 hover:text-white text-sm">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-gray-400 hover:text-white text-sm">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/ladder-history" className="text-gray-400 hover:text-white text-sm">
                  Ladder History
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Regions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/region/euw" className="text-gray-400 hover:text-white text-sm">
                  Europe West
                </Link>
              </li>
              <li>
                <Link href="/region/na" className="text-gray-400 hover:text-white text-sm">
                  North America
                </Link>
              </li>
              <li>
                <Link href="/region/kr" className="text-gray-400 hover:text-white text-sm">
                  Korea
                </Link>
              </li>
              <li>
                <Link href="/region/cn" className="text-gray-400 hover:text-white text-sm">
                  China
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow us for updates and news about professional League of Legends players.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LOLPROS.GG. All rights reserved.</p>
          <p className="mt-2">
            LOLPROS.GG isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
            or anyone officially involved in producing or managing Riot Games properties.
          </p>
        </div>
      </div>
    </footer>
  );
}
