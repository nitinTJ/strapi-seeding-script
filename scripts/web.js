import brand from "../data/strapi_model.json" assert { type: "json" };
import news from "../data/news.json" assert { type: "json" };

import fs from "fs";
const json = [
  {
    data: {
      id: 961,
      seo: {
        metaTitle:
          "Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White Price - Roadster Dark Smoke Grey - Inferno Red - Glacial White \nMileage, Review & Images",
        metaDescription:
          "Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White price starts from undefined in India. \nCheck out Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White on-road price, Roadster Dark Smoke Grey - Inferno Red - Glacial White Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White Price - Roadster Dark Smoke Grey - Inferno Red - Glacial White \nMileage, Review & Images",
            description:
              "Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White price starts from undefined in India. \nCheck out Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White on-road price, Roadster Dark Smoke Grey - Inferno Red - Glacial White Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White Price - Roadster Dark Smoke Grey - Inferno Red - Glacial White \nMileage, Review & Images",
        ogDescription:
          "Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White price starts from undefined in India. \nCheck out Yezdi Roadster Dark Smoke Grey - Inferno Red - Glacial White on-road price, Roadster Dark Smoke Grey - Inferno Red - Glacial White Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/yezdi-bikes/roadster/roadster-dark-smoke-grey-inferno-red-glacial-white",
        ogUrl:
          "https://bikes.tractorjunction.com/en/yezdi-bikes/roadster/roadster-dark-smoke-grey-inferno-red-glacial-white",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1016,
      seo: {
        metaTitle:
          "TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] Price - Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] on-road price, Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] Price - Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] \nMileage, Review & Images",
            description:
              "TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] on-road price, Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] Price - Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] on-road price, Apache RTR 160 4V Dual Disc - ABS - Without Connectivity [2022] Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-dual-disc-abs-without-connectivity-2022",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-dual-disc-abs-without-connectivity-2022",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1342,
      seo: {
        metaTitle:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2021] Price - Apache RTR 160 4V Single Disc - ABS - [2021] \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2021] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Single Disc - ABS - [2021] on-road price, Apache RTR 160 4V Single Disc - ABS - [2021] Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 160 4V Single Disc - ABS - [2021] Price - Apache RTR 160 4V Single Disc - ABS - [2021] \nMileage, Review & Images",
            description:
              "TVS Apache RTR 160 4V Single Disc - ABS - [2021] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Single Disc - ABS - [2021] on-road price, Apache RTR 160 4V Single Disc - ABS - [2021] Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2021] Price - Apache RTR 160 4V Single Disc - ABS - [2021] \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2021] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Single Disc - ABS - [2021] on-road price, Apache RTR 160 4V Single Disc - ABS - [2021] Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-single-disc-abs-2021",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-single-disc-abs-2021",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1587,
      seo: {
        metaTitle:
          "dynam Flash standard Price - Flash standard \nMileage, Review & Images",
        metaDescription:
          "dynam Flash standard price starts from undefined in India. \nCheck out dynam Flash standard on-road price, Flash standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "dynam Flash standard Price - Flash standard \nMileage, Review & Images",
            description:
              "dynam Flash standard price starts from undefined in India. \nCheck out dynam Flash standard on-road price, Flash standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "dynam Flash standard Price - Flash standard \nMileage, Review & Images",
        ogDescription:
          "dynam Flash standard price starts from undefined in India. \nCheck out dynam Flash standard on-road price, Flash standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/dynam/flash/flash-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/dynam/flash/flash-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1668,
      seo: {
        metaTitle:
          "Evolet Hawk standard Price - Hawk standard \nMileage, Review & Images",
        metaDescription:
          "Evolet Hawk standard price starts from undefined in India. \nCheck out Evolet Hawk standard on-road price, Hawk standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Evolet Hawk standard Price - Hawk standard \nMileage, Review & Images",
            description:
              "Evolet Hawk standard price starts from undefined in India. \nCheck out Evolet Hawk standard on-road price, Hawk standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Evolet Hawk standard Price - Hawk standard \nMileage, Review & Images",
        ogDescription:
          "Evolet Hawk standard price starts from undefined in India. \nCheck out Evolet Hawk standard on-road price, Hawk standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/evolet/hawk/hawk-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/evolet/hawk/hawk-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1567,
      seo: {
        metaTitle:
          "gogoro Supersport standard Price - Supersport standard \nMileage, Review & Images",
        metaDescription:
          "gogoro Supersport standard price starts from undefined in India. \nCheck out gogoro Supersport standard on-road price, Supersport standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "gogoro Supersport standard Price - Supersport standard \nMileage, Review & Images",
            description:
              "gogoro Supersport standard price starts from undefined in India. \nCheck out gogoro Supersport standard on-road price, Supersport standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "gogoro Supersport standard Price - Supersport standard \nMileage, Review & Images",
        ogDescription:
          "gogoro Supersport standard price starts from undefined in India. \nCheck out gogoro Supersport standard on-road price, Supersport standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-scooters/gogoro/supersport/supersport-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-scooters/gogoro/supersport/supersport-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1694,
      seo: {
        metaTitle:
          "Livewire ONE standard Price - ONE standard \nMileage, Review & Images",
        metaDescription:
          "Livewire ONE standard price starts from undefined in India. \nCheck out Livewire ONE standard on-road price, ONE standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Livewire ONE standard Price - ONE standard \nMileage, Review & Images",
            description:
              "Livewire ONE standard price starts from undefined in India. \nCheck out Livewire ONE standard on-road price, ONE standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Livewire ONE standard Price - ONE standard \nMileage, Review & Images",
        ogDescription:
          "Livewire ONE standard price starts from undefined in India. \nCheck out Livewire ONE standard on-road price, ONE standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/livewire/one-154/one-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/livewire/one-154/one-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1152,
      seo: {
        metaTitle:
          "Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX Price - Maestro Edge 110 Drum Brake Alloy Wheel - VX \nMileage, Review & Images",
        metaDescription:
          "Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX price starts from undefined in India. \nCheck out Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX on-road price, Maestro Edge 110 Drum Brake Alloy Wheel - VX Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX Price - Maestro Edge 110 Drum Brake Alloy Wheel - VX \nMileage, Review & Images",
            description:
              "Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX price starts from undefined in India. \nCheck out Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX on-road price, Maestro Edge 110 Drum Brake Alloy Wheel - VX Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX Price - Maestro Edge 110 Drum Brake Alloy Wheel - VX \nMileage, Review & Images",
        ogDescription:
          "Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX price starts from undefined in India. \nCheck out Hero Maestro Edge 110 Drum Brake Alloy Wheel - VX on-road price, Maestro Edge 110 Drum Brake Alloy Wheel - VX Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-scooters/maestro-edge-110/maestro-edge-110-drum-brake-alloy-wheel-vx",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-scooters/maestro-edge-110/maestro-edge-110-drum-brake-alloy-wheel-vx",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 919,
      seo: {
        metaTitle:
          "Royal Enfield Classic 350 Halcyon - Single Channel ABS Price - Classic 350 Halcyon - Single Channel ABS \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Classic 350 Halcyon - Single Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Halcyon - Single Channel ABS on-road price, Classic 350 Halcyon - Single Channel ABS Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Classic 350 Halcyon - Single Channel ABS Price - Classic 350 Halcyon - Single Channel ABS \nMileage, Review & Images",
            description:
              "Royal Enfield Classic 350 Halcyon - Single Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Halcyon - Single Channel ABS on-road price, Classic 350 Halcyon - Single Channel ABS Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Classic 350 Halcyon - Single Channel ABS Price - Classic 350 Halcyon - Single Channel ABS \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Classic 350 Halcyon - Single Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Halcyon - Single Channel ABS on-road price, Classic 350 Halcyon - Single Channel ABS Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-halcyon-single-channel-abs",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-halcyon-single-channel-abs",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1671,
      seo: {
        metaTitle:
          "Evolet Raptor standard Price - Raptor standard \nMileage, Review & Images",
        metaDescription:
          "Evolet Raptor standard price starts from undefined in India. \nCheck out Evolet Raptor standard on-road price, Raptor standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Evolet Raptor standard Price - Raptor standard \nMileage, Review & Images",
            description:
              "Evolet Raptor standard price starts from undefined in India. \nCheck out Evolet Raptor standard on-road price, Raptor standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Evolet Raptor standard Price - Raptor standard \nMileage, Review & Images",
        ogDescription:
          "Evolet Raptor standard price starts from undefined in India. \nCheck out Evolet Raptor standard on-road price, Raptor standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-scooters/evolet/raptor/raptor-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-scooters/evolet/raptor/raptor-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1123,
      seo: {
        metaTitle:
          "Royal Enfield Himalayan Pine Green and Granite Black Price - Himalayan Pine Green and Granite Black \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Himalayan Pine Green and Granite Black price starts from undefined in India. \nCheck out Royal Enfield Himalayan Pine Green and Granite Black on-road price, Himalayan Pine Green and Granite Black Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Himalayan Pine Green and Granite Black Price - Himalayan Pine Green and Granite Black \nMileage, Review & Images",
            description:
              "Royal Enfield Himalayan Pine Green and Granite Black price starts from undefined in India. \nCheck out Royal Enfield Himalayan Pine Green and Granite Black on-road price, Himalayan Pine Green and Granite Black Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Himalayan Pine Green and Granite Black Price - Himalayan Pine Green and Granite Black \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Himalayan Pine Green and Granite Black price starts from undefined in India. \nCheck out Royal Enfield Himalayan Pine Green and Granite Black on-road price, Himalayan Pine Green and Granite Black Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/himalayan/himalayan-pine-green-and-granite-black",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/himalayan/himalayan-pine-green-and-granite-black",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1543,
      seo: {
        metaTitle:
          "Tork Kratos R standard Price - Kratos R standard \nMileage, Review & Images",
        metaDescription:
          "Tork Kratos R standard price starts from undefined in India. \nCheck out Tork Kratos R standard on-road price, Kratos R standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Tork Kratos R standard Price - Kratos R standard \nMileage, Review & Images",
            description:
              "Tork Kratos R standard price starts from undefined in India. \nCheck out Tork Kratos R standard on-road price, Kratos R standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Tork Kratos R standard Price - Kratos R standard \nMileage, Review & Images",
        ogDescription:
          "Tork Kratos R standard price starts from undefined in India. \nCheck out Tork Kratos R standard on-road price, Kratos R standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos-r/kratos-r-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos-r/kratos-r-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1010,
      seo: {
        metaTitle:
          "TVS Apache RTR 200 4V Single Channel ABS [2022] Price - Apache RTR 200 4V Single Channel ABS [2022] \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 200 4V Single Channel ABS [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS [2022] on-road price, Apache RTR 200 4V Single Channel ABS [2022] Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 200 4V Single Channel ABS [2022] Price - Apache RTR 200 4V Single Channel ABS [2022] \nMileage, Review & Images",
            description:
              "TVS Apache RTR 200 4V Single Channel ABS [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS [2022] on-road price, Apache RTR 200 4V Single Channel ABS [2022] Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 200 4V Single Channel ABS [2022] Price - Apache RTR 200 4V Single Channel ABS [2022] \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 200 4V Single Channel ABS [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS [2022] on-road price, Apache RTR 200 4V Single Channel ABS [2022] Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-single-channel-abs-2022",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-single-channel-abs-2022",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 938,
      seo: {
        metaTitle:
          "Hero Splendor Plus Self Alloy i3S Matt Shield Gold Price - Splendor Plus Self Alloy i3S Matt Shield Gold \nMileage, Review & Images",
        metaDescription:
          "Hero Splendor Plus Self Alloy i3S Matt Shield Gold price starts from undefined in India. \nCheck out Hero Splendor Plus Self Alloy i3S Matt Shield Gold on-road price, Splendor Plus Self Alloy i3S Matt Shield Gold Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Splendor Plus Self Alloy i3S Matt Shield Gold Price - Splendor Plus Self Alloy i3S Matt Shield Gold \nMileage, Review & Images",
            description:
              "Hero Splendor Plus Self Alloy i3S Matt Shield Gold price starts from undefined in India. \nCheck out Hero Splendor Plus Self Alloy i3S Matt Shield Gold on-road price, Splendor Plus Self Alloy i3S Matt Shield Gold Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Splendor Plus Self Alloy i3S Matt Shield Gold Price - Splendor Plus Self Alloy i3S Matt Shield Gold \nMileage, Review & Images",
        ogDescription:
          "Hero Splendor Plus Self Alloy i3S Matt Shield Gold price starts from undefined in India. \nCheck out Hero Splendor Plus Self Alloy i3S Matt Shield Gold on-road price, Splendor Plus Self Alloy i3S Matt Shield Gold Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-bikes/splendor-plus/splendor-plus-self-alloy-i3s-matt-shield-gold",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-bikes/splendor-plus/splendor-plus-self-alloy-i3s-matt-shield-gold",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1910,
      seo: {
        metaTitle:
          "Hero Super Splendor Xtec Drum Brake Self Start cast wheel Price - Super Splendor Xtec Drum Brake Self Start cast wheel \nMileage, Review & Images",
        metaDescription:
          "Hero Super Splendor Xtec Drum Brake Self Start cast wheel price starts from undefined in India. \nCheck out Hero Super Splendor Xtec Drum Brake Self Start cast wheel on-road price, Super Splendor Xtec Drum Brake Self Start cast wheel Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Super Splendor Xtec Drum Brake Self Start cast wheel Price - Super Splendor Xtec Drum Brake Self Start cast wheel \nMileage, Review & Images",
            description:
              "Hero Super Splendor Xtec Drum Brake Self Start cast wheel price starts from undefined in India. \nCheck out Hero Super Splendor Xtec Drum Brake Self Start cast wheel on-road price, Super Splendor Xtec Drum Brake Self Start cast wheel Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Super Splendor Xtec Drum Brake Self Start cast wheel Price - Super Splendor Xtec Drum Brake Self Start cast wheel \nMileage, Review & Images",
        ogDescription:
          "Hero Super Splendor Xtec Drum Brake Self Start cast wheel price starts from undefined in India. \nCheck out Hero Super Splendor Xtec Drum Brake Self Start cast wheel on-road price, Super Splendor Xtec Drum Brake Self Start cast wheel Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-bikes/super-splendor-xtec/super-splendor-xtec-drum-brake-self-start-cast-wheel",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-bikes/super-splendor-xtec/super-splendor-xtec-drum-brake-self-start-cast-wheel",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 929,
      seo: {
        metaTitle:
          "YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue Price - MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue \nMileage, Review & Images",
        metaDescription:
          "YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue price starts from undefined in India. \nCheck out YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue on-road price, MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue Price - MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue \nMileage, Review & Images",
            description:
              "YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue price starts from undefined in India. \nCheck out YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue on-road price, MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue Price - MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue \nMileage, Review & Images",
        ogDescription:
          "YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue price starts from undefined in India. \nCheck out YAMAHA MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue on-road price, MT 15 V2 Ice Fluo - Cyan Storm - Racing Blue Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/yamaha-bikes/mt-15-v2/mt-15-v2-ice-fluo-cyan-storm-racing-blue",
        ogUrl:
          "https://bikes.tractorjunction.com/en/yamaha-bikes/mt-15-v2/mt-15-v2-ice-fluo-cyan-storm-racing-blue",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1012,
      seo: {
        metaTitle:
          "Royal Enfield Scram 411 Blazing Black and Skyline Blue Price - Scram 411 Blazing Black and Skyline Blue \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Scram 411 Blazing Black and Skyline Blue price starts from undefined in India. \nCheck out Royal Enfield Scram 411 Blazing Black and Skyline Blue on-road price, Scram 411 Blazing Black and Skyline Blue Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Scram 411 Blazing Black and Skyline Blue Price - Scram 411 Blazing Black and Skyline Blue \nMileage, Review & Images",
            description:
              "Royal Enfield Scram 411 Blazing Black and Skyline Blue price starts from undefined in India. \nCheck out Royal Enfield Scram 411 Blazing Black and Skyline Blue on-road price, Scram 411 Blazing Black and Skyline Blue Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Scram 411 Blazing Black and Skyline Blue Price - Scram 411 Blazing Black and Skyline Blue \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Scram 411 Blazing Black and Skyline Blue price starts from undefined in India. \nCheck out Royal Enfield Scram 411 Blazing Black and Skyline Blue on-road price, Scram 411 Blazing Black and Skyline Blue Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/scram-411/scram-411-blazing-black-and-skyline-blue",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/scram-411/scram-411-blazing-black-and-skyline-blue",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1570,
      seo: {
        metaTitle:
          "gogoro S1 standard Price - S1 standard \nMileage, Review & Images",
        metaDescription:
          "gogoro S1 standard price starts from undefined in India. \nCheck out gogoro S1 standard on-road price, S1 standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "gogoro S1 standard Price - S1 standard \nMileage, Review & Images",
            description:
              "gogoro S1 standard price starts from undefined in India. \nCheck out gogoro S1 standard on-road price, S1 standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "gogoro S1 standard Price - S1 standard \nMileage, Review & Images",
        ogDescription:
          "gogoro S1 standard price starts from undefined in India. \nCheck out gogoro S1 standard on-road price, S1 standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-scooters/gogoro/s1/s1-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-scooters/gogoro/s1/s1-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1126,
      seo: {
        metaTitle:
          "TVS Apache RTR 200 4V Dual-Channel ABS with Modes Price - Apache RTR 200 4V Dual-Channel ABS with Modes \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 200 4V Dual-Channel ABS with Modes price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Dual-Channel ABS with Modes on-road price, Apache RTR 200 4V Dual-Channel ABS with Modes Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 200 4V Dual-Channel ABS with Modes Price - Apache RTR 200 4V Dual-Channel ABS with Modes \nMileage, Review & Images",
            description:
              "TVS Apache RTR 200 4V Dual-Channel ABS with Modes price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Dual-Channel ABS with Modes on-road price, Apache RTR 200 4V Dual-Channel ABS with Modes Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 200 4V Dual-Channel ABS with Modes Price - Apache RTR 200 4V Dual-Channel ABS with Modes \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 200 4V Dual-Channel ABS with Modes price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Dual-Channel ABS with Modes on-road price, Apache RTR 200 4V Dual-Channel ABS with Modes Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-dual-channel-abs-with-modes",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-dual-channel-abs-with-modes",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1886,
      seo: {
        metaTitle:
          "Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel Price - Super Splendor Xtec Disc Brake Self Start Cast Wheel \nMileage, Review & Images",
        metaDescription:
          "Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel price starts from undefined in India. \nCheck out Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel on-road price, Super Splendor Xtec Disc Brake Self Start Cast Wheel Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel Price - Super Splendor Xtec Disc Brake Self Start Cast Wheel \nMileage, Review & Images",
            description:
              "Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel price starts from undefined in India. \nCheck out Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel on-road price, Super Splendor Xtec Disc Brake Self Start Cast Wheel Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel Price - Super Splendor Xtec Disc Brake Self Start Cast Wheel \nMileage, Review & Images",
        ogDescription:
          "Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel price starts from undefined in India. \nCheck out Hero Super Splendor Xtec Disc Brake Self Start Cast Wheel on-road price, Super Splendor Xtec Disc Brake Self Start Cast Wheel Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-bikes/super-splendor-xtec/super-splendor-xtec-disc-brake-self-start-cast-wheel",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-bikes/super-splendor-xtec/super-splendor-xtec-disc-brake-self-start-cast-wheel",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1026,
      seo: {
        metaTitle:
          "Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS Price - Classic 350 Classic Chrome - Dual Channel ABS \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS on-road price, Classic 350 Classic Chrome - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS Price - Classic 350 Classic Chrome - Dual Channel ABS \nMileage, Review & Images",
            description:
              "Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS on-road price, Classic 350 Classic Chrome - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS Price - Classic 350 Classic Chrome - Dual Channel ABS \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Chrome - Dual Channel ABS on-road price, Classic 350 Classic Chrome - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-classic-chrome-dual-channel-abs",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-classic-chrome-dual-channel-abs",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1051,
      seo: {
        metaTitle:
          "Royal Enfield Classic 350 Classic Signals - Dual Channel ABS Price - Classic 350 Classic Signals - Dual Channel ABS \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Classic 350 Classic Signals - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Signals - Dual Channel ABS on-road price, Classic 350 Classic Signals - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Classic 350 Classic Signals - Dual Channel ABS Price - Classic 350 Classic Signals - Dual Channel ABS \nMileage, Review & Images",
            description:
              "Royal Enfield Classic 350 Classic Signals - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Signals - Dual Channel ABS on-road price, Classic 350 Classic Signals - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Classic 350 Classic Signals - Dual Channel ABS Price - Classic 350 Classic Signals - Dual Channel ABS \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Classic 350 Classic Signals - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Signals - Dual Channel ABS on-road price, Classic 350 Classic Signals - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-classic-signals-dual-channel-abs",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-classic-signals-dual-channel-abs",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1287,
      seo: {
        metaTitle:
          "Hero Maestro Edge 125 Prismatic Color Tech - BS VI Price - Maestro Edge 125 Prismatic Color Tech - BS VI \nMileage, Review & Images",
        metaDescription:
          "Hero Maestro Edge 125 Prismatic Color Tech - BS VI price starts from undefined in India. \nCheck out Hero Maestro Edge 125 Prismatic Color Tech - BS VI on-road price, Maestro Edge 125 Prismatic Color Tech - BS VI Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Maestro Edge 125 Prismatic Color Tech - BS VI Price - Maestro Edge 125 Prismatic Color Tech - BS VI \nMileage, Review & Images",
            description:
              "Hero Maestro Edge 125 Prismatic Color Tech - BS VI price starts from undefined in India. \nCheck out Hero Maestro Edge 125 Prismatic Color Tech - BS VI on-road price, Maestro Edge 125 Prismatic Color Tech - BS VI Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Maestro Edge 125 Prismatic Color Tech - BS VI Price - Maestro Edge 125 Prismatic Color Tech - BS VI \nMileage, Review & Images",
        ogDescription:
          "Hero Maestro Edge 125 Prismatic Color Tech - BS VI price starts from undefined in India. \nCheck out Hero Maestro Edge 125 Prismatic Color Tech - BS VI on-road price, Maestro Edge 125 Prismatic Color Tech - BS VI Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-scooters/maestro-edge-125/maestro-edge-125-prismatic-color-tech-bs-vi",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-scooters/maestro-edge-125/maestro-edge-125-prismatic-color-tech-bs-vi",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 2008,
      seo: {
        metaTitle:
          "OLA S1 Standard Price - S1 Standard \nMileage, Review & Images",
        metaDescription:
          "OLA S1 Standard price starts from undefined in India. \nCheck out OLA S1 Standard on-road price, S1 Standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "OLA S1 Standard Price - S1 Standard \nMileage, Review & Images",
            description:
              "OLA S1 Standard price starts from undefined in India. \nCheck out OLA S1 Standard on-road price, S1 Standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "OLA S1 Standard Price - S1 Standard \nMileage, Review & Images",
        ogDescription:
          "OLA S1 Standard price starts from undefined in India. \nCheck out OLA S1 Standard on-road price, S1 Standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-scooters/ola/s1/s1-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-scooters/ola/s1/s1-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 2009,
      seo: {
        metaTitle:
          "Techo Electra Raptor Standard Price - Raptor Standard \nMileage, Review & Images",
        metaDescription:
          "Techo Electra Raptor Standard price starts from undefined in India. \nCheck out Techo Electra Raptor Standard on-road price, Raptor Standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Techo Electra Raptor Standard Price - Raptor Standard \nMileage, Review & Images",
            description:
              "Techo Electra Raptor Standard price starts from undefined in India. \nCheck out Techo Electra Raptor Standard on-road price, Raptor Standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Techo Electra Raptor Standard Price - Raptor Standard \nMileage, Review & Images",
        ogDescription:
          "Techo Electra Raptor Standard price starts from undefined in India. \nCheck out Techo Electra Raptor Standard on-road price, Raptor Standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-scooters/techo-electra/one/raptor-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-scooters/techo-electra/one/raptor-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1858,
      seo: {
        metaTitle:
          "Hero Self Start ABS Disc Brake Alloy wheel - FI Price - Self Start ABS Disc Brake Alloy wheel - FI \nMileage, Review & Images",
        metaDescription:
          "Hero Self Start ABS Disc Brake Alloy wheel - FI price starts from undefined in India. \nCheck out Hero Self Start ABS Disc Brake Alloy wheel - FI on-road price, Self Start ABS Disc Brake Alloy wheel - FI Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Self Start ABS Disc Brake Alloy wheel - FI Price - Self Start ABS Disc Brake Alloy wheel - FI \nMileage, Review & Images",
            description:
              "Hero Self Start ABS Disc Brake Alloy wheel - FI price starts from undefined in India. \nCheck out Hero Self Start ABS Disc Brake Alloy wheel - FI on-road price, Self Start ABS Disc Brake Alloy wheel - FI Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Self Start ABS Disc Brake Alloy wheel - FI Price - Self Start ABS Disc Brake Alloy wheel - FI \nMileage, Review & Images",
        ogDescription:
          "Hero Self Start ABS Disc Brake Alloy wheel - FI price starts from undefined in India. \nCheck out Hero Self Start ABS Disc Brake Alloy wheel - FI on-road price, Self Start ABS Disc Brake Alloy wheel - FI Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-bikes/xtreme-200s/self-start-abs-disc-brake-alloy-wheel-fi",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-bikes/xtreme-200s/self-start-abs-disc-brake-alloy-wheel-fi",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 960,
      seo: {
        metaTitle:
          "Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue Price - Scrambler Rebel Red - Mean Green - Midnight Blue \nMileage, Review & Images",
        metaDescription:
          "Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue price starts from undefined in India. \nCheck out Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue on-road price, Scrambler Rebel Red - Mean Green - Midnight Blue Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue Price - Scrambler Rebel Red - Mean Green - Midnight Blue \nMileage, Review & Images",
            description:
              "Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue price starts from undefined in India. \nCheck out Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue on-road price, Scrambler Rebel Red - Mean Green - Midnight Blue Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue Price - Scrambler Rebel Red - Mean Green - Midnight Blue \nMileage, Review & Images",
        ogDescription:
          "Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue price starts from undefined in India. \nCheck out Yezdi Scrambler Rebel Red - Mean Green - Midnight Blue on-road price, Scrambler Rebel Red - Mean Green - Midnight Blue Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/yezdi-bikes/scrambler/scrambler-rebel-red-mean-green-midnight-blue",
        ogUrl:
          "https://bikes.tractorjunction.com/en/yezdi-bikes/scrambler/scrambler-rebel-red-mean-green-midnight-blue",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 944,
      seo: {
        metaTitle:
          "Royal Enfield Scram 411 White Flame and Silver Spirit Price - Scram 411 White Flame and Silver Spirit \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Scram 411 White Flame and Silver Spirit price starts from undefined in India. \nCheck out Royal Enfield Scram 411 White Flame and Silver Spirit on-road price, Scram 411 White Flame and Silver Spirit Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Scram 411 White Flame and Silver Spirit Price - Scram 411 White Flame and Silver Spirit \nMileage, Review & Images",
            description:
              "Royal Enfield Scram 411 White Flame and Silver Spirit price starts from undefined in India. \nCheck out Royal Enfield Scram 411 White Flame and Silver Spirit on-road price, Scram 411 White Flame and Silver Spirit Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Scram 411 White Flame and Silver Spirit Price - Scram 411 White Flame and Silver Spirit \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Scram 411 White Flame and Silver Spirit price starts from undefined in India. \nCheck out Royal Enfield Scram 411 White Flame and Silver Spirit on-road price, Scram 411 White Flame and Silver Spirit Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/scram-411/scram-411-white-flame-and-silver-spirit",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/scram-411/scram-411-white-flame-and-silver-spirit",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 891,
      seo: {
        metaTitle:
          "Hero Pleasure + Xtec Drum Alloy Jubilant Yellow Price - Pleasure + Xtec Drum Alloy Jubilant Yellow \nMileage, Review & Images",
        metaDescription:
          "Hero Pleasure + Xtec Drum Alloy Jubilant Yellow price starts from undefined in India. \nCheck out Hero Pleasure + Xtec Drum Alloy Jubilant Yellow on-road price, Pleasure + Xtec Drum Alloy Jubilant Yellow Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Hero Pleasure + Xtec Drum Alloy Jubilant Yellow Price - Pleasure + Xtec Drum Alloy Jubilant Yellow \nMileage, Review & Images",
            description:
              "Hero Pleasure + Xtec Drum Alloy Jubilant Yellow price starts from undefined in India. \nCheck out Hero Pleasure + Xtec Drum Alloy Jubilant Yellow on-road price, Pleasure + Xtec Drum Alloy Jubilant Yellow Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Hero Pleasure + Xtec Drum Alloy Jubilant Yellow Price - Pleasure + Xtec Drum Alloy Jubilant Yellow \nMileage, Review & Images",
        ogDescription:
          "Hero Pleasure + Xtec Drum Alloy Jubilant Yellow price starts from undefined in India. \nCheck out Hero Pleasure + Xtec Drum Alloy Jubilant Yellow on-road price, Pleasure + Xtec Drum Alloy Jubilant Yellow Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/hero-scooters/pleasure-plus-xtec/pleasure-plus-xtec-drum-alloy-jubilant-yellow",
        ogUrl:
          "https://bikes.tractorjunction.com/en/hero-scooters/pleasure-plus-xtec/pleasure-plus-xtec-drum-alloy-jubilant-yellow",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1304,
      seo: {
        metaTitle:
          "BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition Price - Pulsar 150 Twin Disc - Dagger Edge Edition \nMileage, Review & Images",
        metaDescription:
          "BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition price starts from undefined in India. \nCheck out BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition on-road price, Pulsar 150 Twin Disc - Dagger Edge Edition Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition Price - Pulsar 150 Twin Disc - Dagger Edge Edition \nMileage, Review & Images",
            description:
              "BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition price starts from undefined in India. \nCheck out BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition on-road price, Pulsar 150 Twin Disc - Dagger Edge Edition Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition Price - Pulsar 150 Twin Disc - Dagger Edge Edition \nMileage, Review & Images",
        ogDescription:
          "BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition price starts from undefined in India. \nCheck out BAJAJ Pulsar 150 Twin Disc - Dagger Edge Edition on-road price, Pulsar 150 Twin Disc - Dagger Edge Edition Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/bajaj-bikes/pulsar-150/pulsar-150-twin-disc-dagger-edge-edition",
        ogUrl:
          "https://bikes.tractorjunction.com/en/bajaj-bikes/pulsar-150/pulsar-150-twin-disc-dagger-edge-edition",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 816,
      seo: {
        metaTitle:
          "TVS Apache RTR 160 Drum (2022) Price - Apache RTR 160 Drum (2022) \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 160 Drum (2022) price starts from undefined in India. \nCheck out TVS Apache RTR 160 Drum (2022) on-road price, Apache RTR 160 Drum (2022) Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 160 Drum (2022) Price - Apache RTR 160 Drum (2022) \nMileage, Review & Images",
            description:
              "TVS Apache RTR 160 Drum (2022) price starts from undefined in India. \nCheck out TVS Apache RTR 160 Drum (2022) on-road price, Apache RTR 160 Drum (2022) Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 160 Drum (2022) Price - Apache RTR 160 Drum (2022) \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 160 Drum (2022) price starts from undefined in India. \nCheck out TVS Apache RTR 160 Drum (2022) on-road price, Apache RTR 160 Drum (2022) Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160/apache-rtr-160-drum-2022",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160/apache-rtr-160-drum-2022",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1027,
      seo: {
        metaTitle:
          "TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] Price - Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] on-road price, Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] Price - Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] \nMileage, Review & Images",
            description:
              "TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] on-road price, Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] Price - Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] on-road price, Apache RTR 160 4V Dual Disc - ABS - With Connectivity [2022] Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-dual-disc-abs-with-connectivity-2022",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-dual-disc-abs-with-connectivity-2022",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1013,
      seo: {
        metaTitle:
          "Royal Enfield Classic 350 Classic Dark - Dual Channel ABS Price - Classic 350 Classic Dark - Dual Channel ABS \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Classic 350 Classic Dark - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Dark - Dual Channel ABS on-road price, Classic 350 Classic Dark - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Classic 350 Classic Dark - Dual Channel ABS Price - Classic 350 Classic Dark - Dual Channel ABS \nMileage, Review & Images",
            description:
              "Royal Enfield Classic 350 Classic Dark - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Dark - Dual Channel ABS on-road price, Classic 350 Classic Dark - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Classic 350 Classic Dark - Dual Channel ABS Price - Classic 350 Classic Dark - Dual Channel ABS \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Classic 350 Classic Dark - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Classic Dark - Dual Channel ABS on-road price, Classic 350 Classic Dark - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-classic-dark-dual-channel-abs",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-classic-dark-dual-channel-abs",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1007,
      seo: {
        metaTitle:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2022] Price - Apache RTR 160 4V Single Disc - ABS - [2022] \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Single Disc - ABS - [2022] on-road price, Apache RTR 160 4V Single Disc - ABS - [2022] Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 160 4V Single Disc - ABS - [2022] Price - Apache RTR 160 4V Single Disc - ABS - [2022] \nMileage, Review & Images",
            description:
              "TVS Apache RTR 160 4V Single Disc - ABS - [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Single Disc - ABS - [2022] on-road price, Apache RTR 160 4V Single Disc - ABS - [2022] Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2022] Price - Apache RTR 160 4V Single Disc - ABS - [2022] \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 160 4V Single Disc - ABS - [2022] price starts from undefined in India. \nCheck out TVS Apache RTR 160 4V Single Disc - ABS - [2022] on-road price, Apache RTR 160 4V Single Disc - ABS - [2022] Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-single-disc-abs-2022",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-160-4v/apache-rtr-160-4v-single-disc-abs-2022",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1265,
      seo: {
        metaTitle:
          "TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI Price - XL100 Heavy Duty i-TOUCH start - SE - BS-VI \nMileage, Review & Images",
        metaDescription:
          "TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI price starts from undefined in India. \nCheck out TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI on-road price, XL100 Heavy Duty i-TOUCH start - SE - BS-VI Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI Price - XL100 Heavy Duty i-TOUCH start - SE - BS-VI \nMileage, Review & Images",
            description:
              "TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI price starts from undefined in India. \nCheck out TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI on-road price, XL100 Heavy Duty i-TOUCH start - SE - BS-VI Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI Price - XL100 Heavy Duty i-TOUCH start - SE - BS-VI \nMileage, Review & Images",
        ogDescription:
          "TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI price starts from undefined in India. \nCheck out TVS XL100 Heavy Duty i-TOUCH start - SE - BS-VI on-road price, XL100 Heavy Duty i-TOUCH start - SE - BS-VI Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/xl100-heavy-duty/xl100-heavy-duty-i-touch-start-se-bs-vi",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/xl100-heavy-duty/xl100-heavy-duty-i-touch-start-se-bs-vi",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 943,
      seo: {
        metaTitle:
          "YAMAHA Fascino 125 Hybrid - Disc Special Edition Price - Fascino 125 Hybrid - Disc Special Edition \nMileage, Review & Images",
        metaDescription:
          "YAMAHA Fascino 125 Hybrid - Disc Special Edition price starts from undefined in India. \nCheck out YAMAHA Fascino 125 Hybrid - Disc Special Edition on-road price, Fascino 125 Hybrid - Disc Special Edition Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "YAMAHA Fascino 125 Hybrid - Disc Special Edition Price - Fascino 125 Hybrid - Disc Special Edition \nMileage, Review & Images",
            description:
              "YAMAHA Fascino 125 Hybrid - Disc Special Edition price starts from undefined in India. \nCheck out YAMAHA Fascino 125 Hybrid - Disc Special Edition on-road price, Fascino 125 Hybrid - Disc Special Edition Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "YAMAHA Fascino 125 Hybrid - Disc Special Edition Price - Fascino 125 Hybrid - Disc Special Edition \nMileage, Review & Images",
        ogDescription:
          "YAMAHA Fascino 125 Hybrid - Disc Special Edition price starts from undefined in India. \nCheck out YAMAHA Fascino 125 Hybrid - Disc Special Edition on-road price, Fascino 125 Hybrid - Disc Special Edition Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/yamaha-scooters/fascino-125/fascino-125-hybrid-disc-special-edition",
        ogUrl:
          "https://bikes.tractorjunction.com/en/yamaha-scooters/fascino-125/fascino-125-hybrid-disc-special-edition",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1203,
      seo: {
        metaTitle:
          "TVS Apache RTR 200 4V Single Channel ABS - BS VI Price - Apache RTR 200 4V Single Channel ABS - BS VI \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 200 4V Single Channel ABS - BS VI price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS - BS VI on-road price, Apache RTR 200 4V Single Channel ABS - BS VI Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 200 4V Single Channel ABS - BS VI Price - Apache RTR 200 4V Single Channel ABS - BS VI \nMileage, Review & Images",
            description:
              "TVS Apache RTR 200 4V Single Channel ABS - BS VI price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS - BS VI on-road price, Apache RTR 200 4V Single Channel ABS - BS VI Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 200 4V Single Channel ABS - BS VI Price - Apache RTR 200 4V Single Channel ABS - BS VI \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 200 4V Single Channel ABS - BS VI price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS - BS VI on-road price, Apache RTR 200 4V Single Channel ABS - BS VI Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-single-channel-abs-bs-vi",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-single-channel-abs-bs-vi",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1309,
      seo: {
        metaTitle:
          "BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition Price - Pulsar 150 Single Disc - Dagger Edge Edition \nMileage, Review & Images",
        metaDescription:
          "BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition price starts from undefined in India. \nCheck out BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition on-road price, Pulsar 150 Single Disc - Dagger Edge Edition Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition Price - Pulsar 150 Single Disc - Dagger Edge Edition \nMileage, Review & Images",
            description:
              "BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition price starts from undefined in India. \nCheck out BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition on-road price, Pulsar 150 Single Disc - Dagger Edge Edition Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition Price - Pulsar 150 Single Disc - Dagger Edge Edition \nMileage, Review & Images",
        ogDescription:
          "BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition price starts from undefined in India. \nCheck out BAJAJ Pulsar 150 Single Disc - Dagger Edge Edition on-road price, Pulsar 150 Single Disc - Dagger Edge Edition Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/bajaj-bikes/pulsar-150/pulsar-150-single-disc-dagger-edge-edition",
        ogUrl:
          "https://bikes.tractorjunction.com/en/bajaj-bikes/pulsar-150/pulsar-150-single-disc-dagger-edge-edition",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1102,
      seo: {
        metaTitle:
          "Royal Enfield Classic 350 Halcyon - Dual Channel ABS Price - Classic 350 Halcyon - Dual Channel ABS \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Classic 350 Halcyon - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Halcyon - Dual Channel ABS on-road price, Classic 350 Halcyon - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Classic 350 Halcyon - Dual Channel ABS Price - Classic 350 Halcyon - Dual Channel ABS \nMileage, Review & Images",
            description:
              "Royal Enfield Classic 350 Halcyon - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Halcyon - Dual Channel ABS on-road price, Classic 350 Halcyon - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Classic 350 Halcyon - Dual Channel ABS Price - Classic 350 Halcyon - Dual Channel ABS \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Classic 350 Halcyon - Dual Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Halcyon - Dual Channel ABS on-road price, Classic 350 Halcyon - Dual Channel ABS Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-halcyon-dual-channel-abs",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-halcyon-dual-channel-abs",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1061,
      seo: {
        metaTitle:
          "Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow Price - Scram 411 Graphite Blue - Graphite Red - Graphite Yellow \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow price starts from undefined in India. \nCheck out Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow on-road price, Scram 411 Graphite Blue - Graphite Red - Graphite Yellow Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow Price - Scram 411 Graphite Blue - Graphite Red - Graphite Yellow \nMileage, Review & Images",
            description:
              "Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow price starts from undefined in India. \nCheck out Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow on-road price, Scram 411 Graphite Blue - Graphite Red - Graphite Yellow Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow Price - Scram 411 Graphite Blue - Graphite Red - Graphite Yellow \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow price starts from undefined in India. \nCheck out Royal Enfield Scram 411 Graphite Blue - Graphite Red - Graphite Yellow on-road price, Scram 411 Graphite Blue - Graphite Red - Graphite Yellow Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/scram-411/scram-411-graphite-blue-graphite-red-graphite-yellow",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/scram-411/scram-411-graphite-blue-graphite-red-graphite-yellow",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1408,
      seo: {
        metaTitle:
          "Tork Kratos Standard Price - Kratos Standard \nMileage, Review & Images",
        metaDescription:
          "Tork Kratos Standard price starts from undefined in India. \nCheck out Tork Kratos Standard on-road price, Kratos Standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Tork Kratos Standard Price - Kratos Standard \nMileage, Review & Images",
            description:
              "Tork Kratos Standard price starts from undefined in India. \nCheck out Tork Kratos Standard on-road price, Kratos Standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Tork Kratos Standard Price - Kratos Standard \nMileage, Review & Images",
        ogDescription:
          "Tork Kratos Standard price starts from undefined in India. \nCheck out Tork Kratos Standard on-road price, Kratos Standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos/kratos-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos/kratos-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1040,
      seo: {
        metaTitle:
          "Royal Enfield Classic 350 Redditch - Single Channel ABS Price - Classic 350 Redditch - Single Channel ABS \nMileage, Review & Images",
        metaDescription:
          "Royal Enfield Classic 350 Redditch - Single Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Redditch - Single Channel ABS on-road price, Classic 350 Redditch - Single Channel ABS Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Royal Enfield Classic 350 Redditch - Single Channel ABS Price - Classic 350 Redditch - Single Channel ABS \nMileage, Review & Images",
            description:
              "Royal Enfield Classic 350 Redditch - Single Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Redditch - Single Channel ABS on-road price, Classic 350 Redditch - Single Channel ABS Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Royal Enfield Classic 350 Redditch - Single Channel ABS Price - Classic 350 Redditch - Single Channel ABS \nMileage, Review & Images",
        ogDescription:
          "Royal Enfield Classic 350 Redditch - Single Channel ABS price starts from undefined in India. \nCheck out Royal Enfield Classic 350 Redditch - Single Channel ABS on-road price, Classic 350 Redditch - Single Channel ABS Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-redditch-single-channel-abs",
        ogUrl:
          "https://bikes.tractorjunction.com/en/royal-enfield-bikes/classic-350/classic-350-redditch-single-channel-abs",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1560,
      seo: {
        metaTitle:
          "Tork Kratos X standard Price - Kratos X standard \nMileage, Review & Images",
        metaDescription:
          "Tork Kratos X standard price starts from undefined in India. \nCheck out Tork Kratos X standard on-road price, Kratos X standard Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Tork Kratos X standard Price - Kratos X standard \nMileage, Review & Images",
            description:
              "Tork Kratos X standard price starts from undefined in India. \nCheck out Tork Kratos X standard on-road price, Kratos X standard Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Tork Kratos X standard Price - Kratos X standard \nMileage, Review & Images",
        ogDescription:
          "Tork Kratos X standard price starts from undefined in India. \nCheck out Tork Kratos X standard on-road price, Kratos X standard Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos-x/kratos-x-standard",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos-x/kratos-x-standard",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1109,
      seo: {
        metaTitle:
          "TVS Apache RTR 200 4V Single Channel ABS with Modes Price - Apache RTR 200 4V Single Channel ABS with Modes \nMileage, Review & Images",
        metaDescription:
          "TVS Apache RTR 200 4V Single Channel ABS with Modes price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS with Modes on-road price, Apache RTR 200 4V Single Channel ABS with Modes Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "TVS Apache RTR 200 4V Single Channel ABS with Modes Price - Apache RTR 200 4V Single Channel ABS with Modes \nMileage, Review & Images",
            description:
              "TVS Apache RTR 200 4V Single Channel ABS with Modes price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS with Modes on-road price, Apache RTR 200 4V Single Channel ABS with Modes Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "TVS Apache RTR 200 4V Single Channel ABS with Modes Price - Apache RTR 200 4V Single Channel ABS with Modes \nMileage, Review & Images",
        ogDescription:
          "TVS Apache RTR 200 4V Single Channel ABS with Modes price starts from undefined in India. \nCheck out TVS Apache RTR 200 4V Single Channel ABS with Modes on-road price, Apache RTR 200 4V Single Channel ABS with Modes Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-single-channel-abs-with-modes",
        ogUrl:
          "https://bikes.tractorjunction.com/en/tvs-bikes/apache-rtr-200-4v/apache-rtr-200-4v-single-channel-abs-with-modes",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 958,
      seo: {
        metaTitle: "Tork Kratos R Price - Kratos R \nMileage, Review & Images",
        metaDescription:
          "Tork Kratos R price starts from undefined in India. \nCheck out Tork Kratos R on-road price, Kratos R Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title: "Tork Kratos R Price - Kratos R \nMileage, Review & Images",
            description:
              "Tork Kratos R price starts from undefined in India. \nCheck out Tork Kratos R on-road price, Kratos R Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle: "Tork Kratos R Price - Kratos R \nMileage, Review & Images",
        ogDescription:
          "Tork Kratos R price starts from undefined in India. \nCheck out Tork Kratos R on-road price, Kratos R Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos/kratos-r",
        ogUrl:
          "https://bikes.tractorjunction.com/en/electric-bikes/tork/kratos/kratos-r",
        ogImages: [{ id: 6470 }],
      },
    },
  },
  {
    data: {
      id: 1872,
      seo: {
        metaTitle:
          "Harley Davidson Heritage Classic Edition 2023 Price - Heritage Classic Edition 2023 \nMileage, Review & Images",
        metaDescription:
          "Harley Davidson Heritage Classic Edition 2023 price starts from undefined in India. \nCheck out Harley Davidson Heritage Classic Edition 2023 on-road price, Heritage Classic Edition 2023 Mileage, specification, images & colours at BikeJunction.",
        metaSocial: [
          {
            socialNetwork: "Twitter",
            title:
              "Harley Davidson Heritage Classic Edition 2023 Price - Heritage Classic Edition 2023 \nMileage, Review & Images",
            description:
              "Harley Davidson Heritage Classic Edition 2023 price starts from undefined in India. \nCheck out Harley Davidson Heritage Classic Edition 2023 on-road price, Heritage Classic Edition 2023 Mileage, specification, images & colours at BikeJunction.",
            image: { id: 6470 },
          },
        ],
        ogTitle:
          "Harley Davidson Heritage Classic Edition 2023 Price - Heritage Classic Edition 2023 \nMileage, Review & Images",
        ogDescription:
          "Harley Davidson Heritage Classic Edition 2023 price starts from undefined in India. \nCheck out Harley Davidson Heritage Classic Edition 2023 on-road price, Heritage Classic Edition 2023 Mileage, specification, images & colours at BikeJunction.",
        ogType: "website",
        canonicalURL:
          "https://bikes.tractorjunction.com/en/harley-davidson-bikes/heritage-classic/heritage-classic-edition-2023",
        ogUrl:
          "https://bikes.tractorjunction.com/en/harley-davidson-bikes/heritage-classic/heritage-classic-edition-2023",
        ogImages: [{ id: 6470 }],
      },
    },
  },
];

function fetchData(url, method, requestData) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (requestData) {
    options.body = requestData;
  }

  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const promisses = json
  .map((item) => {
    const body = {
      data: {
        seo: { ...item.data.seo },
      },
    };

    console.log(body);

    return fetchData(
      `https://bikes-cms.tractorjunction.com/api/variants/${item.data.id}`,
      "PUT",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

// fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
