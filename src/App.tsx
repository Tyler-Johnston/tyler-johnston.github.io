import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { FooterCentered } from "../components/FooterCentered/FooterCentered"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from "./Portfolio"
import About from "./About"
import Experience from "./Experience";
import Scroll from './Scroll';

export default function App() {
  return (
    <MantineProvider defaultColorScheme={'dark'}>
      <Router>
      <Scroll/>
      <HeaderMenu/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <FooterCentered/>
      </Router>
    </MantineProvider>
  )
}
