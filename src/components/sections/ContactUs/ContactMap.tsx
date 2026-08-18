"use client";

import { MapPin } from "lucide-react";

import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";

const colombo: [number, number] = [79.8612, 6.9271];

export default function ContactMap() {
  return (
    <Map center={colombo} zoom={11.25} theme="light" attributionControl>
      <MapControls showCompass showFullscreen />
      <MapMarker longitude={colombo[0]} latitude={colombo[1]}>
        <MarkerContent>
          <span className="grid size-10 place-items-center rounded-full border-4 border-white bg-accent text-white shadow-lg">
            <MapPin className="size-5" aria-hidden="true" />
          </span>
        </MarkerContent>
        <MarkerTooltip>Waveloop · Colombo</MarkerTooltip>
      </MapMarker>
    </Map>
  );
}
