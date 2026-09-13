# Game Hub

A responsive video game discovery web app built with React, TypeScript, and Chakra UI. Browse thousands of games, filter by genre and platform, sort by relevance/rating/release date, and dive into a detail page with screenshots and trailers. Powered by the [RAWG Video Games Database API](https://rawg.io/apidocs).

## Features

- Browse games with infinite scroll
- Filter by genre and platform
- Sort by relevance, date added, name, release date, popularity, or average rating
- Search games by title
- Game detail page with description, screenshots, and trailer
- Light / dark color mode toggle
- Fully responsive layout
- Skeleton loaders while data is fetching

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** – build tool and dev server
- **Chakra UI v3** – component library and theming
- **React Router v6** – routing
- **TanStack Query (React Query) v4** – server state, caching, and infinite queries
- **Zustand** – lightweight global state for query filters
- **Axios** – HTTP client
- **React Icons** – iconography
- **React Infinite Scroll Component** – infinite scrolling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- A free [RAWG API key](https://rawg.io/apidocs)

### Installation

```bash
git clone https://github.com/<your-username>/game-hub.git
cd game-hub
npm install
```

### Configure your API key

Open [src/services/api-client.ts](src/services/api-client.ts) and replace the `key` value with your own RAWG API key:

```ts
const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'YOUR_RAWG_API_KEY',
  },
});
```

### Run the dev server

```bash
npm run dev
```

Then open the URL printed in the terminal (default: `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/             Static assets
├── components/         Reusable UI components
│   └── ui/             Chakra UI provider, theme, and helpers
├── data/               Static fallback data (genres, platforms)
├── entities/           TypeScript interfaces (Game, Genre, Platform, ...)
├── hooks/              Custom React Query hooks
├── pages/              Route-level pages (Home, GameDetail, Layout, Error)
├── services/           API client and router configuration
├── store.ts            Zustand store for game query state
├── main.tsx            App entry point
└── index.css           Global styles
```

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |

## Credits

Game data provided by [RAWG](https://rawg.io/). This project was built as part of a front-end development learning exercise, following Mosh Hamedani's _Mastering React_ course.

## License

This project is for learning purposes and is not intended for commercial use.
