import { HardHat, Expand, Compass, FileCheck2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Phase2Detail() {
  return (
    <section id="phase2" className="min-h-screen py-24 flex items-center bg-brand-900 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 xl:order-1 relative flex flex-col gap-6"
          >
            {/* Visual element simulating the aerial view / masterplan extension */}
            <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative aspect-[4/3] bg-brand-800 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}cliafase2.png`} 
                alt="Interior Fase 2 em obras" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-brand-900/80 backdrop-blur-sm p-5 rounded-lg border border-gray-700 flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">Interior do Galpão</p>
                      <p className="text-gray-400 text-sm">Obras internas e nivelamento de piso</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center bg-accent/10 shrink-0">
                      <HardHat className="w-6 h-6 text-accent" />
                    </div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl relative aspect-square bg-brand-800 flex items-center justify-center p-4 text-center">
                 <div className="relative z-10">
                   <h4 className="text-accent font-serif tracking-widest text-sm uppercase mb-2">Status</h4>
                   <p className="text-white text-xs md:text-sm text-balance">Falta apenas finalização de piso interno e pavimentação do pátio.</p>
                 </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl relative aspect-square bg-brand-800">
                <img 
                  src={`${import.meta.env.BASE_URL}clia2.png`} 
                  alt="Vista aérea de obras / terreno e galpões" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-medium">Vista aérea da expansão</span>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="hidden md:block absolute -top-8 -left-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 xl:order-2"
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Próximos Passos</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Fase 2: Ampliação</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
              Em fase avançada e reta final de entrega, a expansão do empreendimento mantém rigorosamente a mesma 
              qualidade arquitetônica e estrutural da etapa pioneira.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-brand-800 p-6 rounded-xl border border-gray-700">
                <Expand className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-white font-medium text-lg mb-2">Escopo do Projeto</h4>
                <p className="text-gray-400 text-sm">
                  Compreende a ampliação longitudinal do galpão já existente (Fase 1), além do levantamento 
                  de uma nova nave logística anexa e a expansão da área pavimentada do pátio para manobras e carretas.
                </p>
              </div>

              <div className="bg-brand-800 p-6 rounded-xl border border-gray-700">
                <FileCheck2 className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-white font-medium text-lg mb-2">Padrão Construtivo</h4>
                <p className="text-gray-400 text-sm">
                  As novas naves preservam as <strong>especificações Triple A</strong>: pé-direito elevado, docas funcionais, 
                  combate a incêndio moderno e modulação flexível de grids, espelhando a solidez técnica da Fase 1.
                </p>
              </div>

              <div className="bg-brand-800 p-6 rounded-xl border border-gray-700 md:col-span-2">
                <Compass className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-white font-medium text-lg mb-2">Momento Atual (Obras em Acabamento)</h4>
                <div className="w-full bg-brand-900 rounded-full h-2.5 mb-4 border border-gray-800">
                  <div className="bg-gradient-to-r from-accent/60 to-accent h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  O cerne estrutural (fundações, pilares, cobertura e fechamento) encontra-se concluído. 
                  As frentes de trabalho concentram-se na finalização do <strong>piso interno de alta resistência</strong> e na 
                  <strong> pavimentação asfáltica/concreto do pátio externo</strong>.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
