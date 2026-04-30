import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { inventory } from '../data/inventory';
import { Check, ChevronLeft, Calendar, Gauge, Fuel, Settings, ShieldCheck, PlayCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function VDP() {
  const { id } = useParams();
  const vehicle = inventory.find(v => v.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const { t, dir } = useLanguage();

  if (!vehicle) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Vehicle Not Found</h2>
        <Link to="/inventory" className="text-red-600 hover:underline">Return to Inventory</Link>
      </div>
    );
  }

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! A product specialist will contact you shortly.");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb & Back */}
      <div className="border-b border-slate-200 bg-white py-4 shadow-sm relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/inventory" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-red-600 transition-colors uppercase tracking-widest">
               <ChevronLeft className={`w-4 h-4 me-1 ${dir === 'rtl' ? 'rotate-180' : ''}`} /> {t('vdp.back')}
            </Link>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
           <div>
              <div className="flex items-center gap-2 mb-3">
                 {vehicle.tags.map(tag => (
                   <span key={tag} className="bg-red-100 text-red-800 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                     {tag}
                   </span>
                 ))}
                 <span className="text-xs text-slate-400 font-bold tracking-wider ms-2" dir="ltr">{t('vdp.vin')} {vehicle.vin}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight" dir="ltr"><span className="float-start">{vehicle.year} {vehicle.make} {vehicle.model}</span></h1>
              <div className="clear-both"></div>
           </div>
           <div className="text-start md:text-end">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 ms-1">{t('home.internet_price')}</p>
              <p className="text-4xl md:text-5xl font-black text-red-600" dir="ltr"><span className="float-start md:float-none md:inline-block">${vehicle.price.toLocaleString()}</span></p>
              <div className="clear-both"></div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           
           {/* Left Column - Gallery & Details */}
           <div className="lg:col-span-2 space-y-10">
              {/* Gallery */}
              <div className="bg-slate-100 border border-slate-200 rounded-[32px] overflow-hidden aspect-[16/9] relative shadow-sm">
                 <img 
                   src={vehicle.images[activeImage] || vehicle.image} 
                   alt={vehicle.model}
                   className="w-full h-full object-cover"
                 />
                 <button className="absolute bottom-4 left-4 bg-slate-900/90 hover:bg-slate-900 text-white backdrop-blur px-5 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg">
                    <PlayCircle className="w-5 h-5" /> Walkaround Video
                 </button>
              </div>
              
              {/* Thumbnails */}
              {vehicle.images.length > 1 && (
                 <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar">
                    {vehicle.images.map((img, idx) => (
                       <button 
                         key={idx} 
                         onClick={() => setActiveImage(idx)}
                         className={`flex-shrink-0 w-28 h-20 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-red-600 shadow-md ring-2 ring-red-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                       >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                       </button>
                    ))}
                 </div>
              )}

              {/* Quick Specs Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-xl shadow-slate-200/40 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <Calendar className="w-8 h-8 text-red-600 mb-3" />
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Year</p>
                    <p className="font-black text-slate-900 text-lg">{vehicle.year}</p>
                 </div>
                 <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-xl shadow-slate-200/40 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <Gauge className="w-8 h-8 text-red-600 mb-3" />
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Mileage</p>
                    <p className="font-black text-slate-900 text-lg">{vehicle.mileage.toLocaleString()}</p>
                 </div>
                 <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-xl shadow-slate-200/40 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <Fuel className="w-8 h-8 text-red-600 mb-3" />
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">MPG</p>
                    <p className="font-black text-slate-900 text-lg">{vehicle.mpg}</p>
                 </div>
                 <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-xl shadow-slate-200/40 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <Settings className="w-8 h-8 text-red-600 mb-3" />
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Drivetrain</p>
                    <p className="font-black text-slate-900 text-sm mt-1">{vehicle.drivetrain}</p>
                 </div>
              </div>

              {/* Why Buy & Comparisons */}
              <div className="bg-slate-900 text-white rounded-[32px] p-8 shadow-xl shadow-slate-900/20 text-start">
                 <h3 className="text-2xl font-black flex items-center gap-3 mb-6">
                    <ShieldCheck className="w-7 h-7 text-red-500" /> {t('vdp.why_this')}
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                       <div className="bg-white/10 p-1.5 rounded-full mt-0.5"><Check className="w-4 h-4 text-white" /></div>
                       <p className="text-slate-300 text-lg leading-relaxed"><strong className="text-white">{t('vdp.rel_title')}</strong> {t('vdp.rel_desc')}</p>
                    </li>
                    <li className="flex items-start gap-4">
                       <div className="bg-white/10 p-1.5 rounded-full mt-0.5"><Check className="w-4 h-4 text-white" /></div>
                       <p className="text-slate-300 text-lg leading-relaxed"><strong className="text-white">{t('vdp.fuel_title')}</strong> {t('vdp.fuel_desc')}</p>
                    </li>
                    {vehicle.features.slice(0, 1).map(feat => (
                       <li key={feat} className="flex items-start gap-4">
                          <div className="bg-white/10 p-1.5 rounded-full mt-0.5"><Check className="w-4 h-4 text-white" /></div>
                          <p className="text-slate-300 text-lg leading-relaxed"><strong className="text-white">{t('vdp.prem_title')}</strong> {t('vdp.prem_desc', {feature: feat})}</p>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Detailed Specs */}
              <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
                 <h3 className="text-2xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">Vehicle Details</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-100">
                       <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 sm:mb-0">Engine</span>
                       <span className="font-bold text-slate-900 sm:text-right">{vehicle.engine}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-100">
                       <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 sm:mb-0">Transmission</span>
                       <span className="font-bold text-slate-900 sm:text-right">{vehicle.transmission}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-100">
                       <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 sm:mb-0">Exterior Color</span>
                       <span className="font-bold text-slate-900 sm:text-right">{vehicle.exteriorColor}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-100">
                       <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 sm:mb-0">Interior Color</span>
                       <span className="font-bold text-slate-900 sm:text-right">{vehicle.interiorColor}</span>
                    </div>
                 </div>
              </div>

              {/* Highlighted Features */}
              <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
                 <h3 className="text-2xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">Key Features</h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vehicle.features.map(feat => (
                       <li key={feat} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]"></div> {feat}
                       </li>
                    ))}
                 </ul>
              </div>

           </div>

           {/* Right Column - Sticky Lead Capture */}
           <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                 
                 {/* Main CTA Box */}
                 <div className="bg-white border border-slate-200 rounded-[32px] shadow-2xl shadow-slate-200/50 overflow-hidden">
                    <div className="bg-red-600 p-6 text-center">
                       <h3 className="text-white font-black text-2xl tracking-tight" dir="ltr">{t('vdp.interested', {model: vehicle.model})}</h3>
                    </div>
                    <div className="p-8 text-start">
                       <p className="text-sm text-slate-500 font-medium mb-8 text-center leading-relaxed">{t('vdp.enter_details')}</p>
                       <form onSubmit={handleLeadSubmit} className="space-y-4">
                          <div className="space-y-1">
                             <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.first_name')}</span></label>
                             <div className="clear-both"></div>
                             <input type="text" placeholder="John" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                          </div>
                          <div className="space-y-1">
                             <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.last_name')}</span></label>
                             <div className="clear-both"></div>
                             <input type="text" placeholder="Doe" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                          </div>
                          <div className="space-y-1">
                             <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.email')}</span></label>
                             <div className="clear-both"></div>
                             <input type="email" placeholder="john@example.com" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                          </div>
                          <div className="space-y-1 mb-6">
                             <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.phone')}</span></label>
                             <div className="clear-both"></div>
                             <input type="tel" placeholder="(555) 000-0000" required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                          </div>
                          <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-slate-900/20 mt-2">
                             {t('vdp.check_avail')}
                          </button>
                       </form>
                       <p className="text-[10px] text-slate-400 font-medium text-center mt-6">{t('vdp.privacy')}</p>
                    </div>
                 </div>

                 {/* Secondary Actions */}
                 <div className="grid grid-cols-2 gap-4">
                    <Link to="/financing" className="bg-white border border-slate-200 hover:border-red-600 hover:shadow-lg text-slate-900 font-bold py-4 px-4 rounded-2xl text-center transition-all flex flex-col items-center justify-center gap-2 group">
                       <div className="bg-slate-50 p-3 rounded-full group-hover:bg-red-50 transition-colors"><DollarSignIcon className="w-6 h-6 text-slate-700 group-hover:text-red-600 transition-colors" /></div> 
                       <span className="text-sm">{t('vdp.get_financing')}</span>
                    </Link>
                    <Link to="/trade-in" className="bg-white border border-slate-200 hover:border-red-600 hover:shadow-lg text-slate-900 font-bold py-4 px-4 rounded-2xl text-center transition-all flex flex-col items-center justify-center gap-2 group">
                       <div className="bg-slate-50 p-3 rounded-full group-hover:bg-red-50 transition-colors"><CarIcon className="w-6 h-6 text-slate-700 group-hover:text-red-600 transition-colors" /></div> 
                       <span className="text-sm">{t('vdp.value_trade')}</span>
                    </Link>
                 </div>

                 <div className="bg-white border border-slate-200 rounded-[24px] p-6 flex items-start gap-4 shadow-sm text-start">
                    <div className="bg-slate-100 p-3 rounded-2xl flex-shrink-0">
                       <MapPin className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                       <p className="font-black text-slate-900">{t('vdp.location')}</p>
                       <p className="text-slate-500 text-sm mt-1">{t('vdp.address')}</p>
                       <a href="#" className="text-red-600 font-bold text-sm hover:underline mt-2 inline-block">{t('vdp.directions')}</a>
                    </div>
                 </div>

              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

