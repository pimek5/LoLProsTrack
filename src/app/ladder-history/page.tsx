'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HistoryEntry {
  date: string;
  rank: number;
  lp: number;
  wins: number;
  losses: number;
}

interface Player {
  name: string;
  team: string;
  region: string;
  role: string;
  currentRank: number;
  currentLP: number;
  history: HistoryEntry[];
}

export default function LadderHistoryPage() {
  const [selectedRegion, setSelectedRegion] = useState('EUW');
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');

  // Mock data
  const mockPlayer: Player = {
    name: 'Caps',
    team: 'G2 Esports',
    region: 'EUW',
    role: 'Mid',
    currentRank: 1,
    currentLP: 1498,
    history: [
      { date: '2025-11-19', rank: 1, lp: 1498, wins: 523, losses: 412 },
      { date: '2025-11-18', rank: 2, lp: 1476, wins: 521, losses: 411 },
      { date: '2025-11-17', rank: 2, lp: 1465, wins: 519, losses: 410 },
      { date: '2025-11-16', rank: 3, lp: 1442, wins: 517, losses: 409 },
      { date: '2025-11-15', rank: 3, lp: 1438, wins: 515, losses: 408 },
    ]
  };

  const regions = ['EUW', 'NA', 'KR', 'CN', 'EUNE', 'BR', 'LAN', 'LAS', 'OCE', 'RU', 'TR', 'JP'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">📊 Ladder History</h1>
        <p className="text-gray-300 text-lg mb-8">Track historical ladder rankings</p>

        {/* Filters */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-3">Region</h3>
              <div className="flex flex-wrap gap-2">
                {regions.slice(0, 6).map((region) => (
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
              <h3 className="text-white font-semibold mb-3">Timeframe</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setTimeframe('7d')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    timeframe === '7d'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  Last 7 Days
                </button>
                <button
                  onClick={() => setTimeframe('30d')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    timeframe === '30d'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  Last 30 Days
                </button>
                <button
                  onClick={() => setTimeframe('90d')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    timeframe === '90d'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  Last 90 Days
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Player Profile */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">{mockPlayer.name}</h2>
              <p className="text-gray-400">{mockPlayer.team} • {mockPlayer.role} • {mockPlayer.region}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Current Rank</p>
              <p className="text-3xl font-bold text-yellow-400">#{mockPlayer.currentRank}</p>
              <p className="text-blue-400 font-semibold">{mockPlayer.currentLP} LP</p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-slate-700 rounded-lg p-8 mb-6">
            <div className="text-center text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="font-semibold">Rank History Chart</p>
              <p className="text-sm">(Integration with Chart.js or Recharts)</p>
            </div>
          </div>

          {/* History Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">Date</th>
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">Rank</th>
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">LP</th>
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">Wins</th>
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">Losses</th>
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">Win Rate</th>
                  <th className="text-left text-gray-400 font-semibold py-3 px-4">Change</th>
                </tr>
              </thead>
              <tbody>
                {mockPlayer.history.map((entry, index) => {
                  const prevEntry = mockPlayer.history[index + 1];
                  const rankChange = prevEntry ? prevEntry.rank - entry.rank : 0;
                  const lpChange = prevEntry ? entry.lp - prevEntry.lp : 0;
                  const winRate = Math.round((entry.wins / (entry.wins + entry.losses)) * 100);

                  return (
                    <tr key={entry.date} className="border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="py-3 px-4 text-white">{entry.date}</td>
                      <td className="py-3 px-4 text-white font-semibold">#{entry.rank}</td>
                      <td className="py-3 px-4 text-blue-400 font-semibold">{entry.lp}</td>
                      <td className="py-3 px-4 text-green-400">{entry.wins}</td>
                      <td className="py-3 px-4 text-red-400">{entry.losses}</td>
                      <td className="py-3 px-4 text-white">{winRate}%</td>
                      <td className="py-3 px-4">
                        {rankChange > 0 && (
                          <span className="text-green-400">▲ {rankChange} ({lpChange > 0 ? '+' : ''}{lpChange} LP)</span>
                        )}
                        {rankChange < 0 && (
                          <span className="text-red-400">▼ {Math.abs(rankChange)} ({lpChange} LP)</span>
                        )}
                        {rankChange === 0 && lpChange !== 0 && (
                          <span className={lpChange > 0 ? 'text-green-400' : 'text-red-400'}>
                            {lpChange > 0 ? '+' : ''}{lpChange} LP
                          </span>
                        )}
                        {rankChange === 0 && lpChange === 0 && (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
