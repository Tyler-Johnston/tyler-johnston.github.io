import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles: Record<string, string> = {
  '/': 'Tyler Johnston',
  '/projects': 'Projects | Tyler Johnston',
  '/projects/parallax-poker': 'Parallax Poker | Tyler Johnston',
  '/projects/flashcard-dungeon': 'Flashcard Dungeon | Tyler Johnston',
  '/experience': 'Experience | Tyler Johnston',
  '/about': 'About | Tyler Johnston',
};

export function usePageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? 'Tyler Johnston';
  }, [pathname]);
}
