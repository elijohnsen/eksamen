import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formattedDate = new Date(targetDate).toLocaleString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",

    hour12: false,
  });

  return (
    <aside className="bg-gray-900 py-2 text-white lg:py-3">
      <div className="mycontainer flex max-w-[35em] items-center justify-center md:px-8">
        <div className="w-full border border-primarycolor bg-gray-800  bg-opacity-70 py-8 lg:py-2">
          
          <p className="mb-4 text-center text-md">
            Næste afgang er: <br />
            <span className="font-medium text-lg">{formattedDate}</span>
          </p>
          <div className="flex justify-center space-x-4 rounded-lg bg-gray-900 p-4 shadow-lg">
            <div className="text-3xl font-semibold text-primarycolor">
              {timeLeft.days} <span className="text-sm">dage</span>
            </div>
            <div className="text-3xl font-semibold text-primarycolor">
              {timeLeft.hours} <span className="text-sm">timer</span>
            </div>
            <div className="text-3xl font-semibold text-primarycolor">
              {timeLeft.minutes} <span className="text-sm">minuter</span>
            </div>
            <div className="text-3xl font-semibold text-primarycolor">
              {timeLeft.seconds} <span className="text-sm">sekunder</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Countdown;
