"use client";

import { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface MapDialogProps {
  coordinates: string; // "lat,lng"
}

// Responsive hook to switch between Dialog (desktop) and Drawer (mobile)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export function MapDialog({ coordinates }: MapDialogProps) {
  const isMobile = useIsMobile();

  // Parse coordinates string to numbers
  const [lat, lng] = coordinates.split(",").map(coord => parseFloat(coord.trim()));

  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  const mapContent = (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="map"
        width="100%"
        height="100%"
        src={mapSrc}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary">See on Maps</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Location</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">{mapContent}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" >See on Maps</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Location</DialogTitle>
        </DialogHeader>
        <div className="p-4">{mapContent}</div>
      </DialogContent>
    </Dialog>
  );
}
