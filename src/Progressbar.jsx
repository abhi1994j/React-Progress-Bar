import { useEffect, useState } from "react";

const Progressbar = () => {
  const [progress, setProgress] = useState(0);
  const [flag, setIsflag] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          setIsflag(true);
          return prev;
        }
      });
    }, 100);
  }, []);

  return (
    <>
      <div className="w-full my-10">
        <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 flex items-center justify-center transition-all duration-300"
            style={{ width: `${progress}%` }}
          >
            <span className="text-white font-semibold">{progress}%</span>
          </div>
        </div>
        <p className="text-center font-medium mt-2">
          {!flag ? "Loading..." : "Complete!"}
        </p>
      </div>
    </>
  );
};

export default Progressbar;
