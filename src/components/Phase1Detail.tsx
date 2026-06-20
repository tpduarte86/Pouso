import { Check, ThermometerSnowflake, Ruler, ShieldCheck, Box, Building } from 'lucide-react';
import { motion } from 'motion/react';

export function Phase1Detail() {
  const specs = [
    { icon: Ruler, text: "Pé-direito livre de 12 metros" },
    { icon: Box, text: "Piso industrial de alta resistência" },
    { icon: ShieldCheck, text: "Sistema de combate a incêndio com Sprinklers e Docas Niveladas" },
    { icon: ThermometerSnowflake, text: "5 Câmaras Frias ativas (operações farmacêuticas e Anvisa)" },
  ];

  return (
    <section id="phase1" className="min-h-screen py-24 flex items-center bg-brand-800 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Detalhes do Ativo</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Fase 1: Ocupação CLIA</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Entregue e inaugurada ao final de <strong>novembro de 2025</strong>, a primeira fase da estrutura 
              foi desenhada integralmente para abrigar a operação do CLIA e suas estruturas alfandegadas de controle, possuindo contrato de locação em vigor até o ano de 2045.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="bg-brand-900 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-gray-700">
                  <Building className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-2">Complexo Administrativo</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Edifício de dois pavimentos. O pavimento térreo suporta a operação direta do CLIA, 
                    enquanto o superior dispõe de 60 salas corporativas — já contando com 13 unidades pré-locadas 
                    por empresas correlacionadas à dinâmica aduaneira e logística.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-900 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-gray-700">
                  <Box className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-2">Estrutura Operacional Aduaneira</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    O complexo conta com galpão de armazenagem seca, pátio dedicado para containers, gate principal 
                    com portaria restrita/controlada, além de estruturas de suporte aos caminhoneiros e <i>staff</i>.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs border-b border-gray-700 pb-2">Especificações Técnicas do Galpão</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <spec.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{spec.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Using a placeholder that resembles an industrial facade from Unsplash */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}clia1.png`} 
                alt="Galpão Industrial Logístico - Fachada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-medium">Fachada / Prédio Administrativo</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-700">
                <img 
                  src={`${import.meta.env.BASE_URL}clia3.png`} 
                  alt="Interior Galpão Logístico" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-medium">Interior do Galpão</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-700">
                <img 
                  src={`${import.meta.env.BASE_URL}cliapatio.jpeg`} 
                  alt="Pátio CLIA" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-medium">Pátio de Movimentação</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
