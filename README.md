# 🎮 LOLPros.gg Clone - League of Legends Pro Player Tracker

A modern, full-featured clone of [lolpros.gg](https://lolpros.gg) built with Next.js 16, TypeScript, and Tailwind CSS. Track professional League of Legends players, view live games, check Challenger ladders, and monitor summoner name changes.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![Riot API](https://img.shields.io/badge/Riot_API-Integrated-d32f2f?style=flat-square)

## ✨ Features

### 🏠 Homepage
- **Quick Access Links** - Fast navigation to all major features
- **Top 10 Players** - Real-time Challenger ladder (EUW) from Riot API
- **Recent Name Changes** - Track summoner name updates
- **Regional Quick Links** - Access all 12 regions instantly

### 🎯 Core Features
- **Live Game Search** - Find live games of professional players
- **Multi Stream Viewer** - Watch multiple Twitch streams (1/2/4 layouts)
- **Challengers Map** - European Challenger players location map
- **Ladder History** - Historical ranking tracker
- **Missing Challengers** - Unidentified high-rank players
- **Name Changes** - Complete summoner name change history
- **Player Profiles** - Stats, champions, social links
- **Team Profiles** - Rosters, achievements, team info
- **Regional Ladders** - Top players by region

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/pimek5/LoLProsTrack.git
cd LoLProsTrack

# Install dependencies
npm install

# Add your Riot API key to .env.local
echo "NEXT_PUBLIC_RIOT_API_KEY=your_key_here" > .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔑 Get Riot API Key

1. Visit [developer.riotgames.com](https://developer.riotgames.com/)
2. Sign in with Riot account
3. Create application & copy API key
4. Add to `.env.local`

## 📁 Project Structure

```
src/
├── app/              # Next.js pages
├── components/       # React components
└── lib/api.ts       # Riot API integration

public/icons/        # SVG role & rank icons
```

## 🌍 Supported Regions

EUW • NA • KR • CN • EUNE • BR • LAN • LAS • OCE • RU • TR • JP

## 🎨 Design Features

- Authentic lolpros.gg styling
- Dark theme (#0a0e27)
- SVG role icons
- Challenger badges
- Fully responsive

## 📊 API Integration

✅ Real-time Challenger ladder  
✅ Live game tracking  
✅ Summoner search  
✅ Champion data  
✅ Mock data fallback  

See [API_SETUP.md](./API_SETUP.md) for details.

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint check
```

## 📄 License

Educational purposes only. League of Legends © Riot Games, Inc.

---

Built with ❤️ using Next.js 16 & Riot Games API
