import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Financing() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t, dir } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4" dir="ltr">{t('financing.title')}</h1>
           <p className="text-lg text-slate-500">{t('financing.subtitle')}</p>
        </div>

        {isSuccess ? (
           <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 p-12 text-center text-slate-900">
               <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
               </div>
               <h2 className="text-3xl font-black mb-4">{t('financing.success_title')}</h2>
               <p className="text-lg text-slate-500 mb-8">{t('financing.success_desc')}</p>
               <button onClick={() => window.location.href = '/inventory'} className="bg-slate-900 hover:bg-slate-800 text-white font-bold mb-2 py-4 px-10 rounded-2xl transition-colors shadow-xl shadow-slate-200">
                  {t('financing.browse')}
               </button>
           </div>
        ) : (
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden text-slate-900 border border-slate-100">
            <div className="bg-slate-900 p-8 sm:p-10 text-center">
               <h2 className="text-3xl font-black text-white tracking-tight" dir="ltr">{t('financing.app_title')}</h2>
               <p className="text-slate-400 mt-2 text-sm font-medium">{t('financing.app_desc')}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6 text-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('home.first_name')}</span></label>
                   <div className="clear-both"></div>
                   <input required type="text" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('vdp.last_name')}</span></label>
                   <div className="clear-both"></div>
                   <input required type="text" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm" />
                 </div>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('financing.credit_score')}</span></label>
                   <div className="clear-both"></div>
                   <select className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm text-slate-700">
                      <option>{t('financing.exc_credit')}</option>
                      <option>{t('financing.good_credit')}</option>
                      <option>{t('financing.fair_credit')}</option>
                      <option>{t('financing.poor_credit')}</option>
                      <option>{t('financing.not_sure')}</option>
                   </select>
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('financing.income')}</span></label>
                   <div className="clear-both"></div>
                   <div className="relative">
                     <span className={`absolute ${dir === 'rtl' ? 'right-6' : 'left-6'} top-4 text-slate-400 font-bold`}>$</span>
                     <input required type="number" min="0" className={`w-full bg-slate-50 ${dir === 'rtl' ? 'pr-10 pl-6' : 'pl-10 pr-6'} py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:bg-white outline-none transition-all text-sm`} />
                   </div>
                 </div>
              </div>

              <div className="pt-8">
                 <button 
                   type="submit" 
                   disabled={isSubmitting}
                   className={`w-full font-bold py-4 px-6 rounded-2xl text-lg flex items-center justify-center transition-all ${
                     isSubmitting ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-200'
                   }`}
                 >
                    {isSubmitting ? t('financing.processing') : t('financing.get_preapp')}
                 </button>
                 <p className="text-[10px] text-slate-400 text-center mt-6 uppercase tracking-wider font-bold">
                   {t('financing.auth')}
                 </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
