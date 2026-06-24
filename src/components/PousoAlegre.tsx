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
                Diferente do varejo volátil, plantas industriais e logísticas exigem maquinário pesado e infraestrutura dedicada de alto custo, ancorando essas empresas à região de forma perene e estável.
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
                As grandes indústrias atraem e retroalimentam uma teia de fornecedores de ponta, ferramentarias e prestadores de serviço, compondo um grande ecossistema produtivo.
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
                    <h4 className="text-white font-medium text-lg mb-2">Entroncamento</h4>
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

        {/* Newsflow moved to Pouso Alegre */}
        <div className="mt-20 border-t border-gray-800 pt-16">
          <div className="mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-2 block">Mercado & Perspectivas</span>
            <h3 className="text-3xl font-serif text-white">Newsflow Positivo</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Video */}
            <motion.a 
              href="https://g1.globo.com/mg/sul-de-minas/videos-jornal-da-eptv-2-edicao/video/centro-logistico-de-pouso-alegre-triplica-de-tamanho-e-movimenta-us-250-milhoes-em-2026-14651177.ghtml"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group block bg-brand-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-accent/5 relative flex flex-col"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img 
                  src="https://s02.video.glbimg.com/x720/14651177.jpg" 
                  alt="G1 Pouso Alegre" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded uppercase tracking-wider">G1 Sul de Minas</span>
                </div>
                <h4 className="text-lg font-serif text-white mb-3 group-hover:text-accent transition-colors">
                  Centro logístico triplica de tamanho e movimenta US$ 250 milhões
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Reportagem da EPTV destaca a expansão das operações logísticas em Pouso Alegre, reforçando a posição estratégica e aumento na demanda.
                </p>
                <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Ler matéria &rarr;
                </div>
              </div>
            </motion.a>

            {/* Card Notícia 1 */}
            <motion.a 
              href="https://diariodocomercio.com.br/economia/pouso-alegre-armazem-refrigerado/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group block bg-brand-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-accent/5 relative flex flex-col"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                 <img 
                  src={`${import.meta.env.BASE_URL}fulwood.jpeg`} 
                  alt="Galpão Logístico Fulwood" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 opacity-0">
                  <span className="px-2 py-1 bg-transparent text-transparent text-[10px] font-bold rounded uppercase tracking-wider">.</span>
                </div>
                <h4 className="text-lg font-serif text-white mb-3 group-hover:text-accent transition-colors">
                  Fulwood firma locação com Iveco e Mercado Livre
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Gigantes como Iveco e Mercado Livre iniciaram operações nas instalações da Fulwood em Pouso Alegre, atestando a liquidez Triple A da região.
                </p>
                <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Ler matéria &rarr;
                </div>
              </div>
            </motion.a>

            {/* Card Notícia 2 */}
            <motion.a 
              href="https://diariodocomercio.com.br/economia/pouso-alegre-armazem-refrigerado/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group block bg-brand-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-accent/5 relative flex flex-col"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Armazém Refrigerado Pouso Alegre" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 mb-4 opacity-0">
                  <span className="px-2 py-1 bg-transparent text-transparent text-[10px] font-bold rounded uppercase tracking-wider">.</span>
                </div>
                <h4 className="text-lg font-serif text-white mb-3 group-hover:text-white/80 transition-colors">
                  Pouso Alegre ganha novo armazém refrigerado
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  A cidade continua a atrair grandes empreendimentos logísticos. O novo armazém refrigerado chega para alinhar alta demanda.
                </p>
                <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Ler matéria &rarr;
                </div>
              </div>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
