import React from 'react';
import { Shield, ExternalLink, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAccessModal: () => void;
  onOpenReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAccessModal,
  onOpenReportModal,
}) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 font-inter text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">
                CivicPulse <span className="text-emerald-400 font-medium">Analytics</span>
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Plataforma de inteligencia de negocios y analítica operativa para la Dirección de Comunicaciones Estratégicas (COEST) de la Policía Nacional de Colombia.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sistemas de Monitoreo Activos 24/7</span>
            </div>
          </div>

          {/* Modules Navigation */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Módulos de Mando
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#modulos" className="hover:text-white transition-colors">
                  Rendimiento de Pauta GAULA
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-white transition-colors">
                  Monitoreo de Sentimiento (ISSC)
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-white transition-colors">
                  Alertas de Desinformación
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-white transition-colors">
                  Mapa SIEDCO vs Percepción
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture & Tech */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Arquitectura B2G
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#star-schema" className="hover:text-white transition-colors">
                  Modelo Star-Schema
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  Cronograma de Fases
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReportModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Ficha Técnica Oficial
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAccessModal}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Acreditación COEST</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Fuentes Institucionales */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Fuentes Conectadas
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-center gap-1 text-neutral-300">
                <span>Policía Nacional (PONAL)</span>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <span>Portal A Denunciar</span>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <span>SIEDCO (Cifras Oficiales)</span>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <span>Datos.gov.co Open API</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} CivicPulse Analytics – Consultoría de Inteligencia Operativa y Reputación Digital para PONAL/COEST.
          </div>
          <div className="flex items-center gap-4">
            <span>Seguridad de Datos Ley 1581</span>
            <span>•</span>
            <span>Arquitectura Power BI & Qlik</span>
            <span>•</span>
            <span>Vite + React 19</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
