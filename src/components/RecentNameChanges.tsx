import Link from 'next/link';
import { getMockNameChanges } from '@/lib/api';

interface NameChange {
  id: string;
  playerName: string;
  oldName: string;
  newName: string;
  date: string;
}

export default function RecentNameChanges() {
  // In production, this would fetch from lolpros API or database
  const nameChanges: NameChange[] = getMockNameChanges();

  return (
    <div className="bg-[#24283a] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-cyan-400">Latest summoner name changes</h2>
        <Link
          href="/name-changes"
          className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
        >
          View more
        </Link>
      </div>

      <div className="space-y-4">
        {nameChanges.map((change) => (
          <div
            key={change.id}
            className="flex items-start gap-3"
          >
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <img 
                src={`https://flagcdn.com/w20/${getCountryCode(change.playerName)}.png`}
                alt=""
                className="w-5 h-3.5 object-cover flex-shrink-0"
              />
              <Link
                href={`/player/${change.playerName.toLowerCase()}`}
                className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
              >
                {change.playerName}
              </Link>
            </div>
            <div className="flex flex-col items-end text-xs">
              <div className="text-gray-400 mb-0.5">{change.oldName}</div>
              <div className="text-white">{change.newName}</div>
            </div>
            <span className="text-gray-500 text-xs whitespace-nowrap ml-2">{change.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCountryCode(playerName: string): string {
  // Simple mapping based on player names
  const mapping: { [key: string]: string } = {
    'yuuki': 'pl',
    'Rodrick': 'tr',
    'Mirai': 'gb',
    'Nugi Nugens': 'pl',
    'Baro': 'pl',
    'Usan': 'fr',
    'Apollo': 'es',
    'Lazarus': 'es',
  };
  return mapping[playerName] || 'eu';
}
