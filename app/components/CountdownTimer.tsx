import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function CountdownTimer() {
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    // Se ejecuta solo en el cliente
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    setEndDate(endOfMonth);
  }, []);

  if (!endDate) return null; // evita render hasta que esté listo

  return (
    <Countdown
      date={endDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span>La promoción ha terminado.</span>;
        }

        return (
          <div className="text-xl font-semibold text-[#fffc04]">
            {days} días {hours}h {minutes}m {seconds}s
          </div>
        );
      }}
    />
  );
}
