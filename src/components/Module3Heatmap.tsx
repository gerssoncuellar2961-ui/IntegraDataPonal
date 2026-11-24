import React, { useState } from 'react';
import { JURISDICTIONS_DATA } from '../data/mockData';
import { MapPin, AlertCircle, Compass, Shield, ArrowUpRight, TrendingDown, Eye } from 'lucide-react';

export const Module3Heatmap: React.FC = () => {
  const [selectedJurId, setSelectedJurId] = useState<string>(JURISDICTIONS_DATA[0].id);

  const selectedJur =
    JURISDICTIONS_DATA.find((j) => j.id === selectedJurId) || JURISDICTIONS_DATA[0];

  return (
    <div className="space-y-6 text-white font-inter">
      
      {/* Subheader */}
      <div className="bg-neutral-900/60 p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>Módulo 3 • Georreferenciación Táctica</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Percepción de Inseguridad Digital vs. Delincuencia Real (SIEDCO)
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Superposición de estadísticas delictivas oficiales frente al mapa de calor de miedo e interacciones en redes por comando metropolitano.
          </p>
        </div>

        <div className="text-xs text-neutral-400 bg-neutral-950/80 px-3 py-2 rounded-xl border border-white/10">
          Fuente Oficial: <strong className="text-white">SIEDCO • Datos.gov.co</strong>
        </div>
      </div>

      {/* Jurisdiction selector tabs */}
      <div className="flex flex-wrap gap-2 pb-1 border-b border-white/10">
        {JURISDICTIONS_DATA.map((jur) => {
          const isSelected = jur.id === selectedJurId;
          return (
            <button
              key={jur.id}
              onClick={() => setSelectedJurId(jur.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-950/50'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-white/10'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{jur.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                isSelected ? 'bg-neutral-950 text-emerald-300' : 'bg-neutral-800 text-neutral-400'
              }`}>
                {jur.code}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Jurisdiction Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Core Metrics & Discrepancy */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Jurisdicción Policial
              </span>
              <span className="text-xs font-medium text-emerald-400">
                {selectedJur.region}
              </span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-1">
              {selectedJur.name} ({selectedJur.code})
            </h4>
            <p className="text-xs text-neutral-400">
              Efectivo Policial: <strong>{new Intl.NumberFormat('es-CO').format(selectedJur.policeStrength)}</strong> unidades adscritas.
            </p>
          </div>

          {/* Dual Comparison Cards */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            
            {/* Fear index */}
            <div className="bg-neutral-950/70 p-4 rounded-xl border border-white/10">
              <div className="text-[11px] text-neutral-400 font-medium mb-1">
                Índice Miedo Digital
              </div>
              <div className="text-3xl font-black text-rose-400">
                {selectedJur.digitalFearIndex}
                <span className="text-xs text-neutral-400 font-normal"> /100</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1">
                Intensidad en redes y medios
              </p>
            </div>

            {/* SIEDCO crimes */}
            <div className="bg-neutral-950/70 p-4 rounded-xl border border-white/10">
              <div className="text-[11px] text-neutral-400 font-medium mb-1">
                Tasa Delitos SIEDCO
              </div>
              <div className="text-3xl font-black text-sky-400">
                {selectedJur.actualCrimeRatePer100k}
                <span className="text-xs text-neutral-400 font-normal"> /100k</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1">
                {new Intl.NumberFormat('es-CO').format(selectedJur.siedcoCrimesCount)} casos oficiales
              </p>
            </div>

          </div>

          {/* Discrepancy Delta Box */}
          <div className="bg-neutral-950/80 p-4 rounded-xl border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-300 font-medium">Brecha Perceptual (Delta)</span>
              <span className={`font-bold ${
                selectedJur.discrepancyDelta > 10 ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {selectedJur.discrepancyDelta > 0 ? `+${selectedJur.discrepancyDelta}%` : `${selectedJur.discrepancyDelta}%`}
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {selectedJur.discrepancyDelta > 10
                ? 'El miedo digital supera la incidencia delictiva real. Existe riesgo de histeria colectiva o magnificación por desinformación en redes locales.'
                : 'La percepción ciudadana se encuentra en armonía con los registros oficiales de denuncias en SIEDCO.'}
            </p>
          </div>

          {/* Strategic Recommendation */}
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
            <div className="font-bold flex items-center gap-1.5 text-emerald-300 mb-1">
              <Shield className="w-4 h-4" />
              <span>Directriz Táctica COEST:</span>
            </div>
            <p className="leading-relaxed">
              {selectedJur.suggestedAction}
            </p>
          </div>
        </div>

        {/* Top Crimes in Jurisdiction and Comparison Visualizer */}
        <div className="lg:col-span-2 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 space-y-6">
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Top Delitos Registrados en SIEDCO ({selectedJur.code})</span>
            </h4>
            <p className="text-xs text-neutral-400 mb-4">
              Distribución de casos reportados en el último periodo operacional.
            </p>

            <div className="space-y-3">
              {selectedJur.topCrimes.map((crime) => {
                const maxCases = selectedJur.topCrimes[0].cases;
                const pct = Math.round((crime.cases / maxCases) * 100);
                return (
                  <div key={crime.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white">{crime.name}</span>
                      <span className="text-neutral-400">
                        {new Intl.NumberFormat('es-CO').format(crime.cases)} casos
                      </span>
                    </div>
                    <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comparative Heatmap Matrix of All Jurisdictions */}
          <div className="pt-4 border-t border-white/10">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center justify-between">
              <span>Matriz Comparativa de Comandos Metropolitanos</span>
              <span className="text-xs text-neutral-400 font-normal">Escala 0 - 100</span>
            </h5>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400">
                    <th className="pb-2 font-medium">Comando</th>
                    <th className="pb-2 font-medium">Percepción Miedo</th>
                    <th className="pb-2 font-medium">Delincuencia SIEDCO</th>
                    <th className="pb-2 font-medium">Brecha Delta</th>
                    <th className="pb-2 font-medium">Tendencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {JURISDICTIONS_DATA.map((j) => (
                    <tr
                      key={j.id}
                      onClick={() => setSelectedJurId(j.id)}
                      className={`hover:bg-white/5 cursor-pointer transition-colors ${
                        j.id === selectedJurId ? 'bg-white/5 font-semibold text-emerald-300' : 'text-neutral-300'
                      }`}
                    >
                      <td className="py-2.5">
                        {j.name} ({j.code})
                      </td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/30 font-bold">
                          {j.digitalFearIndex}/100
                        </span>
                      </td>
                      <td className="py-2.5 text-neutral-200">
                        {j.actualCrimeRatePer100k} /100k
                      </td>
                      <td className="py-2.5">
                        <span className={`font-semibold ${j.discrepancyDelta > 10 ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {j.discrepancyDelta > 0 ? `+${j.discrepancyDelta}%` : `${j.discrepancyDelta}%`}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <TrendingDown className="w-3.5 h-3.5" />
                          <span>{j.trend}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
