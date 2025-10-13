import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-1EF602MFGR", {
        page_path: location.pathname,
      });
    }
  }, [location]);
}
