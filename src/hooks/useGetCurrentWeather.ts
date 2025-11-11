import httpClient from '@/services/httpClient';
import store from '@/store';
import { getCurrentLocation } from '@/utils/helpers';
import { useQuery } from '@tanstack/react-query';

const useGetCurrentWeather = () => {
  const { coords, setCoords } = store.getState();

  return useQuery({
    queryKey: ['current-weather', coords],
    queryFn: async () => {
      if (coords) {
        const resp = await httpClient.get('/', {
          params: { lat: coords.lat, lon: coords.lon },
        });

        return resp.data;
      }

      const permission = await navigator.permissions.query({
        name: 'geolocation',
      });

      if (permission.state === 'denied') {
        throw new Error('Location permission denied');
      }

      const position = await getCurrentLocation();
      const { latitude, longitude } = position.coords;

      const resp = await httpClient.get('/', {
        params: { lat: latitude, lon: longitude },
      });

      setCoords({ lat: latitude, lon: longitude });

      return resp.data;
    },
    staleTime: 10 * 60 * 1000,
  });
};

export default useGetCurrentWeather;
