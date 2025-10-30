import useUserStore from "../store/userStore";
import { useCurrentTime } from "../hooks/dashboard/useCurrentTime";

const Dashboard = () => {
  const { time, getGreeting } = useCurrentTime();
  const { username } = useUserStore();
  return (
    <div className="flex flex-col items-center justify-center gap-4 border p-2 rounded-md shadow-md">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-2xl font-bold">
          {time.toLocaleTimeString("fa-IR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-2xl font-bold">
          {getGreeting()} <span className="text-blue-500">{username}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
