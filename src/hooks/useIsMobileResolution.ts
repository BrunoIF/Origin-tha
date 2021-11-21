import { useEffect, useState } from 'react';
import { isMobile } from 'utils/utils';

function useIsMobileResolution(): boolean {
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState<boolean>(
    isMobile()
  );

  useEffect(() => {
    setIsMobileBreakpoint(isMobile());
  }, [window.innerWidth]);

  return isMobileBreakpoint;
}

export default useIsMobileResolution;
