/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Opportunity } from './components/Opportunity';
import { Phases } from './components/Phases';
import { Phase1Detail } from './components/Phase1Detail';
import { Phase2Detail } from './components/Phase2Detail';
import { Masterplan } from './components/Masterplan';
import { PousoAlegre } from './components/PousoAlegre';
import { FinancialThesis } from './components/FinancialThesis';
import { CapitalStructure } from './components/CapitalStructure';
import { Valuation } from './components/Valuation';
import { AreaTable } from './components/AreaTable';
import { Footer } from './components/Footer';
import { PinGate } from './components/PinGate';

export default function App() {
  return (
    <PinGate>
      <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-accent selection:text-brand-900">
        <Header />
        <main>
          <Hero />
          <Overview />
          <Opportunity />
          <Phases />
          <Phase1Detail />
          <Phase2Detail />
          <Masterplan />
          <PousoAlegre />
          <FinancialThesis />
          <CapitalStructure />
          <Valuation />
          <AreaTable />
        </main>
        <Footer />
      </div>
    </PinGate>
  );
}
