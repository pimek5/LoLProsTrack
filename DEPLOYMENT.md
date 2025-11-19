# 🚀 GitHub Pages Deployment Instructions

Your project is now configured for GitHub Pages! Follow these steps to activate it:

## 📋 Steps to Enable GitHub Pages

### 1. Go to Repository Settings
Visit: https://github.com/pimek5/LoLProsTrack/settings/pages

### 2. Configure Source
- **Source**: Select `GitHub Actions`
- The workflow is already configured in `.github/workflows/deploy.yml`

### 3. Add Riot API Key (Optional)
If you want live data from Riot API:
1. Go to: https://github.com/pimek5/LoLProsTrack/settings/secrets/actions
2. Click "New repository secret"
3. Name: `RIOT_API_KEY`
4. Value: Your Riot API key
5. Click "Add secret"

### 4. Trigger Deployment
The deployment will start automatically when you:
- Push to `main` branch (already done! ✅)
- Or manually trigger via Actions tab

### 5. Wait for Deployment
1. Go to: https://github.com/pimek5/LoLProsTrack/actions
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait ~2-3 minutes for completion

### 6. Access Your Site
Once deployed, your site will be available at:
**https://pimek5.github.io/LoLProsTrack/**

## ✅ What's Already Configured

- ✅ Static export enabled
- ✅ GitHub Actions workflow created
- ✅ Image optimization configured
- ✅ Base path set to `/LoLProsTrack`
- ✅ .nojekyll file added
- ✅ All pages pre-rendered

## 🔄 Automatic Updates

Every time you push to `main` branch:
1. GitHub Actions builds the site
2. Deploys to GitHub Pages
3. Site updates automatically

## 🐛 Troubleshooting

### Site not showing after 5 minutes?
1. Check Actions tab for errors
2. Ensure Pages is set to "GitHub Actions" source
3. Check if workflow completed successfully

### 404 errors?
- Clear browser cache
- Wait a few more minutes
- Check deployment status in Actions

### Need to rebuild?
1. Go to Actions tab
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

## 📊 Current Status

Run this command to check deployment:
```bash
gh workflow view "Deploy to GitHub Pages"
```

Or visit:
https://github.com/pimek5/LoLProsTrack/actions

## 🎉 Next Steps

1. Enable GitHub Pages (see step 1 above)
2. Wait for deployment
3. Visit your live site!
4. Share the link: `https://pimek5.github.io/LoLProsTrack/`

---

**Note**: The site uses mock data by default. To enable live Riot API data, add the `RIOT_API_KEY` secret (step 3).
