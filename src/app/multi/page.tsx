'use client';

import { useState } from 'react';

export default function MultiStreamPage() {
  const [streams, setStreams] = useState<string[]>(['']);
  const [layout, setLayout] = useState<'1' | '2' | '4'>('2');

  const addStream = () => {
    if (streams.length < 4) {
      setStreams([...streams, '']);
    }
  };

  const removeStream = (index: number) => {
    setStreams(streams.filter((_, i) => i !== index));
  };

  const updateStream = (index: number, value: string) => {
    const newStreams = [...streams];
    newStreams[index] = value;
    setStreams(newStreams);
  };

  const getGridClass = () => {
    switch (layout) {
      case '1':
        return 'grid-cols-1';
      case '2':
        return 'grid-cols-1 md:grid-cols-2';
      case '4':
        return 'grid-cols-2';
      default:
        return 'grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-2">📺 Multi LOLPROS.GG</h1>
        <p className="text-gray-300 text-lg mb-8">Watch multiple streams simultaneously</p>

        {/* Controls */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <div className="space-y-4">
            {/* Layout Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Layout</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setLayout('1')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    layout === '1' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  1 Stream
                </button>
                <button
                  onClick={() => setLayout('2')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    layout === '2' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  2 Streams
                </button>
                <button
                  onClick={() => setLayout('4')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    layout === '4' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  4 Streams
                </button>
              </div>
            </div>

            {/* Stream URLs */}
            <div>
              <h3 className="text-white font-semibold mb-3">Twitch Channels</h3>
              <div className="space-y-3">
                {streams.map((stream, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={stream}
                      onChange={(e) => updateStream(index, e.target.value)}
                      placeholder={`Enter Twitch username (e.g., faker)`}
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {streams.length > 1 && (
                      <button
                        onClick={() => removeStream(index)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {streams.length < 4 && (
                  <button
                    onClick={addStream}
                    className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all"
                  >
                    + Add Stream
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stream Grid */}
        <div className={`grid ${getGridClass()} gap-4`}>
          {streams.map((stream, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 aspect-video">
              {stream ? (
                <iframe
                  src={`https://player.twitch.tv/?channel=${stream}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`}
                  height="100%"
                  width="100%"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <p className="text-lg">Stream {index + 1}</p>
                    <p className="text-sm">Enter a Twitch username above</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Popular Streamers */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Popular Pro Streamers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['Faker', 'Caps', 'Doublelift', 'Rekkles', 'TheShy', 'Doinb'].map((streamer) => (
              <button
                key={streamer}
                onClick={() => {
                  const emptyIndex = streams.findIndex(s => !s);
                  if (emptyIndex !== -1) {
                    updateStream(emptyIndex, streamer.toLowerCase());
                  }
                }}
                className="px-4 py-2 bg-slate-700 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all"
              >
                {streamer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
