import { Outlet, NavLink } from "react-router-dom";
import {
  Bell,
  FolderOpen,
  LayoutDashboard,
  Link2,
  Network,
  Plus,
  Search,
  Settings,
  ShieldHalf,
  Siren,
  Upload,
  Users,
  AlertTriangle,
  TrendingUp,
  FileBarChart,
  FileText,
  ShieldAlert
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Layout() {
  return (
    <div className="font-mono bg-neutral-950 text-neutral-50 w-full min-h-screen max-w-screen overflow-visible flex flex-col">
      <div className="bg-[oklch(0.18_0.01_255)] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center w-full h-14 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-[var(--police)] rounded-sm flex justify-center items-center">
              <ShieldHalf className="size-5 text-white" />
            </div>
            <div className="leading-none flex flex-col">
              <span className="font-bold text-sm leading-5 tracking-widest">
                CRIMELINK<span className="text-[var(--intel)]">NEPAL</span>
              </span>
              <span className="text-[#a1a1a1] text-[10px] tracking-[3.2px]">
                नेपाल प्रहरी · CYBER BUREAU
              </span>
            </div>
          </div>
          <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-2 py-1 items-center gap-2">
            <Search className="size-4 text-[#a1a1a1]" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-64"
              placeholder="Search cases, entities, wallets..."
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-[11px] tracking-widest flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[#a1a1a1] text-[9px]">NPT</span>
              <span className="font-bold text-neutral-50">LIVE</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[#a1a1a1] text-[9px]">CASES UNDER INVESTIGATION</span>
              <span className="text-[var(--intel)] font-bold">348</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[#a1a1a1] text-[9px]">HIGH RISK ENTITIES</span>
              <span className="text-[var(--alert)] font-bold">71</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[#a1a1a1] text-[9px]">EVIDENCE TODAY</span>
              <span className="text-[var(--ok)] font-bold">1,204</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-[var(--police)] rounded-sm text-xs leading-4 px-3 gap-1 h-8">
              <Plus className="size-3.5" />
              New Case
            </Button>
            <Button
              className="rounded-sm text-xs leading-4 border-white/10 border-0 border-solid px-3 gap-1 h-8"
              variant="outline"
            >
              <Upload className="size-3.5" />
              Upload
            </Button>
            <Button
              className="border-[var(--alert)]/40 text-[var(--alert)] rounded-sm text-xs leading-4 px-3 gap-1 h-8 hover:bg-[var(--alert)]/10"
              variant="outline"
            >
              <Siren className="size-3.5" />
              Alert
            </Button>
            <NavLink to="/notifications" className="relative size-8 rounded-sm border-white/10 border-1 border-solid flex justify-center items-center hover:bg-white/5 transition-colors">
              <Bell className="size-4 text-[#a1a1a1]" />
              <span className="size-1.5 bg-[var(--alert)] rounded-full absolute right-1 top-1" />
            </NavLink>
            <NavLink to="/profile">
              <Avatar className="size-8 rounded-sm cursor-pointer hover:opacity-80 transition-opacity">
                <AvatarImage
                  alt="Officer"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1586295416546-b84fa77499a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwb2xpY2UlMjBvZmZpY2VyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXwyfHx8MTc4MTM3MDc4OHww&ixlib=rb-4.1.0&q=80&w=400"
                />
                <AvatarFallback>NP</AvatarFallback>
              </Avatar>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 min-h-0">
        <aside className="bg-[oklch(0.17_0.01_255)] border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-4 flex-col gap-1 w-56 shrink-0 overflow-y-auto">
          <span className="text-[#a1a1a1] text-[10px] tracking-[4px] px-2 pb-2">
            INTELLIGENCE MODULES
          </span>
          {[
            { path: "/", icon: LayoutDashboard, label: "Dashboard" },
            { path: "/cases", icon: FolderOpen, label: "Cases" },
            { path: "/evidence", icon: FileText, label: "Evidence" },
            { path: "/entities", icon: Users, label: "Entities" },
            { path: "/correlations", icon: Link2, label: "Correlations" },
            { path: "/network", icon: Network, label: "Fraud Network" },
            { path: "/risk", icon: AlertTriangle, label: "Threat Intel" },
            { path: "/timeline", icon: TrendingUp, label: "Risk Scoring" },
            { path: "/reports", icon: FileBarChart, label: "Reports" },
            { path: "/settings", icon: Settings, label: "Settings" }
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors rounded-sm text-xs leading-4 flex px-3 py-2 items-center gap-3 ${
                  isActive
                    ? "bg-neutral-800 text-neutral-50"
                    : "text-[#a1a1a1] hover:bg-neutral-800/50 hover:text-neutral-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`size-4 ${isActive ? "text-[var(--intel)]" : ""}`} />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
          
          <div className="rounded-sm bg-neutral-800/30 border-white/10 border-1 border-solid mt-auto p-3 shrink-0">
            <div className="text-[var(--ok)] text-[10px] tracking-widest flex items-center gap-2">
              <span className="size-1.5 animate-pulse bg-[var(--ok)] rounded-full" />
              SYSTEM SECURE
            </div>
            <p className="leading-relaxed text-[#a1a1a1] text-[10px] mt-1">
              16/16 sources OK · Last sweep 29s ago
            </p>
          </div>
        </aside>
        
        <main className="flex p-6 flex-col flex-1 gap-6 bg-neutral-950 overflow-y-auto">
          <Outlet />
        </main>

        <aside className="bg-[oklch(0.17_0.01_255)] border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex p-4 flex-col gap-4 w-72 shrink-0 overflow-y-auto">
            <div className="font-bold text-xs leading-4 tracking-widest flex items-center gap-2">
              <ShieldAlert className="size-4 text-[var(--alert)]" />
              RISK ASSESSMENT
            </div>
            <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex p-4 flex-col items-center">
              <div className="relative size-28 flex justify-center items-center">
                <svg className="size-28 -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    r="42"
                    stroke="oklch(0.269 0 0)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    r="42"
                    stroke="oklch(0.62 0.23 18)"
                    strokeDasharray="264"
                    strokeDashoffset="55"
                    strokeLinecap="round"
                    strokeWidth="8"
                  />
                </svg>
                <div className="flex absolute flex-col items-center">
                  <span className="text-[var(--alert)] font-bold text-2xl leading-8">
                    82
                  </span>
                  <span className="text-[#a1a1a1] text-[9px] tracking-widest">
                    CRITICAL
                  </span>
                </div>
              </div>
              <span className="text-[#a1a1a1] text-[10px] tracking-widest mt-2">
                NETWORK RISK INDEX
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                NODE LEGEND
              </span>
              <div className="grid grid-cols-2 text-[11px] gap-y-1.5">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 bg-[var(--intel)] rounded-full" />
                  Victims
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 bg-[var(--alert)] rounded-full" />
                  Suspects
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 bg-[var(--risk)] rounded-full" />
                  Wallets
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 bg-[oklch(0.627_0.265_303.9)] rounded-full" />
                  Phones
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 bg-[oklch(0.7_0.15_200)] rounded-full" />
                  Cases
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 bg-[var(--ok)] rounded-full" />
                  Resolved
                </span>
              </div>
            </div>
            <div className="relative bg-[oklch(0.12_0.01_255)] rounded-sm border-white/10 border-1 border-solid h-44 shrink-0 overflow-hidden">
              <div className="left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 bg-[var(--alert)] ring-4 ring-[var(--alert)]/20 rounded-full absolute" />
              <div className="left-[25%] top-[30%] size-2 bg-[var(--intel)] rounded-full absolute" />
              <div className="left-[70%] top-[28%] size-2 bg-[oklch(0.627_0.265_303.9)] rounded-full absolute" />
              <div className="left-[20%] top-[70%] size-2 bg-[var(--risk)] rounded-full absolute" />
              <div className="left-[75%] top-[68%] size-2 bg-[oklch(0.7_0.15_200)] rounded-full absolute" />
              <div className="left-[50%] top-[18%] size-2 bg-[var(--intel)] rounded-full absolute" />
              <svg
                className="size-full absolute inset-0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <line
                  stroke="oklch(0.45 0.13 255 / .5)"
                  strokeWidth="0.5"
                  x1="50"
                  x2="25"
                  y1="50"
                  y2="30"
                />
                <line
                  stroke="oklch(0.45 0.13 255 / .5)"
                  strokeWidth="0.5"
                  x1="50"
                  x2="70"
                  y1="50"
                  y2="28"
                />
                <line
                  stroke="oklch(0.45 0.13 255 / .5)"
                  strokeWidth="0.5"
                  x1="50"
                  x2="20"
                  y1="50"
                  y2="70"
                />
                <line
                  stroke="oklch(0.45 0.13 255 / .5)"
                  strokeWidth="0.5"
                  x1="50"
                  x2="75"
                  y1="50"
                  y2="68"
                />
                <line
                  stroke="oklch(0.45 0.13 255 / .5)"
                  strokeWidth="0.5"
                  x1="50"
                  x2="50"
                  y1="50"
                  y2="18"
                />
              </svg>
              <span className="text-[#a1a1a1] text-[9px] tracking-widest absolute left-2 bottom-2">
                FRAUD NETWORK · 6 NODES
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 border-white/10 border-1 border-solid flex p-3 flex-col gap-2 shrink-0">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                DISTRICT RISK SPREAD
              </span>
              <div className="text-[11px] flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span>Kathmandu</span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-neutral-800 w-16 h-1.5">
                      <span className="block w-[90%] bg-[var(--alert)] rounded-full h-full" />
                    </span>
                    <span className="text-[var(--alert)]">90</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lalitpur</span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-neutral-800 w-16 h-1.5">
                      <span className="block w-[72%] bg-[var(--risk)] rounded-full h-full" />
                    </span>
                    <span className="text-[var(--risk)]">72</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pokhara</span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-neutral-800 w-16 h-1.5">
                      <span className="block w-[55%] bg-[oklch(0.85_0.16_90)] rounded-full h-full" />
                    </span>
                    <span className="text-[oklch(0.85_0.16_90)]">55</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Biratnagar</span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-neutral-800 w-16 h-1.5">
                      <span className="block w-[40%] bg-[var(--intel)] rounded-full h-full" />
                    </span>
                    <span className="text-[var(--intel)]">40</span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
      </div>
    </div>
  );
}
