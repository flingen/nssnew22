import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Countdown } from './components/sections/Countdown';
import { Metrics } from './components/sections/Metrics';
import { Pillars } from './components/sections/Pillars';
import { Speakers } from './components/sections/Speakers';
import { WhoShouldAttend } from './components/sections/WhoShouldAttend';
import { Panels } from './components/sections/Panels';
import { Sponsorship } from './components/sections/Sponsorship';
import { Essay } from './components/sections/Essay';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';
import { AdminPage } from './pages/AdminPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      <main>
        <Hero />
        <About />
        <Countdown />
        <Metrics />
        <Pillars />
        <Speakers />
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
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
