# Modern Portfolio Website

A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS. This portfolio showcases my work as a developer with beautiful animations and interactive 3D elements.

## 🚀 Features

- Modern and responsive design
- Interactive 3D background using Three.js
- Smooth animations with Framer Motion
- Beautiful UI with Tailwind CSS
- Responsive navigation
- Project showcase
- Contact form
- Skills section with animated progress bars
- Custom scrollbar and global styles

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Build Tool:** Vite

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images and other assets
│   │   │   └── Navbar.jsx   # Navigation component
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx     # Home page with 3D scene
│   │   │   ├── About.jsx    # About page
│   │   │   ├── Projects.jsx # Projects showcase
│   │   │   └── Contact.jsx  # Contact form
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/FIROZKHAN086/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

- Update your personal information in the respective components
- Modify the color scheme in `tailwind.config.js`
- Add your own projects to the Projects page
- Customize the 3D scene in `Home.jsx`
- Update the contact information in `Contact.jsx`

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices

## 🎯 Features in Detail

### Home Page
- Interactive 3D background with floating geometries
- Animated text and buttons
- Smooth scroll navigation
- Social media links

### About Page
- Skills section with animated progress bars
- Experience timeline
- Personal information
- Statistics

### Projects Page
- Grid layout for projects
- Project cards with hover effects
- Technology tags
- Links to live demos and GitHub repositories

### Contact Page
- Contact form with validation
- Social media links
- Location information
- Email and phone details

## 🔧 Dependencies

```json
{
  "dependencies": {
    "@react-three/drei": "^9.0.0",
    "@react-three/fiber": "^8.0.0",
    "framer-motion": "^12.6.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.5.0",
    "react-scroll": "^1.9.3",
    "tailwindcss": "^4.1.3"
  }
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Firoz Khan**
- GitHub: [@FIROZKHAN086](https://github.com/FIROZKHAN086)

## 🙏 Acknowledgments

- Three.js community for amazing 3D graphics
- Framer Motion for smooth animations
- Tailwind CSS for beautiful styling
- React community for awesome components
