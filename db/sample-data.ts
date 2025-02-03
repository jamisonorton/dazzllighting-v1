import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Dazzl Admin",
      email: "dazzlholidaylighting@gmail.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "jane",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "Track",
      slug: "track",
      category: "Permanent Lights",
      description:
        "Our premium track systems provide a sleek, durable solution for permanent lighting installations. Available in multiple styles—Hat Track, Double Track, and Commercial Track—each designed for seamless integration and long-lasting performance. Choose from various depths and colors to match the soffit of the home, ensuring a professional and polished look for any installation. Tracks will be sent in 3 foot sections.",
      images: [
        "/images/sample-products/all-tracks.jpg",
        "/images/sample-products/commercial-track.jpg",
        "/images/sample-products/double-single-track.jpg",
      ],
      price: 9.2,
      brand: "Dazzl Lights",
      isFeatured: true,
      banner: null,
    },
    {
      name: "24v LED Lights",
      slug: "24v-led-lights",
      category: "Permanent Lights",
      description:
        "Our high-quality permanent lighting is designed for vibrant, energy-efficient illumination year-round. Featuring countless, customizable RGBW options, our lights offer endless color possibilities, animations, and smart control for effortless operation. Built for durability and weather resistance, they seamlessly integrate with our track systems to create a professional, polished look for homes and businesses.",
      images: ["/images/sample-products/24vled.jpg"],
      price: 3.6,
      brand: "Dazzl Lights",
      isFeatured: true,
      banner: null,
    },
    {
      name: "Controller Box",
      slug: "controller-box",
      category: "Permanent Lights",
      description:
        "The Dazzl Lights Controller Box is the power hub for your permanent lighting system, ensuring seamless operation and smart control. Designed for reliability and ease of use, it connects to your lights for effortless customization of colors, animations, and schedules. Built with durable, weather-resistant components, it provides a secure and efficient solution for managing your lighting year-round.",
      images: ["/images/sample-products/controller.jpg"],
      price: 350.0,
      brand: "Dazzl Lights",
      isFeatured: true,
      banner: null,
    },
    {
      name: "Power Injection",
      slug: "power-injection",
      category: "Permanent Lights",
      description:
        "Ensure consistent, reliable power for your permanent lighting system with our Power Injection Wire. Designed to prevent voltage drop over long runs, it maintains optimal brightness and performance across your installation. Low Voltage 16/2 Wire Use with T Cable Use with Electrical Wire Connectors. This costs $0.40/ft",
      images: [
        "/images/sample-products/power-injection-1.jpg",
        "/images/sample-products/power-injection-2.jpg",
      ],
      price: 0.4,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "Protective Loom",
      slug: "protective-loom-injection",
      category: "Permanent Lights",
      description:
        "Protect and organize your wiring with our high-quality Protective Loom. Designed for durability, it shields cables from weather, UV exposure, and abrasion, ensuring long-term reliability in any installation. Easy to install and professional in appearance, it helps dealers deliver a clean, secure, and polished lighting setup. This costs $0.75/ft",
      images: ["/images/sample-products/loom.jpg"],
      price: 0.75,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "Extension Cables",
      slug: "extension-cables",
      category: "Permanent Lights",
      description:
        "Expand your lighting reach with our durable Extension Cable. Engineered for secure connections and steady performance, it allows for flexible installations across larger spaces. A must-have for dealers needing reliable, long-distance wiring solutions. This costs changes per ft",
      images: ["/images/sample-products/extension.jpg"],
      price: 3.0,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "Y Connector",
      slug: "y-connector",
      category: "Permanent Lights",
      description:
        "Split power and data effortlessly with our Y Connector. Designed for secure and efficient branching, it simplifies complex installations and enhances layout flexibility. A key component for dealers optimizing multi-run setups.",
      images: ["/images/sample-products/y-connectors.jpg"],
      price: 3.5,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "T Cable",
      slug: "t-cable",
      category: "Permanent Lights",
      description:
        "Our T Cable, designed for seamless power injection in your lighting system. Ideal for extending power to multiple runs, it provides a reliable solution for dealers handling larger installations.",
      images: ["/images/sample-products/t-cable.jpg"],
      price: 7.0,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "Data Booster",
      slug: "data-booster",
      category: "Permanent Lights",
      description:
        "Always install one of these at the base of your install. Enhance signal strength with our Data Booster, designed to maintain optimal data transmission over long distances. Perfect for dealers working on large or complex installations, it ensures smooth and reliable performance throughout the system.",
      images: ["/images/sample-products/booster.jpg"],
      price: 7.2,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "Zip Screws (pack of 100)",
      slug: "zip-screws",
      category: "Permanent Lights",
      description:
        "Secure your lighting system with our #8 / 1/2 Zip Screws, sold in a 100-pack. Designed for quick installation and reliable hold, these screws are perfect for attaching track and other components. A must-have for dealers looking for efficient and durable fastening solutions.",
      images: ["/images/sample-products/zip-screws.jpg"],
      price: 6.25,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
    {
      name: "Wire Connectors (pack of 25)",
      slug: "wire-connectors",
      category: "Permanent Lights",
      description:
        "Wire Connectors, or Jellies, sold in a 25-pack, are perfect for connecting T cables and power injection in your lighting setup. These reliable connectors ensure secure electrical connections, providing dealers with an efficient solution for powering multiple runs in large installations.",
      images: ["/images/sample-products/wire-connectors.jpg"],
      price: 6.75,
      brand: "Dazzl Lights",
      isFeatured: false,
      banner: null,
    },
  ],
};

export default sampleData;
