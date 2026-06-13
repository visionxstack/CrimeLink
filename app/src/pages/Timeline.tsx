import { TrendingUp, Clock, AlertTriangle, UserX, Wallet, Phone, Filter, Search, ShieldAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Timeline() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <TrendingUp className="size-5 text-[var(--risk)]" />
            RISK SCORING & AUDIT
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Historical timelines of entity risk escalation and chronological anomaly tracking.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Search entity timeline..."
            />
          </div>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-neutral-900 hover:bg-neutral-800"
            variant="outline"
          >
            <Filter className="size-3.5" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-6 h-[calc(100vh-160px)] overflow-y-auto">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                RAPID ESCALATIONS
              </span>
              <ShieldAlert className="size-3.5 text-[var(--alert)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-3">
              {[
                { type: "Phone", id: "+977-98XXXXXX12", score: 88, jump: "+45", time: "24h" },
                { type: "eSewa", id: "98XX-441-99", score: 92, jump: "+32", time: "12h" },
                { type: "Entity", id: "R. Thapa", score: 78, jump: "+28", time: "48h" },
              ].map((ent, i) => (
                <div key={i} className="flex justify-between items-center bg-neutral-800/30 p-3 rounded-sm border-white/10 border-1 border-solid cursor-pointer hover:bg-neutral-800/50">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#a1a1a1] text-[9px] tracking-widest">{ent.type}</span>
                    <span className="text-neutral-50 text-xs font-bold">{ent.id}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[var(--alert)] text-sm font-bold">{ent.score}</span>
                    <span className="text-[var(--risk)] text-[10px]">{ent.jump} in {ent.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                RISK ALGORITHM FACTORS
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-50">Velocity Anomalies</span>
                <span className="text-[#a1a1a1]">35% Weight</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-50">Cross-Case Links</span>
                <span className="text-[#a1a1a1]">25% Weight</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-50">Geographic Deviation</span>
                <span className="text-[#a1a1a1]">20% Weight</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-50">Blacklist Match</span>
                <span className="text-[#a1a1a1]">20% Weight</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-8">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 h-full">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-6">
              <div>
                <span className="text-[var(--alert)] font-bold text-sm tracking-widest block mb-1">
                  TARGET: +977-98XXXXXX12
                </span>
                <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                  LIFECYCLE AUDIT TRAIL
                </span>
              </div>
              <Badge className="bg-[var(--alert)]/15 text-[var(--alert)] rounded-sm text-[10px]">
                CURRENT SCORE: 88 (CRITICAL)
              </Badge>
            </CardHeader>
            <CardContent className="p-0 relative">
              <div className="absolute left-6 top-2 bottom-0 w-px bg-white/10" />
              <div className="flex flex-col gap-6 pl-2">
                {[
                  { time: "Today 14:30", action: "Score jumped to 88 (+12)", desc: "Linked to CR-2026-221 via device extraction.", icon: TrendingUp, color: "var(--alert)" },
                  { time: "Yesterday 09:15", action: "Flagged in Fraud DB", desc: "Number reported via public intake portal 3 times.", icon: AlertTriangle, color: "var(--risk)" },
                  { time: "May 10 18:40", action: "Score assigned: 45", desc: "First appearance in eSewa transaction log.", icon: Wallet, color: "oklch(0.85_0.16_90)" },
                  { time: "May 08 11:20", action: "SIM Registered", desc: "Registered under alias R. Thapa in Lalitpur.", icon: UserX, color: "var(--intel)" },
                ].map((ev, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className={`size-8 rounded-full flex justify-center items-center z-10`} style={{ backgroundColor: `color-mix(in srgb, ${ev.color} 15%, transparent)` }}>
                      <ev.icon className="size-4" style={{ color: ev.color }} />
                    </div>
                    <div className="flex flex-col pb-2 border-b-1 border-white/5 w-full">
                      <span className="text-[#a1a1a1] text-[10px] tracking-widest mb-1">{ev.time}</span>
                      <span className="text-neutral-50 font-bold text-sm mb-1" style={{ color: ev.color }}>{ev.action}</span>
                      <p className="text-[#a1a1a1] text-xs leading-5">{ev.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
