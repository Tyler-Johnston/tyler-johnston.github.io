import '@mantine/core/styles.css';
import '../styles.css';
import { MantineProvider } from '@mantine/core';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { usePageTracking } from '../hooks/usePageTracking';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Landing } from './pages/Landing';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { FlashcardDungeon } from './pages/projects/FlashcardDungeon';
import ParallaxPoker from './ParallaxPoker';
import Scroll from './Scroll';
import { theme } from './theme/theme';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router>
        <PageTrackerWrapper />
      </Router>
    </MantineProvider>
  );
}

function PageTrackerWrapper() {
  usePageTracking();
  return (
    <>
      <Scroll />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 60px)' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/parallax-poker" element={<ParallaxPoker />} />
          <Route path="/projects/flashcard-dungeon" element={<FlashcardDungeon />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          {/* Legacy redirects */}
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/parallax-poker" element={<ParallaxPoker />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
