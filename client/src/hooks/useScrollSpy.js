import { useEffect, useState } from "react";

export default function useScrollSpy(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 100;
          if (scrollY >= offsetTop) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return active;
}