# 💼 Rohit Shah - Professional Portfolio

<div align="center">

[![Live Site](https://img.shields.io/badge/Live-rohitshah.me-blue?style=for-the-badge)](https://www.rohitshah.me)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38b2ac?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, responsive, and interactive personal portfolio website showcasing professional work, skills, and projects.

[View Live](https://www.rohitshah.me) • [Report Bug](https://github.com/username/issues) • [Request Feature](https://github.com/username/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Contact Form Setup](#contact-form-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

A fully responsive professional portfolio website built with modern web technologies. This project demonstrates expertise in **MERN Stack development**, clean code practices, and UI/UX design. The portfolio serves as a digital resume and project showcase platform.

**Profile:**
- 3rd-year BCA student at Maharaja Surajmal Institute (GGSIPU)
- B.Com graduate from Swami Vivekanand Subharti University (CGPA: 8.4)
- Passionate MERN Stack Developer focused on building responsive, modern web applications

---

## ✨ Features

- ✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- ✅ **Smooth Animations** - AOS (Animate On Scroll) library for elegant transitions
- ✅ **Contact Form** - Integrated with EmailJS for direct email communication
- ✅ **Modern UI/UX** - Clean, professional design with Tailwind CSS
- ✅ **Fast Performance** - Optimized with lazy loading and code splitting
- ✅ **SEO Friendly** - Proper meta tags and structured content
- ✅ **Dark Mode Ready** - Built with accessibility in mind
- ✅ **Type Animations** - Dynamic text animations for engaging experience

---

## ⚡ Tech Stack

### Frontend
- **React.js** 18.2.0 - UI Library
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework
- **DaisyUI** 4.9.0 - Component library for Tailwind
- **React Router DOM** 7.13.2 - Client-side routing
- **AOS** 2.3.4 - Animate On Scroll library
- **React Type Animation** 3.2.0 - Text animation library
- **React Icons** 5.6.0 - Icon library
- **React Scroll** 1.9.0 - Smooth scrolling
- **Headless UI** 1.7.18 - Unstyled accessible components
- **Heroicons** 2.1.3 - Beautiful SVG icons

### Backend Integration
- **EmailJS** 4.4.1 - Email service for contact form
- **Vercel Analytics** 2.0.1 - Website analytics

### Tools & Services
- **Git** - Version control
- **GitHub** - Repository hosting
- **Vercel** - Deployment platform
- **VS Code** - Code editor

---

## 🚀 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/portfolio.git
   cd Rohit-Shah-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables** (if needed for EmailJS)
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your EmailJS credentials.

4. **Start development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

---

## 💻 Usage

### Development Mode
```bash
npm start
```
Runs the app in development mode with hot reload enabled.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── About.js        # About section
│   ├── Contact.js      # Contact form with EmailJS
│   ├── Footer.js       # Footer section
│   ├── Hero.js         # Hero/Landing section
│   ├── Projects.js     # Projects showcase
│   └── Skills.js       # Skills section
├── Assets/
│   └── Images/         # Project images and media
├── App.js              # Main application component
├── index.js            # Application entry point
├── index.css           # Global styles
└── App.test.js         # Component tests

public/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
└── robots.txt          # SEO robots file

build/                  # Production build output
```

---

## 🧩 Components

### Hero Component
Landing section with welcome message and call-to-action buttons.

### About Component
Personal background, education, and professional summary.

### Skills Component
Displays technical skills organized by category.

### Projects Component
Showcases completed projects with descriptions and links.

### Contact Component
Contact form integrated with EmailJS for direct messaging.

### Footer Component
Social links and copyright information.

---

## 📧 Contact Form Setup

This portfolio uses **EmailJS** for contact form functionality.

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create an email service and template
3. Add your EmailJS credentials to the Contact component:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings (default: `npm run build`)
   - Deploy

3. **Custom Domain**
   - Add your domain in Vercel project settings
   - Update DNS records according to Vercel instructions

### Other Deployment Options
- **Netlify** - Connect GitHub repo and auto-deploy on push
- **GitHub Pages** - Use `gh-pages` package for static hosting
- **Traditional Hosting** - Upload `build/` folder to any web server

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Get in Touch

Feel free to reach out for collaboration, feedback, or opportunities!

- **Portfolio:** [rohitshah.me](https://www.rohitshah.me)
- **Email:** [Contact Form](https://www.rohitshah.me#contact)
- **GitHub:** [@username](https://github.com/username)

---

## 🙏 Acknowledgments

- React.js and community
- Tailwind CSS for styling
- AOS library for animations
- EmailJS for contact form service
- Vercel for hosting and deployment

---

<div align="center">

Made with ❤️ by Rohit Shah

![Stars Badge](https://img.shields.io/github/stars/username/portfolio?style=social)
![Forks Badge](https://img.shields.io/github/forks/username/portfolio?style=social)

</div>


