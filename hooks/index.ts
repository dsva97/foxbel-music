import { useEffect, useState } from "react";

export const useMobile = (defaultState: boolean = false) => {
  const [isMobile, setIsMobile] = useState(defaultState);
  useEffect(() => {
    const mqt = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsMobile(mqt.matches);
    };
    mqt.addEventListener("change", handleResize);

    return () => {
      mqt.removeEventListener("change", handleResize);
    };
  }, []);
  return isMobile;
};
