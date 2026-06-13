import { useParams } from "react-router-dom";
import {
  FolderOpen,
  Calendar,
  User,
  ShieldAlert,
  AlertTriangle,
  FileText,
  Network,
  Download,
  Fingerprint,
  Link2,
  Clock,
  MapPin,
  ChevronRight
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CaseDetails() {
  const { id } = useParams();
  const caseId = id || "CR-2026-221";

  return (
    <>
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2 text-[#a1a1a1] text-[10px] tracking-widest mb-2">
            <span>CASES</span>
            <ChevronRight className="size-3" />
            <span className="text-[var(--intel)]">{caseId}</span>
          </div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            Kathmandu Syndicate eSewa Fraud
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1 flex items-center gap-4">
            <span className="flex items-center gap-1"><Calendar className="size-3.5" /> Opened: 12 May 2026</span>
            <span className="flex items-center gap-1"><User className="size-3.5" /> Lead: J. Sharma</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-[var(--risk)]/15 text-[var(--risk)] rounded-sm text-[10px] py-1">
            STATUS: ACTIVE
          </Badge>
          <Badge className="bg-[var(--alert)]/15 text-[var(--alert)] rounded-sm text-[10px] py-1">
            PRIORITY: HIGH
          </Badge>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-neutral-900 hover:bg-neutral-800 ml-2"
            variant="outline"
          >
            <Download className="size-3.5" />
            Export Dossier
          </Button>
        </div>
      </div>

      <div className="flex gap-4 border-b-1 border-white/10 border-solid pb-0 mb-4">
        {[
          { name: "Overview", active: true },
          { name: "Evidence (14)", active: false },
          { name: "Entities (32)", active: false },
          { name: "Correlations (3)", active: false },
          { name: "Activity Log", active: false }
        ].map(tab => (
          <button
            key={tab.name}
            className={`text-xs leading-4 pb-2 px-1 border-b-2 border-solid ${
              tab.active 
                ? "text-[var(--intel)] border-[var(--intel)] font-bold" 
                : "text-[#a1a1a1] border-transparent hover:text-neutral-50"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                INVESTIGATION SUMMARY
              </span>
              <FileText className="size-3.5 text-[var(--intel)]" />
            </CardHeader>
            <CardContent className="p-0">
              <p className="leading-relaxed text-[oklch(0.9_0_0)] text-xs leading-5">
                Organized syndicate operating out of Kathmandu utilizing compromised eSewa wallets to extract funds from victims via fake marketplace listings. The group employs advanced social engineering tactics to bypass 2FA codes. 
                <br/><br/>
                Recent evidence extracted from seized mobile devices indicates ties to cross-border crypto laundering operations. The primary suspect node has been isolated, but full identity verification is pending telecom data disclosure.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                EVIDENCE TIMELINE
              </span>
              <Clock className="size-3.5 text-[#a1a1a1]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4 mt-2">
              {[
                { time: "Today 14:32", text: "Device forensic image extraction completed.", type: "system" },
                { time: "Today 09:15", text: "New eSewa transaction log imported.", type: "evidence" },
                { time: "Yesterday 18:40", text: "Suspect phone number flagged in 3 distinct reports.", type: "alert" },
                { time: "Yesterday 11:20", text: "Initial complaint filed at Cyber Bureau.", type: "system" }
              ].map((ev, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className={`size-2.5 rounded-full ${
                      ev.type === 'alert' ? 'bg-[var(--alert)]' : 
                      ev.type === 'evidence' ? 'bg-[var(--intel)]' : 'bg-[#a1a1a1]'
                    }`} />
                    {i !== 3 && <div className="w-px h-full bg-white/10 mt-1" />}
                  </div>
                  <div className="flex flex-col pb-4">
                    <span className="text-[#a1a1a1] text-[10px] tracking-widest">{ev.time}</span>
                    <span className="text-xs text-neutral-50 mt-1">{ev.text}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                AI RISK ASSESSMENT
              </span>
              <ShieldAlert className="size-3.5 text-[var(--alert)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col items-center gap-4">
              <div className="relative size-24 flex justify-center items-center mt-2">
                <svg className="size-24 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="42" stroke="oklch(0.269 0 0)" strokeWidth="8" />
                  <circle cx="50" cy="50" fill="none" r="42" stroke="oklch(0.62 0.23 18)" strokeDasharray="264" strokeDashoffset="40" strokeLinecap="round" strokeWidth="8" />
                </svg>
                <div className="flex absolute flex-col items-center">
                  <span className="text-[var(--alert)] font-bold text-xl leading-7">88</span>
                </div>
              </div>
              <div className="text-center w-full">
                <div className="text-[var(--alert)] font-bold text-xs">CRITICAL THREAT LEVEL</div>
                <p className="text-[#a1a1a1] text-[10px] mt-1 leading-relaxed">
                  High probability of flight risk. Linked to syndicated money laundering. Immediate intervention recommended.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                KEY ENTITIES
              </span>
              <Fingerprint className="size-3.5 text-[var(--intel)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-2">
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <div className="flex flex-col">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">PHONE</span>
                  <span className="text-neutral-50 text-xs">+977-98XXXXXX12</span>
                </div>
                <Badge className="bg-[var(--alert)]/15 text-[var(--alert)] rounded-sm text-[9px]">SUSPECT</Badge>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <div className="flex flex-col">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">WALLET</span>
                  <span className="text-neutral-50 text-xs">98XX-441-99</span>
                </div>
                <Badge className="bg-[var(--risk)]/15 text-[var(--risk)] rounded-sm text-[9px]">COMPROMISED</Badge>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <div className="flex flex-col">
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">LOCATION</span>
                  <span className="text-neutral-50 text-xs">Lalitpur Metro</span>
                </div>
                <Badge className="bg-[var(--intel)]/15 text-[var(--intel)] rounded-sm text-[9px]">HOTSPOT</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
