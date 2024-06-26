import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScrollToTop(props: any) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
}
