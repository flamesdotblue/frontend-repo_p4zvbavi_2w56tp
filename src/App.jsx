import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-3 w-3 rounded-full bg-indigo-600" />
            HyperMail
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}
              className="px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
            >
              Get access
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="how"><HowItWorks /></div>
        <div id="pricing"><CTA /></div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} HyperMail. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
