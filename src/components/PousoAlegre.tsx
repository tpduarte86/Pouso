import { MapPin, TrendingUp, Anchor, GraduationCap, Building2, Link, Layers, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export function PousoAlegre() {
  return (
    <section id="pouso-alegre" className="py-24 bg-brand-800 border-t border-gray-800 relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Slide 1: Visão Macro */}
        <div className="min-h-[80vh] flex flex-col justify-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-4xl"
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Análise de Praça</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Pouso Alegre: O Epicentro Industrial e Logístico
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed font-light">
              Por que corporações globais elegem o principal hub do Sul de Minas por sua incomparável <strong>maturidade estrutural e orgânica</strong>, transcendo os benefícios fiscais primários.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-brand-900 border border-gray-700 p-8 rounded-xl shadow-xl hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-800 border border-gray-600 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">Cinturão Consolidado</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-balance">
                O adensamento de operações de alta complexidade — abrigando gigantes como Unilever, Yoki, Cimed, União Química e XCMG — prova a capacidade da região em suportar demandas corporativas em escala global.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-900 border border-gray-700 p-8 rounded-xl shadow-xl hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-800 border border-gray-600 flex items-center justify-center mb-6">
                <Anchor className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">Resiliência e Capital Fixo</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-balance">
                Diferente do varejo volátil, plantas industriais e logísticas estratégicas exigem maquinário pesado e infraestrutura dedicada de alto custo, ancorando essas empresas à região de forma perene e estável.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brand-900 border border-gray-700 p-8 rounded-xl shadow-xl hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-800 border border-gray-600 flex items-center justify-center mb-6">
                <Link className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">Rede Autossustentável</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-balance">
                A gravidade natural destas grandes indústrias atrai e retroalimenta uma profunda teia de fornecedores de ponta, ferramentarias e prestadores de serviço críticos, compondo um grande ecossistema produtivo.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Slide 2: Vantagens Competitivas e Sinergia */}
        <div className="min-h-[80vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Fatores Chave</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
                A Escolha Lógica do Capital Produtivo
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-2">Entroncamento Estratégico</h4>
                    <p className="text-gray-400 text-sm">
                      Privilegiada pela intersecção rodoferroviária da <strong>Fernão Dias (BR-381) com a BR-459</strong>, fluindo logística direta para os principais mercados consumidores e ramificações de SP, RJ e Belo Horizonte.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <GraduationCap className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-2">Capital Humano Qualificado</h4>
                    <p className="text-gray-400 text-sm">
                      Forte aderência operacional garantida por polos estudantis de excelência. Alta disponibilidade de talentos em engenharia, técnica e gestão administrativa, sustentando a expansão corporativa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-2">O Vetor CLIA (Triplicação)</h4>
                    <p className="text-gray-400 text-sm">
                      A escalada programada para as Fases do empreendimento eliminará o gargalo enfrentado por empresas nas zonas portuárias saturadas, otimizando drasticamente prazos e custos tributários.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Destaque para a Vantagem dos Inquilinos do Masterplan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 bg-brand-900 border border-gray-700 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/20 border border-accent/40 p-2 rounded-lg">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-white font-serif text-2xl">A Vantagem Umbilical: Locatários Futuros</h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                  A concepção do Masterplan do GGM Business Parklog estabeleceu um modelo intrínseco de ganho operacional: a contiguidade física.
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Os futuros entrantes e locatários das próximas fases de expansão (Galpões desenvolvidos e pátios) possuirão uma <strong>ligação umbilical com a operação aduaneira do CLIA (Fase 1/2).</strong> Isto infere vantagens imbatíveis no desembaraço de mercadorias.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-brand-800 p-4 rounded-lg border border-gray-700 flex items-center justify-center text-center">
                    <span className="text-gray-300 text-sm">Transferência imediata do Terminal Alfandegado para a armazenagem final.</span>
                  </div>
                  <div className="bg-brand-800 p-4 rounded-lg border border-gray-700 flex items-center justify-center text-center">
                    <span className="text-gray-300 text-sm">Severa redução e corte de custos de frete rodoviário secundário.</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
