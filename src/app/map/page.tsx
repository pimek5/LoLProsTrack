'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Player {
  id: string;
  name: string;
  team: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  rank: number;
  lp: number;
}

export default function MapPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Mock data for Europe challengers
  const players: Player[] = [
    { id: '1', name: 'Caps', team: 'G2 Esports', city: 'Berlin', country: 'Germany', lat: 52.52, lng: 13.4, rank: 1, lp: 1498 },
    { id: '2', name: 'Perkz', team: 'Vitality', city: 'Paris', country: 'France', lat: 48.85, lng: 2.35, rank: 5, lp: 1387 },
    { id: '3', name: 'Rekkles', team: 'Free Agent', city: 'Stockholm', country: 'Sweden', lat: 59.33, lng: 18.07, rank: 12, lp: 1256 },
    { id: '4', name: 'Jankos', team: 'Retired', city: 'Warsaw', country: 'Poland', lat: 52.23, lng: 21.01, rank: 18, lp: 1198 },
    { id: '5', name: 'Wunder', team: 'Fnatic', city: 'Copenhagen', country: 'Denmark', lat: 55.68, lng: 12.57, rank: 8, lp: 1312 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">🗺️ Challengers Map</h1>
        <p className="text-gray-300 text-lg mb-8">European Challenger Players Location</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Map would display here with player locations</p>
                <p className="text-xs mt-2">(Integration with mapping library like Leaflet or Google Maps)</p>
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-4 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <span className="text-white text-sm">Challenger</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <span className="text-white text-sm">Grandmaster</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <span className="text-white text-sm">Master</span>
              </div>
            </div>
          </div>

          {/* Players List */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Players ({players.length})</h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {players.map((player) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className={`w-full text-left bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all border ${
                    selectedPlayer?.id === player.id ? 'border-blue-500' : 'border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold">{player.name}</span>
                    <span className="text-yellow-400 font-bold">#{player.rank}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{player.team}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-400 text-sm">
                      📍 {player.city}, {player.country}
                    </p>
                    <p className="text-blue-400 text-sm font-semibold">{player.lp} LP</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Player Info */}
        {selectedPlayer && (
          <div className="mt-6 bg-slate-800 rounded-lg p-6 border border-blue-500">
            <h3 className="text-2xl font-bold text-white mb-4">Selected Player</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Player</p>
                <p className="text-white font-bold text-lg">{selectedPlayer.name}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Team</p>
                <p className="text-white font-semibold">{selectedPlayer.team}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">{selectedPlayer.city}, {selectedPlayer.country}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Rank</p>
                <p className="text-white font-semibold">Challenger #{selectedPlayer.rank} ({selectedPlayer.lp} LP)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
