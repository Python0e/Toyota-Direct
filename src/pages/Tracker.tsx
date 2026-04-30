import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, MapPin, Package, FileCheck2, Ship, Anchor, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Tracker() {
  const { t, dir } = useLanguage();
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [orderData, setOrderData] = useState<any | null>(null);
  const [error, setError] = useState(false);

  const mockOrderStatus = (id: string) => {
    // Generate a pseudo-random status based on the ID for demo purposes
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const stages = ['processing', 'prep', 'docs', 'port', 'transit', 'arrived'];
    const currentStageIndex = hash % stages.length;

    return {
      id: id.toUpperCase(),
      vehicle: "2023 Toyota Land Cruiser",
      vin: "JTDFB23Y301" + hash,
      destination: "Dubai, UAE",
      currentStage: currentStageIndex,
      estimatedArrival: "Oct 24, 2026",
      stages: stages,
      vessel: currentStageIndex >= 4 ? "Ever Given" : "-",
      portOfLoading: "Los Angeles, CA",
      portOfDischarge: "Jebel Ali, Dubai"
    };
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setIsSearching(true);
    setError(false);
    setOrderData(null);

    setTimeout(() => {
      setIsSearching(false);
      if (orderId.trim().toUpperCase() === 'INVALID') {
        setError(true);
      } else {
        setOrderData(mockOrderStatus(orderId));
      }
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4" dir="ltr">{t('tracker.title')}</h1>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('tracker.subtitle')}</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-[32px] shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100 mb-12">
           <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-1 text-start">
                 <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('tracker.enter_order')}</span></label>
                 <div className="clear-both"></div>
                 <div className="relative">
                    <Search className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`} />
                    <input 
                      type="text" 
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder={t('tracker.placeholder')} 
                      className={`w-full bg-slate-50 border border-slate-200 ${dir === 'rtl' ? 'pr-12 pl-6' : 'pl-12 pr-6'} py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white uppercase`} 
                    />
                 </div>
              </div>
              <div className="sm:pt-[22px]">
                 <button 
                  type="submit" 
                  disabled={isSearching || !orderId.trim()}
                  className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold transition-all shadow-lg ${isSearching || !orderId.trim() ? 'bg-slate-200 text-slate-400 shadow-none' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'}`}
                 >
                    {isSearching ? t('financing.processing') : t('tracker.track_btn')}
                 </button>
              </div>
           </form>
           
           {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium">
                 <AlertCircle className="w-5 h-5" />
                 {t('tracker.not_found')}
              </div>
           )}
        </div>

        {orderData && (
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
             <div className="p-8 sm:p-10 border-b border-slate-100 text-start">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                   <div>
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg mb-3 tracking-wider">{orderData.id}</span>
                      <h2 className="text-2xl font-black text-slate-900 mb-1">{orderData.vehicle}</h2>
                      <p className="text-slate-500 font-mono text-sm">VIN: {orderData.vin}</p>
                   </div>
                   <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t('tracker.estimated_arrival')}</p>
                      <p className="font-black text-slate-900 text-xl">{orderData.estimatedArrival}</p>
                   </div>
                </div>
             </div>

             <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 bg-slate-50/50">
               <div className="lg:col-span-2 relative text-start">
                 <div className={`absolute ${dir === 'rtl' ? 'right-7' : 'left-7'} top-2 bottom-6 w-0.5 bg-slate-200`} />
                 
                 <div className="space-y-8 relative">
                    {[
                      { id: 'processing', icon: Package, title: t('tracker.status_processing'), desc: t('tracker.status_processing_desc') },
                      { id: 'prep', icon: CheckCircle2, title: t('tracker.status_prep'), desc: t('tracker.status_prep_desc') },
                      { id: 'docs', icon: FileCheck2, title: t('tracker.status_docs'), desc: t('tracker.status_docs_desc') },
                      { id: 'port', icon: MapPin, title: t('tracker.status_port'), desc: t('tracker.status_port_desc') },
                      { id: 'transit', icon: Ship, title: t('tracker.status_transit'), desc: t('tracker.status_transit_desc') },
                      { id: 'arrived', icon: Anchor, title: t('tracker.status_arrived'), desc: t('tracker.status_arrived_desc') }
                    ].map((step, index) => {
                      const isActive = index === orderData.currentStage;
                      const isPast = index < orderData.currentStage;
                      const Icon = step.icon;
                      
                      return (
                        <div key={step.id} className={`flex gap-6 relative z-10 ${isActive ? 'opacity-100' : isPast ? 'opacity-70' : 'opacity-40'}`}>
                           <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              isActive ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 
                              isPast ? 'bg-slate-900 text-white' : 
                              'bg-white border-2 border-slate-200 text-slate-400'
                           }`}>
                              <Icon className="w-6 h-6" />
                           </div>
                           <div className="pt-3">
                              <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                              <p className="text-slate-500 text-sm mt-1">{step.desc}</p>
                           </div>
                        </div>
                      )
                    })}
                 </div>
               </div>

               <div className="flex flex-col gap-4 text-start">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                     <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t('export.destination')}</p>
                     <p className="font-bold text-slate-900">{orderData.destination}</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                     <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t('tracker.vessel')}</p>
                     <p className="font-bold text-slate-900">{orderData.vessel}</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-slate-400" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">{t('tracker.port_of_loading')}</p>
                       <p className="font-bold text-slate-900 text-sm">{orderData.portOfLoading}</p>
                     </div>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                        <Anchor className="w-5 h-5 text-slate-400" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">{t('tracker.port_of_discharge')}</p>
                       <p className="font-bold text-slate-900 text-sm">{orderData.portOfDischarge}</p>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
