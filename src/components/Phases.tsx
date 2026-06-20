import { CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Phases() {
  return (
    <section id="phases" className="min-h-screen py-24 flex items-center bg-brand-900 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Desenvolvimento & Ocupação</h2>
            <p className="text-accent text-sm md:text-base uppercase tracking-widest font-medium">Cronograma de Expansão</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Decorative background line connecting steps */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gray-800 -z-0"></div>

            <div className="bg-brand-800 p-8 border border-gray-700 relative z-10 hover:border-accent/50 transition-colors group">
              <div className="bg-brand-900 w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-accent group-hover:bg-accent/10 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-3 block border-s-2 border-accent ps-3">Entregue (Fim 2025)</span>
              <h3 className="text-white text-2xl font-medium mb-4">Fase 1: Operacional</h3>
              <div className="flex items-center gap-2 mb-4 bg-brand-900 border border-gray-700 w-fit px-3 py-1 rounded-full">
                <span className="text-gray-400 text-xs font-medium">ABL:</span>
                <span className="text-accent text-sm font-bold">17.989,77 m²</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Módulo 100% locado para o <strong>CLIA</strong> (Centro Logístico e Industrial Aduaneiro). 
                A infraestrutura suporta operações aduaneiras de importação/exportação da Receita Federal e inclui áreas administrativas, pátios de movimentação e dupla câmara fria (certificação Anvisa) para cadeia farmacêutica.
              </p>
            </div>

            <div className="bg-brand-800 p-8 border border-gray-700 relative z-10 hover:border-gray-500 transition-colors group">
              <div className="bg-brand-900 w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-3 block border-s-2 border-blue-500/50 ps-3">Obras (1º Sem. 2026)</span>
              <h3 className="text-white text-2xl font-medium mb-4">Fase 2: Ampliação Imediata</h3>
              <div className="flex items-center gap-2 mb-4 bg-brand-900 border border-gray-700 w-fit px-3 py-1 rounded-full">
                <span className="text-gray-400 text-xs font-medium">ABL:</span>
                <span className="text-blue-400 text-sm font-bold">27.665,00 m²</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expansão compreendendo novos galpões logísticos flexíveis e pátio anexo. Atualmente sem contratos formais de pré-locação, porém com tratativas avançadas e naturais para absorção pelo próprio inquilino âncora (CLIA), de modo a suportar o gargalo e fluxo crescente de sua operação alfandegada.
              </p>
            </div>

            <div className="bg-brand-800 p-8 border border-dashed border-gray-700 relative z-10 hover:border-gray-500 transition-colors group">
              <div className="bg-brand-900 w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-gray-600 group-hover:bg-gray-800 transition-colors">
                <ChevronRight className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-3 block border-s-2 border-gray-600 ps-3">Landbank</span>
              <h3 className="text-white text-2xl font-medium mb-4">Fases 3 & 4: Futuro</h3>
              <div className="flex items-center gap-2 mb-4 bg-brand-900 border border-gray-700 w-fit px-3 py-1 rounded-full">
                <span className="text-gray-400 text-xs font-medium">ABL Potencial:</span>
                <span className="text-gray-300 text-sm font-bold">63.240,00 m²</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                As diretrizes do masterplan global atestam a capacidade viabilizada do terreno para receber e estruturar mais duas rodadas subsequentes de armazéns logísticos. Isso garante flexibilidade para adensamento do polo conforme ciclo econômico e tração de infraestrutura em Pouso Alegre.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
