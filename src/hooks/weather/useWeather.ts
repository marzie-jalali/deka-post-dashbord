import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface City {
  lat: string;
  lng: string;
}

export const useWeather = (city: City | null) => {
  return useQuery({
    queryKey: ["weather", city?.lat, city?.lng],
    queryFn: async () => {
      if (!city) return null;

      const { data } = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude: city.lat,
            longitude: city.lng,
            current_weather: true,
          },
        }
      );

      return data.current_weather;
    },
    enabled: !!city,
  });
};
