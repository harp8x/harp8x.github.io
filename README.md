# Uddip Ranjan Das - Personal Website

A professional personal website showcasing cybersecurity expertise, built with React and designed for GitHub Pages deployment.

## 🚀 Features

### Professional Portfolio
- **Modern Dark Theme**: Tech-focused design with cyan accents
- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional Sections**: Hero, About, Experience, Skills, Contact
- **Interactive Elements**: Smooth scrolling, hover effects, animations

### Dynamic Blog System
- **Markdown Support**: Write blog posts in GitHub Flavored Markdown
- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **Search Functionality**: Find posts by title and content
- **Filtering System**: Filter by categories and tags
- **Automatic Detection**: Add new posts by simply updating posts.json

### Technical Excellence
- **Static Site Generation**: Perfect for GitHub Pages deployment
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Optimized assets and lazy loading
- **Accessibility**: WCAG compliant design and navigation

## 🛠️ Technology Stack

- **Frontend**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **Markdown**: react-markdown with remark-gfm
- **Syntax Highlighting**: react-syntax-highlighter
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📁 Project Structure

```
/
├── frontend/
│   ├── public/
│   │   ├── posts/               # Blog posts directory
│   │   │   ├── posts.json      # Posts index file
│   │   │   ├── *.md            # Individual blog posts
│   │   │   └── README.md       # Blog management guide
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── App.js              # Main React component
│   │   ├── App.css             # Styles and animations
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   ├── package.json
│   └── tailwind.config.js
├── backend/                     # Optional backend (not needed for static site)
└── README.md
```

## 🚀 Quick Start

### Development Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Adding Blog Posts

1. **Create a new markdown file** in `frontend/public/posts/`
   ```bash
   touch frontend/public/posts/my-new-post.md
   ```

2. **Update posts.json** with your post metadata:
   ```json
   {
     "id": 4,
     "title": "Your Post Title",
     "date": "2025-06-20",
     "tags": ["Cybersecurity", "Analysis"],
     "category": "Research",
     "excerpt": "Brief description of your post...",
     "filename": "my-new-post.md"
   }
   ```

3. **Write your post** using standard Markdown:
   ```markdown
   # Your Post Title
   
   ## Introduction
   
   Your content here...
   
   ```python
   # Code examples with syntax highlighting
   def example():
       return "Hello World"
   ```
   
   ## Conclusion
   
   Wrap up your thoughts...
   ```

## 🌐 GitHub Pages Deployment

### Method 1: GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'yarn'
       
       - name: Install dependencies
         run: |
           cd frontend
           yarn install
       
       - name: Build
         run: |
           cd frontend
           yarn build
       
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./frontend/build
   ```

2. **Enable GitHub Pages**:
   - Go to Repository Settings
   - Scroll to Pages section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save settings

### Method 2: Manual Deployment

1. **Build the project**
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   # Install gh-pages globally
   npm install -g gh-pages
   
   # Deploy from frontend directory
   gh-pages -d build
   ```

## 🎨 Customization

### Personal Information

Update the `cvData` object in `frontend/src/App.js`:

```javascript
const cvData = {
  personal: {
    name: "Your Name",
    location: "Your Location",
    phone: "Your Phone",
    email: "your@email.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    // ... other fields
  },
  // ... rest of your data
};
```

### Theme Colors

Modify colors in `frontend/tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',    // Change primary color
        secondary: '#0891b2',  // Change secondary color
        // ... add custom colors
      }
    }
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Commands

```bash
# From frontend directory
yarn start          # Start development server
yarn build          # Build for production
yarn test           # Run tests

# Deploy to GitHub Pages (if gh-pages is configured)
yarn deploy
```

## 🎯 Blog Categories and Tags

Current categories:
- Threat Intelligence
- Security Operations
- Research
- Tutorials
- Industry Analysis

Popular tags:
- APT, Malware, SOC, MITRE, Threat Hunting, Analysis, Framework, Implementation

## 🛠️ Current Implementation

### Completed Features ✅
- **Professional CV Website**: Complete with Hero, About, Experience, Skills, Contact sections
- **Dark Tech Theme**: Cybersecurity-focused design with cyan accents
- **Blog System**: Markdown support with search, filtering, and syntax highlighting
- **Sample Content**: Three comprehensive cybersecurity blog posts included
- **Responsive Design**: Works perfectly on all screen sizes
- **GitHub Pages Ready**: Configured for easy deployment

### Sample Blog Posts Included
1. **Advanced APT Detection Techniques**: Comprehensive guide to threat hunting
2. **MITRE ATT&CK Framework Implementation**: Practical implementation guide
3. **Malware Analysis Deep Dive**: Static and dynamic analysis techniques

## 🚀 Live Demo

The website includes:
- Professional cybersecurity portfolio
- Interactive blog with search and filtering
- Responsive design across all devices
- Sample blog posts demonstrating expertise
- Contact information with proper links

## 📞 Contact Information

Update the contact details in the `cvData` object to match your actual information:
- Email: Your professional email
- Phone: Your contact number
- LinkedIn: Your LinkedIn profile URL
- GitHub: Your GitHub profile URL
- Twitter: Your Twitter/X profile URL

## 🎨 Screenshots

The website features:
- **Hero Section**: Professional introduction with social links
- **About Section**: Career summary with key statistics
- **Experience Section**: Detailed work history
- **Skills Section**: Technical capabilities and certifications
- **Blog Section**: Searchable blog posts with filtering
- **Contact Section**: Professional contact information

---

**Built with ❤️ for Cybersecurity Excellence** | Ready to deploy to GitHub Pages!