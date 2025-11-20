import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // When the pathname (route) changes, scroll to the top
    window.scrollTo(0, 0);
    
    // You can optionally add a smooth scroll behavior:
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });

  }, [pathname]); // This effect re-runs every time the URL path changes

  // This component doesn't render anything, it just manages side effects
  return null;
};

export default ScrollToTop;