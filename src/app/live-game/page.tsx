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
  spectatorLink: string;
}

export default function LiveGamePage() {
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [selectedRole, setSelectedRole] = useState('ALL');

  // Mock data
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
      duration: '12:34',
      spectatorLink: '/spectate/1'
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
      duration: '8:21',
      spectatorLink: '/spectate/2'
    },
    {
      id: '3',
      player: 'Zeus',
      team: 'T1',
      champion: 'Aatrox',
      role: 'Top',
      rank: 'Challenger 1476 LP',
      region: 'KR',
      gameMode: 'Ranked Solo',
      duration: '15:42',
      spectatorLink: '/spectate/3'
    },
    {
      id: '4',
      player: 'Canyon',
      team: 'Gen.G',
      champion: 'Lee Sin',
      role: 'Jungle',
      rank: 'Challenger 1421 LP',
      region: 'KR',
      gameMode: 'Ranked Solo',
      duration: '6:15',
      spectatorLink: '/spectate/4'
    },
  ];

  const regions = ['ALL', 'EUW', 'NA', 'KR', 'CN', 'EUNE', 'BR', 'LAN', 'LAS', 'OCE', 'RU', 'TR', 'JP'];
  const roles = ['ALL', 'Top', 'Jungle', 'Mid', 'ADC', 'Support'];

  const filteredGames = mockLiveGames.filter(game => {
    const regionMatch = selectedRegion === 'ALL' || game.region === selectedRegion;
    const roleMatch = selectedRole === 'ALL' || game.role === selectedRole;
    return regionMatch && roleMatch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">🔴 Live Games</h1>
        <p className="text-gray-300 text-lg mb-8">Watch professional players in action</p>

        {/* Filters */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Filter by Region</h3>
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

          <div>
            <h3 className="text-white font-semibold mb-3">Filter by Role</h3>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedRole === role
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-white text-xl font-semibold">
            {filteredGames.length} Live {filteredGames.length === 1 ? 'Game' : 'Games'}
          </p>
        </div>

        {/* Games List */}
        <div className="space-y-4">
          {filteredGames.length === 0 ? (
            <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
              <p className="text-gray-400 text-lg">No live games found with these filters</p>
            </div>
          ) : (
            filteredGames.map((game) => (
              <div
                key={game.id}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="col-span-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-red-500 animate-pulse">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                      </div>
                      <div>
                        <Link
                          href={`/player/${game.player.toLowerCase()}`}
                          className="text-white font-bold text-lg hover:text-blue-400"
                        >
                          {game.player}
                        </Link>
                        <p className="text-gray-400 text-sm">{game.team}</p>
                      </div>
                    </div>
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
                    <p className="text-gray-400 text-sm">Region • Duration</p>
                    <p className="text-white font-semibold">{game.region} • {game.duration}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={game.spectatorLink}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all"
                    >
                      Spectate
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
