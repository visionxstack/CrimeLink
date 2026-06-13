import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Fingerprint,
  Phone,
  Wallet,
  Landmark,
  User,
  MapPin,
  TrendingUp,
  AlertTriangle
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

export default function EntitiesList() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <Users className="size-5 text-[var(--intel)]" />
            ENTITY DATABASE
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4">
            Master registry of all extracted subjects, locations, and selectors.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Search by value or alias..."
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
              EXTRACTED ENTITIES
            </span>
            <Fingerprint className="size-3.5 text-[var(--intel)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">12,847</div>
            <div className="text-[var(--ok)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +1,204 today
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              HIGH RISK
            </span>
            <AlertTriangle className="size-3.5 text-[var(--alert)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8 text-[var(--alert)]">71</div>
            <div className="text-[var(--alert)] text-[10px] flex items-center gap-1">
              <TrendingUp className="size-3" />
              +5 flagged
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              PHONES
            </span>
            <Phone className="size-3.5 text-[oklch(0.627_0.265_303.9)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">4,120</div>
          </CardContent>
        </Card>
        <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
          <CardHeader className="p-0 flex-row justify-between items-center gap-2">
            <span className="text-[#a1a1a1] text-[10px] tracking-widest">
              WALLETS & ACCTS
            </span>
            <Wallet className="size-3.5 text-[var(--risk)]" />
          </CardHeader>
          <CardContent className="p-0 gap-1">
            <div className="font-bold text-2xl leading-8">2,841</div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1 mt-2">
        <CardHeader className="p-0 flex-row justify-between items-center gap-2">
          <span className="text-[#a1a1a1] text-[10px] tracking-widest">
            MASTER ENTITY INDEX
          </span>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 border-0 border-solid hover:bg-transparent">
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">TYPE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">VALUE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">CONFIDENCE</TableHead>
                <TableHead className="text-[#a1a1a1] text-[10px] tracking-widest h-7">RISK SCORE</TableHead>
                <TableHead className="text-right text-[#a1a1a1] text-[10px] tracking-widest h-7">CASES</TableHead>
                <TableHead className="text-right text-[#a1a1a1] text-[10px] tracking-widest h-7"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { type: "Phone", icon: Phone, value: "+977-98XXXXXX12", confidence: "96%", risk: 82, cases: 7, color: "var(--alert)", typeColor: "oklch(0.627_0.265_303.9)" },
                { type: "eSewa", icon: Wallet, value: "98XX-441-99", confidence: "91%", risk: 88, cases: 5, color: "var(--alert)", typeColor: "var(--risk)" },
                { type: "Bank Acct", icon: Landmark, value: "01XXXXX7821", confidence: "78%", risk: 64, cases: 4, color: "var(--risk)", typeColor: "var(--risk)" },
                { type: "Name", icon: User, value: "R. Thapa (alias)", confidence: "72%", risk: 61, cases: 3, color: "var(--risk)", typeColor: "var(--intel)" },
                { type: "Location", icon: MapPin, value: "Lalitpur Metro", confidence: "89%", risk: 42, cases: 6, color: "oklch(0.85_0.16_90)", typeColor: "var(--intel)" },
                { type: "Phone", icon: Phone, value: "+977-98XXXXXX33", confidence: "99%", risk: 12, cases: 1, color: "var(--ok)", typeColor: "oklch(0.627_0.265_303.9)" },
              ].map((ent, i) => (
                <TableRow key={i} className="text-xs leading-4 border-white/10 border-0 border-solid hover:bg-white/5 cursor-pointer">
                  <TableCell className="py-2.5">
                    <span className="flex items-center gap-1.5" style={{ color: ent.typeColor }}>
                      <ent.icon className="size-3" />
                      {ent.type}
                    </span>
                  </TableCell>
                  <TableCell className="py-2.5 text-[#a1a1a1]">
                    {ent.value}
                  </TableCell>
                  <TableCell className="py-2.5">
                    <span className="text-[var(--ok)]">{ent.confidence}</span>
                  </TableCell>
                  <TableCell className="py-2.5">
                    <Badge className="rounded-sm text-[10px]" style={{ backgroundColor: `color-mix(in srgb, ${ent.color} 15%, transparent)`, color: ent.color }}>
                      {ent.risk}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-right py-2.5">{ent.cases}</TableCell>
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
