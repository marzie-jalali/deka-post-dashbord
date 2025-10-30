import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export interface City {
  city: string;
  lat: string;
  lng: string;
}

interface Props {
  cities: City[];
  onSelect: (city: City) => void;
}

const CitySelect = ({ cities, onSelect }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="max-w-48">
      <Select
        onValueChange={(cityName) => {
          const cityObj = cities.find((c) => c.city === cityName);
          if (cityObj) onSelect(cityObj);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder={t("weather.selectCity")} />
        </SelectTrigger>
        <SelectContent>
          {cities?.map((city) => (
            <SelectItem value={city.city}>{city?.city}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CitySelect;
