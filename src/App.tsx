import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ExecutiveSummarySection } from './components/ExecutiveSummarySection';
import { DashboardContainer } from './components/DashboardContainer';
import { StarSchemaViewer } from './components/StarSchemaViewer';
import { RoadmapSection } from './components/RoadmapSection';
import { AccessRequestModal } from './components/AccessRequestModal';
import { ExecutiveReportModal } from './components/ExecutiveReportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const scrollToModules = () => {
    const el = document.getElementById('modulos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-emerald-500 selection:text-neutral-950">
      {/* Top Navbar */}
      <HeaderNav
        onOpenAccessModal={() => setAccessModalOpen(true)}
        onOpenReportModal={() => setReportModalOpen(true)}
      />

      {/* Cinematic Hero Section with Video Background and Glass Form */}
      <HeroSection
        onExploreModules={scrollToModules}
        onOpenAccessModal={() => setAccessModalOpen(true)}
      />

      {/* Section 1: Executive Business Value & 3 Foundational Pillars */}
      <ExecutiveSummarySection />

      {/* Section 2: Interactive Operational Command Modules (1, 2, 3) */}
      <DashboardContainer />

      {/* Section 3: Star-Schema Dimensional Model Viewer */}
      <StarSchemaViewer />

      {/* Section 4: Implementation Roadmap (Phases 1 - 4) */}
      <RoadmapSection />

      {/* Institutional Footer */}
      <Footer
        onOpenAccessModal={() => setAccessModalOpen(true)}
        onOpenReportModal={() => setReportModalOpen(true)}
      />

      {/* Institutional Access Request Modal */}
      <AccessRequestModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
      />

      {/* Executive Technical Briefing & Printable Report Modal */}
      <ExecutiveReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  );
}
