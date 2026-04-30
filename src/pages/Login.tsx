import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export default function Login() {
  const { t, dir } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for demo purposes
    if (email && password) {
      login(email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-md w-full px-4 sm:px-6">
        
        <div className="text-center mb-10">
           <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
             <Lock className="w-10 h-10" />
           </div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">{t('auth.login_title')}</h1>
           <p className="text-lg text-slate-500">{t('auth.login_subtitle')}</p>
        </div>

        <div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 p-8 sm:p-10 border border-slate-100 text-start">
           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                 <label className="text-[10px] font-bold text-slate-400 uppercase ms-4" dir="ltr"><span className="float-start">{t('auth.email')}</span></label>
                 <div className="clear-both"></div>
                 <div className="relative">
                    <Mail className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`} />
                    <input 
                      required 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="demo@example.com" 
                      className={`w-full bg-slate-50 border border-slate-200 ${dir === 'rtl' ? 'pr-12 pl-6' : 'pl-12 pr-6'} py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white`} 
                    />
                 </div>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center justify-between mx-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">{t('auth.password')}</label>
                    <a href="#" className="text-[10px] font-bold text-red-600 uppercase hover:text-red-700 transition-colors">{t('auth.forgot')}</a>
                 </div>
                 <div className="relative">
                    <Lock className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`} />
                    <input 
                      required 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" 
                      className={`w-full bg-slate-50 border border-slate-200 ${dir === 'rtl' ? 'pr-12 pl-6' : 'pl-12 pr-6'} py-4 rounded-2xl text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all focus:bg-white`} 
                    />
                 </div>
              </div>

              <div className="p-4 bg-blue-50 text-blue-800 text-xs font-semibold rounded-2xl">
                 {t('auth.demo_note')}
              </div>

              <div className="pt-2">
                 <button type="submit" className={`w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl flex justify-center items-center gap-2 shadow-xl shadow-slate-900/20 transition-all active:scale-[0.98]`}>
                    {t('auth.sign_in')} <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                 </button>
              </div>
           </form>

           <div className="mt-8 text-center text-sm font-medium text-slate-500">
              {t('auth.no_account')} <a href="#" className="text-red-600 hover:text-red-700 mx-1">{t('auth.create_account')}</a>
           </div>
        </div>

      </div>
    </div>
  );
}
