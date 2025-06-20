# GitHub Pages Deployment Guide

This guide will help you deploy your personal website to GitHub Pages.

## 🚀 Option 1: GitHub Actions (Recommended)

### Step 1: Create GitHub Actions Workflow

1. Create the directory structure in your repository:
   ```bash
   mkdir -p .github/workflows
   ```

2. Create the file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'yarn'
        cache-dependency-path: frontend/yarn.lock
    
    - name: Install dependencies
      run: |
        cd frontend
        yarn install --frozen-lockfile
    
    - name: Build
      run: |
        cd frontend
        yarn build
        
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './frontend/build'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 3: Deploy

1. Commit and push your code:
   ```bash
   git add .
   git commit -m "Add personal website with blog functionality"
   git push origin main
   ```

2. The GitHub Action will automatically run and deploy your site
3. Your website will be available at: `https://yourusername.github.io/your-repo-name`

## 🚀 Option 2: Manual Deployment with gh-pages

### Step 1: Install gh-pages

```bash
# From the frontend directory
cd frontend
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to your `frontend/package.json`:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 3: Deploy

```bash
cd frontend
yarn deploy
```

## 🚀 Option 3: Direct Build Upload

### Step 1: Build the project

```bash
cd frontend
yarn build
```

### Step 2: Upload build folder

1. Create a new branch called `gh-pages`
2. Upload the contents of the `build` folder to the root of this branch
3. Enable GitHub Pages to use the `gh-pages` branch

## 🔧 Configuration

### Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the `frontend/public/` directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider to point to GitHub Pages

### Environment Variables

For GitHub Pages deployment, you may need to set:

```bash
# In frontend/.env (for local development)
PUBLIC_URL=/your-repo-name
```

## 🛠️ Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository name matches the homepage URL
2. **CSS/JS Not Loading**: Ensure `PUBLIC_URL` is set correctly
3. **Build Fails**: Check that all dependencies are installed correctly

### Debug Build Issues

```bash
cd frontend
yarn build
# Check the build folder contents
ls -la build/
```

### Check Deployment Status

1. Go to your repository on GitHub
2. Click on **Actions** tab to see deployment status
3. Click on the latest workflow run to see logs

## 📋 Pre-Deployment Checklist

- [ ] All personal information updated in `cvData` object
- [ ] Contact links (email, LinkedIn, GitHub, Twitter) are correct
- [ ] Blog posts are added and `posts.json` is updated
- [ ] Website tested locally with `yarn start`
- [ ] Build succeeds with `yarn build`
- [ ] Repository name matches homepage URL
- [ ] GitHub Pages is enabled in repository settings

## 🎯 Next Steps After Deployment

1. **Update Contact Information**: Replace placeholder links with your actual profiles
2. **Add Real Blog Posts**: Replace sample posts with your own content
3. **SEO Optimization**: Add meta tags and proper descriptions
4. **Analytics**: Consider adding Google Analytics
5. **Social Sharing**: Add Open Graph tags for better social media sharing

## ✅ Verification

After deployment, verify:
- [ ] Site loads correctly at GitHub Pages URL
- [ ] All navigation links work
- [ ] Blog search and filtering work
- [ ] Individual blog posts open correctly
- [ ] Responsive design works on mobile
- [ ] Contact links open correctly

---

Your professional cybersecurity website is now ready to showcase your expertise to the world! 🌟