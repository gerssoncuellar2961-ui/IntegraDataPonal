import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, BarChart3, Database, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreModules: () => void;
  onOpenAccessModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreModules,
  onOpenAccessModal,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotionQuery.matches) {
      video.pause();
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!reduceMotionQuery.matches) {
                video.play().catch(() => {});
              }
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenAccessModal();
    }, 900);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 overflow-hidden bg-black text-white">
      
      {/* Video de Fondo Cinemático */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster="https://media.dinamosites.com/library/v1/sections/diario-asombro-poster-c4a3012598a2.jpg"
        >
          <source
            src="https://media.dinamosites.com/library/v1/sections/diario-asombro-video-98d1edca66cc.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta reproducción de video en línea.
        </video>
      </div>

      {/* Degradados cinemáticos superior, lateral e inferior */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.40) 35%,
            rgba(0, 0, 0, 0.50) 65%,
            rgba(10, 10, 10, 0.98) 100%
          )`,
        }}
        aria-hidden="true"
      />

      {/* Contenedor Central */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto w-full max-w-4xl py-8">
        
        {/* Cápsula de Identificación Institucional */}
        <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 text-neutral-200 transition-all shadow-lg animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Dirección de Comunicaciones Estratégicas (COEST)</span>
          <span className="text-white/40">•</span>
          <span className="text-emerald-300 font-semibold">PONAL B2G</span>
        </div>

        {/* Tipografía Principal de Alto Contraste (Inter + Instrument Serif) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white mb-6 animate-fade-up [animation-delay:150ms]">
          <span className="font-inter font-medium tracking-tight">Inteligencia </span>
          <span className="font-instrument italic font-normal text-emerald-300">
            Operativa
          </span>
          <br />
          <span className="font-inter font-medium tracking-tight">y Reputación </span>
          <span className="font-instrument italic font-normal text-white">
            Digital
          </span>
        </h1>

        {/* Párrafo Descriptivo Ejecutivo */}
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-neutral-300 mb-8 font-inter animate-fade-up [animation-delay:300ms]">
          Ecosistema analítico unificado para la Policía Nacional de Colombia. 
          Correlaciona en tiempo real el rendimiento de campañas preventivas, 
          escucha social con procesamiento NLP y el impacto sobre la delincuencia en SIEDCO.
        </p>

        {/* Formulario en Cápsula de Vidrio */}
        <div className="w-full max-w-lg mb-4 animate-fade-up [animation-delay:450ms]">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 px-6 py-3.5 rounded-full backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">
                Acceso en trámite. Abriendo panel institucional...
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-white/10 hover:bg-white/15 focus-within:bg-white/20 border border-white/25 focus-within:border-emerald-400/80 rounded-full p-1.5 pl-5 backdrop-blur-xl transition-all shadow-2xl"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo institucional (@policia.gov.co)"
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-white text-sm placeholder:text-neutral-400 font-inter"
                aria-label="Correo institucional"
              />
              <button
                type="submit"
                className="bg-white hover:bg-neutral-100 text-neutral-950 font-inter font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Acceder a Tableros</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          {/* Frase inferior y validación institucional */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Integrado con arquitectura OLAP para</span>
            <span className="font-instrument italic text-white text-sm">
              Power BI & Qlik Sense
            </span>
          </div>
        </div>

        {/* Action quick links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <button
            onClick={onExploreModules}
            className="px-4 py-2 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Explorar Módulos 1, 2 y 3</span>
          </button>
          <a
            href="#star-schema"
            className="px-4 py-2 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center gap-2"
          >
            <Database className="w-3.5 h-3.5 text-sky-400" />
            <span>Ver Modelo Star-Schema</span>
          </a>
        </div>
      </div>

      {/* Grid de Métricas Rápidas en Vidrio */}
      <div className="relative z-10 w-full max-w-5xl mt-auto pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left transition-all hover:border-emerald-500/30">
            <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Audiencia Analizada</span>
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-inter">
              19.5M+
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Ciudadanos alcanzados en redes
            </p>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left transition-all hover:border-emerald-500/30">
            <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mb-1">
              Sentimiento ISSC
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-inter">
              68.4 <span className="text-xs text-neutral-300 font-normal">/100</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Índice Sintético Positivo
            </p>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left transition-all hover:border-emerald-500/30">
            <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mb-1">
              Denuncias Virtuales
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-inter">
              19,780
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Radicadas vía A Denunciar
            </p>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left transition-all hover:border-emerald-500/30">
            <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mb-1">
              Correlación SIEDCO
            </div>
            <div className="text-xl sm:text-2xl font-bold text-sky-400 font-inter">
              -14.2%
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Reducción en delitos priorizados
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
