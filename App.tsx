import { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Music, 
  Utensils, 
  Calendar, 
  Sparkles,
  Globe,
  Heart,
  Star
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Sections
import HeroSection from './sections/HeroSection';
import LanguageSection from './sections/LanguageSection';
import CultureSection from './sections/CultureSection';
import CelebritiesSection from './sections/CelebritiesSection';
import MusicSection from './sections/MusicSection';
import FoodSection from './sections/FoodSection';
import FestivalsSection from './sections/FestivalsSection';

// Navigation items
const navItems = [
  { id: 'hero', icon: Sparkles, label: 'Ana Sayfa' },
  { id: 'language', icon: BookOpen, label: 'Dil' },
  { id: 'culture', icon: Globe, label: 'Kültür' },
  { id: 'celebrities', icon: Star, label: 'Ünlüler' },
  { id: 'music', icon: Music, label: 'Müzik' },
  { id: 'food', icon: Utensils, label: 'Yemekler' },
  { id: 'festivals', icon: Calendar, label: 'Bayramlar' },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showNav, setShowNav] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* Fixed Header */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-semibold text-lg text-white">Ma yê Êstí</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                    : 'hover:bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Floating Island Navigation - Centered & Modern */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4"
          >
            <div className="floating-island flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative p-3.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    title={item.label}
                  >
                    <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl -z-10"
                        initial={false}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      />
                    )}
                    
                    {/* Glow Effect */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-purple-500 rounded-xl blur-xl -z-20 opacity-50"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main ref={scrollRef} className="relative">
        <section id="hero" className="scroll-snap-section">
          <HeroSection onExplore={() => scrollToSection('language')} />
        </section>
        
        <section id="language" className="scroll-snap-section">
          <LanguageSection />
        </section>
        
        <section id="culture" className="scroll-snap-section">
          <CultureSection />
        </section>
        
        <section id="celebrities" className="scroll-snap-section">
          <CelebritiesSection />
        </section>
        
        <section id="music" className="scroll-snap-section">
          <MusicSection />
        </section>
        
        <section id="food" className="scroll-snap-section">
          <FoodSection />
        </section>
        
        <section id="festivals" className="scroll-snap-section">
          <FestivalsSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-purple-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="font-bold text-xl text-white">Ma yê Êstí</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Zazaca dilini ve kültürünü tanıtmak, gelecek nesillere aktarmak 
                için oluşturulmuş kapsamlı bir kaynak.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">İletişim</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Zazaca hakkında daha fazla bilgi edinmek veya katkıda bulunmak 
                isterseniz bizimle iletişime geçin.
              </p>
              <a 
                href="mailto:macutay1w@gmail.com" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                macutay1w@gmail.com
              </a>
              <div className="flex items-center gap-2 mt-4 text-gray-400">
                <Heart className="w-4 h-4 text-purple-500" />
                <span>Zaza kültürüne gönülden bağlıyız</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Ma yê Êstí - 2026 yılında Oktay Macutay yapmıştır</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
