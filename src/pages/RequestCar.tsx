import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Car, Globe, Mail, Send, CheckCircle } from 'lucide-react';

export default function RequestCar() {
  const { t, dir } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4" dir="ltr">{t('request_car.title')}</h1>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('request_car.subtitle')}</p>
        </div>

        {isSubmitted ? (
           <div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 p-12 text-center border border-slate-100 animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100">
                <CheckCircle className="w-12 h-12" />
             </div>
             <h2 className="text-3xl font-black text-slate-900 mb-4">{t('request_car.success_title')}</h2>
             <p className="text-lg text-slate-500 max-w-md mx-auto">{t('request_car.success_desc')}</p>
             <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-colors"
             >
                {t('tradein.back')}
             </button>
           </div>
        ) : (
           <form onSubmit={handleSubmit} className="bg-white rounded-[32px] shadow-xl shadow-slate-200/50 p-8 sm:p-10 border border-slate-100 text-start space-y-10">
              
              {/* Vehicle Details */}
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                       <Car className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{t('request_car.vehicle_details')}</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.make')}</label>
                       <input required type="text" placeholder="e.g. Toyota" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.model')}</label>
                       <input required type="text" placeholder="e.g. Land Cruiser" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('vdp.year')}</label>
                       <input required type="number" min="2000" max={new Date().getFullYear() + 1} placeholder="e.g. 2024" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('request_car.condition')}</label>
                       <select required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white appearance-none h-[54px]">
                          <option value="any">{t('inventory.filters')}</option>
                          <option value="new">{t('request_car.new')}</option>
                          <option value="used">{t('request_car.used')}</option>
                       </select>
                    </div>
                 </div>
              </div>

              <hr className="border-slate-100" />

              {/* Shipping Details */}
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                       <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{t('request_car.shipping')}</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1 md:col-span-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('request_car.country')}</label>
                       <input required type="text" placeholder="e.g. United Arab Emirates" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('export.port')}</label>
                       <input type="text" placeholder="e.g. Jebel Ali" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('request_car.budget')}</label>
                       <input required type="number" min="5000" placeholder="e.g. 50000" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                 </div>
              </div>

              <hr className="border-slate-100" />

              {/* Contact Information */}
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                       <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{t('request_car.contact')}</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('home.first_name')}</label>
                       <input required type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('vdp.last_name')}</label>
                       <input required type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('vdp.email')}</label>
                       <input required type="email" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-slate-400 uppercase ms-4">{t('vdp.phone')}</label>
                       <input required type="tel" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white" />
                    </div>
                 </div>
              </div>

              <div className="pt-4">
                 <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all shadow-xl shadow-slate-900/20 ${isSubmitting ? 'bg-slate-800 text-white opacity-80' : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-[0.98]'}`}
                 >
                    {isSubmitting ? t('financing.processing') : (
                       <>
                         <Send className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} /> {t('request_car.submit')}
                       </>
                    )}
                 </button>
              </div>

           </form>
        )}

      </div>
    </div>
  );
}
