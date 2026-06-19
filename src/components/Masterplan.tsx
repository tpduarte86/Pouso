import { Layers, Map } from 'lucide-react';
import { motion } from 'motion/react';

export function Masterplan() {
  return (
    <section id="masterplan" className="min-h-screen py-24 flex items-center bg-brand-800 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Visão de Futuro</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Masterplan & Expansão</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl font-light">
            O terreno possui ampla capacidade instalada e flexibilidade construtiva. O zoneamento e as integrações de infraestrutura viabilizaram o desenvolvimento estruturado das Fases 1 e 2, garantindo e preservando uma vasta área (Landbank) para as expansões futuras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative aspect-[4/3] bg-brand-800 flex items-center justify-center p-2">
              <img 
                src={`${import.meta.env.BASE_URL}Masterplan hoje-Fase1e2.png`} 
                alt="Masterplan Atual - Fases 1 e 2" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="bg-brand-900 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-800 p-2 rounded-lg border border-gray-700">
                  <Map className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-medium text-xl">Situação Atual (Fases 1 e 2)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Área de implantação do momento presente. Destaca-se a infraestrutura da Fase 1, já plenamente operacional e locada pelo CLIA. Em adição, encontra-se o complexo da Fase 2, abrangendo a extensão do galpão logístico e o novo pátio de manobras que atualmente encontram-se em obras finais.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative aspect-[4/3] bg-brand-800 flex items-center justify-center p-2">
              <img 
                src={`${import.meta.env.BASE_URL}MasterplanFase3.png`} 
                alt="Masterplan Expansão - Fase 3" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="bg-brand-900 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-800 p-2 rounded-lg border border-gray-700">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-medium text-xl">Expansão e Vocação (Fase 3+)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Perspectiva global do Masterplan, evidenciando os blocos delineados para expansão futura. Estes quadrantes (destacados no layout) suportam o adensamento construtivo do parque, pavimentando trajeto arquitetônico para mais rodadas de galpões modulares de alto padrão, capturando o upside do mercado local.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
