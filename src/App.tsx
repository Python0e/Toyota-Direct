/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import VDP from './pages/VDP';
import Financing from './pages/Financing';
import TradeIn from './pages/TradeIn';
import About from './pages/About';
import Export from './pages/Export';
import Payment from './pages/Payment';
import Tracker from './pages/Tracker';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequestCar from './pages/RequestCar';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<VDP />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/export" element={<Export />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/request-car" element={<RequestCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
