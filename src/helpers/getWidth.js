import { useState, useEffect } from 'react';

function getWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
}

const getUrlImage = (image) => `/${getWidth() < 720 ? 'mobile' : 'desktop'}/${image}.webp`

export { getWidth, getUrlImage };
