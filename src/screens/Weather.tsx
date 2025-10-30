import { useWeather } from "../hooks/weather/useWeather";
import CitySelect, { type City } from "../components/weather/CitySelect";
import { useEffect, useState } from "react";
import WeatherCard from "../components/weather/WeatherCard";

const Weather = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const { data: weather } = useWeather(selectedCity);

  useEffect(() => {
    fetch("/ir.json")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  return (
    <>
      <CitySelect cities={cities} onSelect={setSelectedCity} />
      <div className="flex items-center justify-center mt-8">
        {weather && (
          <WeatherCard
            weather={weather}
            cityName={selectedCity?.city as string}
          />
        )}
      </div>
    </>
  );
};

export default Weather;
