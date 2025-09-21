
import {type ProductHeader , type Farmer,type Processor,type LabTest,type Manufacturer } from '../../types/producttype';

export const productHeader: ProductHeader = {
    title: "Sample Product",
    harvest: "15/09/2025",
    manufacture: "18/09/2025",
    ingredients: ["Tulsi", "Neem", "Ashwagandha"],
    brand: "Amen Co",
    rating: 5
};

export const Tulsifarmers: Farmer[] = [
    {
        eventType: "Harvest",
        timestamp: new Date("2025-09-15T10:30:00Z"),
        location: { address: "Ramkhiriya narshingpur, MP", coordinates: "23.098764, 79.158803" },
        blockchainID: "0x9f1a6c7b34e29f0c8e2d7b8f4f1a2c7d3b8e9f6d2a1b4e7c9f0d8a3b7c1e3434",
        name: "Raghuveer Yadav",
        otherData: {
            farmID: "FARM19824",
            herbname: "Tulsi",
            harvestDate: new Date("2025-09-15"),
            Quantity: "120 kg",
            landSize: "2 hectares",
        },
    }
];

export const Neemfarmers: Farmer[] = [
    {
        eventType: "Harvest",
        timestamp: new Date("2025-09-15T10:30:00Z"),
        location: { address: "Sawri Balaghat, MP", coordinates: "21.690645, 79.800776" },
        blockchainID: "0x9f1a7c7b34e29f0c8e2d7b8f4f1a2c7d3b8e9f6d2a1b4e7c9f0d8a3b7c1e3434",
        name: "Mandeep Chouksey",
        otherData: {
            farmID: "FARM19334",
            herbname: "Neem",
            harvestDate: new Date("2025-09-15"),
            Quantity: "50 kg",
            landSize: "1 hectares",
        },
    },
    {
        eventType: "Harvest",
        timestamp: new Date("2025-09-15T11:30:00Z"),
        location: { address: "Sawri Balaghat, MP", coordinates: "21.690645, 79.800776" },
        blockchainID: "0x9f1a7c7b34e29f0c8e2d7b8f4f1a2c7d3b8e9f6d2a1b4e7c9f0d8a3b7c1e3434",
        name: "Krishna Pal Singh",
        otherData: {
            farmID: "FARM19335",
            herbname: "Neem",
            harvestDate: new Date("2025-09-15"),
            Quantity: "70 kg",
            landSize: "3 hectares",
        },
    }
];

export const AwashFarmers: Farmer[] = [
    {
        eventType: "Harvest",
        timestamp: new Date("2025-09-15T10:30:00Z"),
        location: { address: "Sagar , MP", coordinates: "23.098764, 79.158803" },
        blockchainID: "0x9f1a6c74434e29f0c8e2d7b8f4f1a2c7d3b8e9f6d2a1b4e7c9f0d8a3b7c1e3434",
        name: "Sandeep lodhi",
        otherData: {
            farmID: "FARM19824",
            herbname: "Ashwagandha",
            harvestDate: new Date("2025-09-15"),
            Quantity: "100 kg",
            landSize: "4 hectares",
        }
    }
];

export const Processors: Processor[] = [
    {
        eventType: "Processing",
        timestamp: new Date("2025-09-16T11:45:00Z"),
        location: { address: "narshingpur , MP", coordinates: "21.690645, 79.800776" },
        blockchainID: "0xa7c4e6d9b8a2e3f1c76e2f4c1a9d3e7f6b1c4d8a7f9e2b3c7a1d6f5e9",
        name: "Rohan ProcessingCO.",
        otherData: {
            processorId: "PRO1984",
            herbname: "Tulsi",
            BuyDate: new Date("2025-09-16"),
            Quantity: "120 kg",
            grinding: true,
            moisture: false,
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-09-16T14:45:00Z"),
        location: { address: "Nkill Processing kendra, Balaghat", coordinates: "21.690645, 79.800776" },
        blockchainID: "0xa7c4e6d9b8a2e3f1c7d5b6e2f4c1a9d3e7f6b1c4d8a7f9e2b3c7a1d6f5e9",
        name: "Nkill ProcessingCO.",
        otherData: {
            processorId: "PRO19824",
            herbname: "Neem",
            BuyDate: new Date("2025-09-16"),
            Quantity: "120 kg",
            grinding: true,
            moisture: false,
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-09-16T14:45:00Z"),
        location: { address: "Sagar MP", coordinates: "21.690645, 79.800776" },
        blockchainID: "0xa7c4e6d9b8a2e3f1c7d5b6e2f4c1f6b1c4d8a7f9e2b3c7a1d6f5e9",
        name: "Samarth ProcessingCO.",
        otherData: {
            processorId: "PRO19344",
            herbname: "Ashwagandha",
            BuyDate: new Date("2025-09-16"),
            Quantity: "100 kg",
            grinding: true,
            moisture: false,
        },
    },
];

export const lab: LabTest[] = [
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-09-17T09:00:00Z"),
        location: { address: "MP Nagar, Bhopal", coordinates: "19.0896,72.8656" },
        blockchainID: "0xc1a8f7d3e9b2c4a7d6f1b3e9a8c7d46e2c9f7a3d8b1c5e9f2a6d4c7b3e1f8",
        name: "Lab Pureamans",
        otherData: {
            labId: "LAB19824",
            testDate: new Date("2025-09-17"),
            herbname: "Tulsi",
            batchNumber: "BATCH-TUL-041",
            purity: "93%",
            passed: true,
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-09-17T07:00:00Z"),
        location: { address: "MP Nagar, Bhopal", coordinates: "19.0896,72.8656" },
        blockchainID: "0xc1a8f7e9b2c4a7d6f13e9a8c7d4f1b6e9f7a3d8b1c5e9f2a6d4c7b3e1f8",
        name: "Lab Pureamans",
        otherData: {
            labId: "LAB19824",
            testDate: new Date("2025-09-17"),
            herbname: "Neem",
            batchNumber: "BATCH-NM-345",
            purity: "92%",
            passed: true,
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-09-17T14:00:00Z"),
        location: { address: "MP Nagar, Bhopal", coordinates: "19.0896,72.8656" },
        blockchainID: "0xc1a8f7d3e9b2c4a7d63e9a8c7d4f1b6f7a3d8b1c5e9f2a6d4c7b3e1f8",
        name: "Lab Pureamans",
        otherData: {
            labId: "LAB19824",
            testDate: new Date("2025-09-17"),
            herbname: "Ashwagandha",
            batchNumber: "BATCH-ASW-034",
            purity: "87%",
            passed: true,
        },
    },
];

export const manufacturer: Manufacturer[] = [
    {
        eventType: "Manufacture",
        timestamp: new Date("2025-09-18T11:00:00Z"),
        location: { address: "Mandideep, Bhopal", coordinates: "19.0760,72.8777" },
        blockchainID: "0xb3e7c1d6f9a8bd3a9b6e4c1f7d2a8e9b3c1f6d7a4e2c9b1f7d3e6a8c2",
        name: "Manufacturer AloksevaCo.",
        otherData: {
            manufacturerId: "MAN19826",
            herbname: "Tulsi , Neem , Ashwagandha",
            productionDate: new Date("2025-09-18"),
            batchNumber: "BATCH-180925-34",
            Quantity: "250kg",
            productType: "Toothpaste",
        },
    },
];
