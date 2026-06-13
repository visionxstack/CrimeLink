import { FileBarChart, Search, Filter, Download, Plus, FileText, CheckCircle2, Clock } from "lucide-react";
import {
  Card,
  CardContent,
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Reports() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <FileBarChart className="size-5 text-[var(--ok)]" />
            REPORTS ENGINE
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4">
            Automated intelligence briefings, case exports, and statistical analysis.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Search past reports..."
            />
          </div>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-[var(--intel)]/20 text-[var(--intel)] hover:bg-[var(--intel)]/30 border-[var(--intel)]/30"
          >
            <Plus className="size-3.5" />
            New Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              GENERATED THIS WEEK
            </span>
            <FileText className="size-3.5 text-[var(--ok)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">142</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              SCHEDULED BRIEFS
            </span>
            <Clock className="size-3.5 text-[oklch(0.85_0.16_90)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[oklch(0.85_0.16_90)]">18</div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1 mt-2">
        <CardHeader className="p-0 flex-row justify-between items-center gap-2">
          <span className="text-[#a1a1a1] text-[10px] tracking-widest">
            REPORT ARCHIVE
          </span>
          <Button
            variant="ghost"
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-6"
          >
            <Filter className="size-3" /> Filter
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 border-0 border-solid hover:bg-transparent">
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">REPORT NAME</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">TYPE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">AUTHOR</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">STATUS</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">GENERATED</TableHead>
                <TableHead className="text-right text-[#a1a1a1] text-[10px] tracking-widest h-7"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Daily National Fraud Briefing", type: "Intelligence Brief", author: "SYSTEM_AUTO", status: "READY", date: "Today 06:00", color: "var(--ok)" },
                { name: "CR-2026-221 Executive Summary", type: "Case Export", author: "J. Sharma", status: "READY", date: "Today 14:30", color: "var(--ok)" },
                { name: "Kathmandu Syndicate Network Analysis", type: "Graph Export", author: "A. Gurung", status: "PROCESSING", date: "Today 16:15", color: "oklch(0.85_0.16_90)" },
                { name: "Weekly Telecom Abuse Statistics", type: "Statistical", author: "SYSTEM_AUTO", status: "READY", date: "Yesterday 18:00", color: "var(--ok)" },
              ].map((rep, i) => (
                <TableRow key={i} className="text-xs leading-4 border-white/10 border-0 border-solid hover:bg-white/5 cursor-pointer">
                  <TableCell className="py-2.5 font-bold text-neutral-50 flex items-center gap-2">
                    <FileBarChart className="size-3.5 text-[var(--intel)]" />
                    {rep.name}
                  </TableCell>
                  <TableCell className="py-2.5 text-[#a1a1a1]">{rep.type}</TableCell>
                  <TableCell className="py-2.5 text-[#a1a1a1]">{rep.author}</TableCell>
                  <TableCell className="py-2.5">
                    <Badge className="rounded-sm text-[9px] px-1.5 py-0" style={{ backgroundColor: `color-mix(in srgb, ${rep.color} 15%, transparent)`, color: rep.color }}>
                      {rep.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-2.5">{rep.date}</TableCell>
                  <TableCell className="text-right py-2.5">
                    <Button variant="ghost" className="size-6 p-0 hover:bg-white/10 rounded-sm" disabled={rep.status !== 'READY'}>
                      <Download className="size-3.5 text-[#a1a1a1]" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
