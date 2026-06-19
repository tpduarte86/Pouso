import { TableProperties } from 'lucide-react';
import { motion } from 'motion/react';

const dataAreas = [
  { fase: 1, isSubtotal: false, unidade: 'Setor Administrativo', area: '3.813,40', patio: '-', alfandegado: 'Sim', situacao: 'Entregue' },
  { fase: 1, isSubtotal: false, unidade: 'Galpão 1 - Seco', area: '11.448,12', patio: '-', alfandegado: 'Sim', situacao: 'Entregue' },
  { fase: 1, isSubtotal: false, unidade: 'Câmara Fria A', area: '1.830,00', patio: '-', alfandegado: 'Sim', situacao: 'Entregue' },
  { fase: 1, isSubtotal: false, unidade: 'Câmara Fria B/C/D/E', area: '898,25', patio: '-', alfandegado: 'Sim', situacao: 'Entregue' },
  { fase: 1, isSubtotal: false, unidade: 'Pátio 1', area: '-', patio: '17.175,16', alfandegado: 'Sim', situacao: 'Entregue' },
  { fase: 1, isSubtotal: false, unidade: 'Gate', area: '1.170,00', patio: '-', alfandegado: 'Sim', situacao: 'Entregue' },
  { fase: 1, isSubtotal: true, unidade: 'Subtotal Fase 1', area: '19.159,77', patio: '17.175,16', alfandegado: '', situacao: '' },

  { fase: 2, isSubtotal: false, unidade: 'Galpão 2', area: '10.241,52', patio: '-', alfandegado: '-', situacao: 'Em obras' },
  { fase: 2, isSubtotal: false, unidade: 'Pátio 2', area: '-', patio: '9.112,50', alfandegado: '-', situacao: 'Em obras' },
  { fase: 2, isSubtotal: false, unidade: 'Galpões 3 e 4', area: '17.424,00', patio: '-', alfandegado: '-', situacao: 'Em obras' },
  { fase: 2, isSubtotal: true, unidade: 'Subtotal Fase 2', area: '27.665,52', patio: '9.112,50', alfandegado: '', situacao: '' },
  
  { fase: 3, isSubtotal: false, unidade: 'Galpão 5', area: '16.200,00', patio: '-', alfandegado: '-', situacao: 'Projeto' },
  { fase: 3, isSubtotal: false, unidade: 'Galpão 6', area: '6.480,00', patio: '-', alfandegado: '-', situacao: 'Projeto' },
  { fase: 3, isSubtotal: false, unidade: 'Galpão 7', area: '15.187,50', patio: '-', alfandegado: '-', situacao: 'Projeto' },
  { fase: 3, isSubtotal: true, unidade: 'Subtotal Fase 3', area: '37.867,50', patio: '-', alfandegado: '', situacao: '' },

  { fase: 4, isSubtotal: false, unidade: 'Galpão 8', area: '25.372,50', patio: '-', alfandegado: '-', situacao: 'Projeto' },
  { fase: 4, isSubtotal: true, unidade: 'Subtotal Fase 4', area: '25.372,50', patio: '-', alfandegado: '', situacao: '' },

  { fase: 'Final', isTotal: true, unidade: 'Total Projetado', area: '110.065,29', patio: '26.287,66', alfandegado: '', situacao: '' },
];

const dataInfra = [
  { fase: 1, isSubtotal: false, isTotal: false, unidade: 'Outros - Asfaltamento', area: '37.574,93', situacao: 'Em obra' },
  { fase: 2, isSubtotal: false, isTotal: false, unidade: 'Outros - Asfaltamento', area: '44.740,06', situacao: 'Em obra' },
  { fase: '', isSubtotal: true, isTotal: false, unidade: 'Subtotal Obras', area: '82.314,99', situacao: '' },
  { fase: 3, isSubtotal: false, isTotal: false, unidade: 'Outros - Asfaltamento', area: '40.918,95', situacao: 'Projeto' },
  { fase: 4, isSubtotal: false, isTotal: false, unidade: 'Outros - Asfaltamento', area: '19.469,55', situacao: 'Projeto' },
  { fase: '', isSubtotal: true, isTotal: false, unidade: 'Subtotal Projeto', area: '60.388,50', situacao: '' },
  { fase: '', isSubtotal: false, isTotal: true, unidade: 'Total Pavimentação', area: '142.703,49', situacao: '' },
];

export function AreaTable() {
  return (
    <section id="areas" className="min-h-screen py-24 flex items-center bg-brand-900 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-brand-800 p-3 rounded-lg border border-gray-700">
              <TableProperties className="w-8 h-8 text-accent" />
            </div>
            <div>
              <span className="text-accent text-sm uppercase tracking-widest font-medium block">Quadro de Áreas</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">GGM Business Parklog</h2>
            </div>
          </div>
          <p className="text-gray-400 text-lg font-light mt-4">Demonstrativo detalhado de metragens e destinações por fase de implantação.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-brand-900 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs">Fase / Unidade</th>
                    <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs text-right">Área Construída (m²)</th>
                    <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs text-right">Pátio (m²)</th>
                    <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs text-center">Alfandegado</th>
                    <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs text-center">Situação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-400">
                  {dataAreas.map((row, index) => {
                    const isSub = row.isSubtotal;
                    const isTotal = row.isTotal;
                    
                    let rowClass = "hover:bg-brand-900/50 transition-colors";
                    if (isSub) rowClass = "bg-brand-900/40 text-white font-medium border-t border-gray-700/50";
                    if (isTotal) rowClass = "bg-brand-900 text-accent font-semibold border-t-2 border-accent border-opacity-50 text-base shadow-inner";
                    
                    return (
                      <tr key={index} className={rowClass}>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-2">
                            {!isSub && !isTotal && (
                              <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700 shrink-0">
                                F{row.fase}
                              </span>
                            )}
                            <span className={isSub || isTotal ? "text-accent" : "text-gray-300"}>{row.unidade}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-mono">{row.area}</td>
                        <td className="px-6 py-4 text-right font-mono">{row.patio}</td>
                        <td className="px-6 py-4 text-center">
                          {row.alfandegado === 'Sim' ? (
                            <span className="bg-green-900/50 text-green-400 border border-green-800/50 px-2 py-1 rounded text-xs font-medium tracking-wider">SIM</span>
                          ) : row.alfandegado === '-' ? (
                            <span className="text-gray-600">-</span>
                          ) : (
                            row.alfandegado
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.situacao === 'Entregue' && (
                             <span className="text-gray-300 bg-gray-800 border border-gray-700 px-2.5 py-1 rounded text-xs">Entregue</span>
                          )}
                          {row.situacao === 'Em obras' && (
                             <span className="text-blue-300 bg-blue-900/30 border border-blue-900 px-2.5 py-1 rounded text-xs">Obras</span>
                          )}
                          {row.situacao === 'Projeto' && (
                             <span className="text-gray-500 border border-gray-700 border-dashed px-2.5 py-1 rounded text-xs">Projeto</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6">
              <h3 className="text-white text-2xl font-serif mb-2">Pavimentação e Infraestrutura</h3>
              <p className="text-gray-400 text-sm font-light">Além das edificações, o empreendimento compreende diversas áreas pavimentadas destinadas à circulação e ao estacionamento seguro de veículos e carretas de operação.</p>
            </div>
            
            <div className="bg-brand-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-brand-900 border-b border-gray-700">
                    <tr>
                      <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs">Fase</th>
                      <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs">Unidade</th>
                      <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs text-right">Área (m²)</th>
                      <th className="px-6 py-5 font-medium text-gray-300 uppercase tracking-wider text-xs text-center">Situação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-400">
                    {dataInfra.map((row, index) => {
                      const isSub = row.isSubtotal;
                      const isTotal = row.isTotal;
                      
                      let rowClass = "hover:bg-brand-900/50 transition-colors";
                      if (isSub) rowClass = "bg-brand-900/40 text-white font-medium border-t border-gray-700/50";
                      if (isTotal) rowClass = "bg-brand-900 text-accent font-semibold border-t-2 border-accent border-opacity-50 text-base shadow-inner";

                      return (
                        <tr key={index} className={rowClass}>
                          <td className="px-6 py-4">
                            {!isSub && !isTotal && row.fase ? (
                              <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700 shrink-0">
                                F{row.fase}
                              </span>
                            ) : null}
                          </td>
                          <td className="px-6 py-4">
                            <span className={isSub || isTotal ? "text-accent" : "text-gray-300"}>{row.unidade}</span>
                          </td>
                          <td className={`px-6 py-4 text-right font-mono ${isTotal ? 'text-accent' : isSub ? 'text-white' : 'text-gray-300'}`}>{row.area}</td>
                          <td className="px-6 py-4 text-center">
                            {(row.situacao === 'Em obra' || row.situacao === 'Em obras') && (
                               <span className="text-blue-300 bg-blue-900/30 border border-blue-900 px-2.5 py-1 rounded text-xs">Obra</span>
                            )}
                            {row.situacao === 'Projeto' && (
                               <span className="text-gray-500 border border-gray-700 border-dashed px-2.5 py-1 rounded text-xs">Projeto</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
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
