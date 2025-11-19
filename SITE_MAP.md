# LOLPROS.GG - Complete Site Map

## 🏠 Main Pages

### Home
- **Route:** `/`
- **Description:** Dashboard with all features, live games, top players, name changes
- **Components:** SearchBar, LiveGameSearch, TopPlayers, RecentNameChanges

---

## 🎮 Feature Pages

### Live Game Search
- **Route:** `/live-game`
- **Description:** Find live games from professional players
- **Filters:** Region (12 options), Role (5 positions)
- **Features:** Live game list, spectate links, duration tracking

### Multi Stream
- **Route:** `/multi`
- **Description:** Watch multiple Twitch streams simultaneously
- **Features:** 1/2/4 stream layouts, add/remove streams, popular streamer shortcuts
- **Integration:** Twitch embedded player

### Challengers Map
- **Route:** `/map`
- **Description:** European Challenger player locations
- **Features:** Player list, location display, player selection
- **Future:** Interactive map integration (Leaflet/Google Maps)

### Ladder History
- **Route:** `/ladder-history`
- **Description:** Track historical rankings and LP changes
- **Filters:** Region, Timeframe (7d/30d/90d)
- **Features:** Rank tracking, LP history, win rate stats, change indicators

### Missing Challengers
- **Route:** `/missing-challengers`
- **Description:** Unidentified high-rank players
- **Filter:** Region
- **Features:** Player cards, report identity, statistics display

### Name Changes
- **Route:** `/name-changes`
- **Description:** Recent summoner name updates
- **Features:** Old→New name display, verification badges, date tracking
- **Stats:** Total changes, today, this week

---

## 👥 Directory Pages

### Players
- **Route:** `/players`
- **Description:** Browse all professional players
- **Filters:** Role, Region, Search
- **Display:** Player cards with stats, LP, win rate

### Teams
- **Route:** `/teams`
- **Description:** Browse all professional teams
- **Filters:** Region, Search
- **Display:** Team cards with rosters, league, average rank

### Search
- **Route:** `/search?q=[query]`
- **Description:** Global search results
- **Results:** Players and teams matching query

---

## 📄 Dynamic Routes

### Player Profile
- **Route:** `/player/[name]`
- **Examples:** `/player/faker`, `/player/caps`
- **Content:**
  - Player name and real name
  - Team, role, nationality, age
  - Challenger rank and LP
  - Total stats (games, wins, losses, win rate)
  - Top 3 champions with stats
  - Social media links (Twitch, Twitter, Instagram)
  - Recent matches placeholder

### Team Profile
- **Route:** `/team/[team]`
- **Examples:** `/team/t1`, `/team/g2-esports`
- **Content:**
  - Team name and information
  - League, region, founded year
  - Full roster (5 players with roles)
  - Team achievements
  - Official website link
  - Team statistics placeholder

### Region Page
- **Route:** `/region/[region]`
- **Examples:** `/region/euw`, `/region/na`, `/region/kr`, `/region/cn`
- **Content:**
  - Region name and server info
  - Total challengers stats
  - Top 10 Challenger ladder
  - Player cards with rank, LP, win rate
  - Link to view all players

---

## 🌍 Supported Regions

1. **EUW** - Europe West
2. **NA** - North America
3. **KR** - Korea
4. **CN** - China
5. **EUNE** - Europe Nordic & East
6. **BR** - Brazil
7. **LAN** - Latin America North
8. **LAS** - Latin America South
9. **OCE** - Oceania
10. **RU** - Russia
11. **TR** - Turkey
12. **JP** - Japan

---

## 🎯 Quick Navigation

### From Home Page:
- Click any feature card → Feature page
- Click region button → Region page
- Use search bar → Search results
- Click player name → Player profile
- Click team name → Team profile

### From Navbar:
- Live Games → `/live-game`
- Multi Stream → `/multi`
- Map → `/map`
- Ladder History → `/ladder-history`
- Teams → `/teams`
- Players → `/players`

### From Footer:
- Quick Links section
- Region links (EUW, NA, KR, CN)
- Social media placeholders

---

## 📊 Component Usage

### Reusable Components
- **Navbar:** Every page
- **Footer:** Every page
- **SearchBar:** Home page
- **LiveGameSearch:** Home page
- **TopPlayers:** Home page
- **RecentNameChanges:** Home page

---

## 🔗 Internal Linking

### Cross-References
- Player profiles → Team profiles
- Team profiles → Player profiles
- Search results → Player/Team profiles
- Region pages → Player profiles
- Home → All feature pages
- Players list → Individual players
- Teams list → Individual teams

---

## 📱 Mobile Navigation

All pages include:
- Responsive design (mobile, tablet, desktop)
- Mobile menu in Navbar
- Touch-friendly buttons
- Optimized layouts for small screens

---

## 🚀 Static Generation

### Pre-rendered Routes (SSG):
- `/` (Home)
- `/live-game`
- `/multi`
- `/map`
- `/ladder-history`
- `/missing-challengers`
- `/name-changes`
- `/players`
- `/teams`
- `/search`
- `/player/faker`
- `/player/caps`
- `/team/t1`
- `/team/g2-esports`
- `/region/euw`
- `/region/na`
- `/region/kr`
- `/region/cn`

**Total:** 21 static pages pre-built at build time

---

## 🎨 Design System

### Color Scheme
- **Background:** Gradient slate-900 → blue-900 → slate-900
- **Cards:** slate-800 with slate-700 borders
- **Primary:** blue-600 (buttons, links)
- **Accent:** yellow-400 (ranks), green-400 (wins), red-400 (losses)
- **Text:** white (primary), gray-300/400 (secondary)

### Typography
- **Font:** Inter (Google Fonts via next/font)
- **Headings:** Bold, large (text-5xl for h1)
- **Body:** Regular, gray-300
- **Labels:** Semibold, smaller

---

## ✅ Complete Feature List

1. ✅ Live game tracking
2. ✅ Multi-stream viewer
3. ✅ Challengers map
4. ✅ Ladder history
5. ✅ Missing players
6. ✅ Name changes
7. ✅ Player directory
8. ✅ Team directory
9. ✅ Global search
10. ✅ Player profiles
11. ✅ Team profiles
12. ✅ Regional ladders
13. ✅ Top 10 rankings
14. ✅ Statistics display
15. ✅ Social media links
16. ✅ Responsive design
17. ✅ Dark theme
18. ✅ Fast loading

---

**All Routes Accessible at:** http://localhost:3000  
**Total Pages:** 15+ (with dynamic routes)  
**Build Status:** ✅ Success
