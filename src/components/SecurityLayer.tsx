import { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

export function SecurityLayer() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    // Prevent right-click menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Keyboard shortcuts detection
    const handleKeyDown = (e: KeyboardEvent) => {
      // Print Screen
      if (e.key === 'PrintScreen') {
        triggerProtection();
      }
      
      // Mac shortcuts Command + Shift + 3, 4, 5
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        triggerProtection();
      }

      // Prevent Ctrl+P / Cmd+P
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        triggerProtection();
      }
    };
    
    const triggerProtection = () => {
      setIsBlurred(true);
      try {
        navigator.clipboard.writeText('Conteúdo confidencial. A cópia é proibida.');
      } catch (err) {
        // Ignore clipboard errors
      }
      setTimeout(() => setIsBlurred(false), 3000);
    };

    // Blur on losing focus / switching tabs
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
    
    // Some browsers use blur/focus instead of visibilitychange
    const handleBlur = () => setIsBlurred(true);
    const handleFocus = () => setIsBlurred(false);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  if (!isBlurred) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-brand-900 backdrop-blur-3xl flex items-center justify-center p-6">
      <div className="text-center p-8 bg-brand-800 rounded-3xl border border-red-500/30 max-w-md w-full shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6 relative z-10" />
        <h2 className="text-2xl text-white font-medium mb-3 relative z-10">Conteúdo Confidencial</h2>
        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
          A captura de tela, gravação ou impressão deste material é restrita. Os dados apresentados são sigilosos e de propriedade exclusiva do CLIA Pouso Alegre.
        </p>
      </div>
    </div>
  );
}
