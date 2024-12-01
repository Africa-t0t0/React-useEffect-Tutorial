import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const interval = setInterval(() => {
          setRemainingTime((prevTime) => prevTime - 1000)
        }, 10);

        return () => {
          clearInterval(interval);
        }
      }, []);

      return (
        <progress
            value={remainingTime}
            max={TIMER}
        />
      );

}



