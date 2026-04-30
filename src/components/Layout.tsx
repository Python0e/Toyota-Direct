import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, PhoneCall, Check, Globe, User as UserIcon } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, dir } = useLanguage();
  const { user } = useAuth();

  const navigation = [
    { name: t('layout.home'), href: '/' },
    { name: t('layout.inventory'), href: '/inventory' },
    { name: t('layout.financing'), href: '/financing' },
    { name: t('layout.trade_in'), href: '/trade-in' },
    { name: t('layout.export'), href: '/export' },
    { name: t('layout.payment'), href: '/payment' },
    { name: t('layout.tracker'), href: '/tracker' },
    { name: t('layout.request_car'), href: '/request-car' },
    { name: t('layout.about'), href: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Top Bar - Trust Indicators */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
           <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-red-500" /> {t('layout.no_hidden_fees')}</span>
              <span className="hidden md:flex items-center gap-2"><Check className="w-3 h-3 text-red-500" /> {t('layout.transparent_pricing')}</span>
           </div>
           <div className="flex items-center gap-4 text-white">
             <div className="flex items-center gap-2">
               <Globe className="w-3 h-3 text-slate-400" />
               <select 
                 className="bg-transparent text-xs text-slate-300 hover:text-white outline-none cursor-pointer focus:ring-0 [&>option]:text-slate-900 transition-colors"
                 value={language}
                 onChange={(e) => setLanguage(e.target.value as Language)}
               >
                 <option value="en">English</option>
                 <option value="es">Español</option>
                 <option value="fa">فارسی</option>
                 <option value="ps">پښتو</option>
               </select>
             </div>
             <div className="flex items-center gap-2 border-s border-slate-700 ps-4">
               <PhoneCall className="w-3 h-3" />
               <a href="tel:1-800-555-0199" className="hover:text-red-400 transition-colors" dir="ltr">1-800-555-0199</a>
             </div>
           </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-red-600 tracking-tighter uppercase">Toyota<span className="font-light text-slate-400">Direct</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 justify-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-semibold transition-colors hover:text-red-600 ${
                    location.pathname === item.href
                      ? 'text-red-600'
                      : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
               <span className="text-slate-400 text-sm font-medium">{t('layout.service')} <span dir="ltr">(555) 012-3456</span></span>
               <Link to="/inventory" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full font-bold text-sm transition-colors">
                 {t('layout.call_now')}
               </Link>
               <Link to={user ? "/dashboard" : "/login"} className="text-slate-600 hover:text-red-600 p-2 rounded-full hover:bg-slate-50 transition-colors" title={user ? t('layout.dashboard') : t('layout.login')}>
                  <UserIcon className="w-5 h-5" />
               </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link to={user ? "/dashboard" : "/login"} className="p-2 text-slate-700 hover:text-red-600 transition-colors">
                 <UserIcon className="w-6 h-6" />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-red-600 hover:bg-slate-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-slate-200"
            >
              <div className="pt-2 pb-4 space-y-1 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block pl-3 pr-4 py-3 text-base font-bold rounded-xl transition-colors ${
                      location.pathname === item.href
                        ? 'bg-red-50 text-red-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-100" />
                <Link
                  to="/inventory"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-colors"
                >
                  {t('layout.call_now')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
         {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black text-white tracking-tighter uppercase">Toyota<span className="font-light text-slate-500">Direct</span></span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('layout.footer_desc')}
              </p>
            </div>
            
            <div>
              <h3 className="text-[10px] font-bold mb-6 text-slate-500 uppercase tracking-widest">{t('layout.quick_links')}</h3>
              <ul className="space-y-3 text-sm text-slate-300 font-medium">
                <li><Link to="/inventory" className="hover:text-red-400 transition-colors">{t('layout.search_inventory')}</Link></li>
                <li><Link to="/financing" className="hover:text-red-400 transition-colors">{t('layout.apply_financing')}</Link></li>
                <li><Link to="/trade-in" className="hover:text-red-400 transition-colors">{t('layout.value_trade')}</Link></li>
                <li><Link to="/export" className="hover:text-red-400 transition-colors">{t('layout.export')}</Link></li>
                <li><Link to="/payment" className="hover:text-red-400 transition-colors">{t('layout.payment')}</Link></li>
                <li><Link to="/tracker" className="hover:text-red-400 transition-colors">{t('layout.tracker')}</Link></li>
                <li><Link to="/request-car" className="hover:text-red-400 transition-colors">{t('layout.request_car')}</Link></li>
                <li><Link to="/about" className="hover:text-red-400 transition-colors">{t('layout.why_buy')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold mb-6 text-slate-500 uppercase tracking-widest">{t('layout.popular_models')}</h3>
              <ul className="space-y-3 text-sm text-slate-300 font-medium">
                <li><Link to="/inventory?model=Camry" className="hover:text-red-400 transition-colors">Toyota Camry</Link></li>
                <li><Link to="/inventory?model=Corolla" className="hover:text-red-400 transition-colors">Toyota Corolla</Link></li>
                <li><Link to="/inventory?model=RAV4" className="hover:text-red-400 transition-colors">Toyota RAV4</Link></li>
                <li><Link to="/inventory?model=Tacoma" className="hover:text-red-400 transition-colors">Toyota Tacoma</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold mb-6 text-slate-500 uppercase tracking-widest">{t('layout.contact_us')}</h3>
              <ul className="space-y-3 text-sm text-slate-300 font-medium">
                <li dir="ltr" className="text-start">{t('layout.sales')} <span dir="ltr">1-800-555-0199</span></li>
                <li dir="ltr" className="text-start">{t('layout.service')} <span dir="ltr">1-800-555-0198</span></li>
                <li className="pt-2">123 Auto Row</li>
                <li>Anytown, USA 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <p>&copy; {new Date().getFullYear()} Toyota Direct. {t('layout.all_rights')}</p>
          </div>
        </div>
      </footer>
      
      {/* Mobile Sticky Call Button */}
      <div className="md:hidden fixed bottom-0 start-0 end-0 p-4 bg-white/90 backdrop-blur border-t border-slate-200 z-40 pb-safe">
         <a href="tel:1-800-555-0199" className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-xl shadow-slate-900/20 active:scale-95 transition-transform" dir="ltr">
           <PhoneCall className="w-5 h-5" />
           {t('layout.call_now_schedule')}
         </a>
      </div>
    </div>
  );
}
