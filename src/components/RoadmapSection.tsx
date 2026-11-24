import React, { useState } from 'react';
import { ROADMAP_DATA } from '../data/mockData';
import { CheckCircle2, Clock, Calendar, ChevronRight, Wrench, ShieldCheck } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [activePhaseId, setActivePhaseId] = useState<number>(3);

  const activePhase = ROADMAP_DATA.find((p) => p.id === activePhaseId) || ROADMAP_DATA[2];

  return (
    <section id="roadmap" className="py-20 bg-neutral-950 border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 mb-4">
            <span>Sección 2.3</span>
            <span className="text-white/30">•</span>
            <span>Cronograma y Entregables</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Hoja de Ruta de{' '}
            <span className="font-instrument italic font-normal text-emerald-400">
              Implementación PONAL
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-inter">
            Evolución metodológica del proyecto CivicPulse Analytics desde la concepción del modelo 
            hasta la puesta en producción en el Centro de Información Estratégica Policial Seccional (CIEPS).
          </p>
        </div>

        {/* 4 Phases Horizontal / Stacked Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ROADMAP_DATA.map((phase) => {
            const isCompleted = phase.status === 'Completada';
            const isInProgress = phase.status === 'En curso';
            const isSelected = phase.id === activePhaseId;

            return (
              <div
                key={phase.id}
                onClick={() => setActivePhaseId(phase.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-950/40'
                    : 'bg-neutral-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-neutral-400">
                    Fase 0{phase.id}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : isInProgress
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                        : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white mb-2 line-clamp-2">
                  {phase.title.split(':')[1] || phase.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{phase.period}</span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-400">Avance</span>
                    <span className="font-semibold text-white">{phase.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        isCompleted ? 'bg-emerald-400' : isInProgress ? 'bg-sky-400' : 'bg-neutral-600'
                      }`}
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Phase Detailed Inspection */}
        <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Detalle Operativo de la Fase
                </span>
                <span className="text-xs text-neutral-400">• Periodo: {activePhase.period}</span>
              </div>
              <h4 className="text-2xl font-bold text-white">
                {activePhase.title}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400">Estado institucional:</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                {activePhase.status} ({activePhase.progress}%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Deliverables */}
            <div>
              <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hitos y Entregables Clave</span>
              </h5>
              <div className="space-y-3">
                {activePhase.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-950/70 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        activePhase.status === 'Completada' ? 'text-emerald-400' : 'text-sky-400'
                      }`}
                    />
                    <span className="text-sm text-neutral-200 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Stack */}
            <div>
              <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-sky-400" />
                <span>Stack Tecnológico y Herramientas Habilitadoras</span>
              </h5>
              <div className="flex flex-wrap gap-2 mb-6">
                {activePhase.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/5 text-xs text-neutral-400 leading-relaxed">
                <strong className="text-white block mb-1">Criterio de Aceptación COEST:</strong>
                Cada fase concluye con un acta formal de verificación técnica y pruebas de stress sobre los endpoints del SIEDCO y portal A Denunciar antes de autorizar la siguiente etapa.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
