import React, { useState } from 'react';
import { Shield, Menu, X, FileText, Lock, ChevronDown } from 'lucide-react';

interface HeaderNavProps {
  onOpenAccessModal: () => void;
  onOpenReportModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenAccessModal,
  onOpenReportModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/50 group-hover:border-emerald-400 transition-colors">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-inter font-bold tracking-tight text-white text-base sm:text-lg">
                CivicPulse <span className="text-emerald-400 font-medium">Analytics</span>
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 uppercase">
                PONAL • COEST
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block">
              Inteligencia Operativa y Reputación Digital
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#resumen"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Propuesta B2G
          </a>
          <a
            href="#modulos"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1 group"
          >
            Módulos de Mando
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
          </a>
          <a
            href="#star-schema"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Modelo Star-Schema
          </a>
          <a
            href="#roadmap"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Hoja de Ruta
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="btn-report-briefing"
            onClick={onOpenReportModal}
            className="px-3.5 py-2 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ficha Técnica</span>
          </button>
          <button
            id="btn-access-request"
            onClick={onOpenAccessModal}
            className="px-4 py-2 rounded-full text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-neutral-950" />
            <span>Acceso COEST</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-white/10 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#resumen"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-white py-2"
          >
            Propuesta B2G
          </a>
          <a
            href="#modulos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-white py-2"
          >
            Módulos Operativos (Pauta, ISSC, Mapa SIEDCO)
          </a>
          <a
            href="#star-schema"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-white py-2"
          >
            Modelo Dimensional Star-Schema
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-white py-2"
          >
            Hoja de Ruta de Implementación
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReportModal();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              Ver Ficha Técnica
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccessModal();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-neutral-950 bg-white flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Solicitar Acceso COEST
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
