import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function NepalMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const W = containerRef.current.clientWidth;
    const H = containerRef.current.clientHeight;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    svg.attr("viewBox", `0 0 ${W} ${H}`);
    const gBase = svg.append("g");
    const gMarkers = svg.append("g");

    Promise.all([
      fetch("/nepal-provinces.min.geojson").then((r) => r.json()),
      fetch("/nepal-districts.min.geojson")
        .then((r) => r.json())
        .catch(() => null),
    ]).then(([provinces, districts]) => {
      const projection = d3
        .geoMercator()
        .fitExtent(
          [
            [14, 14],
            [W - 14, H - 14],
          ],
          provinces
        );
      const path = d3.geoPath(projection);

      if (districts) {
        gBase
          .selectAll(".district")
          .data(districts.features)
          .join("path")
          .attr("class", "district")
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .attr("d", path as any)
          .attr("fill", "none")
          .attr("stroke", "rgba(255,255,255,0.05)")
          .attr("stroke-width", 0.4);
      }

      gBase
        .selectAll(".province")
        .data(provinces.features)
        .join("path")
        .attr(
          "class",
          "province hover:fill-[oklch(0.20_0.01_255)] transition-colors"
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .attr("d", path as any)
        .attr("fill", "oklch(0.12_0.01_255)")
        .attr("stroke", "rgba(255,255,255,0.15)")
        .attr("stroke-width", 0.7)
        .style("cursor", "pointer");

      gBase
        .selectAll(".plabel")
        .data(provinces.features)
        .join("text")
        .attr("class", "plabel font-mono text-[9px] tracking-widest")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .attr("transform", (d: any) => `translate(${path.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("fill", "#a1a1a1")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .text((d: any) =>
          (d.properties.ADM1_EN || d.properties.name || "").toUpperCase()
        );

      // Add static markers mapped to actual Nepal coordinates
      const mockMarkers = [
        { lon: 85.324, lat: 27.7172, type: "alert" }, // Kathmandu
        { lon: 83.9856, lat: 28.2096, type: "risk" }, // Pokhara
        { lon: 87.2718, lat: 26.8125, type: "intel" }, // Dharan
        { lon: 81.6235, lat: 28.0617, type: "intel" }, // Nepalgunj
        { lon: 84.4265, lat: 27.6766, type: "risk" }, // Chitwan
      ];

      const getMarkerColor = (type: string) => {
        if (type === "alert") return "var(--alert)";
        if (type === "risk") return "var(--risk)";
        return "var(--intel)";
      };

      mockMarkers.forEach((m) => {
        const [x, y] = projection([m.lon, m.lat]) || [0, 0];

        // Ping animation ring
        gMarkers
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 10)
          .attr("fill", getMarkerColor(m.type))
          .attr("opacity", 0.4)
          .attr("class", "animate-ping origin-center")
          .style("transform-box", "fill-box");

        // Solid dot
        gMarkers
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 4)
          .attr("fill", getMarkerColor(m.type))
          .attr("stroke", getMarkerColor(m.type))
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 0.3);
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="size-full absolute inset-0 z-0 opacity-80">
      <svg ref={svgRef} className="size-full" />
    </div>
  );
}
