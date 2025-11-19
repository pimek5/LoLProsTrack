'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LiveGame {
  id: string;
  player: string;
  team: string;
  champion: string;
  role: string;
  rank: string;
  region: string;
  gameMode: string;
  duration: string;
}

export default function LiveGameSearch() {
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  
  // Mock data - in production, this would come from an API
  const mockLiveGames: LiveGame[] = [
    {
      id: '1',
      player: 'Faker',
      team: 'T1',
      champion: 'Azir',
      role: 'Mid',
      rank: 'Challenger 1547 LP',
      region: 'KR',
      gameMode: 'Ranked Solo',
      duration: '12:34'
    },
    {
      id: '2',
      player: 'Caps',
      team: 'G2 Esports',
      champion: 'LeBlanc',
      role: 'Mid',
      rank: 'Challenger 1423 LP',
      region: 'EUW',
      gameMode: 'Ranked Solo',
      duration: '8:21'
    },
    {
      id: '3',
      player: 'Doublelift',
      team: 'Retired',
      champion: 'Jinx',
      role: 'ADC',
      rank: 'Grandmaster 821 LP',
      region: 'NA',
      gameMode: 'Ranked Solo',
      duration: '23:45'
    },
  ];

  const regions = ['ALL', 'EUW', 'NA', 'KR', 'CN', 'EUNE', 'BR', 'LAN', 'LAS', 'OCE', 'RU', 'TR', 'JP'];

  const filteredGames = selectedRegion === 'ALL' 
    ? mockLiveGames 
    : mockLiveGames.filter(game => game.region === selectedRegion);

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
          🔴 Live Games ({filteredGames.length})
        </h2>
        
        {/* Region Filter */}
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedRegion === region
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Live Games List */}
      <div className="space-y-4">
        {filteredGames.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No live games found for this region</p>
        ) : (
          filteredGames.map((game) => (
            <Link
              key={game.id}
              href={`/live-game/${game.id}`}
              className="block bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all border border-slate-600 hover:border-blue-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Player</p>
                  <p className="text-white font-bold">{game.player}</p>
                  <p className="text-gray-400 text-sm">{game.team}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Champion</p>
                  <p className="text-white font-semibold">{game.champion}</p>
                  <p className="text-gray-400 text-sm">{game.role}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Rank</p>
                  <p className="text-white font-semibold">{game.rank}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Region</p>
                  <p className="text-white font-semibold">{game.region}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="text-white font-semibold">{game.duration}</p>
                  </div>
                  <div className="text-red-500 animate-pulse">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/live-game"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
        >
          View All Live Games
        </Link>
      </div>
    </div>
  );
}
