import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Button from "../components/ui/button";
import { useTranslation } from "react-i18next";
import useUserStore from "../store/userStore";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { t } = useTranslation();
  const { username, setUsername, theme, setTheme, language, setLanguage } =
    useUserStore();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { username, theme, language },
  });
  const onSubmit = (data: any) => {
    setUsername(data.username);
    setTheme(data.theme);
    setLanguage(data.language);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 form-control w-full max-w-xs"
      >
        <Input
          type="text"
          {...register("username")}
          placeholder={t("profile.username")}
          className="w-full"
        />

        <Select
          value={watch("theme")}
          onValueChange={(v: string) => {
            setValue("theme", v);
            setTheme(v as "light" | "dark"); // Update theme immediately
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("profile.theme")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">{t("profile.light")}</SelectItem>
            <SelectItem value="dark">{t("profile.dark")}</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={watch("language")}
          onValueChange={(v: string) => setValue("language", v)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("profile.language")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">{t("profile.en")}</SelectItem>
            <SelectItem value="fa">{t("profile.fa")}</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">{t("profile.save")}</Button>
      </form>
    </div>
  );
};

export default Profile;
