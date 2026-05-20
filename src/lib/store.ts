import { create } from 'zustand';

export interface TelemetryData {
  cursorMileage: number; // in pixels or virtual meters
  scrollEnergy: number; // in Joules or score
  attentionSpan: number; // hover attention rating
  visitorTier: 'Detecting...' | 'Quick-Scan Recruiter' | 'Hyper-Curious Tech Lead' | 'Automated Bot Analyzer';
  logs: string[];
}

interface AppState {
  booting: boolean;
  auditMode: boolean;
  activeSection: string;
  telemetry: TelemetryData;
  setBooting: (val: boolean) => void;
  toggleAuditMode: () => void;
  setActiveSection: (section: string) => void;
  addTelemetryLog: (log: string) => void;
  updateTelemetry: (update: Partial<Omit<TelemetryData, 'logs'>>) => void;
  clearTelemetryLogs: () => void;
}

export const useStore = create<AppState>((set) => ({
  booting: true,
  auditMode: false,
  activeSection: 'hero',
  telemetry: {
    cursorMileage: 0,
    scrollEnergy: 0,
    attentionSpan: 0,
    visitorTier: 'Detecting...',
    logs: [
      `[SYSTEM] Init spatial runtime v${process.env.NEXT_PUBLIC_APP_VERSION || '1.0.2'}`,
      `[SYSTEM] Awaiting client telemetry synchronization...`
    ]
  },
  setBooting: (val) => set({ booting: val }),
  toggleAuditMode: () => set((state) => {
    const nextMode = !state.auditMode;
    const logMsg = nextMode 
      ? `[SYSTEM] Audit Mode activated. Compiling DOM wireframes...`
      : `[SYSTEM] Audit Mode deactivated. Restoring visual shaders...`;
    return {
      auditMode: nextMode,
      telemetry: {
        ...state.telemetry,
        logs: [logMsg, ...state.telemetry.logs].slice(0, 50)
      }
    };
  }),
  setActiveSection: (section) => set((state) => {
    if (state.activeSection === section) return {};
    const logMsg = `[ROUTING] Pipeline head merged into branch 'origin/${section}'`;
    return {
      activeSection: section,
      telemetry: {
        ...state.telemetry,
        logs: [logMsg, ...state.telemetry.logs].slice(0, 50)
      }
    };
  }),
  addTelemetryLog: (log) => set((state) => ({
    telemetry: {
      ...state.telemetry,
      logs: [`[USER] ${log}`, ...state.telemetry.logs].slice(0, 50)
    }
  })),
  updateTelemetry: (update) => set((state) => {
    const nextTelemetry = { ...state.telemetry, ...update };
    
    // Dynamically calculate tier based on metrics
    let computedTier = state.telemetry.visitorTier;
    if (state.telemetry.logs.length > 5 && computedTier === 'Detecting...') {
      const scrollRate = nextTelemetry.scrollEnergy;
      const hoverRate = nextTelemetry.attentionSpan;
      
      if (scrollRate > 200 && hoverRate < 10) {
        computedTier = 'Quick-Scan Recruiter';
      } else if (hoverRate > 30 || nextTelemetry.cursorMileage > 8000) {
        computedTier = 'Hyper-Curious Tech Lead';
      }
    }
    
    return {
      telemetry: {
        ...nextTelemetry,
        visitorTier: computedTier
      }
    };
  }),
  clearTelemetryLogs: () => set((state) => ({
    telemetry: {
      ...state.telemetry,
      logs: [`[SYSTEM] Telemetry history cleared.`]
    }
  }))
}));
