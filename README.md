# Personal Portfolio Website

A modern, responsive portfolio website template built with HTML, CSS, and JavaScript. Perfect for showcasing your work and professional experience.

## Features

- 📱 Fully Responsive Design
- 🎨 Modern and Clean Interface
- 🌟 Smooth Animations
- 📊 Skills Showcase
- 💼 Project Portfolio
- 📝 About Me Section
- 📱 Contact Information
- 🍔 Mobile-friendly Navigation

## Customization Guide

### 1. Basic Information

Edit the `index.html` file to update:
- Your name (replace "Your Name")
- Professional title in the hero section
- About Me section content
- Skills and expertise
- Project details
- Contact information

### 2. Styling

Customize the look and feel in `css/style.css`:
- Color scheme (modify CSS variables in `:root`)
- Fonts
- Spacing and layouts
- Animations

### 3. Images

1. Replace the following images in the `images` directory:
   - `hero-bg.jpg` (recommended size: 1920x1080px)
   - Project images in the portfolio section
   - Your profile picture (if used)

### 4. Projects

In the Projects section of `index.html`, add your projects following this structure:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-links">
            <a href="#" class="btn">View Project</a>
            <a href="#" class="btn">Source Code</a>
        </div>
    </div>
</div>
```

## Deployment on GitHub Pages

1. Create a new repository on GitHub
2. Initialize Git in your portfolio directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect to your GitHub repository:
   ```bash
   git remote add origin your-repository-url
   git branch -M main
   git push -u origin main
   ```
4. Go to your repository settings on GitHub
5. Scroll down to "GitHub Pages" section
6. Select the main branch as source
7. Your site will be published at `https://yourusername.github.io/repository-name`

## Local Development

1. Clone the repository
2. Open the project folder
3. Open `index.html` in your browser

For live reload during development, you can use extensions like "Live Server" in Visual Studio Code.

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Akram Adam 