import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Gallery } from './components/sections/Gallery';
import { SpeakersHighlight } from './components/sections/SpeakersHighlight';
import { Exhibitors } from './components/sections/Exhibitors';
import { Countdown } from './components/sections/Countdown';
import { Metrics } from './components/sections/Metrics';
import { Pillars } from './components/sections/Pillars';
import { PastBrands } from './components/sections/PastBrands';
import { WhoShouldAttend } from './components/sections/WhoShouldAttend';
import { Panels } from './components/sections/Panels';
import { Sponsorship } from './components/sections/Sponsorship';
import { Essay } from './components/sections/Essay';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';

// Sub-pages are lazy-loaded so the home page bundle doesn't carry their code.
// AdminPage in particular pulls in @supabase/supabase-js (~120 KB gzip) — splitting it out
// is the single largest JS reduction we can make for the home-page LCP.
const AdminPage = lazy(() => import('./pages/AdminPage').then((m) => ({ default: m.AdminPage })));
const TravelPage = lazy(() => import('./pages/TravelPage').then((m) => ({ default: m.TravelPage })));
const SpeakersPage = lazy(() => import('./pages/SpeakersPage').then((m) => ({ default: m.SpeakersPage })));
const AgendaPage = lazy(() => import('./pages/AgendaPage').then((m) => ({ default: m.AgendaPage })));
const NSS2027Page = lazy(() => import('./pages/NSS2027Page').then((m) => ({ default: m.NSS2027Page })));

// Sends a pageview to Google Analytics AND Meta Pixel every time the route changes.
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;

    // Google Analytics pageview
    // @ts-expect-error gtag is injected by the script in index.html
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // @ts-expect-error gtag is injected by the script in index.html
      window.gtag('config', 'G-B8L10Q532E', {
        page_path: path,
      });
    }

    // Meta Pixel pageview
    // @ts-expect-error fbq is injected by the Meta Pixel script in index.html
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      // @ts-expect-error fbq is injected by the Meta Pixel script in index.html
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
}

// Minimal fallback shown while a route chunk is downloading. Matches the page bg
// so it doesn't cause a flash.
function RouteFallback() {
  return <div className="min-h-screen bg-deep-navy" aria-hidden />;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      <main>
        <Hero />
        <About />
        <SpeakersHighlight />
        <Gallery />
        <Countdown />
        <Metrics />
        <Pillars />
        <PastBrands />
        <Exhibitors />
        <WhoShouldAttend />
        <Panels />
        <Sponsorship />
        <Essay />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/nss-2027" element={<NSS2027Page />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
