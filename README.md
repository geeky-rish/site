# RIKA TECH

> Practical digital solutions that help businesses work smarter.

A high-performance modern web application built with **TanStack Start**, **React 19**, **TypeScript**, and **Tailwind CSS**, featuring a custom layered neo-brutalist design system.

---

## ⚡ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React framework with SSR)
- **Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + Layered CSS Architecture
- **UI Primitives**: [Radix UI](https://www.radix-ui.com) & Lucide Icons
- **State & Data Fetching**: TanStack Query (React Query)
- **Bundler & Tooling**: Vite, ESLint, Prettier, Vitest

---

## 🚀 Key Features

- **Blazing Fast Performance**: Full SSR and route pre-rendering powered by TanStack Start and Vite.
- **Neo-Brutalist Aesthetic**: Custom typography, high-contrast borders, solid shadows, and responsive motion.
- **Accessible & Modular Components**: Built with Radix UI primitives and Tailwind CSS.
- **Type-Safe Routing**: End-to-end type safety for routes, loaders, and search parameters.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have one of the following package managers installed:
- [Node.js](https://nodejs.org/) (v20 or higher) and `npm`
- or [Bun](https://bun.sh/) (v1.1+)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/geeky-rish/site.git
   cd site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal) to view the application.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with hot-module replacement |
| `npm run build` | Build the application for production |
| `npm run preview` | Locally preview production build |
| `npm run lint` | Run ESLint checks across codebase |
| `npm run format` | Format code using Prettier |
| `npm run test` | Run test suite with Vitest |

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── components/         # Reusable UI & section components
│   │   └── ui/             # Radix & primitive UI elements
│   ├── lib/                # Utility helpers & configuration
│   ├── routes/             # TanStack Start file-based routes
│   │   ├── __root.tsx      # Root document shell & providers
│   │   └── index.tsx       # Homepage route
│   ├── styles.css          # Base application styles
│   ├── site.css            # Foundation styles
│   ├── site-enhance.css    # Transitions & enhanced sections
│   └── site-brutal.css     # Active neo-brutalist theme layer
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 👤 Author & Ownership

- **Lead Developer & Owner**: Rishi ([@geeky-rish](https://github.com/geeky-rish))
- **Organization**: RIKA TECH
- **Contact**: [rika-tech@proton.me](mailto:rika-tech@proton.me)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
