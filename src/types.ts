export interface CampaignData {
  id: string;
  name: string;
  targetCrime: string;
  division: string;
  budgetCop: number;
  spentCop: number;
  reach: number;
  impressions: number;
  clicks: number;
  ctr: number;
  reportsGenerated: number;
  cacCop: number;
  status: 'Activa' | 'En Optimización' | 'Concluida';
  startDate: string;
  platform: 'Meta Ads' | 'Google Ads' | 'TikTok Ads' | 'Multiplataforma';
}

export interface SentimentData {
  channel: string;
  positive: number;
  neutral: number;
  negative: number;
  totalInteractions: number;
  growth: number;
}

export interface EarlyAlert {
  id: string;
  title: string;
  category: 'Desinformación' | 'Pico Negativo' | 'Tendencia Viral' | 'Riesgo Reputacional';
  severity: 'Crítica' | 'Media' | 'Baja';
  jurisdiction: string;
  timestamp: string;
  detectedOn: string;
  mentionsCount: number;
  sentimentScore: number; // 0 to 100
  summary: string;
  recommendedAction: string;
  status: 'Detectada' | 'En Contención' | 'Mitigada';
}

export interface JurisdictionData {
  id: string;
  code: string;
  name: string;
  region: string;
  policeStrength: number;
  siedcoCrimesCount: number;
  digitalFearIndex: number; // 0 to 100
  actualCrimeRatePer100k: number;
  discrepancyDelta: number; // Difference between perception and reality
  topCrimes: { name: string; cases: number }[];
  trend: 'Disminución' | 'Estable' | 'Aumento';
  suggestedAction: string;
}

export interface SchemaTable {
  id: string;
  name: string;
  type: 'Fact' | 'Dimension';
  description: string;
  color: string;
  columns: { name: string; type: string; isKey?: boolean; description: string }[];
  sampleDaxMeasure?: string;
}

export interface RoadmapPhase {
  id: number;
  title: string;
  period: string;
  status: 'Completada' | 'En curso' | 'Pendiente';
  progress: number;
  deliverables: string[];
  tools: string[];
}
