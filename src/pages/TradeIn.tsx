import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TradeIn() {
  const [step, setStep] = useState(1);
  const { t, dir } = useLanguage();
  
  const submitForm = (e: React.FormEvent) => {
     e.preventDefault();
     setStep(3);
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4" dir="ltr">{t('tradein.title')}</h1>
           <p className="text-lg text-slate-500">{t('tradein.subtitle')}</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden text-slate-900 border border-slate-100">
          
          {step === 1 && (
            <div className="p-8 sm:p-10">
               <h2 className="text-3xl font-black mb-8 text-center text-slate-900" dir="ltr">{t('tradein.step1_title')}</h2>
               <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6 text-start">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('home.make')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="text" placeholder="e.g. Honda" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('home.model')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="text" placeholder="e.g. Civic" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.year')}</span></label>
                        <div className="clear-both"></div>
                        <select required className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm text-slate-700">
                           <option value="">{t('tradein.select_year')}</option>
                           {[...Array(20)].map((_, i) => (
                             <option key={i}>{2025 - i}</option>
                           ))}
                        </select>
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.mileage')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="number" placeholder="e.g. 45000" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                  </div>
                  <div className="pt-6">
                     <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-colors flex justify-center items-center gap-2 shadow-xl shadow-slate-900/20">
                        {t('tradein.next')} <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                     </button>
                  </div>
               </form>
            </div>
          )}

          {step === 2 && (
             <div className="p-8 sm:p-10">
               <h2 className="text-3xl font-black mb-8 text-center text-slate-900" dir="ltr">{t('tradein.step2_title')}</h2>
               <form onSubmit={submitForm} className="space-y-6 text-start">
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('tradein.full_name')}</span></label>
                     <div className="clear-both"></div>
                     <input required type="text" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('home.email_address')}</span></label>
                     <div className="clear-both"></div>
                     <input required type="email" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.phone')}</span></label>
                     <div className="clear-both"></div>
                     <input required type="tel" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                  </div>
                  <div className={`pt-6 flex gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                     <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-4 rounded-2xl transition-colors">
                        {t('tradein.back')}
                     </button>
                     <button type="submit" className="w-2/3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl flex justify-center items-center shadow-xl shadow-red-200 transition-colors">
                        {t('tradein.get_offer')}
                     </button>
                  </div>
               </form>
             </div>
          )}

          {step === 3 && (
             <div className="p-12 text-center">
                 <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4">{t('tradein.success_title')}</h2>
                 <p className="text-lg text-slate-500 mb-10 max-w-sm mx-auto leading-relaxed">{t('tradein.success_desc')}</p>
                 <a href="/inventory" className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-2xl transition-colors shadow-xl shadow-slate-900/20">
                    {t('tradein.shop_credit')}
                 </a>
             </div>
          )}

        </div>
      </div>
    </div>
  );
}
