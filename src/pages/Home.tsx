import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Search, ShieldCheck, MapPin, DollarSign, Star } from 'lucide-react';
import { inventory } from '../data/inventory';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t, dir } = useLanguage();
  const featuredVehicles = inventory.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-red-50/30 pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629897048514-3dd7414becfe?auto=format&fit=crop&q=80&w=2000" 
            alt="Toyota Showroom" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              {t('home.hero_title1')} <span className="text-red-600">{t('home.hero_title2')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-600 max-w-md leading-relaxed mb-8"
            >
              {t('home.hero_subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/inventory" className="inline-flex justify-center items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-200 transition-all group">
                {t('home.browse_inventory')}
                <ChevronRight className={`w-5 h-5 group-hover:${dir === 'rtl' ? '-translate-x-1' : 'translate-x-1'} transition-transform ${dir === 'rtl' ? 'rotate-180 ms-2' : 'ms-2'}`} />
              </Link>
              <Link to="/financing" className="inline-flex justify-center items-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-red-600 text-slate-700 rounded-2xl font-bold text-lg transition-all">
                {t('home.get_deals')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-200 py-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { icon: ShieldCheck, title: t('home.warranty_title'), desc: t('home.warranty_desc') },
                 { icon: DollarSign, title: t('home.pricing_title'), desc: t('home.pricing_desc') },
                 { icon: Star, title: t('home.rating_title'), desc: t('home.rating_desc') },
                 { icon: MapPin, title: t('home.delivery_title'), desc: t('home.delivery_desc') }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-start">{item.title}</h4>
                        <p className="text-sm text-gray-500 text-start">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 text-start">
             <h2 className="text-2xl font-black text-slate-900 mb-6">{t('home.find_vehicle')}</h2>
             <form className="grid grid-cols-1 md:grid-cols-4 gap-4" action="/inventory">
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.make')}</label>
                   <select name="make" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all" defaultValue="Toyota" dir="ltr">
                     <option>Toyota</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.model')}</label>
                   <select name="model" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all" dir="ltr">
                     <option value="">{t('home.all_models')}</option>
                     <option value="Camry">Camry</option>
                     <option value="Corolla">Corolla</option>
                     <option value="RAV4">RAV4</option>
                     <option value="Tacoma">Tacoma</option>
                     <option value="Tundra">Tundra</option>
                     <option value="Highlander">Highlander</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.max_price')}</label>
                   <select name="price" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all" dir="ltr">
                     <option value="">{t('home.no_max_price')}</option>
                     <option value="20000">{t('home.under', {price: '20,000'})}</option>
                     <option value="30000">{t('home.under', {price: '30,000'})}</option>
                     <option value="40000">{t('home.under', {price: '40,000'})}</option>
                   </select>
                </div>
                <div className="flex items-end">
                   <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2">
                     <Search className="w-5 h-5" /> {t('home.search_inventory_btn')}
                   </button>
                </div>
             </form>
          </div>
        </div>
      </section>

      {/* Featured Vehicles (Grid) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div className="text-start">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t('home.featured_offers')}</h2>
              <p className="text-slate-500 mt-2 text-lg">{t('home.featured_desc')}</p>
            </div>
            <Link to="/inventory" className="hidden sm:flex text-red-600 font-bold hover:text-red-700 items-center gap-1 group transition-colors">
              {t('home.view_all')} <ChevronRight className={`w-4 h-4 group-hover:${dir === 'rtl' ? '-translate-x-1' : 'translate-x-1'} transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm relative group flex flex-col">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img 
                    src={vehicle.image} 
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {vehicle.tags.map(tag => (
                     <div key={tag} className="absolute top-3 start-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                        {tag}
                     </div>
                  ))}
                  <div className="absolute bottom-3 end-3 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1.5 rounded-full shadow-sm uppercase tracking-wide">
                     {vehicle.mileage > 500 ? `${vehicle.mileage.toLocaleString()} mi` : 'New'}
                  </div>
                </div>
                <div className="flex flex-col flex-grow text-start">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 line-clamp-1" dir="ltr"><span className="float-start">{vehicle.year} {vehicle.make} {vehicle.model}</span></h3>
                  <div className="clear-both"></div>
                  <p className="text-slate-500 text-sm mb-4" dir="ltr"><span className="float-start">{vehicle.engine} • {vehicle.drivetrain}</span></p>
                  <div className="clear-both"></div>
                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-100">
                     <span className="text-red-600 font-black text-xl" dir="ltr">${vehicle.price.toLocaleString()}</span>
                     <Link to={`/inventory/${vehicle.id}`} className="bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold px-4 py-2 rounded-xl transition-colors">
                        {t('home.details')}
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden">
             <Link to="/inventory" className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-colors">
                {t('home.view_all_vehicles')}
             </Link>
          </div>
        </div>
      </section>

      {/* Mid-scroll Lead Capture */}
      <section className="bg-white py-20 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{t('home.lowest_price_title')}</h2>
              <p className="text-slate-500 mb-8 text-lg px-4">{t('home.lowest_price_desc')}</p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Lead Submited!');}}>
                <div className="flex-1 space-y-1 text-start">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.first_name')}</label>
                  <input type="text" placeholder="John" required className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
                <div className="flex-1 space-y-1 text-start">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.email_address')}</label>
                  <input type="email" placeholder="john@example.com" required className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
                <div className="flex items-end">
                   <button type="submit" className="w-full h-[54px] bg-red-600 hover:bg-red-700 text-white font-bold px-8 rounded-2xl transition-colors shadow-xl shadow-red-100 whitespace-nowrap">
                     {t('home.unlock_price')}
                   </button>
                </div>
              </form>
            </div>
         </div>
      </section>

    </div>
  );
}
