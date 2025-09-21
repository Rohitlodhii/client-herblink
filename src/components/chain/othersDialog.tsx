"use client";

import { useState, useEffect } from "react";
import type { chainDataType, farmerDataType, labDataType, manufacturerDataType, processorDataType } from "../../lib/hardcoded/chaindata";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { MapDialog } from "./map";


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

interface DataDialogProps {
  data: chainDataType;
}

export function DataDialog({ data }: DataDialogProps) {
  const isMobile = useIsMobile();

  // Helper to render content based on data.otherData type
  const renderOtherData = () => {
    if ("farmID" in data.otherData) {
      const d = data.otherData as farmerDataType;
      return (
        <>
          <p><b>Farm ID:</b> {d.farmID}</p>
          <p><b>Herb:</b> {d.herbname}</p>
          <p><b>Harvest Date:</b> {d.harvestDate.toString()}</p>
          <p><b>Quantity:</b> {d.Quantity}</p>
          <p><b>Land Size:</b> {d.landSize}</p>
        </>
      );
    }
    if ("processorId" in data.otherData) {
      const d = data.otherData as processorDataType;
      return (
        <>
          <p><b>Processor ID:</b> {d.processorId}</p>
          <p><b>Herb:</b> {d.herbname}</p>
          <p><b>Buy Date:</b> {d.BuyDate.toString()}</p>
          <p><b>Quantity:</b> {d.Quantity}</p>
          <p><b>Grinding:</b> {d.grinding ? "Yes" : "No"}</p>
          <p><b>Moisture:</b> {d.moisture ? "Yes" : "No"}</p>
        </>
      );
    }
    if ("manufacturerId" in data.otherData) {
      const d = data.otherData as manufacturerDataType;
      return (
        <>
          <p><b>Manufacturer ID:</b> {d.manufacturerId}</p>
          <p><b>Herb:</b> {d.herbname}</p>
          <p><b>Production Date:</b> {d.productionDate.toString()}</p>
          <p><b>Batch Number:</b> {d.batchNumber}</p>
          <p><b>Quantity:</b> {d.Quantity}</p>
          <p><b>Product Type:</b> {d.productType}</p>
        </>
      );
    }
    if ("labId" in data.otherData) {
      const d = data.otherData as labDataType;
      return (
        <>
          <p><b>Lab ID:</b> {d.labId}</p>
          <p><b>Herb:</b> {d.herbname}</p>
          <p><b>Test Date:</b> {d.testDate.toString()}</p>
          <p><b>Batch Number:</b> {d.batchNumber}</p>
          <p><b>Purity:</b> {d.purity}</p>
          <p><b>Passed:</b> {d.passed ? "Yes" : "No"}</p>
        </>
      );
    }
    return <p>No additional data available.</p>;
  };

  const content = (
    <>
      
      <p><b>Name:</b> {data.name}</p>
      <p><b>Location:</b> {data.location.address} ({data.location.coordinates})</p>
      <MapDialog coordinates={data.location.coordinates} />

      <div className="mt-4">
        <h3 className="font-semibold">Other Data</h3>
        {renderOtherData()}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Details</DrawerTitle>
            <DrawerDescription>Full record details</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-2">{content}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
          <DialogDescription>Full record details</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">{content}</div>
      </DialogContent>
    </Dialog>
  );
}


