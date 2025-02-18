import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Full stack web developer";
  const CHAR_DELAY = 100;
  const COMPLETION_DELAY = 500;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, COMPLETION_DELAY);
      }
    }, CHAR_DELAY);

    return () => clearInterval(interval);
  }, [onComplete]);

  
  const totalTime = fullText.length * CHAR_DELAY + COMPLETION_DELAY;

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
          style={{
            width: "0%",
            animation: `loading-bar ${totalTime}ms ease-out forwards`,
          }}
        ></div>
      </div>
    </div>
  );
};
