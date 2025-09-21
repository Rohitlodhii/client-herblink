
export interface ProductHeader {
    title: string;
    harvest: string;
    manufacture: string;
    ingredients: string[];
    brand: string;
    rating: number;
  }
  
  interface Location {
    address: string;
    coordinates: string;
  }
  
  interface BaseEvent {
    eventType: string;
    timestamp: Date;
    location: Location;
    blockchainID: string;
    name: string;
  }
  
  export interface Farmer extends BaseEvent {
    eventType: "Harvest";
    otherData: {
      farmID: string;
      herbname: string;
      harvestDate: Date;
      Quantity: string;
      landSize: string;
    };
  }
  
  export interface Processor extends BaseEvent {
    eventType: "Processing";
    otherData: {
      processorId: string;
      herbname: string;
      BuyDate: Date;
      Quantity: string;
      grinding: boolean;
      moisture: boolean;
    };
  }
  
  export interface LabTest extends BaseEvent {
    eventType: "Lab Test";
    otherData: {
      labId: string;
      testDate: Date;
      herbname: string;
      batchNumber: string;
      purity: string;
      passed: boolean;
    };
  }
  
  export interface Manufacturer extends BaseEvent {
    eventType: "Manufacture";
    otherData: {
      manufacturerId: string;
      herbname: string;
      productionDate: Date;
      batchNumber: string;
      Quantity: string;
      productType: string;
    };
  }
  