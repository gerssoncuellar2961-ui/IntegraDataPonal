import React, { useState } from 'react';
import { STAR_SCHEMA_TABLES } from '../data/mockData';
import { SchemaTable } from '../types';
import { Database, Key, Table2, Layers, Code, CheckCircle } from 'lucide-react';

export const StarSchemaViewer: React.FC = () => {
  const [selectedTableId, setSelectedTableId] = useState<string>(STAR_SCHEMA_TABLES[0].id);

  const selectedTable: SchemaTable =
    STAR_SCHEMA_TABLES.find((t) => t.id === selectedTableId) || STAR_SCHEMA_TABLES[0];

  const factTables = STAR_SCHEMA_TABLES.filter((t) => t.type === 'Fact');
  const dimTables = STAR_SCHEMA_TABLES.filter((t) => t.type === 'Dimension');

  return (
    <section id="star-schema" className="py-20 bg-neutral-950 border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 mb-4">
            <span>Sección 2.1</span>
            <span className="text-white/30">•</span>
            <span>Arquitectura Dimensional OLAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Modelado Dimensional{' '}
            <span className="font-instrument italic font-normal text-emerald-400">
              Star-Schema
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-inter">
            Estructura optimizada para motores de análisis en memoria (Power BI VertiPaq / Qlik QVD), 
            diseñada para responder con latencia inferior a 200ms a consultas multidimensionales sobre millones de registros.
          </p>
        </div>

        {/* Conceptual Schema Topology Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column: Facts & Dimensions Selection */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fact Tables Group */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4" />
                <span>Tablas de Hechos (Métricas y Transacciones)</span>
              </div>
              <div className="space-y-2">
                {factTables.map((table) => {
                  const isSelected = table.id === selectedTableId;
                  return (
                    <button
                      key={table.id}
                      onClick={() => setSelectedTableId(table.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg shadow-emerald-950/40'
                          : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:bg-neutral-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-emerald-500 text-neutral-950 font-bold' : 'bg-white/10 text-neutral-400'
                        }`}>
                          <Table2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">{table.name}</div>
                          <div className="text-[11px] text-neutral-400">
                            {table.columns.length} atributos mapeados
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        FACT
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dimension Tables Group */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-3">
                <Database className="w-4 h-4" />
                <span>Tablas de Dimensiones (Contexto y Filtros)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dimTables.map((table) => {
                  const isSelected = table.id === selectedTableId;
                  return (
                    <button
                      key={table.id}
                      onClick={() => setSelectedTableId(table.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-sky-950/40 border-sky-500 text-white shadow-lg shadow-sky-950/40'
                          : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:bg-neutral-800'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="font-bold text-xs truncate">{table.name}</div>
                        <div className="text-[10px] text-neutral-400">
                          {table.columns.length} columnas
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-sky-500/20 text-sky-300 shrink-0">
                        DIM
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Integration Note */}
            <div className="bg-neutral-900/40 p-4 rounded-xl border border-white/10 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Garantía de Normalización Kimball:</span>
              </div>
              <p>
                Relaciones 1 a muchos (1:N) con integridad referencial estricta, listas para ingestión vía scripts PySpark en Databricks / Azure Synapse.
              </p>
            </div>

          </div>

          {/* Right Column: Detailed Schema Inspector */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {selectedTable.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      selectedTable.type === 'Fact'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    }`}>
                      {selectedTable.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    {selectedTable.description}
                  </p>
                </div>
              </div>

              {/* Columns Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-neutral-400">
                      <th className="pb-2 font-medium">Columna</th>
                      <th className="pb-2 font-medium">Tipo de Dato</th>
                      <th className="pb-2 font-medium">Propósito</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {selectedTable.columns.map((col) => (
                      <tr key={col.name} className="hover:bg-white/5">
                        <td className="py-2.5 font-mono text-emerald-300 flex items-center gap-1.5">
                          {col.isKey && <Key className="w-3 h-3 text-amber-400 shrink-0" />}
                          <span>{col.name}</span>
                        </td>
                        <td className="py-2.5 font-mono text-neutral-400 text-[11px]">
                          {col.type}
                        </td>
                        <td className="py-2.5 text-neutral-300">
                          {col.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DAX Measure Sample if Available */}
            {selectedTable.sampleDaxMeasure && (
              <div className="bg-neutral-950 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Code className="w-4 h-4" />
                    <span>Medida DAX Sugerida (Power BI / Analysis Services)</span>
                  </span>
                  <span className="text-[10px] text-neutral-500">DAX Formula</span>
                </div>
                <pre className="font-mono text-xs text-neutral-200 bg-neutral-900/80 p-3 rounded-lg overflow-x-auto border border-white/5">
                  <code>{selectedTable.sampleDaxMeasure}</code>
                </pre>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
