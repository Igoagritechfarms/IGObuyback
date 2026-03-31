# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Push your code to GitHub/GitLab/Bitbucket

## Environment Variables (Required for Vercel)

In your Vercel dashboard, go to your project settings and add these environment variables:

### Required Variables:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
```

### Optional Variables:
```
VITE_GEMINI_API_KEY=your-gemini-api-key-here
```

## Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd your-project-directory
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name
   - Configure build settings (should auto-detect from vercel.json)

### Method 2: Vercel Dashboard

1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings**:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Add Environment Variables**:
   - Add the required variables listed above

4. **Deploy**:
   - Click "Deploy"

## Troubleshooting

### Build Fails with Exit Code 126

This error means "Command invoked cannot execute". Common causes:

1. **Missing Node.js Version**: Add to `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install",
     "framework": null,
     "nodeVersion": "18.x"
   }
   ```

2. **Environment Variables**: Ensure all required env vars are set in Vercel dashboard

3. **Build Command Issues**: Try updating `package.json` scripts:
   ```json
   "scripts": {
     "build": "vite build --mode production"
   }
   ```

### Common Issues

1. **Large Bundle Size**: The warning about chunks > 500KB is normal for this app
2. **Environment Variables**: Make sure they're prefixed with `VITE_` for client-side access
3. **Node Version**: Vercel defaults to Node 18, which should work fine

## Post-Deployment

1. **Custom Domain**: Add your domain in Vercel dashboard
2. **Environment Variables**: Update for production values
3. **Analytics**: Enable Vercel Analytics if needed

## Support

If you continue having issues:
1. Check Vercel build logs in dashboard
2. Verify all environment variables are set
3. Ensure `vercel.json` is in your repository root