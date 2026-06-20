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
              
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-brand-900 p-3 rounded-md border border-gray-700 shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-xl mb-1">Localização</h3>
                  <p className="text-gray-400">Rodovia Fernão Dias (BR-381), altura do km 861 <br/> Pouso Alegre, Minas Gerais</p>
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
                <h3 className="text-white text-xl font-medium mb-3">Vizinhança Corporativa</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A rodovia atua como um hub consolidado atraindo grandes players. O entorno abriga centros de distribuição da Unilever (fundo KNRI) e União Química, além da atuação industrial da Biolab, Yoki e Pouso Alegre Business Park. Próximo à intersecção com a BR-459, destaca-se o distrito industrial com instalações da Cimed e XCM.
                </p>
              </div>

              <div className="bg-brand-900 p-8 border border-gray-800 hover:border-accent/40 transition-colors">
                <TrendingUp className="w-7 h-7 text-accent mb-4" />
                <h3 className="text-white text-xl font-medium mb-3">Dinâmica de Mercado</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A região apresenta forte absorção por meio de desenvolvimentos sob medida atrelados a contratos atípicos de longo prazo. A métrica atual entre elevados custos construtivos e tickets de locação restringe o surgimento de empreendimentos puramente especulativos, blindando ativos já posicionados.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
