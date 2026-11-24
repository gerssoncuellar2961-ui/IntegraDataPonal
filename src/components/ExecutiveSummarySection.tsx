import React from 'react';
import { Target, MessageSquareCode, Scale, Database, Cpu, CheckCircle } from 'lucide-react';

export const ExecutiveSummarySection: React.FC = () => {
  return (
    <section id="resumen" className="py-20 bg-neutral-950 border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 mb-4">
            <span>Sección 1.0</span>
            <span className="text-white/30">•</span>
            <span>Resumen Ejecutivo del Negocio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Ecosistema de Inteligencia B2G para la{' '}
            <span className="font-instrument italic font-normal text-emerald-400">
              Policía Nacional de Colombia
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-inter">
            CivicPulse Analytics fue concebido para la Dirección de Comunicaciones Estratégicas (COEST). 
            Supera la analítica tradicional de vanidad digital y conecta la comunicación institucional 
            directamente con la reducción del delito y la legitimidad policial.
          </p>
        </div>

        {/* 3 Vertientes Críticas en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Vertiente 1 */}
          <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
              Vertiente 01
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              Métricas de Marketing Digital e Interacción
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Medición de retorno sobre inversión institucional (ROI/CAC) en Meta Ads, X API, TikTok y YouTube. 
              Monitoreo de clics, tasa CTR, impresiones y conversión de ciudadanos hacia la plataforma digital <em>A Denunciar</em>.
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auditoría de presupuesto ejecutado en pauta</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cálculo del CAC por Denuncia Segura</span>
              </li>
            </ul>
          </div>

          {/* Vertiente 2 */}
          <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-sky-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <MessageSquareCode className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Vertiente 02
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              Escucha Social y Análisis de Sentimiento (NLP)
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Procesamiento de Lenguaje Natural sobre miles de comentarios y menciones. 
              Construcción del Indicador Sintético de Sentimiento Ciudadano (ISSC) y detección temprana de desinformación (<em>fake news</em>).
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Matriz semafórica de alertas tempranas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Clasificación semántica por comandos y CAI</span>
              </li>
            </ul>
          </div>

          {/* Vertiente 3 */}
          <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-amber-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Vertiente 03
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              Cruce Operativo-Estratégico (SIEDCO)
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Correlación territorial entre inversión en comunicación preventiva y tasas reales 
              de criminalidad registradas por la Policía (SIEDCO), contrastando la percepción de miedo digital contra la realidad delictiva.
            </p>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Índice de discrepancia delictiva territorial</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Optimización de patrullaje y pauta preventiva</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bloque Tecnológico B2G */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4" />
                <span>Interoperabilidad de Nivel Gubernamental</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Preparado para Power BI, Qlik Sense & Centros Automáticos de Despacho
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Estructura de datos optimizada en modelo Star-Schema que garantiza consultas OLAP en sub-segundos, 
                integrando esquemas de Seguridad a Nivel de Fila (RLS) para directores de seccionales y comandantes de estación.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-neutral-200">
                Power BI Embedded
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-neutral-200">
                Qlik Sense Enterprise
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-neutral-200">
                Datos.gov.co Open API
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
