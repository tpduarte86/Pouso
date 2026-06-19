import { motion } from 'motion/react';
import { ArrowRight, Wallet, TrendingUp, PieChart, Building, Lightbulb } from 'lucide-react';

export function CapitalStructure() {
  return (
    <section id="capital-structure" className="py-24 bg-brand-800 border-t border-gray-700 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Racional de Investimento / M&A</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Estruturação de Capital
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto font-light">
              Duas alternativas de alocação estratégica adaptadas ao perfil de risco/retorno do Fundo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Opção A */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col bg-brand-900 border border-gray-700/60 rounded-3xl overflow-hidden shadow-2xl relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
             
             <div className="p-8 md:p-10 flex-grow relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                    <Wallet className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-medium">Opção A – Aquisição das áreas performadas</h3>
                    <p className="text-accent text-sm font-medium">Foco em Renda Imediata</p>
                  </div>
                </div>

                <ul className="space-y-6 mb-8 mt-8">
                  <li className="flex items-start gap-4">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Tese de Investimento:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">Alocação de capital focada puramente em tijolo performado, mitigando risco de engenharia e trazendo dividendo imediato para a base de cotistas.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Building className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Estrutura Propriedade:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">Aquisição de 100% da Fase 1 operacional via transação secundária (Cash-Out).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Pipeline de Crescimento:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">Garantia de direito de preferência (Right of First Refusal) e opção de compra para as Fases 2, 3 e 4 à medida que forem estabilizadas pelo desenvolvedor.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center justify-center mb-8">
                  <span className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Cap Rate de Entrada (Fase 1)</span>
                  <span className="text-4xl md:text-5xl font-bold text-accent">10,00%</span>
                </div>

             </div>

             {/* Tabela Opção A */}
             <div className="bg-gray-800/80 p-6 md:p-10 border-t border-gray-700">
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                   Métricas da Aquisição das áreas performadas (Fase 1)
                </h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-700">
                                <th className="pb-3 font-medium">Métrica de Mercado</th>
                                <th className="pb-3 font-medium text-right">Valor / Indicador</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3">Valuation Alocado (Fase 1)</td>
                                <td className="py-3 text-right">R$ 94.000.000</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3">Receita Mensal Corrente (Fase 1)</td>
                                <td className="py-3 text-right">R$ 783.000</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3 font-medium text-white">NOI Anualizado Projetado</td>
                                <td className="py-3 text-right font-medium text-white">R$ 9.396.000</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3 text-accent font-medium">Cap Rate de Entrada (Tijolo)</td>
                                <td className="py-3 text-right text-accent font-medium">10,00% ao ano</td>
                            </tr>
                            <tr>
                                <td className="py-3">Risco de Engenharia / Obra</td>
                                <td className="py-3 text-right text-gray-400">Zero (Ativo Performado)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </motion.div>

          {/* Card 2: Opção B */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col bg-brand-900 border border-gray-700/60 rounded-3xl overflow-hidden shadow-2xl relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
             
             <div className="p-8 md:p-10 flex-grow relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-medium">Opção B – Aporte Primário</h3>
                    <p className="text-accent text-sm font-medium">Foco em Ganho de Capital / Value-Add</p>
                  </div>
                </div>

                <ul className="space-y-6 mb-8 mt-8">
                  <li className="flex items-start gap-4">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Tese de Investimento:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">Injeção de recursos para o término da Fase 2 (90% concluída) e execução das Fases 3 e 4. Captura da arbitragem de valor do desenvolvimento imobiliário.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Wallet className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Estrutura da Operação:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">Aporte de R$ 164M via emissão primária direto no caixa da SPE (Cash-In). O proprietário original é diluído, mas permanece como Operating Partner (GP) cuidando da gestão.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <PieChart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Parceria Societária:</strong>
                      <span className="text-accent font-medium leading-relaxed text-base">38,29% de Equity para o FII / 61,71% para o Proprietário Atual.</span>
                    </div>
                  </li>
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center justify-center text-center">
                     <span className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider block">Target Yield on Cost</span>
                     <span className="text-2xl md:text-3xl font-bold text-accent">11,30%</span>
                   </div>
                   <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center justify-center text-center">
                     <span className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider block">TIR Estimada (Exit 8,5%)</span>
                     <span className="text-2xl md:text-3xl font-bold text-accent">IPCA + 10,0%</span>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50">
                    <span className="block text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Valuation Pre-Money</span>
                    <span className="text-white font-medium text-lg">R$ 253,6 mi</span>
                  </div>
                  <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50">
                    <span className="block text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Valuation Post-Money</span>
                    <span className="text-white font-medium text-lg">R$ 418,0 mi</span>
                  </div>
                  <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50">
                    <span className="block text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Exit Valuation</span>
                    <span className="text-white font-medium text-lg">R$ 571,0 mi</span>
                  </div>
                </div>

             </div>

             {/* Tabela Opção B */}
             <div className="bg-gray-800/80 p-6 md:p-10 border-t border-gray-700">
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                   Cronograma de Yields do Aporte Primário (R$ 164M)
                </h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-700">
                                <th className="pb-3 font-medium">Estágio do Ativo</th>
                                <th className="pb-3 font-medium text-right">Receita Total SPE</th>
                                <th className="pb-3 font-medium text-right">Fatia do FII (38,29%)</th>
                                <th className="pb-3 font-medium text-right text-accent">Yield s/ Aporte</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3">Fase 1 (Imediato)</td>
                                <td className="py-3 text-right">R$ 783.000 /mês</td>
                                <td className="py-3 text-right">R$ 299.811 /mês</td>
                                <td className="py-3 text-right font-medium">2,19% a.a.</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3">Fase 1 + Fase 2 <span className="text-gray-500 text-xs block">Curto Prazo</span></td>
                                <td className="py-3 text-right w-[110px]">R$ 1.823.000 /mês</td>
                                <td className="py-3 text-right w-[110px]">R$ 698.027 /mês</td>
                                <td className="py-3 text-right font-medium">5,11% a.a.</td>
                            </tr>
                            <tr>
                                <td className="py-3 font-medium text-white">Fases 1 a 4 <span className="text-gray-500 text-xs block font-normal">Estabilizado</span></td>
                                <td className="py-3 text-right font-medium text-white">R$ 4.023.000 /mês</td>
                                <td className="py-3 text-right font-medium text-white">R$ 1.540.407 /mês</td>
                                <td className="py-3 text-right text-accent font-bold">11,30% a.a.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
