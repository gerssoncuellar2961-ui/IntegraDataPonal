import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, User, Mail, Building, Award } from 'lucide-react';

interface AccessRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessRequestModal: React.FC<AccessRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Analista Estratégico COEST');
  const [jurisdiction, setJurisdiction] = useState('MEBOG - Metropolitana de Bogotá');
  const [permissionLevel, setPermissionLevel] = useState('Analítica Avanzada y DAX');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const randomTicket = `COEST-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(randomTicket);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-neutral-900 border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-inter">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedTicket ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-white">
              Solicitud Registrada
            </h3>
            
            <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Su petición de credenciales para el entorno seguro de <strong>CivicPulse Analytics</strong> ha sido radicada ante la Dirección de Comunicaciones Estratégicas (COEST).
            </p>

            <div className="bg-neutral-950 p-4 rounded-2xl border border-white/10 max-w-xs mx-auto">
              <span className="text-[10px] uppercase text-neutral-400 font-semibold block">
                Radicado de Seguridad
              </span>
              <span className="text-lg font-mono font-bold text-emerald-400">
                {submittedTicket}
              </span>
              <span className="text-[11px] text-neutral-500 block mt-1">
                Validación de correo institucional en 24h
              </span>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors"
            >
              Cerrar y Volver a la Plataforma
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>Acceso Restringido • PONAL B2G</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Solicitar Credenciales COEST
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Habilitación de acceso a tableros de mando operacional, cruce SIEDCO y métricas de pauta.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Nombre Completo y Grado</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Mayor Carlos Mendoza"
                  className="w-full bg-neutral-950 border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Correo Electrónico Institucional</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@policia.gov.co"
                  className="w-full bg-neutral-950 border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Rol Institucional</span>
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/20 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Analista Estratégico COEST">Analista COEST</option>
                    <option value="Comandante de Departamento">Comandante de Comando</option>
                    <option value="Oficial de Operaciones (DISEC)">Oficial DISEC</option>
                    <option value="Enlace Tecnológico / Telemática">Oficial Telemática</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Jurisdicción Asignada</span>
                  </label>
                  <select
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/20 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Dirección General (DIPON)">Dirección General</option>
                    <option value="MEBOG - Bogotá">MEBOG (Bogotá)</option>
                    <option value="MEVAL - Medellín">MEVAL (Medellín)</option>
                    <option value="MECAL - Cali">MECAL (Cali)</option>
                    <option value="MEBAR - Barranquilla">MEBAR (Barranquilla)</option>
                    <option value="MEBUC - Bucaramanga">MEBUC (Bucaramanga)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-3 rounded-xl transition-colors shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enviar Solicitud a COEST</span>
                </button>
              </div>

              <p className="text-[10px] text-neutral-500 text-center leading-relaxed">
                El acceso a métricas SIEDCO y datos ciudadanos está sujeto a la Ley 1581 de Protección de Datos Personales y directivas de seguridad informática de PONAL.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
