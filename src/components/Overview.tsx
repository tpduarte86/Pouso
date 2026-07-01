import { Building2, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Overview() {
  return (
    <section id="overview" className="min-h-screen py-24 flex items-center bg-brand-800 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Visão Geral do Ativo</h2>
          <p className="text-accent text-lg mb-12 uppercase tracking-widest font-medium text-sm">GGM Business Parklog</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                Complexo logístico e industrial alfandegado, operacional e em ampliação. 
                Estrategicamente posicionado no principal eixo econômico do Sul de Minas Gerais, o projeto 
                diferencia-se por sua vocação aduaneira, capacidade masterplan de expansão e foco em operações de alto valor agregado.
              </p>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-brand-900 p-3 rounded-md border border-gray-700 shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-xl mb-1">Localização</h3>
                  <p className="text-gray-400">Rodovia Fernão Dias (BR-381), altura do km 861 <br/> Pouso Alegre, Minas Gerais</p>
                </div>
              </div>

              {/* Progress Bar Distances */}
              <div className="mt-8 mb-10 pt-8 border-t border-gray-800">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-8 block">Distâncias pela Rodovia Fernão Dias</h4>
                <div className="px-1 sm:px-4">
                  <div className="relative w-full h-16">
                    {/* Line */}
                    <div className="absolute top-1.5 left-0 right-0 h-px bg-gray-800 z-0"></div>
                    <div className="absolute top-1.5 left-0 w-full h-px bg-gradient-to-r from-gray-500 via-accent/70 to-accent z-0"></div>
                    
                    {/* SP */}
                    <div className="absolute top-0 left-0 flex flex-col items-start -translate-x-1.5 z-10">
                      <div className="w-3 h-3 rounded-full bg-gray-400 ring-4 ring-brand-800 mb-3"></div>
                      <span className="text-gray-300 font-medium text-sm">São Paulo</span>
                      <span className="text-gray-500 text-xs font-mono mt-1 whitespace-nowrap">0 km</span>
                    </div>
                    
                    {/* Extrema */}
                    <div className="absolute top-0 left-[58%] flex flex-col items-center -translate-x-1/2 z-10">
                      <div className="w-3 h-3 rounded-full bg-accent/80 ring-4 ring-brand-800 mb-3"></div>
                      <span className="text-white font-medium text-sm">Extrema</span>
                      <span className="text-gray-400 text-xs font-mono mt-1 whitespace-nowrap">100 km</span>
                    </div>
                    
                    {/* Pouso Alegre */}
                    <div className="absolute top-0 right-0 flex flex-col items-end translate-x-1.5 z-10">
                      <div className="w-3.5 h-3.5 rounded-full border-[3px] border-accent bg-brand-800 mb-2.5 shadow-[0_0_12px_rgba(180,133,48,0.6)] box-content"></div>
                      <span className="text-accent font-medium text-sm">Pouso Alegre</span>
                      <span className="text-accent/80 text-xs font-mono mt-1 whitespace-nowrap">+70 km</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative">
                <img 
                  src={`${import.meta.env.BASE_URL}cliaaerea.png`} 
                  alt="Vista Aérea do Complexo" 
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-sm font-medium">Vista aérea do Complexo</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-900 p-8 border border-gray-800 hover:border-accent/40 transition-colors">
                <Building2 className="w-7 h-7 text-accent mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Hub Industrial</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A rodovia atua como um hub consolidado atraindo grandes players como Midea, Boticário, Mercado Livre e outros. O entorno abriga centros de distribuição da <a href="https://www.youtube.com/watch?v=d8_7SyprweQ" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Unilever (fundo KNRI11)</a> e União Química, além da atuação industrial da Biolab, Yoki e Pouso Alegre Business Park. Próximo à intersecção com a BR-459, destaca-se o distrito industrial com instalações da Cimed e XCM.
                </p>
              </div>

              <div className="bg-brand-900 p-8 border border-gray-800 hover:border-accent/40 transition-colors">
                <TrendingUp className="w-7 h-7 text-accent mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Demanda Não Atendida e Autonomia</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A atratividade da região consolidou-se fortemente e hoje seu crescimento já independe de benefícios fiscais para atrair empresas. O mercado local opera em um cenário de demanda reprimida evidente: a procura por galpões de alto padrão é consideravelmente maior que a oferta existente. Atualmente, a vacância em empreendimentos premium (Classe A) na área é praticamente nula. Grandes indústrias e varejistas seguem buscando ativamente espaços de qualidade para expandir suas operações, mas esbarram na total falta de disponibilidade, garantindo absorção rápida e acelerada para novas construções.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
