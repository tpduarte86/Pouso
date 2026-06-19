import { Target } from 'lucide-react';
import { motion } from 'motion/react';

export function Opportunity() {
  return (
    <section id="opportunity" className="py-24 bg-brand-900 border-t border-gray-800 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
               <Target className="w-5 h-5 text-accent" />
               <span className="text-accent text-sm uppercase tracking-widest font-medium">Tese de Investimento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              A Oportunidade
            </h2>
            
            <div className="prose prose-invert prose-lg text-gray-300 font-light leading-relaxed">
              <p>
                A oportunidade consiste no <strong>aporte de capital e/ou aquisição estratégica de um ativo logístico built-to-suit de alto padrão</strong>, integralmente locado para o CLIA Pouso Alegre.
              </p>
              <p>
                Localizado no km 861 da Rodovia Fernão Dias (BR-381), o ativo posiciona-se como o <strong>principal hub aduaneiro e de comércio exterior do Sul de Minas Gerais</strong>, consolidando o atendimento industrial de uma região que hoje abriga grandes conglomerados globais, como XCMG, Midea e Iveco, operando de forma independente de incentivos fiscais temporários.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 aspect-[4/3] group">
              <img 
                src={`${import.meta.env.BASE_URL}clia1.png`} 
                alt="CLIA Pouso Alegre - Oportunidade" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-brand-900/80 backdrop-blur-md border border-gray-700 rounded text-xs font-medium text-white mb-2">
                  Ativo Logístico Built-to-Suit
                </span>
                <h3 className="text-white text-lg font-medium drop-shadow-md">CLIA Pouso Alegre</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
