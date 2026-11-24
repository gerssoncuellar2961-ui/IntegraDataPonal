import React, { useState } from 'react';
import { SENTIMENT_BY_CHANNEL, EARLY_ALERTS } from '../data/mockData';
import { EarlyAlert } from '../types';
import { MessageSquareWarning, AlertTriangle, CheckCircle2, ShieldAlert, Radio, Filter, Sparkles } from 'lucide-react';

export const Module2Reputation: React.FC = () => {
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [alerts, setAlerts] = useState<EarlyAlert[]>(EARLY_ALERTS);

  // Overall ISSC score
  const isscScore = 68.4;

  const handleUpdateStatus = (id: string, newStatus: 'Detectada' | 'En Contención' | 'Mitigada') => {
    setAlerts((prev) =>
      prev.map((alt) => (alt.id === id ? { ...alt, status: newStatus } : alt))
    );
  };

  const filteredAlerts = alerts.filter((alt) => {
    if (filterSeverity === 'all') return true;
    return alt.severity === filterSeverity;
  });

  return (
    <div className="space-y-6 text-white font-inter">
      
      {/* Subheader */}
      <div className="bg-neutral-900/60 p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Módulo 2 • Escucha Social & Crisis</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Monitoreo de Reputación Institucional y Alertas Tempranas
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Indicador Sintético de Sentimiento Ciudadano (ISSC) con corte en tiempo real y detección de desinformación (<em>Fake News</em>).
          </p>
        </div>

        <div className="bg-neutral-950/80 border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-xs">
            <span className="text-neutral-400 block text-[10px]">Motor NLP</span>
            <span className="font-semibold text-emerald-300">Escucha Activa (5 canales)</span>
          </div>
        </div>
      </div>

      {/* ISSC Top Score & Breakdown Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ISSC Gauge / Index card */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Indicador Sintético ISSC
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                FAVORABLE
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-black text-white">{isscScore}</span>
              <span className="text-neutral-400 text-lg">/100 pts</span>
            </div>
            <p className="text-xs text-neutral-400 mb-6">
              Balance ponderado entre interacciones positivas (+1), neutras (0) y negativas (-1) en territorio nacional.
            </p>
          </div>

          {/* Graphical bar indicator */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex justify-between text-[11px] text-neutral-400">
              <span className="text-rose-400">Crítico (&lt;45)</span>
              <span className="text-amber-400">Neutro (45-60)</span>
              <span className="text-emerald-400 font-semibold">Favorable (&gt;60)</span>
            </div>
            <div className="w-full h-3.5 bg-neutral-800 rounded-full overflow-hidden p-0.5 flex">
              <div className="h-full bg-rose-500/60 w-[45%]" />
              <div className="h-full bg-amber-500/60 w-[15%]" />
              <div className="h-full bg-emerald-500 rounded-r-full w-[40%]" />
            </div>
            <div className="text-[11px] text-emerald-300 font-medium text-right">
              ▲ +4.2 pts comparado con mes anterior
            </div>
          </div>
        </div>

        {/* Sentiment breakdown by channel */}
        <div className="lg:col-span-2 bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Distribución de Sentimiento Ciudadano por Plataforma</span>
            </h4>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> Positivo
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-400 inline-block" /> Neutro
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" /> Negativo
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {SENTIMENT_BY_CHANNEL.map((item) => (
              <div key={item.channel} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-white">{item.channel}</span>
                  <span className="text-neutral-400">
                    {new Intl.NumberFormat('es-CO').format(item.totalInteractions)} interacciones (
                    <span className="text-emerald-400">+{item.growth}%</span>)
                  </span>
                </div>
                {/* Stacked bar */}
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-emerald-400"
                    style={{ width: `${item.positive}%` }}
                    title={`Positivo: ${item.positive}%`}
                  />
                  <div
                    className="h-full bg-neutral-500"
                    style={{ width: `${item.neutral}%` }}
                    title={`Neutro: ${item.neutral}%`}
                  />
                  <div
                    className="h-full bg-rose-500"
                    style={{ width: `${item.negative}%` }}
                    title={`Negativo: ${item.negative}%`}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-400">
                  <span className="text-emerald-300 font-semibold">{item.positive}% pos</span>
                  <span>{item.neutral}% neu</span>
                  <span className="text-rose-400 font-semibold">{item.negative}% neg</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Matriz Semafórica de Alertas Tempranas y Fake News */}
      <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <span>Matriz Semafórica de Alertas Tempranas y Detección de Desinformación</span>
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Protocolo COEST de mitigación de crisis y neutralización de cadenas falsas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-xs text-neutral-400">Filtrar Severidad:</span>
            <select
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value)}
              className="bg-neutral-800 border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
            >
              <option value="all">Todas las alertas</option>
              <option value="Crítica">Crítica (Semáforo Rojo)</option>
              <option value="Media">Media (Semáforo Amarillo)</option>
              <option value="Baja">Baja (Semáforo Verde)</option>
            </select>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert) => {
            const isCrit = alert.severity === 'Crítica';
            const isMed = alert.severity === 'Media';

            return (
              <div
                key={alert.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isCrit
                    ? 'bg-rose-950/20 border-rose-500/40 hover:border-rose-500/70'
                    : isMed
                    ? 'bg-amber-950/20 border-amber-500/40 hover:border-amber-500/70'
                    : 'bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-500/70'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${
                        isCrit
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                          : isMed
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      }`}
                    >
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-neutral-300">
                      {alert.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {alert.jurisdiction}
                    </span>
                    <span className="text-xs text-neutral-500">• {alert.timestamp}</span>
                  </div>

                  {/* Status selector */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-neutral-400">Estado:</span>
                    <select
                      value={alert.status}
                      onChange={(e) =>
                        handleUpdateStatus(
                          alert.id,
                          e.target.value as 'Detectada' | 'En Contención' | 'Mitigada'
                        )
                      }
                      className="bg-neutral-900 border border-white/20 rounded-md text-xs px-2 py-1 text-white focus:outline-none"
                    >
                      <option value="Detectada">Detectada</option>
                      <option value="En Contención">En Contención</option>
                      <option value="Mitigada">Mitigada</option>
                    </select>
                  </div>
                </div>

                <h5 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  {alert.title}
                </h5>
                <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
                  {alert.summary}
                </p>

                {/* Protocolo COEST */}
                <div className="bg-neutral-950/70 p-3 rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white">Protocolo COEST:</strong>{' '}
                      {alert.recommendedAction}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 shrink-0">
                    Fuente: <span className="text-neutral-200">{alert.detectedOn}</span> ({new Intl.NumberFormat('es-CO').format(alert.mentionsCount)} menciones)
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
