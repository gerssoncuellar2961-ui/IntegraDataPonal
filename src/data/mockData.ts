import { CampaignData, SentimentData, EarlyAlert, JurisdictionData, SchemaTable, RoadmapPhase } from '../types';

export const CAMPAIGNS_DATA: CampaignData[] = [
  {
    id: 'camp-01',
    name: 'Yo No Pago, Yo Denuncio (Línea 165 GAULA)',
    targetCrime: 'Extorsión y Secuestro',
    division: 'Dirección Antisecuestro y Antiextorsión (DIASE)',
    budgetCop: 185000000,
    spentCop: 162400000,
    reach: 4850000,
    impressions: 12400000,
    clicks: 342000,
    ctr: 2.76,
    reportsGenerated: 4920,
    cacCop: 33008,
    status: 'Activa',
    startDate: '2026-05-01',
    platform: 'Multiplataforma'
  },
  {
    id: 'camp-02',
    name: 'Ciberpaz: Prevención de Estafas Digitales y Phishing',
    targetCrime: 'Ciberdelito y Fraude Virtual',
    division: 'Centro Cibernético Policial (DIJIN)',
    budgetCop: 120000000,
    spentCop: 114500000,
    reach: 6200000,
    impressions: 15800000,
    clicks: 520000,
    ctr: 3.29,
    reportsGenerated: 6810,
    cacCop: 16813,
    status: 'Activa',
    startDate: '2026-06-15',
    platform: 'Meta Ads'
  },
  {
    id: 'camp-03',
    name: 'Patrulla Púrpura: Cero Tolerancia a la Violencia de Género',
    targetCrime: 'Violencia Intrafamiliar',
    division: 'Dirección de Seguridad Ciudadana (DISEC)',
    budgetCop: 95000000,
    spentCop: 92100000,
    reach: 3400000,
    impressions: 8900000,
    clicks: 215000,
    ctr: 2.41,
    reportsGenerated: 2740,
    cacCop: 33613,
    status: 'En Optimización',
    startDate: '2026-04-10',
    platform: 'TikTok Ads'
  },
  {
    id: 'camp-04',
    name: 'Plan Choque 360: Hurto a Personas y Recuperación de Celulares',
    targetCrime: 'Hurto Calificado',
    division: 'Comando General PONAL',
    budgetCop: 140000000,
    spentCop: 139000000,
    reach: 5100000,
    impressions: 11200000,
    clicks: 390000,
    ctr: 3.48,
    reportsGenerated: 5310,
    cacCop: 26177,
    status: 'Concluida',
    startDate: '2026-02-01',
    platform: 'Google Ads'
  }
];

export const SENTIMENT_BY_CHANNEL: SentimentData[] = [
  {
    channel: 'X (Twitter)',
    positive: 38,
    neutral: 31,
    negative: 31,
    totalInteractions: 842000,
    growth: 14.2
  },
  {
    channel: 'Meta (Facebook & IG)',
    positive: 62,
    neutral: 24,
    negative: 14,
    totalInteractions: 1940000,
    growth: 18.5
  },
  {
    channel: 'TikTok Institucional',
    positive: 74,
    neutral: 18,
    negative: 8,
    totalInteractions: 2310000,
    growth: 32.1
  },
  {
    channel: 'YouTube & Web PONAL',
    positive: 58,
    neutral: 32,
    negative: 10,
    totalInteractions: 620000,
    growth: 8.9
  }
];

export const EARLY_ALERTS: EarlyAlert[] = [
  {
    id: 'alt-101',
    title: 'Cadena falsa en WhatsApp sobre toques de queda no oficiales',
    category: 'Desinformación',
    severity: 'Crítica',
    jurisdiction: 'Comando Metropolitano de Bogotá (MEBOG)',
    timestamp: 'Hace 42 min',
    detectedOn: 'X API + Telegram Monitor',
    mentionsCount: 14200,
    sentimentScore: 19,
    summary: 'Difusión de audio adulterado con logos institucionales anunciando restricciones de movilidad.',
    recommendedAction: 'Despliegue de infografía verificada "Caza-Noticias Falsas COEST" en redes con vocería oficial.',
    status: 'En Contención'
  },
  {
    id: 'alt-102',
    title: 'Aumento de conversación sobre extorsión virtual a comerciantes',
    category: 'Pico Negativo',
    severity: 'Media',
    jurisdiction: 'Policía Metropolitana del Valle de Aburrá (MEVAL)',
    timestamp: 'Hace 2 horas',
    detectedOn: 'Meta Ads Comments + Escucha X',
    mentionsCount: 8400,
    sentimentScore: 32,
    summary: 'Usuarios reportan modalidad de llamadas carcelarias exigiendo consignaciones en tiendas barriales.',
    recommendedAction: 'Microsegmentación de pauta GAULA Línea 165 en comunas 10, 11 y 12 del Valle de Aburrá.',
    status: 'Detectada'
  },
  {
    id: 'alt-103',
    title: 'Viralización positiva de rescate de menores en zona rural',
    category: 'Tendencia Viral',
    severity: 'Baja',
    jurisdiction: 'Departamento de Policía Santander (DESAN)',
    timestamp: 'Hace 4 horas',
    detectedOn: 'TikTok + YouTube Shorts',
    mentionsCount: 45000,
    sentimentScore: 92,
    summary: 'Alta aprobación ciudadana por intervención rápida de la Unidad de Rescate Policial.',
    recommendedAction: 'Amplificar pieza en formato story institucional destacando el compromiso vocacional.',
    status: 'Mitigada'
  }
];

export const JURISDICTIONS_DATA: JurisdictionData[] = [
  {
    id: 'jur-01',
    code: 'MEBOG',
    name: 'Metropolitana de Bogotá',
    region: 'Región 1 Central',
    policeStrength: 17800,
    siedcoCrimesCount: 14230,
    digitalFearIndex: 84,
    actualCrimeRatePer100k: 412,
    discrepancyDelta: 18.4,
    trend: 'Disminución',
    topCrimes: [
      { name: 'Hurto a personas', cases: 8940 },
      { name: 'Hurto celulares', cases: 3120 },
      { name: 'Extorsión', cases: 1420 },
      { name: 'Microtráfico', cases: 750 }
    ],
    suggestedAction: 'Brecha de percepción alta (+18.4%). Fortalecer comunicación de capturas en flagrancia y patrullaje visible en TransMilenio.'
  },
  {
    id: 'jur-02',
    code: 'MEVAL',
    name: 'Metropolitana Valle de Aburrá (Medellín)',
    region: 'Región 6 Occidente',
    policeStrength: 8200,
    siedcoCrimesCount: 6840,
    digitalFearIndex: 61,
    actualCrimeRatePer100k: 284,
    discrepancyDelta: 5.2,
    trend: 'Disminución',
    topCrimes: [
      { name: 'Hurto comercial', cases: 2940 },
      { name: 'Extorsión', cases: 1820 },
      { name: 'Hurto motopartes', cases: 1240 },
      { name: 'Homicidio', cases: 840 }
    ],
    suggestedAction: 'Percepción alineada con datos SIEDCO. Mantener campañas de denuncia segura con fiscalía especializada.'
  },
  {
    id: 'jur-03',
    code: 'MECAL',
    name: 'Metropolitana de Cali',
    region: 'Región 4 Sur',
    policeStrength: 6400,
    siedcoCrimesCount: 9120,
    digitalFearIndex: 88,
    actualCrimeRatePer100k: 498,
    discrepancyDelta: 12.1,
    trend: 'Estable',
    topCrimes: [
      { name: 'Hurto calificado', cases: 4890 },
      { name: 'Homicidio', cases: 2140 },
      { name: 'Microtráfico', cases: 1210 },
      { name: 'Extorsión', cases: 880 }
    ],
    suggestedAction: 'Foco prioritario en comunas orientales. Impulsar pauta focalizada de la Línea Multicrimen 3143587212.'
  },
  {
    id: 'jur-04',
    code: 'MEBAR',
    name: 'Metropolitana de Barranquilla',
    region: 'Región 8 Caribe',
    policeStrength: 4900,
    siedcoCrimesCount: 5410,
    digitalFearIndex: 78,
    actualCrimeRatePer100k: 340,
    discrepancyDelta: 14.6,
    trend: 'Disminución',
    topCrimes: [
      { name: 'Extorsión comercio', cases: 2450 },
      { name: 'Hurto personas', cases: 1980 },
      { name: 'Homicidio', cases: 610 },
      { name: 'Ciberestafa', cases: 370 }
    ],
    suggestedAction: 'Refuerzo de campaña GAULA Caribe: "La extorsión se combate con denuncia inmediata".'
  },
  {
    id: 'jur-05',
    code: 'MEBUC',
    name: 'Metropolitana de Bucaramanga',
    region: 'Región 5 Oriente',
    policeStrength: 3200,
    siedcoCrimesCount: 2980,
    digitalFearIndex: 48,
    actualCrimeRatePer100k: 192,
    discrepancyDelta: -4.1,
    trend: 'Disminución',
    topCrimes: [
      { name: 'Hurto a personas', cases: 1620 },
      { name: 'Lesiones personales', cases: 780 },
      { name: 'Microtráfico', cases: 410 },
      { name: 'Ciberdelito', cases: 170 }
    ],
    suggestedAction: 'Alta confianza ciudadana y baja percepción de miedo. Replicar modelo de comunicación comunitaria a otras seccionales.'
  }
];

export const STAR_SCHEMA_TABLES: SchemaTable[] = [
  {
    id: 'fact-campana',
    name: 'Fact_CampanaDigital',
    type: 'Fact',
    color: 'emerald',
    description: 'Registra el desempeño diario y presupuestal de campañas de comunicación institucional.',
    columns: [
      { name: 'ID_Campana', type: 'VARCHAR(50)', isKey: true, description: 'Clave única de la campaña en Meta Ads / Google' },
      { name: 'ID_Tiempo', type: 'INT (FK)', isKey: true, description: 'Clave foránea que referencia Dim_Tiempo' },
      { name: 'ID_Jurisdiccion', type: 'INT (FK)', isKey: true, description: 'Clave foránea que referencia Dim_Jurisdiccion' },
      { name: 'ID_CanalDigital', type: 'INT (FK)', isKey: true, description: 'Clave foránea que referencia Dim_CanalDigital' },
      { name: 'ID_TipoDelito', type: 'INT (FK)', isKey: true, description: 'Clave foránea que referencia Dim_TipoDelito' },
      { name: 'Presupuesto_Ejecutado', type: 'DECIMAL(18,2)', description: 'Costo total en pesos COP invertidos' },
      { name: 'Impresiones', type: 'BIGINT', description: 'Veces que el anuncio fue desplegado' },
      { name: 'Alcance_Unico', type: 'BIGINT', description: 'Usuarios únicos alcanzados' },
      { name: 'Clics_Salientes', type: 'INT', description: 'Interacciones que direccionan a la denuncia virtual' },
      { name: 'CTR', type: 'DECIMAL(5,4)', description: 'Tasa de clics respecto a impresiones' }
    ],
    sampleDaxMeasure: 'CAC_Denuncia_Segura = DIVIDE(SUM(Fact_CampanaDigital[Presupuesto_Ejecutado]), [Total_Denuncias_Efectivas], 0)'
  },
  {
    id: 'fact-interaccion',
    name: 'Fact_InteraccionCiudadana',
    type: 'Fact',
    color: 'sky',
    description: 'Almacena resultados del procesamiento de lenguaje natural (NLP) sobre escucha ciudadana en redes.',
    columns: [
      { name: 'ID_Interaccion', type: 'BIGINT', isKey: true, description: 'Identificador único del mensaje analizado' },
      { name: 'ID_Tiempo', type: 'INT (FK)', isKey: true, description: 'Fecha y hora de captura' },
      { name: 'ID_CanalDigital', type: 'INT (FK)', isKey: true, description: 'Plataforma de origen (X, Meta, TikTok)' },
      { name: 'ID_Jurisdiccion', type: 'INT (FK)', isKey: true, description: 'Ubicación geolocalizada o inferida' },
      { name: 'Score_Sentimiento', type: 'FLOAT', description: 'Valor de -1.00 (muy negativo) a +1.00 (muy positivo)' },
      { name: 'Clasificacion_NLP', type: 'VARCHAR(30)', description: 'Positivo, Neutro, Negativo o Alerta Temprana' },
      { name: 'Flag_Desinformacion', type: 'BOOLEAN', description: 'Indica si coincide con patrones de fake news' }
    ],
    sampleDaxMeasure: 'ISSC_Indice = CALCULATE(AVERAGE(Fact_InteraccionCiudadana[Score_Sentimiento]) * 100)'
  },
  {
    id: 'fact-denuncia',
    name: 'Fact_DenunciaVirtual',
    type: 'Fact',
    color: 'amber',
    description: 'Métricas de entrada, trámite y finalización en la plataforma unificada A Denunciar.',
    columns: [
      { name: 'ID_TramiteDenuncia', type: 'BIGINT', isKey: true, description: 'Código único de la radicación virtual' },
      { name: 'ID_Tiempo', type: 'INT (FK)', isKey: true, description: 'Fecha de ingreso al sistema' },
      { name: 'ID_Jurisdiccion', type: 'INT (FK)', isKey: true, description: 'Comando o estación asignada al caso' },
      { name: 'ID_TipoDelito', type: 'INT (FK)', isKey: true, description: 'Tipo penal radicado' },
      { name: 'Estado_Tramite', type: 'VARCHAR(30)', description: 'Iniciada, Completada, Desistida o En Verificación' },
      { name: 'Origen_Atribucion', type: 'VARCHAR(50)', description: 'CampanaDigital, Organico o Referido Línea 123' }
    ],
    sampleDaxMeasure: 'Tasa_Conversion_Denuncia = DIVIDE([Denuncias_Completadas], [Visitas_Landing_ADenunciar], 0)'
  },
  {
    id: 'dim-tiempo',
    name: 'Dim_Tiempo',
    type: 'Dimension',
    color: 'purple',
    description: 'Jerarquía temporal para análisis comparativo año a año y estacionalidad operativa.',
    columns: [
      { name: 'ID_Tiempo', type: 'INT', isKey: true, description: 'Clave subrogada (AAAAMMDD)' },
      { name: 'Fecha', type: 'DATE', description: 'Fecha en formato estándar' },
      { name: 'Mes', type: 'VARCHAR(20)', description: 'Nombre del mes' },
      { name: 'Trimestre', type: 'VARCHAR(5)', description: 'T1, T2, T3, T4' },
      { name: 'Ano', type: 'INT', description: 'Año fiscal' },
      { name: 'Es_Festivo_Operativo', type: 'BOOLEAN', description: 'Indica fechas de plan retorno o alta afluencia' }
    ]
  },
  {
    id: 'dim-jurisdiccion',
    name: 'Dim_Jurisdiccion',
    type: 'Dimension',
    color: 'teal',
    description: 'Estructura territorial policial desde Comandos Regionales hasta CAI.',
    columns: [
      { name: 'ID_Jurisdiccion', type: 'INT', isKey: true, description: 'Código único institucional' },
      { name: 'Region_Policia', type: 'VARCHAR(50)', description: 'Región 1 a 8 de la Policía Nacional' },
      { name: 'Comando_Metropolitano', type: 'VARCHAR(80)', description: 'MEBOG, MEVAL, MECAL, MEBAR, etc.' },
      { name: 'Distrito', type: 'VARCHAR(50)', description: 'Distrito de Policía' },
      { name: 'Estacion_CAI', type: 'VARCHAR(60)', description: 'Estación local o Centro de Atención Inmediata' }
    ]
  },
  {
    id: 'dim-canal',
    name: 'Dim_CanalDigital',
    type: 'Dimension',
    color: 'indigo',
    description: 'Canales de difusión, pauta digital y puntos de contacto ciudadano.',
    columns: [
      { name: 'ID_CanalDigital', type: 'INT', isKey: true, description: 'Clave del medio' },
      { name: 'Nombre_Plataforma', type: 'VARCHAR(50)', description: 'Meta, X, TikTok, YouTube, Portal Web' },
      { name: 'Categoria_Canal', type: 'VARCHAR(40)', description: 'Red Social, Canal Oficial, Plataforma de Pauta' },
      { name: 'Protocolo_API', type: 'VARCHAR(30)', description: 'Graph API, X v2 API, Webhook Interno' }
    ]
  },
  {
    id: 'dim-delito',
    name: 'Dim_TipoDelito',
    type: 'Dimension',
    color: 'rose',
    description: 'Tipificación penal normalizada con el catálogo SIEDCO y código penal colombiano.',
    columns: [
      { name: 'ID_TipoDelito', type: 'INT', isKey: true, description: 'Código de tipificación penal' },
      { name: 'Categoria_General', type: 'VARCHAR(50)', description: 'Delitos contra el patrimonio, la vida, libertad' },
      { name: 'Subtipo_Delictivo', type: 'VARCHAR(60)', description: 'Extorsión, Hurto a personas, Ciberfraude' },
      { name: 'Unidad_Especializada', type: 'VARCHAR(60)', description: 'GAULA, DIJIN, DIPOL, DISEC' }
    ]
  }
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    id: 1,
    title: 'Fase 1: Requerimientos y Arquitectura Dimensional',
    period: 'Q1 2026',
    status: 'Completada',
    progress: 100,
    deliverables: [
      'Levantamiento de requerimientos estratégicos con Dirección COEST',
      'Definición de catálogo unificado de KPIs (CAC, ISSC, Brecha Perceptual)',
      'Diseño conceptual y lógico del modelo Star-Schema OLAP'
    ],
    tools: ['Power BI', 'Qlik Sense', 'Miro', 'Azure Data Studio']
  },
  {
    id: 2,
    title: 'Fase 2: Wireframes UX/UI y Layouts de Alta Fidelidad',
    period: 'Q2 2026',
    status: 'Completada',
    progress: 100,
    deliverables: [
      'Diseño del portal institucional con lenguaje visual táctico',
      'Prototipos interactivos de los 3 módulos analíticos operacionales',
      'Validación de ergonomía visual para salas de mando y control (CIEPS)'
    ],
    tools: ['Figma', 'Tailwind CSS', 'React 19', 'Design Tokens PONAL']
  },
  {
    id: 3,
    title: 'Fase 3: Parametrización ETL e Ingesta de Datos',
    period: 'Q3 2026',
    status: 'En curso',
    progress: 68,
    deliverables: [
      'Scripts de ingesta y transformación en PySpark / SQL',
      'Conexión segura con microservicios SIEDCO y A Denunciar',
      'Integración del conector de datos abiertos (Datos.gov.co)'
    ],
    tools: ['Apache Spark', 'Python / NLP Spacy', 'PostgreSQL', 'REST APIs']
  },
  {
    id: 4,
    title: 'Fase 4: Formulación DAX Avanzada y Despliegue Unificado',
    period: 'Q4 2026',
    status: 'Pendiente',
    progress: 15,
    deliverables: [
      'Medidas complejas DAX y expresiones de Set Analysis en Qlik',
      'Homologación de roles de seguridad a nivel de fila (RLS) por Comandancia',
      'Despliegue en ambiente cloud seguro y capacitación a oficiales analistas'
    ],
    tools: ['DAX Studio', 'Power BI Embedded', 'Docker / Kubernetes', 'Active Directory']
  }
];
