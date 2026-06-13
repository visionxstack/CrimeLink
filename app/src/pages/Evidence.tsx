import {
  FileText,
  Search,
  Filter,
  MoreHorizontal,
  UploadCloud,
  FileImage,
  FileSpreadsheet,
  ScanText,
  CheckCircle2,
  AlertTriangle,
  FileArchive
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

export default function Evidence() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <FileText className="size-5 text-[var(--ok)]" />
            EVIDENCE VAULT
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4">
            Central repository for extracted documents, media, and forensic images.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Search evidence hash or name..."
            />
          </div>
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-[var(--police)] text-white hover:opacity-90"
          >
            <UploadCloud className="size-3.5" />
            Upload Evidence
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              TOTAL ITEMS
            </span>
            <FileArchive className="size-3.5 text-[var(--ok)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">4,192</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              PENDING OCR
            </span>
            <ScanText className="size-3.5 text-[var(--alert)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[var(--alert)]">14</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              ENTITIES EXTRACTED
            </span>
            <CheckCircle2 className="size-3.5 text-[var(--intel)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[var(--intel)]">12,847</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              MALWARE FLAGGED
            </span>
            <AlertTriangle className="size-3.5 text-[var(--risk)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[var(--risk)]">3</div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1 mt-2">
        <CardHeader className="p-0 flex-row justify-between items-center gap-2">
          <span className="text-[#a1a1a1] text-[10px] tracking-widest">
            EVIDENCE INDEX
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
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">TYPE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">FILENAME</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">PROCESSING</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">ENTITIES</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">LINKED CASE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">UPLOADED</TableHead>
                <TableHead className="text-right text-[#a1a1a1] text-[10px] tracking-widest h-7"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { type: "image", icon: FileImage, name: "esewa_screenshot_14.jpg", status: "COMPLETED", entities: 4, case: "CR-2026-221", date: "10m ago", color: "var(--ok)" },
                { type: "doc", icon: FileText, name: "whatsapp_export.txt", status: "PROCESSING", entities: "-", case: "CR-2026-220", date: "32m ago", color: "var(--alert)" },
                { type: "sheet", icon: FileSpreadsheet, name: "nabil_bank_stmt.xlsx", status: "COMPLETED", entities: 142, case: "CR-2026-218", date: "1h ago", color: "var(--ok)" },
                { type: "image", icon: FileImage, name: "suspect_id_card.png", status: "COMPLETED", entities: 8, case: "CR-2026-221", date: "2h ago", color: "var(--ok)" },
                { type: "archive", icon: FileArchive, name: "device_dump_ios.zip", status: "QUEUED", entities: "-", case: "CR-2026-215", date: "4h ago", color: "oklch(0.85_0.16_90)" },
              ].map((ev, i) => (
                <TableRow key={i} className="text-xs leading-4 border-white/10 border-0 border-solid hover:bg-white/5 cursor-pointer">
                  <TableCell className="py-2.5">
                    <ev.icon className="size-4 text-[#a1a1a1]" />
                  </TableCell>
                  <TableCell className="py-2.5 font-bold text-neutral-50">{ev.name}</TableCell>
                  <TableCell className="py-2.5">
                    <Badge className="rounded-sm text-[9px] px-1.5 py-0" style={{ backgroundColor: `color-mix(in srgb, ${ev.color} 15%, transparent)`, color: ev.color }}>
                      {ev.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-2.5 text-neutral-50">{ev.entities}</TableCell>
                  <TableCell className="py-2.5 text-[var(--intel)]">{ev.case}</TableCell>
                  <TableCell className="text-[#a1a1a1] py-2.5">{ev.date}</TableCell>
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
