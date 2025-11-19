'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Team {
  id: string;
  name: string;
  shortName: string;
  region: string;
  league: string;
  roster: string[];
  avgRank: number;
  founded: string;
}

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  // Mock data
  const teams: Team[] = [
    { id: '1', name: 'T1', shortName: 'T1', region: 'KR', league: 'LCK', roster: ['Zeus', 'Oner', 'Faker', 'Gumayusi', 'Keria'], avgRank: 3.2, founded: '2003' },
    { id: '2', name: 'G2 Esports', shortName: 'G2', region: 'EUW', league: 'LEC', roster: ['BrokenBlade', 'Yike', 'Caps', 'Hans Sama', 'Mikyx'], avgRank: 8.4, founded: '2014' },
    { id: '3', name: 'Gen.G', shortName: 'GEN', region: 'KR', league: 'LCK', roster: ['Kiin', 'Canyon', 'Chovy', 'Peyz', 'Lehends'], avgRank: 4.6, founded: '2017' },
    { id: '4', name: 'Cloud9', shortName: 'C9', region: 'NA', league: 'LCS', roster: ['Thanatos', 'Blaber', 'Jojopyun', 'Berserker', 'Vulcan'], avgRank: 12.8, founded: '2013' },
    { id: '5', name: 'JD Gaming', shortName: 'JDG', region: 'CN', league: 'LPL', roster: ['369', 'Kanavi', 'Knight', 'Ruler', 'Missing'], avgRank: 6.2, founded: '2017' },
    { id: '6', name: 'Fnatic', shortName: 'FNC', region: 'EUW', league: 'LEC', roster: ['Oscarinin', 'Razork', 'Humanoid', 'Noah', 'Jun'], avgRank: 15.3, founded: '2004' },
    { id: '7', name: 'Dplus KIA', shortName: 'DK', region: 'KR', league: 'LCK', roster: ['Kingen', 'Lucid', 'ShowMaker', 'Aiming', 'Kellin'], avgRank: 7.1, founded: '2020' },
    { id: '8', name: 'Team Liquid', shortName: 'TL', region: 'NA', league: 'LCS', roster: ['Impact', 'Umti', 'APA', 'Yeon', 'CoreJJ'], avgRank: 18.5, founded: '2015' },
  ];

  const regions = ['ALL', 'KR', 'EUW', 'NA', 'CN', 'EUNE', 'BR', 'LAN', 'LAS'];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.league.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'ALL' || team.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">🏆 Teams</h1>
        <p className="text-gray-300 text-lg mb-8">Browse all professional League of Legends teams</p>

        {/* Search and Filters */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search teams by name or league..."
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
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
            {filteredTeams.length} {filteredTeams.length === 1 ? 'Team' : 'Teams'}
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTeams.map((team) => (
            <Link
              key={team.id}
              href={`/team/${team.shortName.toLowerCase()}`}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition">
                    {team.name}
                  </h3>
                  <p className="text-gray-400">{team.league} • {team.region}</p>
                </div>
                <div className="bg-slate-700 px-4 py-2 rounded-lg">
                  <p className="text-gray-400 text-xs">Avg Rank</p>
                  <p className="text-yellow-400 font-bold text-xl">#{team.avgRank.toFixed(1)}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Founded: {team.founded}</p>
              </div>

              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-3">Roster</p>
                <div className="grid grid-cols-5 gap-2">
                  {team.roster.map((player, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-slate-600 rounded-lg p-2 mb-1">
                        <p className="text-white font-semibold text-sm">{player}</p>
                      </div>
                      <p className="text-gray-400 text-xs">
                        {['Top', 'Jun', 'Mid', 'ADC', 'Sup'][index]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="bg-slate-800 rounded-lg p-12 text-center border border-slate-700">
            <p className="text-gray-400 text-lg">No teams found matching your criteria</p>
          </div>
        )}
      </div>
    </main>
  );
}
