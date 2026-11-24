import React, { useState } from 'react';
import { Module1Campaigns } from './Module1Campaigns';
import { Module2Reputation } from './Module2Reputation';
import { Module3Heatmap } from './Module3Heatmap';
import { Target, Radio, Compass, BarChart4 } from 'lucide-react';

export const DashboardContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'modulo1' | 'modulo2' | 'modulo3'>('modulo1');

  return (
    <section id="modulos" className="py-20 bg-neutral-950 border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 mb-4">
              <span>Sección 2.2</span>
              <span className="text-white/30">•</span>
              <span>Ecosistema de Módulos del Tablero de Control</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Módulos de Mando{' '}
              <span className="font-instrument italic font-normal text-emerald-400">
                Operativo y Estratégico
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-inter">
              Tres tableros integrados que articulan la toma de decisiones de la Dirección de Comunicaciones Estratégicas (COEST) con las unidades territoriales.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/80 px-3.5 py-2 rounded-xl border border-white/10 shrink-0">
            <BarChart4 className="w-4 h-4 text-emerald-400" />
            <span>Simulación Operativa en Vivo</span>
          </div>
        </div>

        {/* Tab Selector Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          
          <button
            id="tab-btn-modulo1"
            onClick={() => setActiveTab('modulo1')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
              activeTab === 'modulo1'
                ? 'bg-emerald-950/30 border-emerald-500 text-white shadow-lg shadow-emerald-950/40'
                : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:bg-neutral-900 hover:text-white'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              activeTab === 'modulo1' ? 'bg-emerald-500 text-neutral-950' : 'bg-white/10 text-neutral-400'
            }`}>
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider block text-emerald-400">
                Módulo 01
              </span>
              <span className="text-sm font-bold text-white block">
                Pauta & Prevención
              </span>
              <span className="text-[11px] text-neutral-400 block truncate">
                CAC y conversión a A Denunciar
              </span>
            </div>
          </button>

          <button
            id="tab-btn-modulo2"
            onClick={() => setActiveTab('modulo2')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
              activeTab === 'modulo2'
                ? 'bg-sky-950/30 border-sky-500 text-white shadow-lg shadow-sky-950/40'
                : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:bg-neutral-900 hover:text-white'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              activeTab === 'modulo2' ? 'bg-sky-500 text-neutral-950' : 'bg-white/10 text-neutral-400'
            }`}>
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider block text-sky-400">
                Módulo 02
              </span>
              <span className="text-sm font-bold text-white block">
                Reputación & Alertas (ISSC)
              </span>
              <span className="text-[11px] text-neutral-400 block truncate">
                Escucha NLP y Fake News
              </span>
            </div>
          </button>

          <button
            id="tab-btn-modulo3"
            onClick={() => setActiveTab('modulo3')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
              activeTab === 'modulo3'
                ? 'bg-amber-950/30 border-amber-500 text-white shadow-lg shadow-amber-950/40'
                : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:bg-neutral-900 hover:text-white'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              activeTab === 'modulo3' ? 'bg-amber-500 text-neutral-950' : 'bg-white/10 text-neutral-400'
            }`}>
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider block text-amber-400">
                Módulo 03
              </span>
              <span className="text-sm font-bold text-white block">
                Mapa Georreferenciado
              </span>
              <span className="text-[11px] text-neutral-400 block truncate">
                Percepción vs Delincuencia SIEDCO
              </span>
            </div>
          </button>

        </div>

        {/* Dynamic Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'modulo1' && <Module1Campaigns />}
          {activeTab === 'modulo2' && <Module2Reputation />}
          {activeTab === 'modulo3' && <Module3Heatmap />}
        </div>

      </div>
    </section>
  );
};
