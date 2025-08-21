import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const container = document.querySelector(".content-container");
    if (container) container.scrollTop = 0;

    const main = document.querySelector(".main-container");
    if (main) main.scrollTop = 0;
  }, [pathname]);

  return null;
}
