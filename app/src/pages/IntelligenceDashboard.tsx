import {
  Activity,
  Banknote,
  FileBarChart,
  Fingerprint,
  FolderOpen,
  Gauge,
  Landmark,
  Map,
  MapPin,
  Network,
  Phone,
  Radio,
  ScanText,
  Sparkles,
  TrendingUp,
  UploadCloud,
  User,
  UserX,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NepalMap from "@/components/NepalMap";

export default function IntelligenceDashboard() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide">
            National Fraud Intelligence Overview
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4">
            Connecting Evidence. Revealing Networks.
          </p>
        </div>
        <div className="rounded-sm bg-neutral-800/40 text-[#a1a1a1] text-[10px] tracking-widest border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
          <span className="size-1.5 animate-pulse bg-[var(--alert)] rounded-full" />
          LIVE · MARKERS UPDATE PER SWEEP
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              ACTIVE CASES
            </span>
            <FolderOpen className="size-3.5 text-[var(--intel)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">348</div>
            <div className="text-[var(--ok)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +12 this week
            </div>
            <svg className="mt-1 w-full h-6" viewBox="0 0 100 24">
              <polyline
                fill="none"
                points="0,18 15,14 30,16 45,9 60,12 75,6 90,8 100,4"
                stroke="oklch(0.68 0.18 245)"
                strokeWidth="1.5"
              />
            </svg>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              FINANCIAL LOSS
            </span>
            <Banknote className="size-3.5 text-[var(--alert)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="text-[var(--alert)] font-bold text-2xl leading-8">
              NPR 84.2M
            </div>
            <div className="text-[var(--alert)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +NPR 2.3M today
            </div>
            <svg className="mt-1 w-full h-6" viewBox="0 0 100 24">
              <polyline
                fill="none"
                points="0,20 15,18 30,15 45,16 60,10 75,11 90,5 100,3"
                stroke="oklch(0.62 0.23 18)"
                strokeWidth="1.5"
              />
            </svg>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              HIGH-RISK ACTORS
            </span>
            <UserX className="size-3.5 text-[var(--risk)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="text-[var(--risk)] font-bold text-2xl leading-8">
              71
            </div>
            <div className="text-[var(--risk)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +5 flagged
            </div>
            <svg className="mt-1 w-full h-6" viewBox="0 0 100 24">
              <polyline
                fill="none"
                points="0,16 15,17 30,12 45,14 60,9 75,10 90,7 100,6"
                stroke="oklch(0.72 0.19 55)"
                strokeWidth="1.5"
              />
            </svg>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              ENTITIES EXTRACTED
            </span>
            <Fingerprint className="size-3.5 text-[var(--intel)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">12,847</div>
            <div className="text-[var(--ok)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +1,204 today
            </div>
            <svg className="mt-1 w-full h-6" viewBox="0 0 100 24">
              <polyline
                fill="none"
                points="0,19 15,15 30,13 45,11 60,8 75,9 90,5 100,4"
                stroke="oklch(0.68 0.18 245)"
                strokeWidth="1.5"
              />
            </svg>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              LINKED NETWORKS
            </span>
            <Network className="size-3.5 text-[var(--intel)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">29</div>
            <div className="text-[var(--ok)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +3 detected
            </div>
            <svg className="mt-1 w-full h-6" viewBox="0 0 100 24">
              <polyline
                fill="none"
                points="0,18 15,16 30,17 45,12 60,13 75,8 90,9 100,6"
                stroke="oklch(0.488 0.243 264)"
                strokeWidth="1.5"
              />
            </svg>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              AVG RISK SCORE
            </span>
            <Gauge className="size-3.5 text-[var(--risk)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="text-[var(--risk)] font-bold text-2xl leading-8">
              68
              <span className="text-[#a1a1a1] text-sm leading-5">/100</span>
            </div>
            <div className="text-[var(--alert)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              Elevated
            </div>
            <svg className="mt-1 w-full h-6" viewBox="0 0 100 24">
              <polyline
                fill="none"
                points="0,14 15,15 30,13 45,14 60,11 75,12 90,10 100,9"
                stroke="oklch(0.72 0.19 55)"
                strokeWidth="1.5"
              />
            </svg>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-8 rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-4 overflow-hidden">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Map className="size-4 text-[var(--intel)]" />
              <span className="font-bold text-xs leading-4 tracking-widest">
                NEPAL FRAUD INTELLIGENCE MAP
              </span>
            </div>
            <div className="text-[10px] flex items-center gap-2">
              <span className="border-[var(--alert)]/40 text-[var(--alert)] rounded-sm border-black/1 border-1 border-solid flex px-2 py-0.5 items-center gap-1">
                <span className="size-1.5 bg-[var(--alert)] rounded-full" />
                HOTSPOT
              </span>
              <span className="border-[var(--risk)]/40 text-[var(--risk)] rounded-sm border-black/1 border-1 border-solid flex px-2 py-0.5 items-center gap-1">
                <span className="size-1.5 bg-[var(--risk)] rounded-full" />
                HIGH RISK
              </span>
              <span className="border-[var(--intel)]/40 text-[var(--intel)] rounded-sm border-black/1 border-1 border-solid flex px-2 py-0.5 items-center gap-1">
                <span className="size-1.5 bg-[var(--intel)] rounded-full" />
                CLUSTER
              </span>
            </div>
          </CardHeader>
          <CardContent className="relative bg-[oklch(0.12_0.01_255)] rounded-sm border-white/10 border-1 border-solid p-0 h-[420px] overflow-hidden">
            <NepalMap />
            <div className="bg-[radial-gradient(circle_at_50%_45%,oklch(0.45_0.13_255/.25),transparent_60%)] absolute inset-0 pointer-events-none" />
            <div className="bg-[oklch(0.18_0.01_255)]/90 rounded-sm text-[10px] border-white/10 border-1 border-solid absolute left-3 bottom-3 p-3">
              <div className="font-bold text-neutral-50 tracking-widest flex mb-1 items-center gap-1">
                <MapPin className="size-3 text-[var(--alert)]" />
                KATHMANDU DISTRICT
              </div>
              <div className="grid grid-cols-2 text-[#a1a1a1] gap-x-6 gap-y-0.5">
                <span>Cases</span>
                <span className="font-bold text-right text-neutral-50">112</span>
                <span>Loss</span>
                <span className="text-[var(--alert)] font-bold text-right">
                  NPR 31.4M
                </span>
                <span>Top Fraud</span>
                <span className="font-bold text-right text-neutral-50">
                  eSewa Scam
                </span>
                <span>Linked Entities</span>
                <span className="font-bold text-right text-neutral-50">847</span>
              </div>
            </div>
            <div className="bg-[oklch(0.18_0.01_255)]/80 rounded-sm text-[#a1a1a1] text-[10px] tracking-widest border-white/10 border-1 border-solid absolute right-3 top-3 px-2 py-1">
              PROVINCES · 7 · ENTITY DENSITY OVERLAY
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-4 rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Radio className="size-4 text-[var(--alert)]" />
              <span className="font-bold text-xs leading-4 tracking-widest">
                THREAT INTEL FEED
              </span>
            </div>
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              14 URGENT
            </span>
          </CardHeader>
          <CardContent className="flex p-0 flex-col gap-2">
            <div className="border-[var(--alert)] bg-[var(--alert)]/5 border-black/1 border-t-0 border-r-0 border-b-0 border-l-2 border-solid p-2">
              <div className="text-[var(--alert)] text-[9px] tracking-widest flex items-center gap-2">
                <span className="font-bold">[CRITICAL]</span>
                <span className="text-[#a1a1a1]">2m ago</span>
              </div>
              <p className="leading-snug text-neutral-50 text-[11px] mt-0.5">
                eSewa wallet 98XX-441 linked to NPR 2.3M fraud losses
              </p>
            </div>
            <div className="border-[var(--alert)] bg-[var(--alert)]/5 border-black/1 border-t-0 border-r-0 border-b-0 border-l-2 border-solid p-2">
              <div className="text-[var(--alert)] text-[9px] tracking-widest flex items-center gap-2">
                <span className="font-bold">[HIGH RISK]</span>
                <span className="text-[#a1a1a1]">8m ago</span>
              </div>
              <p className="leading-snug text-neutral-50 text-[11px] mt-0.5">
                Phone +977-98XXXXXX12 linked to 7 fraud cases
              </p>
            </div>
            <div className="border-[var(--risk)] bg-[var(--risk)]/5 border-black/1 border-t-0 border-r-0 border-b-0 border-l-2 border-solid p-2">
              <div className="text-[var(--risk)] text-[9px] tracking-widest flex items-center gap-2">
                <span className="font-bold">[ALERT]</span>
                <span className="text-[#a1a1a1]">19m ago</span>
              </div>
              <p className="leading-snug text-neutral-50 text-[11px] mt-0.5">
                New fraud ring detected across 3 districts
              </p>
            </div>
            <div className="border-[oklch(0.85_0.16_90)] bg-[oklch(0.85_0.16_90)]/5 border-black/1 border-t-0 border-r-0 border-b-0 border-l-2 border-solid p-2">
              <div className="text-[oklch(0.85_0.16_90)] text-[9px] tracking-widest flex items-center gap-2">
                <span className="font-bold">[WATCH]</span>
                <span className="text-[#a1a1a1]">31m ago</span>
              </div>
              <p className="leading-snug text-neutral-50 text-[11px] mt-0.5">
                IME Pay ID flagged for repeated chargebacks
              </p>
            </div>
            <div className="border-[var(--intel)] bg-[var(--intel)]/5 border-black/1 border-t-0 border-r-0 border-b-0 border-l-2 border-solid p-2">
              <div className="text-[var(--intel)] text-[9px] tracking-widest flex items-center gap-2">
                <span className="font-bold">[CORRELATION]</span>
                <span className="text-[#a1a1a1]">44m ago</span>
              </div>
              <p className="leading-snug text-neutral-50 text-[11px] mt-0.5">
                Case #CR-2026-221 matched with Case #CR-2026-188
              </p>
            </div>
            <div className="border-[var(--ok)] bg-[var(--ok)]/5 border-black/1 border-t-0 border-r-0 border-b-0 border-l-2 border-solid p-2">
              <div className="text-[var(--ok)] text-[9px] tracking-widest flex items-center gap-2">
                <span className="font-bold">[RESOLVED]</span>
                <span className="text-[#a1a1a1]">1h ago</span>
              </div>
              <p className="leading-snug text-neutral-50 text-[11px] mt-0.5">
                Case #CR-2026-104 closed · suspect identified
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-5 rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
          <CardHeader className="p-0 flex-row items-center gap-2">
            <Sparkles className="size-4 text-[var(--intel)]" />
            <span className="font-bold text-xs leading-4 tracking-widest">
              AI INVESTIGATION BRIEFING
            </span>
            <Badge className="bg-[var(--intel)]/15 text-[var(--intel)] rounded-sm text-[10px] ml-auto">
              CR-2026-221
            </Badge>
          </CardHeader>
          <CardContent className="p-0 gap-3">
            <p className="leading-relaxed text-[oklch(0.9_0_0)] text-xs leading-4">
              Analysis indicates strong correlation between the submitted
              evidence and three previously reported fraud incidents. The
              extracted phone number has appeared in multiple complaints
              across<span className="text-[var(--intel)]">Kathmandu</span>
              and<span className="text-[var(--intel)]">Lalitpur</span>,
              suggesting organized activity.
            </p>
            <div className="grid grid-cols-3 text-center gap-2">
              <div className="rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid p-2">
                <div className="text-[var(--alert)] font-bold text-sm leading-5">
                  3
                </div>
                <div className="text-[#a1a1a1] text-[9px] tracking-widest">
                  LINKED CASES
                </div>
              </div>
              <div className="rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid p-2">
                <div className="font-bold text-neutral-50 text-sm leading-5">
                  11
                </div>
                <div className="text-[#a1a1a1] text-[9px] tracking-widest">
                  ENTITIES
                </div>
              </div>
              <div className="rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid p-2">
                <div className="text-[var(--risk)] font-bold text-sm leading-5">
                  82
                </div>
                <div className="text-[#a1a1a1] text-[9px] tracking-widest">
                  RISK SCORE
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 gap-2">
            <Button className="bg-[var(--police)] rounded-sm text-xs leading-4 px-3 gap-1 h-8">
              <FileBarChart className="size-3.5" />
              Generate Report
            </Button>
            <Button
              className="rounded-sm text-xs leading-4 border-white/10 border-0 border-solid px-3 gap-1 h-8"
              variant="outline"
            >
              <Network className="size-3.5" />
              View Network
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-7 rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4 text-[var(--intel)]" />
              <span className="font-bold text-xs leading-4 tracking-widest">
                ENTITY INTELLIGENCE
              </span>
            </div>
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              TOP FLAGGED
            </span>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 border-0 border-solid hover:bg-transparent">
                  <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">
                    TYPE
                  </TableHead>
                  <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">
                    VALUE
                  </TableHead>
                  <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">
                    CONFIDENCE
                  </TableHead>
                  <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">
                    RISK
                  </TableHead>
                  <TableHead className="text-right text-[#a1a1a1] text-[10px] tracking-widest h-7">
                    CASES
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-xs leading-4 border-white/10 border-0 border-solid">
                  <TableCell className="py-1.5">
                    <span className="flex items-center gap-1.5">
                      <Phone className="size-3 text-[oklch(0.627_0.265_303.9)]" />
                      Phone
                    </span>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-1.5">
                    +977-98XXXXXX12
                  </TableCell>
                  <TableCell className="py-1.5">
                    <span className="text-[var(--ok)]">96%</span>
                  </TableCell>
                  <TableCell className="py-1.5">
                    <Badge className="bg-[var(--alert)]/15 text-[var(--alert)] rounded-sm text-[10px]">
                      82
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-right py-1.5">7</TableCell>
                </TableRow>
                <TableRow className="text-xs leading-4 border-white/10 border-0 border-solid">
                  <TableCell className="py-1.5">
                    <span className="flex items-center gap-1.5">
                      <Wallet className="size-3 text-[var(--risk)]" />
                      eSewa
                    </span>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-1.5">
                    98XX-441-99
                  </TableCell>
                  <TableCell className="py-1.5">
                    <span className="text-[var(--ok)]">91%</span>
                  </TableCell>
                  <TableCell className="py-1.5">
                    <Badge className="bg-[var(--alert)]/15 text-[var(--alert)] rounded-sm text-[10px]">
                      88
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-right py-1.5">5</TableCell>
                </TableRow>
                <TableRow className="text-xs leading-4 border-white/10 border-0 border-solid">
                  <TableCell className="py-1.5">
                    <span className="flex items-center gap-1.5">
                      <Landmark className="size-3 text-[var(--risk)]" />
                      Bank Acct
                    </span>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-1.5">
                    01XXXXX7821
                  </TableCell>
                  <TableCell className="py-1.5">
                    <span className="text-[oklch(0.85_0.16_90)]">78%</span>
                  </TableCell>
                  <TableCell className="py-1.5">
                    <Badge className="bg-[var(--risk)]/15 text-[var(--risk)] rounded-sm text-[10px]">
                      64
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-right py-1.5">4</TableCell>
                </TableRow>
                <TableRow className="text-xs leading-4 border-white/10 border-0 border-solid">
                  <TableCell className="py-1.5">
                    <span className="flex items-center gap-1.5">
                      <User className="size-3 text-[var(--intel)]" />
                      Name
                    </span>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-1.5">
                    R. Thapa (alias)
                  </TableCell>
                  <TableCell className="py-1.5">
                    <span className="text-[oklch(0.85_0.16_90)]">72%</span>
                  </TableCell>
                  <TableCell className="py-1.5">
                    <Badge className="bg-[var(--risk)]/15 text-[var(--risk)] rounded-sm text-[10px]">
                      61
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-right py-1.5">3</TableCell>
                </TableRow>
                <TableRow className="text-xs leading-4 border-white/10 border-0 border-solid">
                  <TableCell className="py-1.5">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3 text-[var(--intel)]" />
                      Location
                    </span>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-1.5">
                    Lalitpur Metro
                  </TableCell>
                  <TableCell className="py-1.5">
                    <span className="text-[var(--ok)]">89%</span>
                  </TableCell>
                  <TableCell className="py-1.5">
                    <Badge className="rounded-sm bg-neutral-800 text-neutral-50 text-[10px]">
                      42
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-right py-1.5">6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 shrink-0">
        <CardHeader className="p-0 flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Activity className="size-4 text-[var(--intel)]" />
            <span className="font-bold text-xs leading-4 tracking-widest">
              ACTIVITY STREAM · PROCESSING PIPELINE
            </span>
          </div>
          <span className="text-[var(--ok)] text-[10px] tracking-widest flex items-center gap-1">
            <span className="size-1.5 animate-pulse bg-[var(--ok)] rounded-full" />
            6 STAGES ACTIVE
          </span>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col items-center flex-1 gap-1">
              <div className="size-8 bg-[var(--ok)]/15 rounded-full flex justify-center items-center">
                <UploadCloud className="size-4 text-[var(--ok)]" />
              </div>
              <span className="text-neutral-50 text-[10px] tracking-widest">
                UPLOAD
              </span>
              <span className="text-[var(--ok)] text-[9px]">complete</span>
            </div>
            <div className="bg-[var(--ok)]/40 flex-1 h-px" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <div className="size-8 bg-[var(--ok)]/15 rounded-full flex justify-center items-center">
                <ScanText className="size-4 text-[var(--ok)]" />
              </div>
              <span className="text-neutral-50 text-[10px] tracking-widest">
                OCR
              </span>
              <span className="text-[var(--ok)] text-[9px]">complete</span>
            </div>
            <div className="bg-[var(--ok)]/40 flex-1 h-px" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <div className="size-8 bg-[var(--intel)]/15 rounded-full flex justify-center items-center">
                <Fingerprint className="size-4 text-[var(--intel)]" />
              </div>
              <span className="text-neutral-50 text-[10px] tracking-widest">
                ENTITIES
              </span>
              <span className="text-[var(--intel)] text-[9px] flex items-center gap-1">
                <span className="size-1 animate-pulse bg-[var(--intel)] rounded-full" />
                running
              </span>
            </div>
            <div className="bg-white/10 flex-1 h-px" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <div className="size-8 rounded-full bg-neutral-800 flex justify-center items-center">
                <Network className="size-4 text-[#a1a1a1]" />
              </div>
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                GRAPH
              </span>
              <span className="text-[#a1a1a1] text-[9px]">queued</span>
            </div>
            <div className="bg-white/10 flex-1 h-px" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <div className="size-8 rounded-full bg-neutral-800 flex justify-center items-center">
                <Gauge className="size-4 text-[#a1a1a1]" />
              </div>
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                RISK
              </span>
              <span className="text-[#a1a1a1] text-[9px]">queued</span>
            </div>
            <div className="bg-white/10 flex-1 h-px" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <div className="size-8 rounded-full bg-neutral-800 flex justify-center items-center">
                <Sparkles className="size-4 text-[#a1a1a1]" />
              </div>
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                AI SUMMARY
              </span>
              <span className="text-[#a1a1a1] text-[9px]">queued</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
