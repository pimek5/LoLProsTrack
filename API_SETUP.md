# API Configuration

This project supports integration with Riot Games API for live League of Legends data.

## Setup Riot API Key

1. Go to [Riot Games Developer Portal](https://developer.riotgames.com/)
2. Sign in with your Riot account
3. Create a new application
4. Copy your API key

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_RIOT_API_KEY=your_riot_api_key_here
```

## Available API Functions

The API utilities are located in `src/lib/api.ts`:

### Riot API Functions (requires API key)

- `fetchSummonerByName(region, summonerName)` - Get summoner data
- `fetchChallengerLadder(region)` - Get Challenger ladder for a region
- `fetchCurrentGame(region, summonerId)` - Get live game data
- `fetchChampionData()` - Get champion data (no key required)

### Mock Data Functions (for development)

- `getMockTopPlayers()` - Returns top 10 players with realistic data from lolpros.gg
- `getMockNameChanges()` - Returns recent name changes

## Region Codes

```typescript
EUW: 'euw1'
NA: 'na1'
KR: 'kr'
EUNE: 'eun1'
BR: 'br1'
LAN: 'la1'
LAS: 'la2'
OCE: 'oc1'
RU: 'ru'
TR: 'tr1'
JP: 'jp1'
```

## Rate Limits

**Development API Key:**
- 20 requests per second
- 100 requests every 2 minutes

**Production API Key:**
- Contact Riot Games for higher limits

## Alternative: LOLPros.GG API

LOLPros.gg doesn't provide a public API, but you can:

1. **Web Scraping** - Parse their HTML (respect robots.txt)
2. **Community APIs** - Use third-party services like:
   - [OP.GG API](https://op.gg/)
   - [U.GG API](https://u.gg/)
   - [Leagueofgraphs.com](https://www.leagueofgraphs.com/)

## Implementation Status

- ✅ Mock data from real lolpros.gg players
- ✅ API utility functions for Riot Games API
- ⏳ Live data integration (requires API key)
- ⏳ Real-time game tracking
- ⏳ Name change history tracking

## Next Steps

1. Add Riot API key to `.env.local`
2. Update components to use `fetchChallengerLadder()` instead of mock data
3. Implement caching strategy (Redis/Vercel KV)
4. Add error handling and loading states
5. Set up scheduled data updates
