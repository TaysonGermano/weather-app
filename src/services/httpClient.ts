import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  timeout: 5000,
});

httpClient.interceptors.request.use((config) => {
  const apiKey =
    process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY ||
    '53f9d8e4213222cf517d86dc406d67fc';
  if (apiKey) {
    config.params = {
      ...config.params,
      appid: apiKey,
      units: 'metric',
    };
  }
  return config;
});

export default httpClient;
