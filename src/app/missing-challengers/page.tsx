'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MissingPlayer {
  id: string;
  summonerName: string;
  rank: number;
  lp: number;
  region: string;
  winRate: number;
  games: number;
  lastSeen: string;
}

export default function MissingChallengersPage() {
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  // Mock data
  const missingPlayers: MissingPlayer[] = [
    { id: '1', summonerName: 'HideOnBush', rank: 4, lp: 1523, region: 'KR', winRate: 68, games: 342, lastSeen: '2 hours ago' },
    { id: '2', summonerName: 'Unknown Pro', rank: 7, lp: 1456, region: 'EUW', winRate: 65, games: 298, lastSeen: '5 hours ago' },
    { id: '3', summonerName: 'Mystery Player', rank: 11, lp: 1398, region: 'NA', winRate: 72, games: 256, lastSeen: '1 day ago' },
    { id: '4', summonerName: 'Secret Smurf', rank: 15, lp: 1354, region: 'KR', winRate: 70, games: 213, lastSeen: '3 hours ago' },
    { id: '5', summonerName: 'Unidentified', rank: 19, lp: 1312, region: 'CN', winRate: 64, games: 287, lastSeen: '8 hours ago' },
    { id: '6', summonerName: 'ProPlayer123', rank: 23, lp: 1287, region: 'EUW', winRate: 67, games: 312, lastSeen: '12 hours ago' },
  ];

  const regions = ['ALL', 'EUW', 'NA', 'KR', 'CN', 'EUNE', 'BR', 'LAN', 'LAS', 'OCE', 'RU', 'TR', 'JP'];

  const filteredPlayers = selectedRegion === 'ALL'
    ? missingPlayers
    : missingPlayers.filter(p => p.region === selectedRegion);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">❓ Missing Challengers</h1>
        <p className="text-gray-300 text-lg mb-8">High-rank players not yet identified</p>

        {/* Info Box */}
        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mb-8">
          <h3 className="text-blue-400 font-bold text-lg mb-2">🔍 Help Us Identify These Players!</h3>
          <p className="text-gray-300">
            These are Challenger and Grandmaster players who haven't been linked to professional teams yet. 
            If you know who any of these players are, please let us know!
          </p>
        </div>

        {/* Region Filter */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-white text-xl font-semibold">
            {filteredPlayers.length} Unidentified {filteredPlayers.length === 1 ? 'Player' : 'Players'}
          </p>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-yellow-500 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">❓</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{player.summonerName}</h3>
                      <p className="text-gray-400">{player.region}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Rank</p>
                  <p className="text-2xl font-bold text-yellow-400">#{player.rank}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">LP</p>
                  <p className="text-blue-400 font-bold text-xl">{player.lp}</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Win Rate</p>
                  <p className={`font-bold text-xl ${player.winRate >= 65 ? 'text-green-400' : 'text-white'}`}>
                    {player.winRate}%
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                <span>{player.games} games played</span>
                <span>Last seen: {player.lastSeen}</span>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
                Report Identity
              </button>
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
            <p className="text-gray-400 text-lg">No missing challengers in this region</p>
          </div>
        )}

        {/* How to Report */}
        <div className="mt-12 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">How to Report Player Identity</h3>
          <div className="space-y-3 text-gray-300">
            <p>1. Make sure you have reliable information about the player's identity</p>
            <p>2. Click the "Report Identity" button on the player's card</p>
            <p>3. Provide the professional player's name and team</p>
            <p>4. Include any evidence or social media links</p>
            <p className="text-sm text-gray-400 mt-4">
              Note: All submissions are verified before being added to the database.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
