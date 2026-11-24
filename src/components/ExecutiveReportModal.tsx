import React from 'react';
import { X, Printer, Shield, CheckCircle, FileText, BarChart3, Database } from 'lucide-react';

interface ExecutiveReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveReportModal: React.FC<ExecutiveReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-neutral-900 border border-white/20 rounded-3xl max-w-3xl w-full p-6 sm:p-10 text-white relative shadow-2xl my-8 font-inter">
        
        {/* Actions bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm text-white">
              Ficha Técnica Oficial • COEST PONAL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Container */}
        <div className="space-y-6 text-neutral-300 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  Policía Nacional de Colombia • Dirección de Comunicaciones Estratégicas
                </span>
                <h1 className="text-2xl font-bold text-white">
                  CivicPulse Analytics: Inteligencia Operativa y Reputación Digital
                </h1>
                <p className="text-xs text-neutral-400 mt-1">
                  Documento Estratégico de Arquitectura y Nivel de Madurez Operativa
                </p>
              </div>
              <div className="text-right text-[11px] text-neutral-400 shrink-0">
                <div>Fecha: 2026</div>
                <div className="text-emerald-400 font-bold">Estado: Fase 3 (En Curso)</div>
              </div>
            </div>
          </div>

          {/* 1. Resumen */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>1. Definición y Propuesta de Valor (B2G)</span>
            </h2>
            <p className="leading-relaxed text-neutral-300">
              Iniciativa de consultoría e inteligencia de negocios orientada a la <strong>Policía Nacional de Colombia (PONAL)</strong> y su Dirección de Comunicaciones Estratégicas (<strong>COEST</strong>). Integra en un ecosistema centralizado (Power BI / Qlik Sense) el desempeño de pauta institucional, análisis de sentimiento NLP sobre opinión ciudadana y correlación con estadísticas criminales oficiales (SIEDCO).
            </p>
          </div>

          {/* 2. Vertientes y Módulos */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-sky-400" />
              <span>2. Módulos Operativos del Tablero de Control</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-neutral-950 rounded-xl border border-white/5">
                <strong className="text-white block mb-1 text-xs">Módulo 1: Pauta y Prevención</strong>
                <p className="text-[11px] text-neutral-400">
                  Cálculo del CAC de la denuncia segura y rendimiento de pauta en GAULA, DIJIN y DISEC.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-xl border border-white/5">
                <strong className="text-white block mb-1 text-xs">Módulo 2: Reputación e ISSC</strong>
                <p className="text-[11px] text-neutral-400">
                  Índice Sintético de Sentimiento Ciudadano y matriz semafórica de contención de Fake News.
                </p>
              </div>
              <div className="p-3 bg-neutral-950 rounded-xl border border-white/5">
                <strong className="text-white block mb-1 text-xs">Módulo 3: Mapa SIEDCO</strong>
                <p className="text-[11px] text-neutral-400">
                  Cruce perceptual de miedo digital versus delitos reales registrados por jurisdicción.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Arquitectura Star-Schema */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-amber-400" />
              <span>3. Arquitectura Dimensional del Star-Schema</span>
            </h2>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Tablas de Hechos:</strong> Fact_CampanaDigital, Fact_InteraccionCiudadana, Fact_DenunciaVirtual.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Tablas de Dimensiones:</strong> Dim_Tiempo, Dim_Jurisdiccion (Comandos y CAI), Dim_CanalDigital, Dim_TipoDelito.</span>
              </li>
            </ul>
          </div>

          {/* 4. Hoja de ruta */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              4. Nivel de Avance de la Hoja de Ruta
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-neutral-950 p-2.5 rounded-lg border border-white/5">
                <span>Fase 1: Requerimientos y Arquitectura Dimensional</span>
                <span className="text-emerald-400 font-bold">100% Completada</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-950 p-2.5 rounded-lg border border-white/5">
                <span>Fase 2: Wireframes UX/UI y Layouts de Alta Fidelidad</span>
                <span className="text-emerald-400 font-bold">100% Completada</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-950 p-2.5 rounded-lg border border-white/5">
                <span>Fase 3: Parametrización ETL e Ingesta de Datos Abiertos</span>
                <span className="text-sky-400 font-bold">68% En Curso</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-950 p-2.5 rounded-lg border border-white/5">
                <span>Fase 4: Formulación DAX Avanzada y Despliegue Unificado</span>
                <span className="text-neutral-400 font-bold">15% Pendiente</span>
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8 text-center text-xs">
            <div>
              <div className="h-10 border-b border-neutral-600 mb-2" />
              <strong className="text-white block">Dirección de Comunicaciones Estratégicas</strong>
              <span className="text-neutral-400">COEST • Policía Nacional</span>
            </div>
            <div>
              <div className="h-10 border-b border-neutral-600 mb-2" />
              <strong className="text-white block">Líder Técnico de Analítica</strong>
              <span className="text-neutral-400">Equipo Consultor CivicPulse Analytics</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
