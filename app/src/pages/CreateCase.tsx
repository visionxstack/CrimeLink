import { Plus, Save, FilePlus, Building, MapPin, AlignLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CreateCase() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-lg leading-7 tracking-wide flex items-center gap-2">
            <FilePlus className="size-5 text-[var(--intel)]" />
            NEW CASE DOCKET
          </h1>
          <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
            Initialize a new intelligence docket and assign initial investigators.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                PRIMARY INFORMATION
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-[#a1a1a1]">CASE TITLE</label>
                <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-2 items-center">
                  <input
                    className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-full"
                    placeholder="e.g., Kathmandu Syndicate eSewa Fraud"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-[#a1a1a1]">DESCRIPTION / INITIAL SUMMARY</label>
                <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-2">
                  <textarea
                    className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-full min-h-24 resize-none"
                    placeholder="Provide details about the incident, victims, and known vectors..."
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest text-[#a1a1a1]">CRIME CATEGORY</label>
                  <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-2 items-center">
                    <select className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-full appearance-none">
                      <option className="bg-neutral-900">Financial Fraud</option>
                      <option className="bg-neutral-900">Cyber Extortion</option>
                      <option className="bg-neutral-900">Identity Theft</option>
                      <option className="bg-neutral-900">Telecom Scam</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest text-[#a1a1a1]">JURISDICTION / DISTRICT</label>
                  <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-2 items-center">
                    <select className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-full appearance-none">
                      <option className="bg-neutral-900">Kathmandu</option>
                      <option className="bg-neutral-900">Lalitpur</option>
                      <option className="bg-neutral-900">Pokhara</option>
                      <option className="bg-neutral-900">Biratnagar</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-4 flex flex-col gap-6">
          <Card className="rounded-sm bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
            <CardHeader className="p-0 flex-row justify-between items-center gap-2 mb-4">
              <span className="text-[#a1a1a1] text-[10px] tracking-widest">
                METADATA
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-[#a1a1a1]">PRIORITY LEVEL</label>
                <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-2 items-center">
                  <select className="bg-transparent outline-none text-[var(--alert)] font-bold text-xs leading-4 w-full appearance-none">
                    <option className="bg-neutral-900 text-[var(--alert)]">HIGH PRIORITY</option>
                    <option className="bg-neutral-900 text-neutral-50">MEDIUM PRIORITY</option>
                    <option className="bg-neutral-900 text-neutral-50">LOW PRIORITY</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest text-[#a1a1a1]">LEAD INVESTIGATOR</label>
                <div className="rounded-sm bg-neutral-800/40 border-white/10 border-1 border-solid flex px-3 py-2 items-center">
                  <input
                    className="bg-transparent outline-none text-neutral-50 text-xs leading-4 w-full"
                    defaultValue="J. Sharma"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-6 gap-2 flex-col">
              <Button className="bg-[var(--police)] rounded-sm text-xs leading-4 px-3 gap-2 h-10 w-full hover:opacity-90">
                <Save className="size-4" />
                Initialize Docket
              </Button>
              <Button
                className="rounded-sm text-xs leading-4 border-white/10 border-1 border-solid px-3 gap-2 h-10 w-full bg-transparent hover:bg-neutral-800"
                variant="outline"
              >
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
