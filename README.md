# Chedi Rachdi - Personal Portfolio

A beautiful, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases skills, experience, projects, and contact information with stunning gradient effects and animations.

## Features

- 🎨 Beautiful gradient effects and animations
- 📱 Fully responsive design for all devices
- 🌓 Light and dark mode support (postpone it for now. Will be pushed soon)
- ⚡ Fast performance with Next.js
- 🧩 Modular component structure
- 🔄 Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   │   ├── layout/    # Layout components (Header, Footer)
│   │   │   ├── sections/  # Page sections (Hero, About, etc.)
│   │   │   └── ui/        # Reusable UI components
│   │   └── styles/        # Global styles
│   └── tailwind.config.js # Tailwind configuration
└── package.json       # Project dependencies
```

## Customization

1. **Personal Information**: Update your personal information in the component files.
2. **Colors**: Modify the color scheme in `tailwind.js`.
3. **Content**: Edit the content in the section components to match your experience and projects.
4. **Images**: Replace placeholder images in the `public` directory with your own.

## Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/), the platform built by the creators of Next.js:

```bash
npm install -g vercel
vercel
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
