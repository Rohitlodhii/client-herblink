export interface chainDataType {
    eventType: string;
    timestamp: Date;
    location: locationType;
    blockchainID: string;
    name: string;
    otherData: farmerDataType | processorDataType | manufacturerDataType | labDataType;
}

export type locationType = {
    address: string;
    coordinates: string;
};

export type farmerDataType = {
    farmID: string; // FARM19824
    herbname: string;
    harvestDate: Date;
    Quantity: string; // kgs
    landSize: string; // hectares
};

export type processorDataType = {
    processorId: string; // PRO19824
    herbname: string;
    BuyDate: Date;
    Quantity: string; // kgs
    grinding: boolean;
    moisture: boolean;
};

export type manufacturerDataType = {
    manufacturerId: string; // MAN19824
    herbname: string;
    productionDate: Date;
    batchNumber: string;
    Quantity: string; // kgs
    productType: string; // e.g., "Powder", "Capsule"
};

export type labDataType = {
    labId: string; // LAB19824
    testDate: Date;
    herbname: string;
    batchNumber: string;
    purity: string; // %
    passed: boolean;
};


export const chainData: chainDataType[] = [
    //New
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

    },

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
    },

    // Tulsi chain
    {
        eventType: "Harvest",
        timestamp: new Date("2025-01-12T10:30:00Z"),
        location: { address: "Ramkhiriya narshingpur, MP", coordinates: "23.098764, 79.158803" },
        blockchainID: "0x9f1a6c7b34e29f0c8e2d7b8f4f1a2c7d3b8e9f6d2a1b4e7c9f0d8a3b7c1e9a6d",
        name: "Farmer Rohit",
        otherData: {
            farmID: "FARM19824",
            herbname: "Tulsi",
            harvestDate: new Date("2025-01-10"),
            Quantity: "120 kg",
            landSize: "2 hectares",
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-01-15T14:45:00Z"),
        location: { address: "Nkill Processing kendra, Indore", coordinates: "21.690645, 79.800776" },
        blockchainID: "0xa7c4e1f6d9b8a2e3f1c7d5a9b6e2f4c1a9d3e7f6b1c4d8a7f9e2b3c7a1d6f5e9",
        name: "Nkill ProcessingCO.",
        otherData: {
            processorId: "PRO19824",
            herbname: "Tulsi",
            BuyDate: new Date("2025-01-15"),
            Quantity: "100 kg",
            grinding: true,
            moisture: false,
        },
    },
    {
        eventType: "Manufacture",
        timestamp: new Date("2025-01-20T11:00:00Z"),
        location: { address: "Herbal Pharma Plant, Mumbai", coordinates: "19.0760,72.8777" },
        blockchainID: "0xb3e7c1d6f9a8b4e2c7f1d3a9b6e4c1f7d2a8e9b3c1f6d7a4e2c9b1f7d3e6a8c2",
        name: "Manufacturer AloksevaCo.",
        otherData: {
            manufacturerId: "MAN19824",
            herbname: "Tulsi",
            productionDate: new Date("2025-01-20"),
            batchNumber: "BATCH-TUL-001",
            Quantity: "95 kg",
            productType: "Powder",
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-01-22T09:00:00Z"),
        location: { address: "Quality Lab, Mumbai", coordinates: "19.0896,72.8656" },
        blockchainID: "0xc1a8f7d3e9b2c4a7d6f1b3e9a8c7d4f1b6e2c9f7a3d8b1c5e9f2a6d4c7b3e1f8",
        name: "Lab Pureamans",
        otherData: {
            labId: "LAB19824",
            testDate: new Date("2025-01-22"),
            herbname: "Tulsi",
            batchNumber: "BATCH-TUL-001",
            purity: "96%",
            passed: true,
        },
    },

    // Ashwagandha chain
    {
        eventType: "Harvest",
        timestamp: new Date("2025-02-05T08:15:00Z"),
        location: { address: "Farm Hillside, UP", coordinates: "26.8467,80.9462" },
        blockchainID: "0xd7a3b1f9c6e4a8d2f1b3e9c7a4f6d8b2e1c7f9a3d6b4c8f2e9a1f7d3c6b8e2a9",
        name: "Farmer Sunita",
        otherData: {
            farmID: "FARM56789",
            herbname: "Ashwagandha",
            harvestDate: new Date("2025-02-03"),
            Quantity: "90 kg",
            landSize: "1.5 hectares",
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-02-07T16:20:00Z"),
        location: { address: "Ayurvedic Plant, Pune", coordinates: "18.5204,73.8567" },
        blockchainID: "0xe9f2c7a1b6d4f8c2a9e7b1c3f6d8a4e9b2c1f7a3d9e4b6c2f8a7d1c3b9f6e2a5",
        name: "Processor AyurvedaWorks",
        otherData: {
            processorId: "PRO56789",
            herbname: "Ashwagandha",
            BuyDate: new Date("2025-02-07"),
            Quantity: "85 kg",
            grinding: false,
            moisture: true,
        },
    },
    {
        eventType: "Manufacture",
        timestamp: new Date("2025-02-10T13:30:00Z"),
        location: { address: "Wellness Factory, Pune", coordinates: "18.5204,73.8567" },
        blockchainID: "0xf1c7d9e2a8b3c1f7d6e9a4b2c8f1d3a7e9b4c6f8a1d2b9c3f7e4a6d8c1b2f9e3",
        name: "Manufacturer HealthPlus",
        otherData: {
            manufacturerId: "MAN56789",
            herbname: "Ashwagandha",
            productionDate: new Date("2025-02-10"),
            batchNumber: "BATCH-ASH-001",
            Quantity: "80 kg",
            productType: "Capsule",
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-02-12T10:00:00Z"),
        location: { address: "Herbal Testing Lab, Pune", coordinates: "18.5314,73.8446" },
        blockchainID: "0xa6d4f9c3b8e1a7d2c9f4b6e8a3c1d7f2e9b5a8c3f7d9e2b1c4f8a6d2b9c3e7f1",
        name: "Lab BioCheck",
        otherData: {
            labId: "LAB56789",
            testDate: new Date("2025-02-12"),
            herbname: "Ashwagandha",
            batchNumber: "BATCH-ASH-001",
            purity: "92%",
            passed: true,
        },
    },
    // Neem chain
    {
        eventType: "Harvest",
        timestamp: new Date("2025-03-01T09:00:00Z"),
        location: { address: "Organic Valley, Kerala", coordinates: "10.8505,76.2711" },
        blockchainID: "BLK009",
        name: "Farmer Anita",
        otherData: {
            farmID: "FARM22222",
            herbname: "Neem",
            harvestDate: new Date("2025-02-28"),
            Quantity: "200 kg",
            landSize: "3 hectares",
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-03-04T13:30:00Z"),
        location: { address: "Green Processing Unit, Kochi", coordinates: "9.9312,76.2673" },
        blockchainID: "BLK010",
        name: "Processor GreenHerbs",
        otherData: {
            processorId: "PRO22222",
            herbname: "Neem",
            BuyDate: new Date("2025-03-04"),
            Quantity: "150 kg",
            grinding: true,
            moisture: false,
        },
    },
    {
        eventType: "Manufacture",
        timestamp: new Date("2025-03-07T12:00:00Z"),
        location: { address: "Ayush Factory, Kochi", coordinates: "9.9312,76.2673" },
        blockchainID: "BLK011",
        name: "Manufacturer BioAyur",
        otherData: {
            manufacturerId: "MAN22222",
            herbname: "Neem",
            productionDate: new Date("2025-03-07"),
            batchNumber: "BATCH-NEE-001",
            Quantity: "140 kg",
            productType: "Extract",
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-03-09T11:15:00Z"),
        location: { address: "Neem Research Lab, Kochi", coordinates: "9.9312,76.3000" },
        blockchainID: "BLK012",
        name: "Lab HerbalCheck",
        otherData: {
            labId: "LAB22222",
            testDate: new Date("2025-03-09"),
            herbname: "Neem",
            batchNumber: "BATCH-NEE-001",
            purity: "89%",
            passed: true,
        },
    },

    // Aloe Vera chain
    {
        eventType: "Harvest",
        timestamp: new Date("2025-03-15T07:45:00Z"),
        location: { address: "Shanti Farm, Rajasthan", coordinates: "27.0238,74.2179" },
        blockchainID: "BLK013",
        name: "Farmer Ramesh",
        otherData: {
            farmID: "FARM33333",
            herbname: "Aloe Vera",
            harvestDate: new Date("2025-03-14"),
            Quantity: "300 kg",
            landSize: "4 hectares",
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-03-18T12:00:00Z"),
        location: { address: "Ayush Factory, Jaipur", coordinates: "26.9124,75.7873" },
        blockchainID: "BLK014",
        name: "Processor HerbalLife",
        otherData: {
            processorId: "PRO33333",
            herbname: "Aloe Vera",
            BuyDate: new Date("2025-03-18"),
            Quantity: "280 kg",
            grinding: false,
            moisture: true,
        },
    },
    {
        eventType: "Manufacture",
        timestamp: new Date("2025-03-21T09:30:00Z"),
        location: { address: "Herbal Cosmetics Plant, Jaipur", coordinates: "26.9124,75.8000" },
        blockchainID: "BLK015",
        name: "Manufacturer BeautyHerbs",
        otherData: {
            manufacturerId: "MAN33333",
            herbname: "Aloe Vera",
            productionDate: new Date("2025-03-21"),
            batchNumber: "BATCH-ALV-001",
            Quantity: "270 kg",
            productType: "Gel",
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-03-23T08:00:00Z"),
        location: { address: "Cosmetic Lab, Jaipur", coordinates: "26.9224,75.8000" },
        blockchainID: "BLK016",
        name: "Lab SkinSafe",
        otherData: {
            labId: "LAB33333",
            testDate: new Date("2025-03-23"),
            herbname: "Aloe Vera",
            batchNumber: "BATCH-ALV-001",
            purity: "94%",
            passed: true,
        },
    },

    // Turmeric chain
    {
        eventType: "Harvest",
        timestamp: new Date("2025-04-02T11:00:00Z"),
        location: { address: "Farm Sunshine, Gujarat", coordinates: "22.2587,71.1924" },
        blockchainID: "BLK017",
        name: "Farmer Meena",
        otherData: {
            farmID: "FARM44444",
            herbname: "Turmeric",
            harvestDate: new Date("2025-04-01"),
            Quantity: "500 kg",
            landSize: "5 hectares",
        },
    },
    {
        eventType: "Processing",
        timestamp: new Date("2025-04-06T15:15:00Z"),
        location: { address: "Spice Processing Plant, Surat", coordinates: "21.1702,72.8311" },
        blockchainID: "BLK018",
        name: "Processor SpiceWorks",
        otherData: {
            processorId: "PRO44444",
            herbname: "Turmeric",
            BuyDate: new Date("2025-04-06"),
            Quantity: "480 kg",
            grinding: true,
            moisture: false,
        },
    },
    {
        eventType: "Manufacture",
        timestamp: new Date("2025-04-09T13:00:00Z"),
        location: { address: "Food Factory, Ahmedabad", coordinates: "23.0225,72.5714" },
        blockchainID: "BLK019",
        name: "Manufacturer SpicePure",
        otherData: {
            manufacturerId: "MAN44444",
            herbname: "Turmeric",
            productionDate: new Date("2025-04-09"),
            batchNumber: "BATCH-TUR-001",
            Quantity: "470 kg",
            productType: "Powder",
        },
    },
    {
        eventType: "Lab Test",
        timestamp: new Date("2025-04-11T10:30:00Z"),
        location: { address: "Spice Lab, Ahmedabad", coordinates: "23.0300,72.6000" },
        blockchainID: "BLK020",
        name: "Lab SpiceCheck",
        otherData: {
            labId: "LAB44444",
            testDate: new Date("2025-04-11"),
            herbname: "Turmeric",
            batchNumber: "BATCH-TUR-001",
            purity: "97%",
            passed: true,
        },
    },
];
