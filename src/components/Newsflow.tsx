import { TrendingUp, Newspaper, ExternalLink, ArrowRight, Building } from 'lucide-react';
import { motion } from 'motion/react';

export function Newsflow() {
  return (
    <section id="newsflow" className="py-24 bg-brand-900 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-800 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Mercado & Perspectivas</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Newsflow Positivo
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
              O ecossistema de Pouso Alegre continua apresentando tração inegável, com gigantes logísticos e industriais firmando compromissos de longo prazo na região.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card Notícia 1: Fulwood / Iveco / Mercado Livre */}
          <motion.a 
            href="https://diariodocomercio.com.br/economia/pouso-alegre-armazem-refrigerado/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group block bg-brand-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-accent/5 relative"
          >
            <div className="absolute top-4 right-4 bg-brand-900 p-2 rounded-full border border-gray-700 group-hover:bg-accent group-hover:border-accent transition-colors z-20">
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-900" />
            </div>
            
            <div className="h-48 bg-gray-800 relative overflow-hidden">
               <img 
                src="/fulwood.jpeg" 
                alt="Galpão Logístico Fulwood" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-800 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                 <span className="px-3 py-1 text-xs font-medium bg-brand-900/80 text-white rounded border border-gray-700 backdrop-blur-sm">Locação</span>
                 <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded border border-accent/30 backdrop-blur-sm">Aquece o Mercado</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4 text-gray-400 text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Expansão de Players Globais</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">
                Fulwood firma locação com Iveco e Mercado Livre
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Reafirmando a força da região, gigantes como Iveco e Mercado Livre iniciaram operações nas instalações da Fulwood em Pouso Alegre. O movimento deve gerar mais de 1.500 empregos diretos e atesta a liquidez da praça para propriedades logísticas Triple A.
              </p>
              <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                Ler matéria completa <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.a>

          {/* Card Notícia 2: General/Economia */}
          <motion.a 
            href="https://diariodocomercio.com.br/economia/pouso-alegre-armazem-refrigerado/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group block bg-brand-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-accent/5 relative"
          >
            <div className="absolute top-4 right-4 bg-brand-900 p-2 rounded-full border border-gray-700 group-hover:bg-accent group-hover:border-accent transition-colors z-20">
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-900" />
            </div>

            <div className="h-48 bg-gray-800 relative overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
                alt="Armazém Refrigerado Pouso Alegre" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-800 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                 <span className="px-3 py-1 text-xs font-medium bg-brand-900/80 text-white rounded border border-gray-700 backdrop-blur-sm">Logística</span>
                 <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded border border-accent/30 backdrop-blur-sm">Novo Empreendimento</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4 text-gray-400 text-sm font-medium">
                <Building className="w-4 h-4 text-accent" />
                <span>Crescimento Regional</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-white/80 transition-colors">
                Pouso Alegre ganha novo armazém refrigerado
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A cidade continua a atrair grandes empreendimentos logísticos. O novo armazém refrigerado chega para atender a crescente demanda da região, solidificando Pouso Alegre como um dos principais hubs do interior.
              </p>
              <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                Ler matéria completa <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
