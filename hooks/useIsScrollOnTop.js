import { useState, useEffect } from 'react';

const useIsScrollOnTop = (top = 0) => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrollOnTop(scroll > top ? false : true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollOnTop]);

  return isScrollOnTop;
};

export default useIsScrollOnTop;
