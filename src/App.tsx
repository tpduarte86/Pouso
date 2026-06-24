/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
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
import { PostHogProvider } from '@posthog/react';

const posthogOptions = {
  api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
  defaults: '2026-05-30',
} as const;

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+P and Mac equivalents
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's' || e.key === 'P' || e.key === 'p' || e.key === 'C' || e.key === 'c')) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
        (e.metaKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's' || e.key === 'P' || e.key === 'p' || e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
      }
    };
    
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <PinGate>
      <PostHogProvider apiKey={import.meta.env.VITE_POSTHOG_PROJECT_TOKEN || 'phc_m5GLytbYznFio3zS44b46bWAtbjEJYDLnnjPYJZRjkC8'} options={posthogOptions}>
        <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-accent selection:text-brand-900 select-none">
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
      </PostHogProvider>
    </PinGate>
  );
}
