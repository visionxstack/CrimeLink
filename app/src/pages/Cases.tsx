import {
  FolderOpen,
  Search,
  Filter,
  MoreHorizontal,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock
} from "lucide-react";
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

export default function Cases() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <FolderOpen className="size-5 text-[var(--intel)]" />
            CASE MANAGEMENT
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4">
            Active investigations and intelligence dockets.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Filter cases by ID or title..."
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

      <div className="grid grid-cols-4 gap-4">
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              TOTAL CASES
            </span>
            <FolderOpen className="size-3.5 text-[var(--intel)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">1,482</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              ACTIVE
            </span>
            <ActivityIcon className="size-3.5 text-[var(--risk)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[var(--risk)]">348</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              PENDING REVIEW
            </span>
            <Clock className="size-3.5 text-[oklch(0.85_0.16_90)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[oklch(0.85_0.16_90)]">84</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              CLOSED / RESOLVED
            </span>
            <CheckCircle2 className="size-3.5 text-[var(--ok)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[var(--ok)]">1,050</div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1 mt-2">
        <CardHeader className="p-0 flex-row justify-between items-center gap-2">
          <span className="text-[#a1a1a1] text-[10px] tracking-widest">
            CASE DOCKET LISTING
          </span>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 border-0 border-solid hover:bg-transparent">
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">CASE ID</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">TITLE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">STATUS</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">PRIORITY</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">INVESTIGATOR</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">LAST UPDATED</TableHead>
                <TableHead className="text-right text-[#a1a1a1] text-[10px] tracking-widest h-7">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "CR-2026-221", title: "Kathmandu Syndicate eSewa Fraud", status: "ACTIVE", priority: "HIGH", investigator: "J. Sharma", date: "2m ago", color: "var(--risk)" },
                { id: "CR-2026-220", title: "Phishing Ring - Nabil Bank", status: "PENDING", priority: "MEDIUM", investigator: "S. Thapa", date: "1h ago", color: "oklch(0.85_0.16_90)" },
                { id: "CR-2026-218", title: "Telecom Topup Bypass", status: "ACTIVE", priority: "CRITICAL", investigator: "R. KC", date: "3h ago", color: "var(--alert)" },
                { id: "CR-2026-215", title: "Social Media Marketplace Scam", status: "CLOSED", priority: "LOW", investigator: "J. Sharma", date: "1d ago", color: "var(--ok)" },
                { id: "CR-2026-212", title: "Crypto Extortion P2P", status: "ACTIVE", priority: "HIGH", investigator: "A. Gurung", date: "2d ago", color: "var(--risk)" },
                { id: "CR-2026-210", title: "Fake Visa Processing", status: "ACTIVE", priority: "MEDIUM", investigator: "P. Shrestha", date: "2d ago", color: "oklch(0.85_0.16_90)" },
              ].map((c) => (
                <TableRow key={c.id} className="text-xs leading-4 border-white/10 border-0 border-solid hover:bg-white/5 cursor-pointer">
                  <TableCell className="py-2.5 font-bold text-[var(--intel)]">{c.id}</TableCell>
                  <TableCell className="py-2.5">{c.title}</TableCell>
                  <TableCell className="py-2.5">
                    <Badge className="rounded-sm text-[9px] px-1.5 py-0" style={{ backgroundColor: `color-mix(in srgb, ${c.color} 15%, transparent)`, color: c.color }}>
                      {c.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <span className="flex items-center gap-1.5" style={{ color: c.color }}>
                      {c.priority === 'CRITICAL' || c.priority === 'HIGH' ? <AlertTriangle className="size-3" /> : <FileText className="size-3" />}
                      {c.priority}
                    </span>
                  </TableCell>
                  <TableCell className="text-[#a1a1a1] py-2.5">{c.investigator}</TableCell>
                  <TableCell className="text-[#a1a1a1] py-2.5">{c.date}</TableCell>
                  <TableCell className="text-right py-2.5">
                    <Button variant="ghost" className="size-6 p-0 hover:bg-white/10 rounded-sm">
                      <MoreHorizontal className="size-3.5 text-[#a1a1a1]" />
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

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
