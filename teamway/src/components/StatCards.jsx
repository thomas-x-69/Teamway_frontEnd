import { useState, useEffect } from "react";
import CountUp from "react-countup";
import callIncoming from "../assets/Calls_Incoming.png";
import callResponse from "../assets/Calls_Answered.png";
import callCancel from "../assets/Calls_Canceled.png";
import callTime from "../assets/Calls_Duration.png";

const BgColors = {
  blue: "bg-[#1F94C433]",
  green: "bg-[#11C17733]",
  red: "bg-[#FF000033]",
  purple: "bg-[#00000033]",
};

const TimeAnimation = ({ endValue }) => {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const [endMinutes, endSeconds] = endValue.split(":").map(Number);
    const totalEndSeconds = endMinutes * 60 + endSeconds;
    const duration = 2000;
    const startTime = Date.now();

    const updateTime = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentSeconds = Math.floor(totalEndSeconds * progress);

      const minutes = Math.floor(currentSeconds / 60);
      const seconds = currentSeconds % 60;

      setTime(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );

      if (progress < 1) {
        requestAnimationFrame(updateTime);
      }
    };

    requestAnimationFrame(updateTime);
  }, [endValue]);

  return <span>{time}</span>;
};

const StatCard = ({ image, title, value, change, color }) => {
  const isTimeValue = title === "متوسط مدة المكالمة";

  return (
    <div
      className={`bg-white p-2 sm:p-3 rounded-2xl shadow-lg relative overflow-hidden
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01]
                  group`}
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div
          className={`${BgColors[color]} rounded-full p-1 w-[2.25rem] h-[2.25rem] sm:w-[2.75rem] sm:h-[2.75rem]
                      transition-transform duration-300 ease-in-out
                      group-hover:scale-105`}
        >
          <img
            src={image}
            alt={title}
            className="w-[1.4rem] h-[1.4rem] sm:w-[1.6rem] sm:h-[1.6rem] m-auto mt-[2px] sm:mt-[3px]
                       transition-transform duration-300 ease-in-out
                       group-hover:rotate-6"
          />
        </div>
        <p
          className={`text-[0.65rem] sm:text-xs color-[#000] opacity-70
                       transition-all duration-300 ease-in-out
                       group-hover:translate-x-[-1px]`}
        >
          اخر 7 ايام
        </p>
      </div>
      <div>
        <h2
          className={`text-[0.9rem] sm:text-base font-semibold color-[#000] mb-1 sm:mb-3
                      transition-all duration-300 ease-in-out
                      group-hover:translate-x-0.5`}
        >
          {title}
        </h2>
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline">
            <p
              className={`text-lg sm:text-3xl font-bold color-[#000]
                           transition-all duration-300 ease-in-out
                           group-hover:scale-105`}
            >
              {isTimeValue ? (
                <TimeAnimation endValue={value} />
              ) : (
                <CountUp end={parseInt(value)} duration={3} />
              )}
            </p>
            <p
              className={`text-xs sm:text-sm color-[#000] mr-1 self-start mt-[2px] sm:mt-[4px]
                          transition-all duration-300 ease-in-out
                          group-hover:translate-y-[-1px]`}
            >
              <CountUp end={change} duration={3} />%{change > 0 ? "+" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 rtl">
      <StatCard
        image={callIncoming}
        title="المكالمات الواردة"
        value="800"
        change={20}
        color="blue"
      />
      <StatCard
        image={callResponse}
        title="مكالمات تم الرد عليها"
        value="770"
        change={20}
        color="green"
      />
      <StatCard
        image={callCancel}
        title="مكالمات فائتة"
        value="30"
        change={50}
        color="red"
      />
      <StatCard
        image={callTime}
        title="متوسط مدة المكالمة"
        value="8:00"
        change={20}
        color="purple"
      />
    </div>
  );
};

export default StatCards;
