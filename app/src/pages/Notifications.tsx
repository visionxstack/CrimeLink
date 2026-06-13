import { Bell, Search, Filter, CheckCircle2, Siren, User, Link2, ShieldAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Notifications() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <Bell className="size-5 text-[var(--alert)]" />
            SYSTEM ALERTS & NOTIFICATIONS
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Global inbox for automated detections, case updates, and team mentions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-8 bg-[var(--ok)]/20 text-[var(--ok)] hover:bg-[var(--ok)]/30 border-[var(--ok)]/30"
          >
            <CheckCircle2 className="size-3.5" />
            Mark All Read
          </Button>
        </div>
      </div>

      <div className="flex gap-4 border-b-1 border-white/10 border-solid pb-0 mb-6">
        {[
          { name: "All Alerts (14)", active: true },
          { name: "Critical (3)", active: false },
          { name: "Case Updates", active: false },
          { name: "Mentions", active: false }
        ].map(tab => (
          <button
            key={tab.name}
            className={`text-xs leading-4 pb-2 px-1 border-b-2 border-solid ${
              tab.active 
                ? "text-[var(--alert)] border-[var(--alert)] font-bold" 
                : "text-[#a1a1a1] border-transparent hover:text-neutral-50"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-0">
        <CardContent className="p-0 flex flex-col">
          {[
            { type: "CRITICAL", title: "Cross-Border IP Masking Detected", desc: "Multiple login attempts from Kathmandu using VPN nodes known for laundering.", time: "2m ago", icon: ShieldAlert, color: "var(--alert)", unread: true },
            { type: "CASE UPDATE", title: "Evidence Parsed: CR-2026-221", desc: "OCR complete on whatsapp_export.txt. 12 entities extracted.", time: "12m ago", icon: Link2, color: "var(--intel)", unread: true },
            { type: "MENTION", title: "J. Sharma mentioned you", desc: "\"Please review the risk score escalation on suspect phone number.\"", time: "1h ago", icon: User, color: "oklch(0.85_0.16_90)", unread: true },
            { type: "HIGH RISK", title: "eSewa Wallet Mass Creation", desc: "14 new wallets created under similar IMEI footprints within 1 hour.", time: "2h ago", icon: Siren, color: "var(--risk)", unread: false },
            { type: "SYSTEM", title: "Daily National Fraud Briefing", desc: "Your automated report is ready for download.", time: "Yesterday", icon: CheckCircle2, color: "var(--ok)", unread: false },
          ].map((notif, i) => (
            <div key={i} className={`flex gap-4 p-4 border-b border-white/10 relative hover:bg-white/5 cursor-pointer transition-colors ${notif.unread ? 'bg-[var(--alert)]/5' : ''}`}>
              {notif.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--alert)]" />}
              <div className="flex flex-col items-center justify-center pl-2">
                <div className="size-10 rounded-full flex justify-center items-center" style={{ backgroundColor: `color-mix(in srgb, ${notif.color} 15%, transparent)` }}>
                  <notif.icon className="size-5" style={{ color: notif.color }} />
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center ml-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-50 text-sm tracking-wide">
                      {notif.title}
                    </span>
                    <Badge className="rounded-sm text-[9px] px-1.5 py-0 h-4 border-white/10 border-1 border-solid" style={{ backgroundColor: 'transparent', color: notif.color }}>
                      {notif.type}
                    </Badge>
                  </div>
                  <span className="text-[#a1a1a1] text-[10px] tracking-widest">{notif.time}</span>
                </div>
                <p className="text-xs text-[#a1a1a1] leading-relaxed">
                  {notif.desc}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
