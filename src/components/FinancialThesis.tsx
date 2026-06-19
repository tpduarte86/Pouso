import { ShieldCheck, Handshake, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function FinancialThesis() {
  return (
    <section id="investment-thesis" className="py-24 bg-brand-800 relative border-t border-gray-700">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Estrutura & Tese</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Racional de Investimento
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Highlight quote */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-900 border border-accent/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <Quote className="w-12 h-12 text-accent/20 absolute top-6 left-6" />
            <div className="relative z-10 pt-4 pl-6">
               <h3 className="text-xl text-white font-medium mb-4">O Negócio em uma Frase</h3>
               <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed italic">
                  "Estamos oferecendo a oportunidade de comprar um imóvel que funciona como uma <span className="text-accent font-medium">alfândega privada</span> no coração industrial de Minas Gerais. O investidor entra com capital para expandir a estrutura, <span className="text-accent font-medium">recebe aluguel desde o primeiro dia</span>, e nós continuamos cuidando do dia a dia e da gestão imobiliária."
               </p>
            </div>
          </motion.div>

          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-900 border border-gray-700 rounded-3xl p-8 hover:border-gray-500 transition-colors shadow-xl flex flex-col"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl text-white font-medium mb-4">Downside Protection & Barreiras</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-4 text-balance">
              O modelo operacional de um recinto alfandegado (CLIA) exige homologações complexas junto à Receita Federal e órgãos regulatórios (Anvisa/MAPA), além de Capex intensivo em segurança corporativa.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light text-balance">
              Esse cenário resulta em uma <strong>assimetria positiva</strong>: o custo de desmobilização e o risco de transição são proibitivos, garantindo <strong>alta retenção</strong> e blindando o longo prazo.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-brand-900 border border-gray-700 rounded-3xl p-8 hover:border-gray-500 transition-colors shadow-xl flex flex-col"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700">
              <Handshake className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl text-white font-medium mb-4">Alinhamento de Gestão e Operação</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-4 text-balance">
              A transação propõe uma estrutura de parceria onde o desenvolvedor original permanece na linha de frente como <strong>Operating Partner</strong> (Property & Asset Management).
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light text-balance">
              Isso <strong>mitiga o risco de execução</strong> e de relacionamento institucional, preservando o know-how que consolidou o ativo, ao mesmo tempo em que protege o capital alocado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
