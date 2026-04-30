import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronRight, Check } from 'lucide-react';
import { inventory } from '../data/inventory';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Inventory() {
  const { t, dir } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filterModel = searchParams.get('model') || '';
  const filterPrice = searchParams.get('price') || '';

  const filteredInventory = useMemo(() => {
    return inventory.filter(vehicle => {
      if (filterModel && vehicle.model !== filterModel && !vehicle.model.startsWith(filterModel)) return false;
      if (filterPrice && vehicle.price > parseInt(filterPrice)) return false;
      return true;
    });
  }, [filterModel, filterPrice]);

  const updateSearchParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const models = Array.from(new Set(inventory.map(v => v.model.split(' ')[0]))); // simplistic

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
           <div className="text-start">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">{t('inventory.title')}</h1>
              <p className="text-slate-500 mt-1">{t('inventory.showing_results', {count: filteredInventory.length})}</p>
           </div>
           
           {/* Mobile Filter Toggle */}
           <button 
             className="md:hidden w-full flex items-center justify-center gap-2 bg-white border border-slate-300 rounded-xl py-3 font-medium text-slate-700"
             onClick={() => setIsFiltersOpen(!isFiltersOpen)}
           >
             <Filter className="w-5 h-5" /> {t('inventory.filters')}
           </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-full md:w-64 flex-shrink-0 space-y-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm sticky top-24 text-start">
              <div className="flex items-center gap-2 font-bold text-lg mb-6 pb-4 border-b border-slate-100 text-slate-900">
                <SlidersHorizontal className="w-5 h-5" /> {t('inventory.refine_search')}
              </div>

              {/* Models */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 mb-3">{t('home.model')}</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => updateSearchParam('model', '')}
                    className={`flex items-center w-full text-start text-sm ${!filterModel ? 'font-bold text-red-600' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {!filterModel && <Check className="w-4 h-4 me-2" />}
                    <span className={filterModel ? 'ms-6' : ''}>{t('home.all_models')}</span>
                  </button>
                  {models.map(model => (
                    <button 
                      key={model}
                      onClick={() => updateSearchParam('model', model)}
                      className={`flex items-center w-full text-start text-sm ${filterModel === model ? 'font-bold text-red-600' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {filterModel === model && <Check className="w-4 h-4 me-2" />}
                      <span className={filterModel !== model ? 'ms-6' : ''}>{model}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Price */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">{t('home.max_price')}</h3>
                <select 
                  className="w-full bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-red-600 outline-none text-sm p-3 transition-all text-slate-700"
                  value={filterPrice}
                  onChange={(e) => updateSearchParam('price', e.target.value)}
                  dir="ltr"
                >
                  <option value="">{t('inventory.any_price')}</option>
                  <option value="20000">{t('home.under', {price: '20,000'})}</option>
                  <option value="25000">{t('home.under', {price: '25,000'})}</option>
                  <option value="30000">{t('home.under', {price: '30,000'})}</option>
                  <option value="40000">{t('home.under', {price: '40,000'})}</option>
                  <option value="50000">{t('home.under', {price: '50,000'})}</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
             {filteredInventory.length === 0 ? (
                <div className="bg-white rounded-[32px] p-12 text-center border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t('inventory.no_vehicles')}</h3>
                  <p className="text-slate-500 mb-6">{t('inventory.try_adjusting')}</p>
                  <button 
                    onClick={() => { updateSearchParam('model', ''); updateSearchParam('price', ''); }}
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-2xl hover:bg-slate-800 transition-colors"
                  >
                     {t('inventory.clear_filters')}
                  </button>
                </div>
             ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredInventory.map(vehicle => (
                    <motion.div 
                      key={vehicle.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm relative group flex flex-col"
                    >
                      <Link to={`/inventory/${vehicle.id}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
                        <img 
                          src={vehicle.image} 
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        {vehicle.tags.length > 0 && (
                          <div className="absolute top-3 start-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {vehicle.tags[0]}
                          </div>
                        )}
                      </Link>
                      <div className="flex flex-col flex-grow text-start">
                        <h3 className="text-lg font-bold mb-1 leading-tight text-slate-900">
                           <Link to={`/inventory/${vehicle.id}`} className="hover:text-red-600 transition-colors">
                              <span dir="ltr" className="float-start">{vehicle.year} {vehicle.make} {vehicle.model}</span>
                           </Link>
                        </h3>
                        <div className="clear-both"></div>
                        <p className="text-slate-500 text-sm mb-4 line-clamp-1"><span dir="ltr" className="float-start">{vehicle.mileage.toLocaleString()} mi • {vehicle.engine}</span></p>
                        <div className="clear-both"></div>
                        
                        <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-100">
                           <span className="text-xl font-black text-red-600" dir="ltr">${vehicle.price.toLocaleString()}</span>
                           <Link to={`/inventory/${vehicle.id}`} className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-2.5 px-4 rounded-xl text-center transition-colors text-sm">
                             {t('home.details')}
                           </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
