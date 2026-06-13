import { AlertTriangle, Filter, Search, BellRing, Target, Siren, Zap, ShieldAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function RiskAnalysis() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <AlertTriangle className="size-5 text-[var(--alert)]" />
            THREAT INTELLIGENCE
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Live stream of systemic risks and automated threat detections.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Search threat markers..."
            />
          </div>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-neutral-900 hover:bg-neutral-800"
            variant="outline"
          >
            <Filter className="size-3.5" />
            Filters
          </Button>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-[var(--alert)]/20 text-[var(--alert)] hover:bg-[var(--alert)]/30 border-[var(--alert)]/30"
          >
            <BellRing className="size-3.5" />
            Configure Alerts
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest flex items-center gap-2">
                <span className="size-1.5 animate-pulse bg-[var(--alert)] rounded-full" />
                LIVE THREAT FEED
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-3">
              {[
                { type: "CRITICAL", title: "Cross-Border IP Masking Detected", desc: "Multiple login attempts from Kathmandu using VPN nodes known for laundering.", time: "2m ago", icon: AlertTriangle, color: "var(--alert)" },
                { type: "HIGH RISK", title: "eSewa Wallet Mass Creation", desc: "14 new wallets created under similar IMEI footprints within 1 hour.", time: "12m ago", icon: Target, color: "var(--risk)" },
                { type: "ALERT", title: "Telecom Topup Anomaly", desc: "Unusual spike in Rs. 1000 topups linked to previously flagged numbers.", time: "44m ago", icon: Zap, color: "var(--risk)" },
                { type: "WATCH", title: "Keyword Match: 'Visa Processing'", desc: "Chatter matched on public marketplace scanning indicating fraudulent intent.", time: "1h ago", icon: Search, color: "oklch(0.85_0.16_90)" },
                { type: "CRITICAL", title: "Bank API Brute Force", desc: "Failed authentication attempts exceeding thresholds on banking gateway.", time: "2h ago", icon: ShieldAlert, color: "var(--alert)" },
              ].map((threat, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid relative overflow-hidden group hover:bg-neutral-800/50 cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: threat.color }} />
                  <div className="flex flex-col items-center justify-center pl-2">
                    <threat.icon className="size-5" style={{ color: threat.color }} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-neutral-50 text-xs tracking-wide">
                        {threat.title}
                      </span>
                      <span className="text-[#a1a1a1] text-[9px] tracking-widest">{threat.time}</span>
                    </div>
                    <p className="text-xs text-[#a1a1a1] leading-relaxed">
                      {threat.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center ml-4">
                    <Badge className="rounded-sm text-[9px]" style={{ backgroundColor: `color-mix(in srgb, ${threat.color} 15%, transparent)`, color: threat.color }}>
                      {threat.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                THREAT SEVERITY INDEX
              </span>
              <Siren className="size-3.5 text-[var(--alert)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col items-center gap-4">
              <div className="relative size-32 flex justify-center items-center mt-2">
                <svg className="size-32 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="42" stroke="oklch(0.269 0 0)" strokeWidth="8" />
                  <circle cx="50" cy="50" fill="none" r="42" stroke="oklch(0.62 0.23 18)" strokeDasharray="264" strokeDashoffset="35" strokeLinecap="round" strokeWidth="8" className="animate-pulse" />
                </svg>
                <div className="flex absolute flex-col items-center">
                  <span className="text-[var(--alert)] font-bold text-3xl leading-none">92</span>
                </div>
              </div>
              <div className="text-center w-full">
                <div className="text-[var(--alert)] font-bold text-xs">DEFCON 2 · CRITICAL</div>
                <p className="text-[#a1a1a1] text-[10px] mt-1 leading-relaxed">
                  Systemic risks are highly elevated across multiple vectors. Financial infrastructure under active targeting.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                VECTOR DISTRIBUTION
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-50">Financial APIs</span>
                  <span className="text-[var(--alert)] font-bold">42%</span>
                </div>
                <div className="rounded-full bg-neutral-800 w-full h-1.5">
                  <div className="h-full bg-[var(--alert)] rounded-full" style={{ width: '42%' }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-50">Social Engineering</span>
                  <span className="text-[var(--risk)] font-bold">28%</span>
                </div>
                <div className="rounded-full bg-neutral-800 w-full h-1.5">
                  <div className="h-full bg-[var(--risk)] rounded-full" style={{ width: '28%' }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-50">Digital Wallets</span>
                  <span className="text-[oklch(0.85_0.16_90)] font-bold">19%</span>
                </div>
                <div className="rounded-full bg-neutral-800 w-full h-1.5">
                  <div className="h-full bg-[oklch(0.85_0.16_90)] rounded-full" style={{ width: '19%' }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-50">Telecom Abuse</span>
                  <span className="text-[var(--intel)] font-bold">11%</span>
                </div>
                <div className="rounded-full bg-neutral-800 w-full h-1.5">
                  <div className="h-full bg-[var(--intel)] rounded-full" style={{ width: '11%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
