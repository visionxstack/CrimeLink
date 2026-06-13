import { Settings as SettingsIcon, Server, Shield, Database, Bell, Save, RotateCcw, Activity } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <SettingsIcon className="size-5 text-[#a1a1a1]" />
            SYSTEM CONFIGURATION
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Global engine parameters, API integrations, and security thresholds.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-neutral-900 hover:bg-neutral-800"
            variant="outline"
          >
            <RotateCcw className="size-3.5" />
            Reset Defaults
          </Button>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-[var(--police)] text-white hover:opacity-90"
          >
            <Save className="size-3.5" />
            Apply Changes
          </Button>
        </div>
      </div>

      <div className="flex gap-4 border-b-1 border-white/10 border-solid pb-0 mb-6">
        {[
          { name: "General", icon: SettingsIcon, active: true },
          { name: "Integrations & API", icon: Server, active: false },
          { name: "Security & Risk", icon: Shield, active: false },
          { name: "Data Retention", icon: Database, active: false },
          { name: "Alert Routing", icon: Bell, active: false }
        ].map(tab => (
          <button
            key={tab.name}
            className={`text-xs leading-4 pb-2 px-3 border-b-2 border-solid flex items-center gap-2 ${
              tab.active 
                ? "text-neutral-50 border-neutral-50 font-bold" 
                : "text-[#a1a1a1] border-transparent hover:text-neutral-50"
            }`}
          >
            <tab.icon className="size-3.5" />
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                ENVIRONMENT SETTINGS
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-50 mb-1">System Mode</span>
                  <span className="text-xs text-[#a1a1a1]">Toggle between production and staging environments.</span>
                </div>
                <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center w-48">
                  <select className="bg-transparent outline-none text-[var(--alert)] font-bold text-xs leading-4 w-full appearance-none">
                    <option className="bg-neutral-900 text-[var(--alert)]">PRODUCTION (LIVE)</option>
                    <option className="bg-neutral-900 text-neutral-50">STAGING / TEST</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-50 mb-1">Automated OCR Pipeline</span>
                  <span className="text-xs text-[#a1a1a1]">Automatically queue uploaded evidence for text extraction.</span>
                </div>
                <div className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-[var(--intel)]">
                  <span className="inline-block size-3.5 translate-x-4 rounded-full bg-white transition" />
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-50 mb-1">AI Summary Generation</span>
                  <span className="text-xs text-[#a1a1a1]">Enable automated intelligence briefings on case dockets.</span>
                </div>
                <div className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-[var(--intel)]">
                  <span className="inline-block size-3.5 translate-x-4 rounded-full bg-white transition" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                DISPLAY PREFERENCES
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-50 mb-1">Timezone</span>
                  <span className="text-xs text-[#a1a1a1]">Global timezone used across all audit logs and timelines.</span>
                </div>
                <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center w-48">
                  <select className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-full appearance-none">
                    <option className="bg-neutral-900">Asia/Kathmandu (NPT)</option>
                    <option className="bg-neutral-900">UTC</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                SYSTEM HEALTH
              </span>
              <Activity className="size-3.5 text-[var(--ok)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">DATABASE STATUS</span>
                <span className="text-[var(--ok)] text-xs font-bold flex items-center gap-1.5">
                  <span className="size-1.5 animate-pulse bg-[var(--ok)] rounded-full" />
                  CONNECTED
                </span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">API LATENCY</span>
                <span className="text-neutral-50 text-xs font-bold">14ms</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">VERSION</span>
                <span className="text-neutral-50 text-xs font-mono">v2.4.11-stable</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
