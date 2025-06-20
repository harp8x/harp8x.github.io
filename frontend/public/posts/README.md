# Blog Posts Directory

This directory contains all blog posts for Uddip Ranjan Das's personal website.

## How to Add New Posts

1. **Create a new markdown file** in this directory (e.g., `my-new-post.md`)

2. **Update the posts.json file** with your new post information:
   ```json
   {
     "id": 4,
     "title": "Your Post Title",
     "date": "2025-06-20",
     "tags": ["Tag1", "Tag2", "Tag3"],
     "category": "Your Category",
     "excerpt": "Brief description of your post...",
     "filename": "my-new-post.md"
   }
   ```

3. **Write your post in Markdown format** with the following structure:
   ```markdown
   # Your Post Title
   
   ## Introduction
   
   Your content here...
   
   ## Section Headers
   
   More content...
   
   ### Code Examples
   
   ```python
   # Your code here
   def example_function():
       return "Hello World"
   ```
   
   ## Conclusion
   
   Wrap up your thoughts...
   ```

## Supported Features

- **Markdown Formatting**: Full GitHub Flavored Markdown support
- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **Tags and Categories**: Organize posts by topic and category
- **Search**: Posts are searchable by title and content
- **Responsive Design**: Posts look great on all devices

## Categories

Current categories in use:
- Threat Intelligence
- Security Operations
- Research
- Tutorials
- Industry Analysis

## Tags

Popular tags:
- APT
- Malware
- SOC
- MITRE
- Threat Hunting
- Analysis
- Framework
- Implementation

## File Naming Convention

Use descriptive, hyphenated filenames:
- `advanced-apt-detection.md`
- `mitre-attack-implementation.md`
- `malware-analysis-deep-dive.md`

## Best Practices

1. **Clear Titles**: Make titles descriptive and SEO-friendly
2. **Good Excerpts**: Write compelling 1-2 sentence excerpts
3. **Relevant Tags**: Use 2-4 specific tags per post
4. **Proper Categories**: Choose the most appropriate category
5. **Code Examples**: Include practical examples when relevant
6. **Professional Tone**: Maintain expertise while being accessible

## Automatic Features

The website automatically:
- Renders markdown to HTML
- Applies syntax highlighting
- Generates post listings
- Enables search and filtering
- Creates responsive layouts
- Handles navigation between posts

## Future Enhancements

Planned features:
- RSS feed generation
- Social sharing buttons
- Related posts suggestions
- Comment system integration
- Analytics tracking