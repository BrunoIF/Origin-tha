import { useEffect, useState } from 'react';
import { isMobile } from 'utils/utils';

function useIsMobileResolution(): boolean {
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState<boolean>(
    isMobile()
  );

  useEffect(() => {
    const handleResize = () => setIsMobileBreakpoint(isMobile());

    window.addEventListener('resize', handleResize);

    console.log('window inner width', window.innerWidth);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileBreakpoint;
}

export default useIsMobileResolution;
