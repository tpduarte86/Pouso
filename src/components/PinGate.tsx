import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export function PinGate({ children }: { children: React.ReactNode }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '0492') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPin('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-brand-800 flex flex-col items-center justify-center px-4 selection:bg-accent selection:text-white">
      <div className="max-w-md w-full bg-brand-900 rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-700">
        <div className="p-8 md:p-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-brand-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700 shadow-sm">
            <Lock className="w-7 h-7 text-accent" />
          </div>
          
          <h2 className="text-2xl font-bold text-center text-white mb-2">Acesso Restrito</h2>
          <p className="text-gray-400 text-center mb-8 text-sm px-4">
            A apresentação é confidencial e destina-se apenas à pessoa que recebeu o e-mail. Insira o PIN para visualizar.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
              <input
                type="password"
                inputMode="numeric"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ''));
                  setError(false);
                }}
                className={`w-full text-center text-3xl font-mono py-4 px-4 bg-brand-800 text-white border rounded-xl outline-none transition-all placeholder:text-gray-600 ${
                  error ? 'border-red-500 focus:border-red-500 ring-4 ring-red-500/10' : 'border-gray-700 focus:border-accent focus:ring-4 focus:ring-accent/10'
                }`}
                style={{ letterSpacing: pin.length > 0 ? '0.5em' : 'normal' }}
                placeholder="PIN"
                autoFocus
              />
              {error && (
                <p className="text-red-500/90 text-sm text-center mt-3 font-medium">
                  PIN incorreto. Tente novamente.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-4 rounded-xl transition-all shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
            >
              Acessar Apresentação
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
