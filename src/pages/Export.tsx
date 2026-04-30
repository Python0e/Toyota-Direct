import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Ship, FileText, Anchor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Export() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, dir } = useLanguage();
  
  const submitForm = (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
     }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4" dir="ltr">{t('export.title')}</h1>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('export.subtitle')}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Ship className="w-8 h-8" />
              </div>
              <h3 className="font-black text-xl mb-3">{t('export.step1_title')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t('export.step1_desc')}</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                 <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-black text-xl mb-3">{t('export.step2_title')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t('export.step2_desc')}</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                 <Anchor className="w-8 h-8" />
              </div>
              <h3 className="font-black text-xl mb-3">{t('export.step3_title')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t('export.step3_desc')}</p>
           </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden text-slate-900 border border-slate-100">
          {!isSuccess ? (
             <div className="p-8 sm:p-10">
               <h2 className="text-3xl font-black mb-8 text-center" dir="ltr">{t('export.get_quote')}</h2>
               <form onSubmit={submitForm} className="space-y-6 text-start">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('home.make')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="text" placeholder="e.g. Toyota" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('home.model')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="text" placeholder="e.g. Land Cruiser" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('export.destination')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="text" placeholder="e.g. UAE" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('export.port')}</span></label>
                        <div className="clear-both"></div>
                        <input required type="text" placeholder="e.g. Jebel Ali" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                     </div>
                  </div>

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
                  <div className="pt-4">
                     <button type="submit" disabled={isSubmitting} className={`w-full font-bold py-4 rounded-2xl flex justify-center items-center gap-2 transition-all ${isSubmitting ? 'bg-slate-200 text-slate-500' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/20'}`}>
                        {isSubmitting ? t('financing.processing') : t('export.submit')} {!isSubmitting && <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />}
                     </button>
                  </div>
               </form>
             </div>
          ) : (
             <div className="p-12 text-center">
                 <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4">{t('export.success_title')}</h2>
                 <p className="text-lg text-slate-500 mb-10 max-w-sm mx-auto leading-relaxed">{t('export.success_desc')}</p>
                 <a href="/inventory" className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-2xl transition-colors shadow-xl shadow-slate-900/20">
                    {t('home.browse_inventory')}
                 </a>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
