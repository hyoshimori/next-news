import { useState, useEffect } from "react";

import { ProgressStyles } from "@/components/index";

const Progress = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 0.5);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={ProgressStyles.body}>
      <progress max="100" value={seconds}>
        100%
      </progress>
    </div>
  );
};

export default Progress;
