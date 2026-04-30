import React from 'react';
import { Shield, Users, Banknote, Car, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="bg-slate-50 min-h-screen">
       {/* Hero */}
       <div className="bg-slate-900 text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden rounded-b-[40px] shadow-2xl shadow-slate-900/20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">{t('about.hero_title')} <br/><span className="text-red-500">{t('about.hero_title_hl')}</span></h1>
             <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">{t('about.hero_desc')}</p>
          </div>
       </div>

       {/* Values */}
       <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="text-center bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                   <Banknote className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{t('about.trans_title')}</h3>
                <p className="text-slate-500 leading-relaxed">{t('about.trans_desc')}</p>
             </div>
             <div className="text-center bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6">
                   <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{t('about.cert_title')}</h3>
                <p className="text-slate-500 leading-relaxed">{t('about.cert_desc')}</p>
             </div>
             <div className="text-center bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center mx-auto mb-6">
                   <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{t('about.cust_title')}</h3>
                <p className="text-slate-500 leading-relaxed">{t('about.cust_desc')}</p>
             </div>
          </div>
       </div>

       {/* Guarantee List */}
       <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <div className="bg-white border text-slate-900 border-slate-200 rounded-[40px] p-8 sm:p-14 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <h2 className="text-4xl font-black text-center mb-12 relative z-10">{t('about.promise_title')} <span className="text-red-600">{t('about.promise_title_hl')}</span></h2>
                <div className="space-y-6 relative z-10">
                   {[
                      t('about.p1'),
                      t('about.p2'),
                      t('about.p3'),
                      t('about.p4')
                   ].map((item, i) => (
                      <div key={i} className="flex items-start gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-colors text-start">
                         <div className="bg-red-600 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-red-200">
                            <Check className="w-5 h-5 text-white" />
                         </div>
                         <p className="text-lg text-slate-700 font-bold leading-relaxed">{item}</p>
                      </div>
                   ))}
                </div>
                <div className="mt-14 text-center relative z-10">
                   <Link to="/inventory" className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-12 rounded-2xl transition-colors shadow-2xl shadow-slate-900/20 text-lg">
                      {t('about.exp')}
                   </Link>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
