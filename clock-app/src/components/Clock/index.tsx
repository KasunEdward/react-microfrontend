import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="flex flex-row bg-blue-500 p-4 text-white justify-center">
      <h4>Current Time:</h4>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;
