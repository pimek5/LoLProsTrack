# LOLPROS.GG - Professional League of Legends Player Tracker

A complete reconstruction of lolpros.gg built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎮 Features

### Core Features
- **Live Game Search** - Find and watch live games from professional players
- **Multi Stream** - Watch multiple Twitch streams simultaneously  
- **Challengers Map** - View European Challenger player locations
- **Ladder History** - Track historical rankings and LP changes
- **Missing Challengers** - Help identify unrecognized high-rank players
- **Name Changes** - Track recent summoner name updates

### Pages
- **Home** - Dashboard with featured content and quick access
- **Players** - Browse all professional players with filtering
- **Teams** - View all professional teams and rosters
- **Search** - Search for players, teams, and summoner names
- **Player Profiles** - Detailed statistics and information
- **Team Profiles** - Team rosters, achievements, and stats
- **Region Pages** - Regional Challenger ladders

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
lolpros-gg/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── live-game/         # Live games page
│   │   ├── multi/             # Multi-stream viewer
│   │   ├── map/               # Challengers map
│   │   ├── ladder-history/    # Historical rankings
│   │   ├── missing-challengers/ # Unidentified players
│   │   ├── name-changes/      # Name change tracker
│   │   ├── players/           # Players list
│   │   ├── teams/             # Teams list
│   │   ├── player/[name]/     # Dynamic player profiles
│   │   ├── team/[team]/       # Dynamic team profiles
│   │   ├── region/[region]/   # Regional ladders
│   │   └── search/            # Search results
│   └── components/            # Reusable components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── SearchBar.tsx
│       ├── LiveGameSearch.tsx
│       ├── TopPlayers.tsx
│       └── RecentNameChanges.tsx
├── public/                    # Static assets
└── .github/                   # GitHub configuration
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Package Manager:** npm

## 🎨 Key Components

### Navbar
Responsive navigation with mobile menu support

### SearchBar
Global search for players, teams, and summoner names

### LiveGameSearch
Real-time display of ongoing professional player games with filtering

### TopPlayers
Ranking display of top Challenger players

### RecentNameChanges
Tracker for recent summoner name updates

## 📄 Pages

- `/` - Home page with dashboard
- `/live-game` - Live games with filters
- `/multi` - Multi-stream Twitch viewer
- `/map` - European Challengers map
- `/ladder-history` - Historical ladder tracking
- `/missing-challengers` - Unidentified high-rank players
- `/name-changes` - Name change history
- `/players` - All players with search/filter
- `/teams` - All teams with search/filter
- `/player/[name]` - Individual player profile
- `/team/[team]` - Individual team profile
- `/region/[region]` - Regional Challenger ladder
- `/search` - Search results page

## 🔮 Future Enhancements

- Integration with Riot Games API for real data
- Live match spectating functionality
- Interactive maps with Leaflet/Google Maps
- Chart.js integration for statistics visualization
- Real-time updates with WebSockets
- User accounts and favorites
- Mobile app version
- More regions and leagues

## 📝 Development

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 🤝 Contributing

This is a reconstruction project. For the original site, visit [lolpros.gg](https://lolpros.gg)

## ⚠️ Disclaimer

This project is not endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

## 📄 License

This is a demonstration project for educational purposes.
