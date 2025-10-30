import { useTranslation } from "react-i18next";

interface WeatherCardProps {
  weather: {
    temperature: number;
    windspeed: number;
  };
  cityName: string;
}

const WeatherCard = ({ weather, cityName }: WeatherCardProps) => {
  const { temperature, windspeed } = weather;
  const { t } = useTranslation();
  return (
    <div className="border p-4 rounded-md shadow-md w-86">
      <div className="flex items-center justify-between flex-col gap-2">
        <p>{cityName}</p>
        <p>{temperature} °C</p>
        <p>
          <span className="text-sm text-gray-500">
            {t("weather.windspeed")}:
          </span>{" "}
          {windspeed} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
