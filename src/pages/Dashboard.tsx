import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Package, Car, User, LogOut, ChevronRight, Activity, Clock } from 'lucide-react';

export default function Dashboard() {
  const { t, dir } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const activeOrders = [
    { id: 'TD-938472', vehicle: '2023 Toyota Land Cruiser', status: t('tracker.status_prep'), date: 'Oct 12, 2026' }
  ];

  const savedVehicles = [
    { id: '4', year: 2024, make: 'Toyota', model: 'Tundra', trim: 'TRD Pro', price: 69900, image: 'https://images.unsplash.com/photo-1612480838118-2ad1e531f879?auto=format&fit=crop&q=80&w=1200' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
           <div>
             <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">{t('dashboard.title')}</h1>
             <p className="text-lg text-slate-500">{t('dashboard.welcome')}, <span className="font-bold text-slate-900">{user.name}</span>.</p>
           </div>
           <div>
             <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl hover:bg-slate-100 hover:text-slate-900 transition-colors font-bold shadow-sm">
                <LogOut className="w-5 h-5" />
                {t('dashboard.logout')}
             </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Sidebar */}
           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-[32px] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                 <div className="w-24 h-24 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10" />
                 </div>
                 <h2 className="font-black text-xl text-slate-900">{user.name}</h2>
                 <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">{user.email}</p>
                 
                 <div className="flex justify-around">
                    <div className="text-center">
                       <p className="text-3xl font-black text-slate-900">{activeOrders.length}</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase">{t('dashboard.active_orders')}</p>
                    </div>
                    <div className="text-center">
                       <p className="text-3xl font-black text-slate-900">{savedVehicles.length}</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase">{t('dashboard.saved_vehicles')}</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Main Content */}
           <div className="lg:col-span-2 space-y-8">
              
              {/* Active Orders */}
              <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-start">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="font-black text-2xl text-slate-900 flex items-center gap-3">
                       <Package className="w-6 h-6 text-red-600" />
                       {t('dashboard.active_orders')}
                    </h3>
                    <Link to="/tracker" className="text-sm font-bold text-red-600 hover:text-red-700">{t('dashboard.track_order')}</Link>
                 </div>

                 {activeOrders.length > 0 ? (
                    <div className="space-y-4">
                       {activeOrders.map(order => (
                          <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors group cursor-pointer bg-slate-50/50">
                             <div className="flexitems-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 float-start me-4">
                                   <Activity className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                   <p className="font-bold text-slate-900">{order.vehicle}</p>
                                   <p className="text-slate-500 text-sm flex items-center gap-2 mt-0.5">
                                      <span className="font-mono text-xs">{order.id}</span>
                                      <span>•</span>
                                      <Clock className="w-3 h-3" />
                                      {order.date}
                                   </p>
                                </div>
                             </div>
                             <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                <span className="text-sm font-bold text-slate-700">{order.status}</span>
                                <ChevronRight className={`w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                             </div>
                          </div>
                       ))}
                    </div>
                 ) : (
                    <div className="text-center py-8">
                       <p className="text-slate-500">{t('dashboard.no_orders')}</p>
                    </div>
                 )}
              </div>

              {/* Saved Vehicles */}
              <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-start">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="font-black text-2xl text-slate-900 flex items-center gap-3">
                       <Car className="w-6 h-6 text-red-600" />
                       {t('dashboard.saved_vehicles')}
                    </h3>
                    <Link to="/inventory" className="text-sm font-bold text-red-600 hover:text-red-700">{t('dashboard.view_all')}</Link>
                 </div>

                 {savedVehicles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {savedVehicles.map(vehicle => (
                          <Link key={vehicle.id} to={`/inventory/${vehicle.id}`} className="group relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3]">
                             <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-5">
                                <h4 className="text-white font-black text-lg">{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                                <p className="text-red-400 font-bold">${vehicle.price.toLocaleString()}</p>
                             </div>
                          </Link>
                       ))}
                    </div>
                 ) : (
                    <div className="text-center py-8">
                       <p className="text-slate-500">{t('dashboard.no_saved')}</p>
                    </div>
                 )}
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}
