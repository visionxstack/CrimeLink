import { Link2, ScanSearch, CheckCircle2, XCircle, ArrowRight, Activity, Filter, BrainCircuit } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CorrelationsView() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <Link2 className="size-5 text-[var(--intel)]" />
            CORRELATION ENGINE
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            AI-driven cross-docket evidence matching and pattern detection.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-neutral-900 hover:bg-neutral-800"
            variant="outline"
          >
            <Filter className="size-3.5" />
            Active Filters
          </Button>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-[var(--intel)]/20 text-[var(--intel)] hover:bg-[var(--intel)]/30 border-[var(--intel)]/30"
          >
            <ScanSearch className="size-3.5" />
            Run Deep Scan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {[
              { score: 96, entities: ["+977-98XXXXXX12", "esewa:98XX-441-99"], source: "CR-2026-221", target: "CR-2026-188", desc: "Shared suspect phone number and compromised eSewa wallet detected.", type: "HIGH CONFIDENCE" },
              { score: 82, entities: ["R. Thapa (alias)", "Bank Acct: 01XXXXX7821"], source: "CR-2026-220", target: "CR-2026-145", desc: "Similar phishing vectors and matching transaction beneficiaries.", type: "ELEVATED" },
              { score: 68, entities: ["IP: 103.111.42.18", "Device: iPhone 13 Pro"], source: "CR-2026-218", target: "CR-2026-190", desc: "Overlapping login attempts from same ASN within 24h window.", type: "MODERATE" },
            ].map((corr, i) => (
              <Card key={i} className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3 relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${corr.score > 90 ? 'bg-[var(--intel)]' : corr.score > 70 ? 'bg-[var(--risk)]' : 'bg-[oklch(0.85_0.16_90)]'}`} />
                <CardContent className="p-0 pl-2">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 font-bold text-sm tracking-widest text-neutral-50">
                        {corr.source}
                        <ArrowRight className="size-3.5 text-[#a1a1a1]" />
                        {corr.target}
                      </div>
                      <Badge className="bg-neutral-800 text-[#a1a1a1] rounded-sm text-[9px] border-white/10 border-1 border-solid">
                        {corr.type}
                      </Badge>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`font-bold text-xl leading-5 ${corr.score > 90 ? 'text-[var(--intel)]' : corr.score > 70 ? 'text-[var(--risk)]' : 'text-[oklch(0.85_0.16_90)]'}`}>
                        {corr.score}%
                      </span>
                      <span className="text-[#a1a1a1] text-[9px] tracking-widest">MATCH SCORE</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#a1a1a1] mb-4">
                    {corr.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {corr.entities.map(ent => (
                      <div key={ent} className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid px-2 py-1 text-[10px] text-neutral-50 flex items-center gap-1.5">
                        <Link2 className="size-3 text-[var(--intel)]" />
                        {ent}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="rounded-sm text-[10px] h-6 px-3 bg-[var(--ok)]/20 text-[var(--ok)] hover:bg-[var(--ok)]/30 border-[var(--ok)]/30 border-1 border-solid gap-1.5">
                      <CheckCircle2 className="size-3" /> Verify Link
                    </Button>
                    <Button className="rounded-sm text-[10px] h-6 px-3 bg-[var(--alert)]/10 text-[var(--alert)] hover:bg-[var(--alert)]/20 border-transparent gap-1.5" variant="ghost">
                      <XCircle className="size-3" /> Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="col-span-4 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                ENGINE STATUS
              </span>
              <Activity className="size-3.5 text-[var(--ok)]" />
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">ACTIVE ALGORITHMS</span>
                <span className="text-[var(--ok)] text-xs font-bold flex items-center gap-1.5">
                  <span className="size-1.5 animate-pulse bg-[var(--ok)] rounded-full" />
                  6 / 6
                </span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">PENDING QUEUE</span>
                <span className="text-[var(--alert)] text-xs font-bold">14 dockets</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">FALSE POSITIVE RATE</span>
                <span className="text-[var(--intel)] text-xs font-bold">2.4%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-[var(--intel)]/20 border-1 border-solid p-4 gap-3 relative overflow-hidden bg-gradient-to-b from-[var(--intel)]/5 to-transparent">
            <CardHeader className="p-0 flex-row items-center gap-2 mb-3">
              <BrainCircuit className="size-4 text-[var(--intel)]" />
              <span className="font-bold text-xs leading-4 tracking-widest text-[var(--intel)]">
                AI INSIGHT
              </span>
            </CardHeader>
            <CardContent className="p-0">
              <p className="leading-relaxed text-[oklch(0.9_0_0)] text-xs leading-5">
                The correlation engine has identified a systemic pattern between cases involving <strong>eSewa scams</strong> and <strong>phishing links</strong> spread via SMS. 
                <br/><br/>
                We strongly recommend merging <strong>CR-2026-221</strong> and <strong>CR-2026-188</strong> into a single syndicated task force operation.
              </p>
            </CardContent>
            <CardFooter className="p-0 mt-4">
              <Button className="w-full rounded-sm text-xs h-8 bg-[var(--intel)] text-white hover:opacity-90">
                View Merge Proposal
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
