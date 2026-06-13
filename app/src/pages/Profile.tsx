import { User, Shield, MapPin, Briefcase, Key, Activity, Clock, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <User className="size-5 text-[var(--intel)]" />
            OFFICER DOSSIER
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Personnel credentials, clearance level, and activity log.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-neutral-900 hover:bg-neutral-800"
            variant="outline"
          >
            <Download className="size-3.5" />
            Export Audit Log
          </Button>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-[var(--intel)]/20 text-[var(--intel)] hover:bg-[var(--intel)]/30 border-[var(--intel)]/30"
          >
            <Key className="size-3.5" />
            Rotate Credentials
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-16 bg-[oklch(0.12_0.01_255)] border-b border-white/10" />
            <CardContent className="p-0 flex flex-col items-center mt-6 relative z-10">
              <div className="size-24 rounded-sm border-2 border-neutral-900 bg-neutral-800 flex justify-center items-center mb-4 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=J+Sharma&background=262626&color=a1a1a1&size=128&rounded=false&font-size=0.4" alt="J. Sharma" className="size-full object-cover opacity-80 mix-blend-luminosity" />
              </div>
              <h2 className="text-lg font-bold tracking-widest text-neutral-50 mb-1">J. SHARMA</h2>
              <span className="text-[#a1a1a1] text-[10px] tracking-widest flex items-center gap-1.5 mb-4">
                <Briefcase className="size-3" />
                CYBER INVESTIGATOR
              </span>
              <div className="flex flex-col w-full gap-2 border-t border-white/10 pt-4">
                <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">CLEARANCE</span>
                  <Badge className="bg-[var(--alert)]/15 text-[var(--alert)] rounded-sm text-[9px] px-1.5 py-0 h-4 border-white/10 border-1 border-solid bg-transparent">
                    LEVEL 4 (TS)
                  </Badge>
                </div>
                <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">UNIT</span>
                  <span className="text-neutral-50 text-xs font-bold">Financial Crimes Task Force</span>
                </div>
                <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">BADGE ID</span>
                  <span className="text-neutral-50 text-xs font-mono">NP-CIB-4492</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-8 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                SESSION DETAILS
              </span>
              <Shield className="size-3.5 text-[var(--ok)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 p-3 rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest flex items-center gap-1.5">
                    <MapPin className="size-3" />
                    CURRENT LOCATION (IP)
                  </span>
                  <span className="text-neutral-50 text-xs font-mono">103.111.42.18 (Kathmandu HQ)</span>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest flex items-center gap-1.5">
                    <Clock className="size-3" />
                    SESSION DURATION
                  </span>
                  <span className="text-[var(--ok)] text-xs font-mono">04h 12m 33s</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                RECENT ACTIVITY AUDIT
              </span>
              <Activity className="size-3.5 text-[var(--intel)]" />
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col gap-3">
                {[
                  { action: "Accessed Case Docket CR-2026-221", time: "14m ago" },
                  { action: "Ran Correlation Scan (Target: 98XX-441-99)", time: "1h ago" },
                  { action: "Downloaded Evidence (esewa_screenshot_14.jpg)", time: "2h ago" },
                  { action: "Updated Priority on Case CR-2026-218 to CRITICAL", time: "4h ago" },
                  { action: "Secure System Login (2FA verified)", time: "4h 12m ago" },
                ].map((log, i) => (
                  <div key={i} className="flex justify-between items-center p-2 border-b border-white/5 last:border-0 hover:bg-white/5 cursor-default">
                    <span className="text-xs text-neutral-50">{log.action}</span>
                    <span className="text-[10px] tracking-widest text-[#a1a1a1]">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
