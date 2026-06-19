import { Calculator, BarChart3, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Valuation() {
  return (
    <section id="valuation" className="py-24 bg-brand-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm uppercase tracking-widest font-medium mb-3 block">Análise Financeira</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Valuation do Complexo
            </h2>
          </motion.div>
        </div>

        <div className="space-y-12">
          {/* Fase 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-800 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-800 px-6 py-4 flex items-center gap-3 border-b border-gray-700">
               <Calculator className="w-6 h-6 text-accent" />
               <h3 className="text-xl text-white font-medium">Fase 1 (Operacional)</h3>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="text-gray-400 text-sm border-b border-gray-700">
                    <th className="pb-3 font-medium">Ativo</th>
                    <th className="pb-3 font-medium text-right">Área (m²)</th>
                    <th className="pb-3 font-medium text-right">Aluguel/m² (R$)</th>
                    <th className="pb-3 font-medium text-right">Renda Mensal (R$)</th>
                    <th className="pb-3 font-medium text-right">Cap Rate</th>
                    <th className="pb-3 font-medium text-right">Valuation (R$)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium">Galpão (ABL)</td>
                    <td className="py-4 text-right">17.989,77</td>
                    <td className="py-4 text-right">30,20</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">543.291,05</td>
                    <td className="py-4 text-right">10,0%</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">65.194.926,00</td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium">Pátio</td>
                    <td className="py-4 text-right">30.013,06</td>
                    <td className="py-4 text-right">8,00</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">240.104,48</td>
                    <td className="py-4 text-right">10,0%</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">28.812.537,60</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-800/50 text-white font-medium">
                    <td className="py-4 px-2 rounded-l-lg" colSpan={5}>Valuation Fase 1</td>
                    <td className="py-4 text-right text-accent rounded-r-lg text-lg">94.007.463,60</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>

          {/* Fase 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-800 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-800 px-6 py-4 flex items-center gap-3 border-b border-gray-700">
               <BarChart3 className="w-6 h-6 text-accent" />
               <h3 className="text-xl text-white font-medium">Fase 2 (Em Desenvolvimento)</h3>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="text-gray-400 text-sm border-b border-gray-700">
                    <th className="pb-3 font-medium">Ativo</th>
                    <th className="pb-3 font-medium text-right">Área (m²)</th>
                    <th className="pb-3 font-medium text-right">Aluguel/m² (R$)</th>
                    <th className="pb-3 font-medium text-right">Renda Mensal (R$)</th>
                    <th className="pb-3 font-medium text-right">Cap Rate</th>
                    <th className="pb-3 font-medium text-right">Valuation (R$)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium flex flex-col">Galpão (ABL) <span className="text-xs text-gray-500 font-normal">estimado</span></td>
                    <td className="py-4 text-right">27.665,00</td>
                    <td className="py-4 text-right">35,44</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">968.275,00</td>
                    <td className="py-4 text-right">10,0%</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">116.193.000,00</td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium">Pátio</td>
                    <td className="py-4 text-right">9.112,00</td>
                    <td className="py-4 text-right">8,00</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">72.896,00</td>
                    <td className="py-4 text-right">10,0%</td>
                    <td className="py-4 text-right overflow-hidden text-ellipsis">8.747.520,00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-800/50 text-white font-medium">
                    <td className="py-4 px-2 rounded-l-lg" colSpan={5}>Valuation Fase 2</td>
                    <td className="py-4 text-right text-accent rounded-r-lg text-lg">124.940.520,00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>

          {/* Terreno Fases 3 e 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-brand-800 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-800 px-6 py-4 flex items-center gap-3 border-b border-gray-700">
               <TrendingUp className="w-6 h-6 text-accent" />
               <h3 className="text-xl text-white font-medium">Fases 3 e 4 (Potencial Construtivo / Expansão)</h3>
            </div>
            
            <div className="p-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div>
                       <table className="w-full text-left border-collapse">
                            <tbody className="text-gray-300">
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-4 font-medium text-sm">Área de Terreno</td>
                                    <td className="py-4 text-right">125.000 m²</td>
                                </tr>
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-4 font-medium text-sm flex flex-col">Valor/m² <span className="text-xs text-gray-500 font-normal">Média de mercado</span></td>
                                    <td className="py-4 text-right">R$ 362,00</td>
                                </tr>
                            </tbody>
                             <tfoot className="bg-gray-800/30">
                                <tr className="text-white font-medium">
                                    <td className="py-4 px-2 rounded-l-lg">Valuation Base Terreno</td>
                                    <td className="py-4 text-right px-2 rounded-r-lg text-accent">R$ 45.250.000,00</td>
                                </tr>
                            </tfoot>
                       </table>
                   </div>
                   
                   <div>
                        <table className="w-full text-left border-collapse">
                            <tbody className="text-gray-300">
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-3 font-medium text-sm">ABL Potencial</td>
                                    <td className="py-3 text-right">63.240 m²</td>
                                </tr>
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-3 font-medium text-sm">Custo Unitário Obra</td>
                                    <td className="py-3 text-right">R$ 2.600,00</td>
                                </tr>
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-3 font-medium text-sm">Custo Total de Obra</td>
                                    <td className="py-3 text-right">R$ 164.424.000,00</td>
                                </tr>
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-3 font-medium text-sm">Aluguel/m² projetado</td>
                                    <td className="py-3 text-right">R$ 35,00</td>
                                </tr>
                                <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors">
                                    <td className="py-3 font-medium text-sm">Valor Potencial de Locação</td>
                                    <td className="py-3 text-right">R$ 2.213.400,00</td>
                                </tr>
                                <tr className="border-b border-accent/20 hover:bg-white/5 transition-colors">
                                    <td className="py-3 font-medium text-sm text-accent">Yield on Cost Target</td>
                                    <td className="py-3 text-right text-accent font-medium">12,65%</td>
                                </tr>
                            </tbody>
                       </table>
                   </div>
              </div>

               <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row gap-6 justify-between items-center bg-gray-800/50 p-6 rounded-2xl">
                    <div className="text-center md:text-left">
                         <span className="text-gray-400 text-sm font-medium block">Valuation do Empreendimento (Fases 3 e 4)</span>
                         <span className="text-2xl text-white font-medium">R$ 212.486.400,00</span>
                    </div>
                     <div className="h-px w-full md:h-12 md:w-px bg-gray-700"></div>
                     <div className="text-center md:text-right">
                         <span className="text-gray-400 text-sm font-medium block">Valuation Implícito do Terreno</span>
                         <span className="text-2xl text-accent font-medium">R$ 48.062.400,00</span>
                    </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
