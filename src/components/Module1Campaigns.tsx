import React, { useState } from 'react';
import { CAMPAIGNS_DATA } from '../data/mockData';
import { Target, TrendingUp, DollarSign, Users, MousePointerClick, ShieldCheck, Filter } from 'lucide-react';

export const Module1Campaigns: React.FC = () => {
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>(CAMPAIGNS_DATA[0].id);

  const selectedCampaign =
    CAMPAIGNS_DATA.find((c) => c.id === selectedCampaignId) || CAMPAIGNS_DATA[0];

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('es-CO').format(val);
  };

  // Funnel calculations
  const impressions = selectedCampaign.impressions;
  const clicks = selectedCampaign.clicks;
  const visits = Math.round(clicks * 0.85); // 85% land on page
  const reports = selectedCampaign.reportsGenerated;

  const clickRate = ((clicks / impressions) * 100).toFixed(2);
  const conversionRate = ((reports / visits) * 100).toFixed(2);

  return (
    <div className="space-y-6 text-white font-inter">
      
      {/* Subheader & Selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-neutral-900/60 p-4 sm:p-6 rounded-2xl border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            <Target className="w-4 h-4" />
            <span>Módulo 1 • Eficacia y Retorno Preventivo</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Rendimiento de Pauta Institucional y Denuncia Segura
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Medición del Costo por Adquisición (CAC) ciudadano y conversión en el portal <em>A Denunciar</em>.
          </p>
        </div>

        {/* Campaign dropdown */}
        <div className="w-full sm:w-auto flex items-center gap-2">
          <Filter className="w-4 h-4 text-neutral-400 shrink-0" />
          <select
            value={selectedCampaignId}
            onChange={(e) => setSelectedCampaignId(e.target.value)}
            className="w-full sm:w-72 bg-neutral-800 border border-white/20 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
          >
            {CAMPAIGNS_DATA.map((camp) => (
              <option key={camp.id} value={camp.id}>
                {camp.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Campaign Details Header Card */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-neutral-900/80 to-neutral-900 border border-emerald-500/30 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {selectedCampaign.status}
              </span>
              <span className="text-xs text-neutral-400">
                Plataforma: <strong className="text-white">{selectedCampaign.platform}</strong>
              </span>
              <span className="text-xs text-neutral-400">• Delito Priorizado:</span>
              <span className="text-xs text-amber-300 font-medium">{selectedCampaign.targetCrime}</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              {selectedCampaign.name}
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Unidad Responsable: <span className="text-neutral-200">{selectedCampaign.division}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 bg-neutral-950/60 p-3 rounded-xl border border-white/10 shrink-0">
            <div>
              <div className="text-[10px] uppercase font-semibold text-neutral-400">
                CAC Denuncia Segura
              </div>
              <div className="text-lg font-bold text-emerald-400">
                {formatCOP(selectedCampaign.cacCop)}
              </div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-[10px] uppercase font-semibold text-neutral-400">
                CTR Promedio
              </div>
              <div className="text-lg font-bold text-sky-400">
                {selectedCampaign.ctr}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 KPIs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
            <span>Presupuesto Invertido</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {formatCOP(selectedCampaign.spentCop)}
          </div>
          <div className="text-[11px] text-neutral-400 mt-1">
            Asignado: {formatCOP(selectedCampaign.budgetCop)} (
            {Math.round((selectedCampaign.spentCop / selectedCampaign.budgetCop) * 100)}% ejecutado)
          </div>
        </div>

        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
            <span>Alcance Único</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {formatNumber(selectedCampaign.reach)}
          </div>
          <div className="text-[11px] text-neutral-400 mt-1">
            {formatNumber(selectedCampaign.impressions)} impresiones totales
          </div>
        </div>

        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
            <span>Interacciones Salientes</span>
            <MousePointerClick className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {formatNumber(selectedCampaign.clicks)}
          </div>
          <div className="text-[11px] text-neutral-400 mt-1">
            CTR Promedio {selectedCampaign.ctr}% en pauta
          </div>
        </div>

        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
            <span>Denuncias Generadas</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-emerald-400">
            {formatNumber(selectedCampaign.reportsGenerated)}
          </div>
          <div className="text-[11px] text-neutral-400 mt-1">
            Radicadas formalmente en portal
          </div>
        </div>

      </div>

      {/* Embudo de Conversión de Prevención a Denuncia */}
      <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
        <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Embudo Institucional: De la Sensibilización a la Denuncia Formal</span>
        </h4>
        <p className="text-xs text-neutral-400 mb-6">
          Trazabilidad del ciudadano desde la exposición al contenido preventivo hasta la radicación en el portal <em>A Denunciar</em>.
        </p>

        <div className="space-y-4">
          
          {/* Paso 1: Impresiones */}
          <div>
            <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1">
              <span>1. Impresiones del Anuncio Preventivo</span>
              <span>{formatNumber(impressions)} (100%)</span>
            </div>
            <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500/40 rounded-full w-full" />
            </div>
          </div>

          {/* Paso 2: Clics salientes */}
          <div>
            <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1">
              <span>2. Clics con Intención de Denuncia / Consulta</span>
              <span>{formatNumber(clicks)} ({clickRate}% CTR)</span>
            </div>
            <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-500 rounded-full"
                style={{ width: `${Math.max(Number(clickRate) * 12, 18)}%` }}
              />
            </div>
          </div>

          {/* Paso 3: Visitas efectivas a A Denunciar */}
          <div>
            <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1">
              <span>3. Visitas a Plataforma A Denunciar / Línea 165</span>
              <span>{formatNumber(visits)} (85% de retención)</span>
            </div>
            <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${Math.max(Number(clickRate) * 10, 14)}%` }}
              />
            </div>
          </div>

          {/* Paso 4: Radicación completa */}
          <div>
            <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1">
              <span>4. Denuncia Efectiva Radicada (Conversión Final)</span>
              <span className="text-emerald-400 font-bold">
                {formatNumber(reports)} ({conversionRate}% tasa de cierre)
              </span>
            </div>
            <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full"
                style={{ width: `${Math.max(Number(conversionRate) * 10, 8)}%` }}
              />
            </div>
          </div>

        </div>

        {/* Operational takeaway */}
        <div className="mt-6 bg-neutral-950/60 p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="text-neutral-300">
            <span className="text-emerald-400 font-semibold">Diagnóstico Táctico COEST:</span> El Costo por Denuncia Segura en esta campaña es de{' '}
            <strong>{formatCOP(selectedCampaign.cacCop)}</strong>, situándose un 34% por debajo del costo de recepción en CAI tradicional.
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 whitespace-nowrap font-medium">
            Alta Eficiencia Presupuestal
          </span>
        </div>
      </div>

    </div>
  );
};
