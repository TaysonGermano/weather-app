# Weather App

A modern, real-time weather application built with Next.js 16, React 19, and TypeScript. Get current weather conditions and a weekly forecast based on your location.

![Weather App](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat&logo=tailwindcss)

## Features

- 🌍 **Geolocation-based Weather**: Automatically detects and displays weather for your current location
- 🌡️ **Current Weather**: Real-time temperature, wind speed, and humidity information
- 📅 **Weekly Forecast**: 6-day weather outlook with min/max temperatures
- 🔄 **Refresh Functionality**: Update weather data on demand
- 🎨 **Animated Weather Icons**: Custom SVG icons for various weather conditions (sunny, rainy, snowy, cloudy, thunder, etc.)
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast & Optimized**: Built with Next.js 16 for optimal performance
- 💾 **State Persistence**: Location data cached using Zustand with localStorage
- 🎯 **Type-safe**: Full TypeScript support for enhanced developer experience

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **State Management**: Zustand with persist middleware
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Icons**: Lucide React + Custom SVG weather icons

### Testing
- **Unit Testing**: Jest with React Testing Library
- **E2E Testing**: Playwright (Chromium, Firefox, WebKit)
- **Test Coverage**: Components, hooks, and user flows

### Development Tools
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions workflow

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager
- OpenWeather API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TaysonGermano/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_OPEN_WEATHER_API_KEY=your_api_key_here
```

To get an API key, sign up at [OpenWeather API](https://openweathermap.org/api).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest unit tests |
| `npm run playwright` | Run Playwright E2E tests |

## Project Structure

```
weather-app/
├── e2e/                        # E2E tests with Playwright
│   └── weather-app.spec.ts
├── public/
│   └── images/                 # Weather SVG icons
├── src/
│   ├── app/
│   │   ├── _ui/               # Page-specific components
│   │   │   ├── Skeleton.tsx
│   │   │   └── WeatherDetails.tsx
│   │   ├── error.tsx          # Error boundary
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   └── PageContainer/
│   │   └── ui/                # Reusable UI components
│   │       ├── Card/
│   │       ├── CurrentWeather/
│   │       ├── DayWeatherInfoCard/
│   │       ├── RefreshBtn/
│   │       └── WindAndHumidity/
│   ├── hooks/
│   │   └── useGetCurrentWeather.ts  # Weather data hook
│   ├── services/
│   │   └── httpClient.ts      # Axios instance
│   ├── store/
│   │   ├── index.ts           # Zustand store
│   │   └── types.ts
│   ├── tanstack-query/
│   │   └── QueryProvider.tsx  # React Query setup
│   └── utils/
│       ├── constants.tsx       # Mock weekly data
│       ├── helpers.ts          # Utility functions
│       └── types.tsx           # TypeScript types
├── .github/
│   └── workflows/
│       └── tests.yml          # CI/CD pipeline
├── jest.config.ts             # Jest configuration
├── playwright.config.ts       # Playwright configuration
└── package.json
```

## API Integration

The app uses the [OpenWeather Current Weather API](https://openweathermap.org/current) to fetch real-time weather data.

**Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

**Parameters**:
- `lat`: Latitude
- `lon`: Longitude
- `appid`: API key
- `units`: metric (for Celsius)

## Testing

### Unit Tests
```bash
npm test
```

Tests cover:
- Component rendering and props
- User interactions
- Edge cases and error states

### E2E Tests
```bash
npm run playwright
```

E2E test scenarios:
- Weather data loading and display
- Geolocation permission handling
- Refresh functionality
- Responsive design across viewports
- Loading states

## Features in Detail

### Geolocation
The app requests browser geolocation permission to automatically display weather for your location. If denied, an error message is shown. Location coordinates are cached in localStorage for faster subsequent loads.

### Weather Icons
Custom animated SVG icons for different weather conditions:
- ☀️ Sunny/Clear
- 🌙 Night
- ☁️ Cloudy (day/night)
- 🌧️ Rainy (day/night)
- ❄️ Snowy (day/night)
- ⛈️ Thunderstorm

### State Management
- **Zustand**: Manages location coordinates with persistence
- **React Query**: Handles data fetching, caching (10 min stale time), and error states

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeather API](https://openweathermap.org/)
- Weather icons designed with SVG animations
- Built with modern React and Next.js patterns

---

**Made with ❤️ by [Tayson Germano](https://github.com/TaysonGermano)**
