'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Player {
  id: string;
  name: string;
  realName: string;
  team: string;
  role: string;
  region: string;
  rank: number;
  lp: number;
  winRate: number;
  nationality: string;
}

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  // Mock data
  const players: Player[] = [
    { id: '1', name: 'Faker', realName: 'Lee Sang-hyeok', team: 'T1', role: 'Mid', region: 'KR', rank: 1, lp: 1547, winRate: 67, nationality: '🇰🇷' },
    { id: '2', name: 'ShowMaker', realName: 'Heo Su', team: 'Dplus KIA', role: 'Mid', region: 'KR', rank: 2, lp: 1523, winRate: 64, nationality: '🇰🇷' },
    { id: '3', name: 'Caps', realName: 'Rasmus Winther', team: 'G2 Esports', role: 'Mid', region: 'EUW', rank: 3, lp: 1498, winRate: 71, nationality: '🇩🇰' },
    { id: '4', name: 'Zeus', realName: 'Choi Woo-je', team: 'T1', role: 'Top', region: 'KR', rank: 4, lp: 1476, winRate: 69, nationality: '🇰🇷' },
    { id: '5', name: 'Keria', realName: 'Ryu Min-seok', team: 'T1', role: 'Support', region: 'KR', rank: 5, lp: 1465, winRate: 66, nationality: '🇰🇷' },
    { id: '6', name: 'Ruler', realName: 'Park Jae-hyuk', team: 'JDG', role: 'ADC', region: 'CN', rank: 6, lp: 1445, winRate: 68, nationality: '🇰🇷' },
    { id: '7', name: 'Chovy', realName: 'Jeong Ji-hoon', team: 'Gen.G', role: 'Mid', region: 'KR', rank: 7, lp: 1432, winRate: 70, nationality: '🇰🇷' },
    { id: '8', name: 'Canyon', realName: 'Kim Geon-bu', team: 'Gen.G', role: 'Jungle', region: 'KR', rank: 8, lp: 1421, winRate: 65, nationality: '🇰🇷' },
    { id: '9', name: 'Perkz', realName: 'Luka Perković', team: 'Vitality', role: 'Mid', region: 'EUW', rank: 10, lp: 1387, winRate: 62, nationality: '🇭🇷' },
    { id: '10', name: 'Doublelift', realName: 'Yiliang Peng', team: 'Retired', role: 'ADC', region: 'NA', rank: 15, lp: 1298, winRate: 58, nationality: '🇺🇸' },
  ];

  const roles = ['ALL', 'Top', 'Jungle', 'Mid', 'ADC', 'Support'];
  const regions = ['ALL', 'KR', 'EUW', 'NA', 'CN', 'EUNE', 'BR', 'LAN', 'LAS'];

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.realName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'ALL' || player.role === selectedRole;
    const matchesRegion = selectedRegion === 'ALL' || player.region === selectedRegion;
    return matchesSearch && matchesRole && matchesRegion;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">👥 Players</h1>
        <p className="text-gray-300 text-lg mb-8">Browse all professional League of Legends players</p>

        {/* Search and Filters */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search players by name, real name, or team..."
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Role Filter */}
          <div className="mb-6">
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

          {/* Region Filter */}
          <div>
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
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-white text-xl font-semibold">
            {filteredPlayers.length} {filteredPlayers.length === 1 ? 'Player' : 'Players'}
          </p>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <Link
              key={player.id}
              href={`/player/${player.name.toLowerCase()}`}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                    {player.nationality} {player.name}
                  </h3>
                  <p className="text-gray-400">{player.realName}</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold text-xl">#{player.rank}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Team</span>
                  <span className="text-white font-semibold">{player.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role</span>
                  <span className="text-white font-semibold">{player.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Region</span>
                  <span className="text-white font-semibold">{player.region}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">LP</p>
                  <p className="text-blue-400 font-bold text-lg">{player.lp}</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Win Rate</p>
                  <p className={`font-bold text-lg ${player.winRate >= 65 ? 'text-green-400' : 'text-white'}`}>
                    {player.winRate}%
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
            <p className="text-gray-400 text-lg">No players found matching your criteria</p>
          </div>
        )}
      </div>
    </main>
  );
}
