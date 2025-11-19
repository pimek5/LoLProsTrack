'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results
  const playerResults = [
    { id: '1', name: 'Faker', type: 'player', team: 'T1', role: 'Mid', region: 'KR' },
    { id: '2', name: 'Caps', type: 'player', team: 'G2 Esports', role: 'Mid', region: 'EUW' },
  ].filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  const teamResults = [
    { id: '1', name: 'T1', type: 'team', league: 'LCK', region: 'KR' },
    { id: '2', name: 'G2 Esports', type: 'team', league: 'LEC', region: 'EUW' },
  ].filter(t => t.name.toLowerCase().includes(query.toLowerCase()));

  const totalResults = playerResults.length + teamResults.length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">🔍 Search Results</h1>
        <p className="text-gray-300 text-lg mb-8">
          {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
        </p>

        {totalResults === 0 ? (
          <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
            <p className="text-gray-400 text-lg mb-4">No results found</p>
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Return to homepage
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Players */}
            {playerResults.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Players ({playerResults.length})</h2>
                <div className="space-y-4">
                  {playerResults.map((player) => (
                    <Link
                      key={player.id}
                      href={`/player/${player.name.toLowerCase()}`}
                      className="block bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{player.name}</h3>
                          <p className="text-gray-400">{player.team} • {player.role} • {player.region}</p>
                        </div>
                        <div className="text-blue-400 font-semibold">View Profile →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Teams */}
            {teamResults.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Teams ({teamResults.length})</h2>
                <div className="space-y-4">
                  {teamResults.map((team) => (
                    <Link
                      key={team.id}
                      href={`/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{team.name}</h3>
                          <p className="text-gray-400">{team.league} • {team.region}</p>
                        </div>
                        <div className="text-blue-400 font-semibold">View Team →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
