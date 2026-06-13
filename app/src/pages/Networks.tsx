import { Network, Search, Filter, Share2, ZoomIn, ZoomOut, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Networks() {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <Network className="size-5 text-[var(--intel)]" />
            FRAUD NETWORK TOPOLOGY
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Visualizing relationships between entities, cases, and selectors.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <Search className="size-3.5 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-48"
              placeholder="Highlight node..."
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
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-1 h-8 bg-[var(--intel)]/20 text-[var(--intel)] hover:bg-[var(--intel)]/30 border-[var(--intel)]/30"
          >
            <Share2 className="size-3.5" />
            Export Graph
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        <Card className="col-span-9 rounded-sm bg-neutral-900 border-white/10 border-0 border-solid relative overflow-hidden flex flex-col h-full">
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <Button variant="outline" className="size-8 p-0 bg-neutral-900/80 border-white/10 hover:bg-neutral-800 rounded-sm">
              <ZoomIn className="size-4" />
            </Button>
            <Button variant="outline" className="size-8 p-0 bg-neutral-900/80 border-white/10 hover:bg-neutral-800 rounded-sm">
              <ZoomOut className="size-4" />
            </Button>
            <Button variant="outline" className="size-8 p-0 bg-neutral-900/80 border-white/10 hover:bg-neutral-800 rounded-sm">
              <Layers className="size-4" />
            </Button>
          </div>
          
          <div className="flex-1 relative bg-[oklch(0.12_0.01_255)] w-full h-full min-h-[500px]">
            <svg
              className="size-full absolute inset-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Edges */}
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="50" x2="30" y1="50" y2="25" />
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="50" x2="75" y1="50" y2="30" />
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="50" x2="20" y1="50" y2="70" />
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="50" x2="80" y1="50" y2="75" />
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="30" x2="20" y1="25" y2="70" />
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="75" x2="80" y1="30" y2="75" />
              <line stroke="oklch(0.45 0.13 255 / .3)" strokeWidth="0.2" x1="50" x2="50" y1="50" y2="15" />
              
              {/* Central Node */}
              <circle cx="50" cy="50" r="3" fill="var(--alert)" className="animate-pulse" />
              <circle cx="50" cy="50" r="1.5" fill="var(--alert)" />
              <text x="50" y="55" fill="white" fontSize="1.5" textAnchor="middle" className="font-mono">Central Suspect</text>

              {/* Other Nodes */}
              <circle cx="30" cy="25" r="1.5" fill="var(--intel)" />
              <text x="30" y="28" fill="#a1a1a1" fontSize="1.2" textAnchor="middle" className="font-mono">+977-98XX</text>

              <circle cx="75" cy="30" r="1.5" fill="oklch(0.627_0.265_303.9)" />
              <text x="75" y="33" fill="#a1a1a1" fontSize="1.2" textAnchor="middle" className="font-mono">eSewa: 98XX</text>

              <circle cx="20" cy="70" r="1.5" fill="var(--risk)" />
              <text x="20" y="73" fill="#a1a1a1" fontSize="1.2" textAnchor="middle" className="font-mono">IP: 103.111</text>

              <circle cx="80" cy="75" r="1.5" fill="oklch(0.7_0.15_200)" />
              <text x="80" y="78" fill="#a1a1a1" fontSize="1.2" textAnchor="middle" className="font-mono">Case CR-221</text>

              <circle cx="50" cy="15" r="1.5" fill="var(--intel)" />
              <text x="50" y="18" fill="#a1a1a1" fontSize="1.2" textAnchor="middle" className="font-mono">R. Thapa</text>
            </svg>
            <div className="absolute left-4 bottom-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest bg-neutral-900/80 px-2 py-1 border-white/10 border-1 border-solid rounded-sm">
                GRAPH ENGINE RUNNING · 6 NODES · 7 EDGES
              </span>
            </div>
          </div>
        </Card>

        <div className="col-span-3 flex flex-col gap-6 h-full overflow-y-auto">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                NODE DETAILS
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[var(--alert)] font-bold text-sm tracking-widest">CENTRAL SUSPECT</span>
                <span className="text-neutral-50 text-xs">Unknown / Alias: R. Thapa</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">NODE DEGREE</span>
                <span className="text-neutral-50 text-xs font-bold">4 Connections</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-800/30 p-2 rounded-sm border-white/10 border-1 border-solid">
                <span className="text-[#a1a1a1] text-[9px] tracking-widest">BETWEENNESS</span>
                <span className="text-neutral-50 text-xs font-bold">0.82 (High)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3 flex-1">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                NETWORK LEGEND
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[var(--intel)]" />
                <span className="text-neutral-50 text-xs">Person / Alias</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[var(--alert)]" />
                <span className="text-neutral-50 text-xs">Primary Suspect</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[var(--risk)]" />
                <span className="text-neutral-50 text-xs">IP Address / Location</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[oklch(0.627_0.265_303.9)]" />
                <span className="text-neutral-50 text-xs">Financial Selector</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[oklch(0.7_0.15_200)]" />
                <span className="text-neutral-50 text-xs">Case / Incident</span>
              </div>
              
              <hr className="border-white/10 my-2" />
              
              <div className="flex flex-col gap-2">
                <span className="text-[#a1a1a1] text-[10px] tracking-widest">EDGE WEIGHTS</span>
                <div className="flex items-center justify-between text-[10px] text-[#a1a1a1]">
                  <span>Weak</span>
                  <div className="flex-1 mx-2 h-px bg-gradient-to-r from-white/10 to-white/50" />
                  <span>Strong</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
