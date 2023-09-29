import { useState, useEffect } from "react";
import styles from "../../style/Progress.module.css";

const Progress = () => {
  const ProgressValues = {
    progressMax: "100",
    progressText: "100%",
  };

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
    <div className={styles.body}>
      <progress max="100" value={seconds}>
        100%
      </progress>
    </div>
  );
};

export default Progress;
