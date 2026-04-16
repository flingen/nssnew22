import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Gallery } from './components/sections/Gallery';
import { Countdown } from './components/sections/Countdown';
import { Metrics } from './components/sections/Metrics';
import { Pillars } from './components/sections/Pillars';
import { Speakers } from './components/sections/Speakers';
import { PastBrands } from './components/sections/PastBrands';
import { WhoShouldAttend } from './components/sections/WhoShouldAttend';
import { Panels } from './components/sections/Panels';
import { Sponsorship } from './components/sections/Sponsorship';
import { Essay } from './components/sections/Essay';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';
import { AdminPage } from './pages/AdminPage';
import { TravelPage } from './pages/TravelPage';
import { SpeakersPage } from './pages/SpeakersPage';
import { AgendaPage } from './pages/AgendaPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Countdown />
        <Metrics />
        <Pillars />
        <Speakers />
        <PastBrands />
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
