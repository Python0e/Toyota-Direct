export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  mpg: string;
  engine: string;
  transmission: string;
  drivetrain: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  image: string;
  images: string[];
  features: string[];
  status: string; // 'Available', 'Pending'
  tags: string[]; // 'Best Deal', 'Low Mileage'
}

export const inventory: Vehicle[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry SE",
    year: 2026,
    price: 28550,
    mileage: 12,
    fuelType: "Gasoline",
    mpg: "28 City / 39 Hwy",
    engine: "2.5L 4-Cylinder",
    transmission: "8-Speed Automatic",
    drivetrain: "FWD",
    exteriorColor: "Midnight Black Metallic",
    interiorColor: "Black SofTex",
    vin: "JTN11111111111111",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c39d48b11?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c39d48b11?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1633519803875-e9df2591ffde?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Apple CarPlay & Android Auto",
      "Toyota Safety Sense 2.5+",
      "Sport-Tuned Suspension",
      "18-in. Black Machined-Finish Alloy Wheels",
      "Bi-LED Combination Headlights"
    ],
    status: "Available",
    tags: ["Hot Offer", "Just Arrived"]
  },
  {
    id: "2",
    make: "Toyota",
    model: "RAV4 XLE Premium",
    year: 2025,
    price: 33200,
    mileage: 4500,
    fuelType: "Hybrid",
    mpg: "41 City / 38 Hwy",
    engine: "2.5L 4-Cylinder Hybrid",
    transmission: "ECVT",
    drivetrain: "AWD",
    exteriorColor: "Lunar Rock",
    interiorColor: "Nutmeg SofTex",
    vin: "2T322222222222222",
    image: "https://images.unsplash.com/photo-1550005747-8178d85fec91?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1550005747-8178d85fec91?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Power Tilt/Slide Moonroof",
      "Power Liftgate",
      "Smart Key System",
      "Dual Zone Auto A/C",
      "Blind Spot Monitor"
    ],
    status: "Available",
    tags: ["Best Deal", "Low Mileage"]
  },
  {
    id: "3",
    make: "Toyota",
    model: "Corolla LE",
    year: 2024,
    price: 22050,
    mileage: 12500,
    fuelType: "Gasoline",
    mpg: "32 City / 41 Hwy",
    engine: "2.0L 4-Cylinder",
    transmission: "CVT",
    drivetrain: "FWD",
    exteriorColor: "Classic Silver Metallic",
    interiorColor: "Light Gray Fabric",
    vin: "5YF33333333333333",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "8-in. Touchscreen",
      "Automatic Climate Control",
      "Toyota Safety Sense 3.0",
      "Remote Keyless Entry"
    ],
    status: "Available",
    tags: ["Great MPG", "Certified Pre-Owned"]
  },
  {
    id: "4",
    make: "Toyota",
    model: "Tacoma TRD Off-Road",
    year: 2026,
    price: 45780,
    mileage: 15,
    fuelType: "Gasoline",
    mpg: "18 City / 22 Hwy",
    engine: "2.4L Turbo 4-Cylinder",
    transmission: "8-Speed Automatic",
    drivetrain: "4WD",
    exteriorColor: "Solar Octane",
    interiorColor: "Black Fabric",
    vin: "3TM44444444444444",
    image: "https://images.unsplash.com/photo-1559404289-5f21221bdc7d?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1559404289-5f21221bdc7d?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Multi-Terrain Select",
      "Crawl Control",
      "Electronically Controlled Locking Rear Differential",
      "17-in. Machined Alloy Wheels"
    ],
    status: "Available",
    tags: ["4x4 Ready", "New Arrival"]
  },
  {
    id: "5",
    make: "Toyota",
    model: "Highlander XLE",
    year: 2025,
    price: 42500,
    mileage: 8200,
    fuelType: "Hybrid",
    mpg: "36 City / 35 Hwy",
    engine: "2.5L 4-Cylinder Hybrid",
    transmission: "ECVT",
    drivetrain: "AWD",
    exteriorColor: "Wind Chill Pearl",
    interiorColor: "Macadamia SofTex",
    vin: "5TD55555555555555",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Wireless Apple CarPlay & Android Auto",
      "SofTex-Trimmed Front & Second-Row Seats",
      "Heated Front Seats",
      "Power Liftgate"
    ],
    status: "Available",
    tags: ["Family Choice", "Hybrid"]
  },
  {
    id: "6",
    make: "Toyota",
    model: "Tundra SR5",
    year: 2024,
    price: 49800,
    mileage: 21000,
    fuelType: "Gasoline",
    mpg: "18 City / 23 Hwy",
    engine: "3.5L Twin-Turbo V6",
    transmission: "10-Speed Automatic",
    drivetrain: "4WD",
    exteriorColor: "Magnetic Gray Metallic",
    interiorColor: "Black Fabric",
    vin: "5TF66666666666666",
    image: "https://images.unsplash.com/photo-1605810230434-75464161a069?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1605810230434-75464161a069?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Tow Package",
      "8-in. Touchscreen",
      "Toyota Safety Sense 2.5",
      "Aluminum Wheels"
    ],
    status: "Available",
    tags: ["Work Ready"]
  }
];
