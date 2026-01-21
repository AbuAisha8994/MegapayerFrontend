import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  labels?: { d: string; h: string; m: string; s: string };
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, labels }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Default labels if not provided
  const defaultLabels = { d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' };
  const countdownLabels = labels || defaultLabels;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: countdownLabels.d },
    { value: timeLeft.hours, label: countdownLabels.h },
    { value: timeLeft.minutes, label: countdownLabels.m },
    { value: timeLeft.seconds, label: countdownLabels.s },
  ];

  return (
    <div className="flex space-x-4 sm:space-x-8 justify-center">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="bg-dark/80 backdrop-blur-md border border-white/10 w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-3xl sm:text-4xl font-bold text-white">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-gray-400 text-sm mt-2">{block.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
