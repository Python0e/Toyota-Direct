import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building2, Copy, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export default function Payment() {
  const { t, dir } = useLanguage();
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = [
    { label: t('payment.account_name'), value: "Toyota Direct Export LLC", id: "name" },
    { label: t('payment.account_number'), value: "3948572019", id: "account" },
    { label: t('payment.routing_number'), value: "021000021", id: "routing" },
    { label: t('payment.swift_bic'), value: "WISEUS33", id: "swift" },
    { label: t('payment.bank_name'), value: "Wise Bank Inc.", id: "bank" },
    { label: t('payment.address'), value: "19 W 24th Street, New York, NY 10010, USA", id: "address" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
             <Building2 className="w-10 h-10" />
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4" dir="ltr">{t('payment.title')}</h1>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('payment.subtitle')}</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden text-slate-900 border border-slate-100 mb-8">
           <div className="p-8 sm:p-10 text-start">
             <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Wise_icon.svg" className="w-12 h-12" alt="Wise Logo" />
               <div>
                  <h2 className="text-xl font-bold text-slate-900">USD Bank Details</h2>
                  <p className="text-sm text-slate-500">For international wires to our US account.</p>
               </div>
             </div>

             <div className="space-y-6">
                {bankDetails.map((detail) => (
                   <div key={detail.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 outline-none">
                      <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">{detail.label}</span>
                      <div className="flex items-center justify-end gap-3">
                         <span className="font-bold text-slate-900 text-lg tracking-tight font-mono">{detail.value}</span>
                         <button 
                            onClick={() => copyToClipboard(detail.value, detail.id)}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            aria-label="Copy to clipboard"
                         >
                            {copied === detail.id ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                         </button>
                      </div>
                   </div>
                ))}
             </div>
           </div>
        </div>

        <div className="bg-blue-50 rounded-[32px] p-8 border border-blue-100 text-start">
           <h3 className="text-xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              {t('payment.important')}
           </h3>
           <ul className={`space-y-3 text-blue-800 ${dir === 'rtl' ? 'pe-8 list-disc' : 'pl-8 list-disc'}`}>
              <li>{t('payment.instruction1')}</li>
              <li>{t('payment.instruction2')}</li>
              <li>{t('payment.instruction3')}</li>
           </ul>
        </div>
        
        <div className="mt-10 text-center">
           <a href="https://wise.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#9FE870] hover:bg-[#8BD85F] text-[#163300] font-black py-4 px-10 rounded-2xl transition-colors shadow-lg shadow-[#9FE870]/30 text-lg">
              {t('payment.pay_now')}
              <ExternalLink className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
           </a>
        </div>

      </div>
    </div>
  );
}
