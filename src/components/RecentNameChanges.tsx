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
    <div className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700/50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Latest summoner name changes</h2>
        <Link
          href="/name-changes"
          className="text-blue-400 hover:text-blue-300 text-sm font-medium hover:underline"
        >
          View more
        </Link>
      </div>

      <div className="space-y-3">
        {nameChanges.map((change) => (
          <div
            key={change.id}
            className="flex items-start gap-3 py-2 border-b border-slate-700/50 last:border-0"
          >
            <Link
              href={`/player/${change.playerName.toLowerCase()}`}
              className="text-blue-400 hover:text-blue-300 font-medium hover:underline"
            >
              {change.playerName}
            </Link>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-400 truncate">
                {change.oldName}
              </div>
              <div className="text-sm text-white truncate">
                {change.newName}
              </div>
            </div>
            <span className="text-gray-500 text-sm whitespace-nowrap">{change.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
