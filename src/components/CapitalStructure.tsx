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
              Dois deals de alocação estruturados: aquisição das áreas performadas e aporte primário para expansão.
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
                    <h3 className="text-2xl text-white font-medium">Deal A – Aquisição das áreas performadas</h3>
                    <p className="text-accent text-sm font-medium">Fase 1 e Fase 2</p>
                  </div>
                </div>

                <ul className="space-y-6 mb-8 mt-8">
                  <li className="flex items-start gap-4">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Tese de Investimento:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">Aquisição de 40% das Fases 1 e 2. Foco em tijolo com baixo risco de engenharia e dividendo imediato.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Building className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Status das Fases:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">A Fase 1 encontra-se 100% locada (contrato atípico até 2045). A Fase 2 será entregue ainda em 2026 e já está em avançada negociação de locação.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">Renda Mínima Garantida:</strong>
                      <span className="text-gray-400 font-light leading-relaxed text-sm">O desenvolvedor fornecerá Renda Mínima Garantida (RMG) até a efetiva locação da Fase 2, mitigando o risco de vacância inicial.</span>
                    </div>
                  </li>
                </ul>

                <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center justify-center mb-8">
                  <span className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Cap Rate de Entrada</span>
                  <span className="text-4xl md:text-5xl font-bold text-accent">10,00%</span>
                </div>

             </div>

             {/* Tabela Opção A */}
             <div className="bg-gray-800/80 p-6 md:p-10 border-t border-gray-700">
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                   Métricas da Aquisição (40% Fases 1 e 2)
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
                                <td className="py-3">Valuation Alocado (40%)</td>
                                <td className="py-3 text-right">R$ 87.500.000</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3">Receita Mensal (Fase 1 + RMG Fase 2)</td>
                                <td className="py-3 text-right">R$ 729.200</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3 font-medium text-white">NOI Anualizado Projetado (40%)</td>
                                <td className="py-3 text-right font-medium text-white">R$ 8.750.400</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                                <td className="py-3 text-accent font-medium">Cap Rate de Entrada</td>
                                <td className="py-3 text-right text-accent font-medium">10,00% ao ano</td>
                            </tr>
                            <tr>
                                <td className="py-3">Risco de Vacância Fase 2</td>
                                <td className="py-3 text-right text-gray-400">Mitigado via RMG</td>
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
                    <h3 className="text-2xl text-white font-medium">Deal B – Área de Expansão (Fases 3 e 4)</h3>
                    <p className="text-accent text-sm font-medium">Foco em Expansão</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8 mt-8">
                  <div className="bg-gray-800/40 rounded-2xl p-5 border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-gray-700 text-white text-xs font-bold px-2.5 py-1 rounded">Opção 1</span>
                      <h4 className="text-white font-medium text-lg">Aquisição Futura</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Compra a um cap rate de 10% com Renda Mínima Garantida (RMG) até 6 meses após entrega de obra.
                    </p>
                  </div>

                  <div className="bg-gray-800/40 rounded-2xl p-6 border border-accent/30 relative shadow-lg shadow-accent/5">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl"></div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="bg-accent text-brand-900 text-xs font-bold px-2.5 py-1 rounded">Opção 2</span>
                      <h4 className="text-white font-medium text-lg">Aporte Primário (Desenvolvimento)</h4>
                    </div>

                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block mb-1 text-sm">Tese de Investimento:</strong>
                          <span className="text-gray-400 font-light leading-relaxed text-sm">Injeção de recursos puramente para a execução das Fases 3 e 4. Captura da arbitragem de valor do desenvolvimento imobiliário em novas áreas.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wallet className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block mb-1 text-sm">Estrutura da Operação:</strong>
                          <span className="text-gray-400 font-light leading-relaxed text-sm">O terreno entra na Sociedade (SPE) avaliado em R$ 40,2 milhões, enquanto o investidor aporta R$ 164,4 milhões para a execução integral das obras.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <PieChart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block mb-1 text-sm">Parceria Societária:</strong>
                          <span className="text-accent font-medium leading-relaxed text-sm">80,35% de Equity para o FII / 19,65% para o Proprietário Atual.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center justify-center text-center">
                     <span className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider block">Target Yield on Cost</span>
                     <span className="text-2xl md:text-3xl font-bold text-accent">12,98%</span>
                   </div>
                   <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center justify-center text-center">
                     <span className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider block">TIR Nominal (All In)</span>
                     <span className="text-2xl md:text-3xl font-bold text-accent">17,90% a.a.</span>
                   </div>
                </div>

             </div>

             {/* Tabela Opção B */}
             <div className="bg-gray-800/80 p-6 md:p-10 border-t border-gray-700">
                <h4 className="text-white font-medium mb-6 flex items-center gap-2">
                   Resumo Financeiro da Expansão (Fases 3 e 4)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Aporte do FII (Obras)</span>
                        <span className="text-lg font-medium text-white">R$ 164,4 milhões</span>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Valor do Terreno</span>
                        <span className="text-lg font-medium text-white">R$ 40,2 milhões</span>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Equity FII</span>
                        <span className="text-lg font-medium text-white">80,35%</span>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Yield on Cost Target</span>
                        <span className="text-lg font-medium text-accent">12,98% a.a.</span>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">TIR Real Projetada</span>
                        <span className="text-lg font-medium text-accent">12,28% a.a. + IPCA</span>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                        <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">TIR Nominal (IPCA 5%)</span>
                        <span className="text-lg font-medium text-accent">17,90% a.a.</span>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
