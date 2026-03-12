# Dev-Workspace

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional personal portfolio and workspace built with Next.js, featuring advanced AI integration and comprehensive bilingual support.

## Core Technologies

- **Frontend**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS 4, Lucide React
- **Animations**: Framer Motion
- **AI Integration**: AI SDK (Google/Groq)
- **Content**: MDX, Content Collections
- **State Management**: React Hooks, Context API

## Key Features

- **Bilingual Support**: Full internationalization for English and Indonesian across all pages and content.
- **AI Assistant**: Built-in chatbot powered by modern LLMs to answer questions about the portfolio.
- **Dynamic Projects**: Detailed project pages with tech stack filtering and rich MDX descriptions.
- **Interactive UI**: Premium design with a smart docking navbar that responds to scroll behavior.
- **Optimized Performance**: High-speed loading using Next.js Image optimization and build-time static generation.
- **Responsive Design**: Fully adaptable layout for mobile, tablet, and desktop devices.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components and section layouts.
- `src/data`: Centralized portfolio data and localized content.
- `content`: MDX files for blog posts and detailed articles.
- `public`: Static assets including images and icons.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arfazrll/Dev-Workspace.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file with the following keys:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
   GROQ_API_KEY=your_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Build and Deployment

Generate a production build:
```bash
npm run build
```

This project is optimized for deployment on the Vercel platform.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.