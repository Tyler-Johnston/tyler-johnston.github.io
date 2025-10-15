import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { FooterCentered } from "../components/FooterCentered/FooterCentered";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { usePageTracking } from "../hooks/usePageTracking";
import { useState, useEffect } from 'react';
import Portfolio from "./Portfolio";
import About from "./About";
import Experience from "./Experience";
import Scroll from "./Scroll";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

    const detectMobileDevice = (): void => {
      const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex: RegExp = /iPhone|iPad|iPod|Android/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

  useEffect(() => {
    detectMobileDevice();
  }, []);

  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <div className={isMobile ? "mobileContainer" : "desktopContainer"}>
        <Router>
          <PageTrackerWrapper />
        </Router>
      </div>
    </MantineProvider>
  );
}



function PageTrackerWrapper() {
  usePageTracking();
  return (
    <>
      <Scroll />
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <FooterCentered />
    </>
  );
}
