import { useState } from 'react';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { LandingPage } from './components/landing/LandingPage';

/**
 * 최상위 진입점.
 * 접속 시 서비스 소개(LandingPage)를 먼저 보여주고,
 * 'TravLight 이용하기'를 누르면 실제 서비스(App)로 전환한다.
 */
export default function Root() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    window.scrollTo(0, 0);
    setEntered(true);
  };

  return (
    <>
      {entered ? <App /> : <LandingPage onEnter={handleEnter} />}
      <Analytics />
    </>
  );
}
