import { useEffect } from "react";

export const useScrollTop = () => {
  useEffect(() => {
    document.getElementById("__next").scroll(0, 0);
  }, []);
};
