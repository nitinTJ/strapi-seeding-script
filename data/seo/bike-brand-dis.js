import brand from "../data/product_listing.json" assert { type: "json" };
import b from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/matter

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

const pages = [
  {
    id: 1948,
    attributes: {
      heading: "honda Bikes 100CC In India",
      description:
        "<p>All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.</p>",
      aboutContent: "",
      createdAt: "2023-08-15T17:29:20.877Z",
      updatedAt: "2023-08-25T07:54:30.333Z",
      publishedAt: "2023-08-15T17:29:20.856Z",
      slug: "honda-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 1952,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.304Z",
      updatedAt: "2023-08-25T07:54:30.697Z",
      publishedAt: "2023-08-15T17:29:21.285Z",
      slug: "yamaha-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 1954,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.484Z",
      updatedAt: "2023-08-25T07:54:30.892Z",
      publishedAt: "2023-08-15T17:29:21.470Z",
      slug: "suzuki-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 1957,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.751Z",
      updatedAt: "2023-08-25T07:54:31.170Z",
      publishedAt: "2023-08-15T17:29:21.733Z",
      slug: "bmw-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 1986,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.852Z",
      updatedAt: "2023-08-25T07:54:35.739Z",
      publishedAt: "2023-08-15T17:29:32.837Z",
      slug: "bmw-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 1955,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.577Z",
      updatedAt: "2023-08-25T07:54:30.987Z",
      publishedAt: "2023-08-15T17:29:21.560Z",
      slug: "aprilia-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 1956,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.665Z",
      updatedAt: "2023-08-25T07:54:31.081Z",
      publishedAt: "2023-08-15T17:29:21.647Z",
      slug: "benelli-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 1968,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.968Z",
      updatedAt: "2023-08-25T07:54:32.216Z",
      publishedAt: "2023-08-15T17:29:22.952Z",
      slug: "norton-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 1958,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.851Z",
      updatedAt: "2023-08-25T07:54:31.271Z",
      publishedAt: "2023-08-15T17:29:21.835Z",
      slug: "cfmoto-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 1982,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.484Z",
      updatedAt: "2023-08-25T07:54:35.324Z",
      publishedAt: "2023-08-15T17:29:32.466Z",
      slug: "keeway-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 1962,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.373Z",
      updatedAt: "2023-08-25T07:54:31.649Z",
      publishedAt: "2023-08-15T17:29:22.351Z",
      slug: "indian-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 1984,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.669Z",
      updatedAt: "2023-08-25T07:54:35.538Z",
      publishedAt: "2023-08-15T17:29:32.653Z",
      slug: "aprilia-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 1964,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.563Z",
      updatedAt: "2023-08-25T07:54:31.829Z",
      publishedAt: "2023-08-15T17:29:22.547Z",
      slug: "kawasaki-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 1966,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.778Z",
      updatedAt: "2023-08-25T07:54:32.017Z",
      publishedAt: "2023-08-15T17:29:22.751Z",
      slug: "moto-guzzi-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 1970,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.141Z",
      updatedAt: "2023-08-25T07:54:32.398Z",
      publishedAt: "2023-08-15T17:29:23.125Z",
      slug: "yezdi-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 1978,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.101Z",
      updatedAt: "2023-08-25T07:54:34.899Z",
      publishedAt: "2023-08-15T17:29:32.086Z",
      slug: "hero-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 1976,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:31.879Z",
      updatedAt: "2023-08-25T07:54:34.673Z",
      publishedAt: "2023-08-15T17:29:31.865Z",
      slug: "tvs-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 1972,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.307Z",
      updatedAt: "2023-08-25T07:54:32.697Z",
      publishedAt: "2023-08-15T17:29:23.295Z",
      slug: "qj-motor-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 1965,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.650Z",
      updatedAt: "2023-08-25T07:54:31.926Z",
      publishedAt: "2023-08-15T17:29:22.631Z",
      slug: "ktm-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 1967,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.870Z",
      updatedAt: "2023-08-25T07:54:32.116Z",
      publishedAt: "2023-08-15T17:29:22.851Z",
      slug: "moto-morini-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 1971,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.225Z",
      updatedAt: "2023-08-25T07:54:32.493Z",
      publishedAt: "2023-08-15T17:29:23.208Z",
      slug: "zontes-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 1991,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.291Z",
      updatedAt: "2023-08-25T07:54:36.289Z",
      publishedAt: "2023-08-15T17:29:33.274Z",
      slug: "indian-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 1987,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.936Z",
      updatedAt: "2023-08-25T07:54:35.835Z",
      publishedAt: "2023-08-15T17:29:32.921Z",
      slug: "cfmoto-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 1983,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.580Z",
      updatedAt: "2023-08-25T07:54:35.422Z",
      publishedAt: "2023-08-15T17:29:32.562Z",
      slug: "suzuki-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 1993,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.464Z",
      updatedAt: "2023-08-25T07:54:36.482Z",
      publishedAt: "2023-08-15T17:29:33.447Z",
      slug: "kawasaki-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 1995,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.660Z",
      updatedAt: "2023-08-25T07:54:37.013Z",
      publishedAt: "2023-08-15T17:29:33.650Z",
      slug: "moto-guzzi-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 1973,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.392Z",
      updatedAt: "2023-08-25T07:54:32.804Z",
      publishedAt: "2023-08-15T17:29:23.373Z",
      slug: "benda-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 1975,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.563Z",
      updatedAt: "2023-08-25T07:54:33.827Z",
      publishedAt: "2023-08-15T17:29:23.548Z",
      slug: "bsa-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 1981,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.378Z",
      updatedAt: "2023-08-25T07:54:35.228Z",
      publishedAt: "2023-08-15T17:29:32.363Z",
      slug: "yamaha-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 1977,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.007Z",
      updatedAt: "2023-08-25T07:54:34.804Z",
      publishedAt: "2023-08-15T17:29:31.987Z",
      slug: "honda-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 1989,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.120Z",
      updatedAt: "2023-08-25T07:54:36.098Z",
      publishedAt: "2023-08-15T17:29:33.105Z",
      slug: "harley-davidson-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 1979,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.193Z",
      updatedAt: "2023-08-25T07:54:35.021Z",
      publishedAt: "2023-08-15T17:29:32.177Z",
      slug: "bajaj-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 1985,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.768Z",
      updatedAt: "2023-08-25T07:54:35.636Z",
      publishedAt: "2023-08-15T17:29:32.750Z",
      slug: "benelli-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 1992,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.374Z",
      updatedAt: "2023-08-25T07:54:36.379Z",
      publishedAt: "2023-08-15T17:29:33.360Z",
      slug: "jawa-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 1994,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.552Z",
      updatedAt: "2023-08-25T07:54:36.747Z",
      publishedAt: "2023-08-15T17:29:33.533Z",
      slug: "ktm-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 1996,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.740Z",
      updatedAt: "2023-08-25T07:54:37.102Z",
      publishedAt: "2023-08-15T17:29:33.727Z",
      slug: "moto-morini-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2002,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:34.220Z",
      updatedAt: "2023-08-25T07:54:37.660Z",
      publishedAt: "2023-08-15T17:29:34.205Z",
      slug: "benda-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2012,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.476Z",
      updatedAt: "2023-08-25T07:54:38.583Z",
      publishedAt: "2023-08-15T17:29:49.463Z",
      slug: "suzuki-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2020,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.210Z",
      updatedAt: "2023-08-25T07:54:39.318Z",
      publishedAt: "2023-08-15T17:29:50.192Z",
      slug: "indian-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2004,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:34.381Z",
      updatedAt: "2023-08-25T07:54:37.840Z",
      publishedAt: "2023-08-15T17:29:34.365Z",
      slug: "bsa-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2006,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:48.865Z",
      updatedAt: "2023-08-25T07:54:38.022Z",
      publishedAt: "2023-08-15T17:29:48.847Z",
      slug: "honda-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2014,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.652Z",
      updatedAt: "2023-08-25T07:54:38.772Z",
      publishedAt: "2023-08-15T17:29:49.632Z",
      slug: "benelli-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2008,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.111Z",
      updatedAt: "2023-08-25T07:54:38.207Z",
      publishedAt: "2023-08-15T17:29:49.093Z",
      slug: "bajaj-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2010,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.304Z",
      updatedAt: "2023-08-25T07:54:38.398Z",
      publishedAt: "2023-08-15T17:29:49.289Z",
      slug: "yamaha-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2024,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.576Z",
      updatedAt: "2023-08-25T07:54:39.693Z",
      publishedAt: "2023-08-15T17:29:50.562Z",
      slug: "moto-guzzi-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2022,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.402Z",
      updatedAt: "2023-08-25T07:54:39.504Z",
      publishedAt: "2023-08-15T17:29:50.385Z",
      slug: "kawasaki-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 1999,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.977Z",
      updatedAt: "2023-08-25T07:54:37.378Z",
      publishedAt: "2023-08-15T17:29:33.964Z",
      slug: "yezdi-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2001,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:34.137Z",
      updatedAt: "2023-08-25T07:54:37.567Z",
      publishedAt: "2023-08-15T17:29:34.122Z",
      slug: "qj-motor-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2019,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.090Z",
      updatedAt: "2023-08-25T07:54:39.220Z",
      publishedAt: "2023-08-15T17:29:50.076Z",
      slug: "husqvarna-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2017,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.904Z",
      updatedAt: "2023-08-25T07:54:39.043Z",
      publishedAt: "2023-08-15T17:29:49.893Z",
      slug: "ducati-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2015,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.733Z",
      updatedAt: "2023-08-25T07:54:38.862Z",
      publishedAt: "2023-08-15T17:29:49.717Z",
      slug: "bmw-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2013,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.565Z",
      updatedAt: "2023-08-25T07:54:38.673Z",
      publishedAt: "2023-08-15T17:29:49.546Z",
      slug: "aprilia-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2003,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:34.301Z",
      updatedAt: "2023-08-25T07:54:37.749Z",
      publishedAt: "2023-08-15T17:29:34.285Z",
      slug: "brabus-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2009,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.200Z",
      updatedAt: "2023-08-25T07:54:38.297Z",
      publishedAt: "2023-08-15T17:29:49.182Z",
      slug: "royal-enfield-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2011,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.386Z",
      updatedAt: "2023-08-25T07:54:38.492Z",
      publishedAt: "2023-08-15T17:29:49.373Z",
      slug: "keeway-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2007,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:48.964Z",
      updatedAt: "2023-08-25T07:54:38.113Z",
      publishedAt: "2023-08-15T17:29:48.946Z",
      slug: "hero-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2031,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:51.244Z",
      updatedAt: "2023-08-25T07:54:40.340Z",
      publishedAt: "2023-08-15T17:29:51.224Z",
      slug: "benda-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2023,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.492Z",
      updatedAt: "2023-08-25T07:54:39.596Z",
      publishedAt: "2023-08-15T17:29:50.474Z",
      slug: "ktm-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2005,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:48.721Z",
      updatedAt: "2023-08-25T07:54:37.929Z",
      publishedAt: "2023-08-15T17:29:48.699Z",
      slug: "tvs-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2027,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.880Z",
      updatedAt: "2023-08-25T07:54:39.973Z",
      publishedAt: "2023-08-15T17:29:50.866Z",
      slug: "triumph-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2025,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.663Z",
      updatedAt: "2023-08-25T07:54:39.790Z",
      publishedAt: "2023-08-15T17:29:50.644Z",
      slug: "moto-morini-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2028,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.960Z",
      updatedAt: "2023-08-25T07:54:40.061Z",
      publishedAt: "2023-08-15T17:29:50.947Z",
      slug: "yezdi-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2030,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:51.153Z",
      updatedAt: "2023-08-25T07:54:40.243Z",
      publishedAt: "2023-08-15T17:29:51.135Z",
      slug: "qj-motor-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2042,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.052Z",
      updatedAt: "2023-08-25T07:54:41.384Z",
      publishedAt: "2023-08-15T17:29:59.037Z",
      slug: "aprilia-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2059,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.564Z",
      updatedAt: "2023-08-25T07:54:43.535Z",
      publishedAt: "2023-08-15T17:30:00.548Z",
      slug: "qj-motor-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2045,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.347Z",
      updatedAt: "2023-08-25T07:54:41.675Z",
      publishedAt: "2023-08-15T17:29:59.330Z",
      slug: "cfmoto-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2053,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.053Z",
      updatedAt: "2023-08-25T07:54:42.449Z",
      publishedAt: "2023-08-15T17:30:00.039Z",
      slug: "moto-guzzi-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2040,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.877Z",
      updatedAt: "2023-08-25T07:54:41.197Z",
      publishedAt: "2023-08-15T17:29:58.861Z",
      slug: "keeway-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2034,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.324Z",
      updatedAt: "2023-08-25T07:54:40.643Z",
      publishedAt: "2023-08-15T17:29:58.311Z",
      slug: "tvs-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2036,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.524Z",
      updatedAt: "2023-08-25T07:54:40.823Z",
      publishedAt: "2023-08-15T17:29:58.512Z",
      slug: "hero-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2049,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.706Z",
      updatedAt: "2023-08-25T07:54:42.069Z",
      publishedAt: "2023-08-15T17:29:59.690Z",
      slug: "indian-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2061,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.752Z",
      updatedAt: "2023-08-25T07:54:43.716Z",
      publishedAt: "2023-08-15T17:30:00.738Z",
      slug: "brabus-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2055,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.211Z",
      updatedAt: "2023-08-25T07:54:42.631Z",
      publishedAt: "2023-08-15T17:30:00.192Z",
      slug: "norton-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2057,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.368Z",
      updatedAt: "2023-08-25T07:54:43.307Z",
      publishedAt: "2023-08-15T17:30:00.355Z",
      slug: "yezdi-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2033,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:51.598Z",
      updatedAt: "2023-08-25T07:54:40.549Z",
      publishedAt: "2023-08-15T17:29:51.527Z",
      slug: "bsa-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2035,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.444Z",
      updatedAt: "2023-08-25T07:54:40.730Z",
      publishedAt: "2023-08-15T17:29:58.425Z",
      slug: "honda-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2041,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.964Z",
      updatedAt: "2023-08-25T07:54:41.290Z",
      publishedAt: "2023-08-15T17:29:58.950Z",
      slug: "suzuki-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2066,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.310Z",
      updatedAt: "2023-08-25T07:54:44.163Z",
      publishedAt: "2023-08-15T17:30:06.295Z",
      slug: "bajaj-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2060,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.658Z",
      updatedAt: "2023-08-25T07:54:43.626Z",
      publishedAt: "2023-08-15T17:30:00.642Z",
      slug: "benda-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2039,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.789Z",
      updatedAt: "2023-08-25T07:54:41.107Z",
      publishedAt: "2023-08-15T17:29:58.773Z",
      slug: "yamaha-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2050,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.797Z",
      updatedAt: "2023-08-25T07:54:42.161Z",
      publishedAt: "2023-08-15T17:29:59.784Z",
      slug: "jawa-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2052,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.973Z",
      updatedAt: "2023-08-25T07:54:42.354Z",
      publishedAt: "2023-08-15T17:29:59.953Z",
      slug: "ktm-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2043,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.156Z",
      updatedAt: "2023-08-25T07:54:41.473Z",
      publishedAt: "2023-08-15T17:29:59.142Z",
      slug: "benelli-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2062,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.835Z",
      updatedAt: "2023-08-25T07:54:43.806Z",
      publishedAt: "2023-08-15T17:30:00.819Z",
      slug: "bsa-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2048,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.606Z",
      updatedAt: "2023-08-25T07:54:41.966Z",
      publishedAt: "2023-08-15T17:29:59.591Z",
      slug: "husqvarna-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2058,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.461Z",
      updatedAt: "2023-08-25T07:54:43.419Z",
      publishedAt: "2023-08-15T17:30:00.445Z",
      slug: "zontes-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2054,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.126Z",
      updatedAt: "2023-08-25T07:54:42.542Z",
      publishedAt: "2023-08-15T17:30:00.113Z",
      slug: "moto-morini-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2044,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.247Z",
      updatedAt: "2023-08-25T07:54:41.560Z",
      publishedAt: "2023-08-15T17:29:59.230Z",
      slug: "bmw-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2056,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:00.288Z",
      updatedAt: "2023-08-25T07:54:43.082Z",
      publishedAt: "2023-08-15T17:30:00.273Z",
      slug: "triumph-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2065,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.221Z",
      updatedAt: "2023-08-25T07:54:44.072Z",
      publishedAt: "2023-08-15T17:30:06.204Z",
      slug: "hero-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2069,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.581Z",
      updatedAt: "2023-08-25T07:54:44.854Z",
      publishedAt: "2023-08-15T17:30:06.569Z",
      slug: "keeway-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2077,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.262Z",
      updatedAt: "2023-08-25T07:54:45.835Z",
      publishedAt: "2023-08-15T17:30:07.249Z",
      slug: "husqvarna-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2079,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.433Z",
      updatedAt: "2023-08-25T07:54:46.034Z",
      publishedAt: "2023-08-15T17:30:07.421Z",
      slug: "jawa-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2071,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.760Z",
      updatedAt: "2023-08-25T07:54:45.116Z",
      publishedAt: "2023-08-15T17:30:06.741Z",
      slug: "aprilia-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2085,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.950Z",
      updatedAt: "2023-08-25T07:54:46.593Z",
      publishedAt: "2023-08-15T17:30:07.934Z",
      slug: "triumph-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2073,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.932Z",
      updatedAt: "2023-08-25T07:54:45.449Z",
      publishedAt: "2023-08-15T17:30:06.918Z",
      slug: "bmw-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2087,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:08.120Z",
      updatedAt: "2023-08-25T07:54:46.912Z",
      publishedAt: "2023-08-15T17:30:08.106Z",
      slug: "zontes-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2092,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.236Z",
      updatedAt: "2023-08-25T07:54:47.385Z",
      publishedAt: "2023-08-15T17:30:20.224Z",
      slug: "tvs-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2090,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:08.372Z",
      updatedAt: "2023-08-25T07:54:47.204Z",
      publishedAt: "2023-08-15T17:30:08.360Z",
      slug: "brabus-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2098,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.900Z",
      updatedAt: "2023-08-25T07:54:47.932Z",
      publishedAt: "2023-08-15T17:30:20.883Z",
      slug: "keeway-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2075,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.096Z",
      updatedAt: "2023-08-25T07:54:45.633Z",
      publishedAt: "2023-08-15T17:30:07.082Z",
      slug: "ducati-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2083,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.776Z",
      updatedAt: "2023-08-25T07:54:46.414Z",
      publishedAt: "2023-08-15T17:30:07.761Z",
      slug: "moto-morini-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2081,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.609Z",
      updatedAt: "2023-08-25T07:54:46.223Z",
      publishedAt: "2023-08-15T17:30:07.591Z",
      slug: "ktm-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2094,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.469Z",
      updatedAt: "2023-08-25T07:54:47.565Z",
      publishedAt: "2023-08-15T17:30:20.432Z",
      slug: "hero-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2074,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.009Z",
      updatedAt: "2023-08-25T07:54:45.543Z",
      publishedAt: "2023-08-15T17:30:06.992Z",
      slug: "cfmoto-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2078,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.349Z",
      updatedAt: "2023-08-25T07:54:45.922Z",
      publishedAt: "2023-08-15T17:30:07.329Z",
      slug: "indian-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2082,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.693Z",
      updatedAt: "2023-08-25T07:54:46.322Z",
      publishedAt: "2023-08-15T17:30:07.681Z",
      slug: "moto-guzzi-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2084,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.861Z",
      updatedAt: "2023-08-25T07:54:46.501Z",
      publishedAt: "2023-08-15T17:30:07.846Z",
      slug: "norton-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2088,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:08.208Z",
      updatedAt: "2023-08-25T07:54:47.012Z",
      publishedAt: "2023-08-15T17:30:08.194Z",
      slug: "qj-motor-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2091,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:08.458Z",
      updatedAt: "2023-08-25T07:54:47.294Z",
      publishedAt: "2023-08-15T17:30:08.445Z",
      slug: "bsa-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2080,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.517Z",
      updatedAt: "2023-08-25T07:54:46.128Z",
      publishedAt: "2023-08-15T17:30:07.502Z",
      slug: "kawasaki-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 2086,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:08.035Z",
      updatedAt: "2023-08-25T07:54:46.771Z",
      publishedAt: "2023-08-15T17:30:08.020Z",
      slug: "yezdi-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2089,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:08.294Z",
      updatedAt: "2023-08-25T07:54:47.101Z",
      publishedAt: "2023-08-15T17:30:08.278Z",
      slug: "benda-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2093,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.342Z",
      updatedAt: "2023-08-25T07:54:47.476Z",
      publishedAt: "2023-08-15T17:30:20.332Z",
      slug: "honda-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2095,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.624Z",
      updatedAt: "2023-08-25T07:54:47.654Z",
      publishedAt: "2023-08-15T17:30:20.603Z",
      slug: "bajaj-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2101,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.150Z",
      updatedAt: "2023-08-25T07:54:48.197Z",
      publishedAt: "2023-08-15T17:30:21.134Z",
      slug: "benelli-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2097,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.811Z",
      updatedAt: "2023-08-25T07:54:47.844Z",
      publishedAt: "2023-08-15T17:30:20.793Z",
      slug: "yamaha-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2102,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.221Z",
      updatedAt: "2023-08-25T07:54:48.284Z",
      publishedAt: "2023-08-15T17:30:21.209Z",
      slug: "bmw-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2104,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.371Z",
      updatedAt: "2023-08-25T07:54:48.471Z",
      publishedAt: "2023-08-15T17:30:21.359Z",
      slug: "ducati-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2131,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.159Z",
      updatedAt: "2023-08-25T07:54:51.040Z",
      publishedAt: "2023-08-15T17:30:29.147Z",
      slug: "bmw-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2107,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.615Z",
      updatedAt: "2023-08-25T07:54:48.753Z",
      publishedAt: "2023-08-15T17:30:21.604Z",
      slug: "indian-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2115,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.256Z",
      updatedAt: "2023-08-25T07:54:49.523Z",
      publishedAt: "2023-08-15T17:30:22.241Z",
      slug: "yezdi-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2127,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.819Z",
      updatedAt: "2023-08-25T07:54:50.658Z",
      publishedAt: "2023-08-15T17:30:28.807Z",
      slug: "keeway-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2117,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.417Z",
      updatedAt: "2023-08-25T07:54:49.722Z",
      publishedAt: "2023-08-15T17:30:22.403Z",
      slug: "qj-motor-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2129,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.997Z",
      updatedAt: "2023-08-25T07:54:50.839Z",
      publishedAt: "2023-08-15T17:30:28.981Z",
      slug: "aprilia-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2111,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.932Z",
      updatedAt: "2023-08-25T07:54:49.150Z",
      publishedAt: "2023-08-15T17:30:21.918Z",
      slug: "moto-guzzi-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2119,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.573Z",
      updatedAt: "2023-08-25T07:54:49.919Z",
      publishedAt: "2023-08-15T17:30:22.559Z",
      slug: "brabus-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2113,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.084Z",
      updatedAt: "2023-08-25T07:54:49.335Z",
      publishedAt: "2023-08-15T17:30:22.073Z",
      slug: "norton-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2121,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.133Z",
      updatedAt: "2023-08-25T07:54:50.115Z",
      publishedAt: "2023-08-15T17:30:28.110Z",
      slug: "tvs-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2123,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.337Z",
      updatedAt: "2023-08-25T07:54:50.300Z",
      publishedAt: "2023-08-15T17:30:28.324Z",
      slug: "hero-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2133,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.325Z",
      updatedAt: "2023-08-25T07:54:51.223Z",
      publishedAt: "2023-08-15T17:30:29.310Z",
      slug: "ducati-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2106,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.538Z",
      updatedAt: "2023-08-25T07:54:48.665Z",
      publishedAt: "2023-08-15T17:30:21.525Z",
      slug: "husqvarna-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2108,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.696Z",
      updatedAt: "2023-08-25T07:54:48.844Z",
      publishedAt: "2023-08-15T17:30:21.680Z",
      slug: "jawa-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2134,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.400Z",
      updatedAt: "2023-08-25T07:54:51.311Z",
      publishedAt: "2023-08-15T17:30:29.386Z",
      slug: "harley-davidson-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2110,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.851Z",
      updatedAt: "2023-08-25T07:54:49.042Z",
      publishedAt: "2023-08-15T17:30:21.839Z",
      slug: "ktm-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2116,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.338Z",
      updatedAt: "2023-08-25T07:54:49.615Z",
      publishedAt: "2023-08-15T17:30:22.327Z",
      slug: "zontes-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2130,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.080Z",
      updatedAt: "2023-08-25T07:54:50.944Z",
      publishedAt: "2023-08-15T17:30:29.065Z",
      slug: "benelli-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2128,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.911Z",
      updatedAt: "2023-08-25T07:54:50.749Z",
      publishedAt: "2023-08-15T17:30:28.898Z",
      slug: "suzuki-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2120,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.651Z",
      updatedAt: "2023-08-25T07:54:50.020Z",
      publishedAt: "2023-08-15T17:30:22.639Z",
      slug: "bsa-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2132,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.248Z",
      updatedAt: "2023-08-25T07:54:51.134Z",
      publishedAt: "2023-08-15T17:30:29.231Z",
      slug: "cfmoto-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2118,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.496Z",
      updatedAt: "2023-08-25T07:54:49.813Z",
      publishedAt: "2023-08-15T17:30:22.484Z",
      slug: "benda-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2112,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.009Z",
      updatedAt: "2023-08-25T07:54:49.243Z",
      publishedAt: "2023-08-15T17:30:21.995Z",
      slug: "moto-morini-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2114,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:22.169Z",
      updatedAt: "2023-08-25T07:54:49.426Z",
      publishedAt: "2023-08-15T17:30:22.151Z",
      slug: "triumph-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2124,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.430Z",
      updatedAt: "2023-08-25T07:54:50.388Z",
      publishedAt: "2023-08-15T17:30:28.409Z",
      slug: "bajaj-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2138,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.724Z",
      updatedAt: "2023-08-25T07:54:51.667Z",
      publishedAt: "2023-08-15T17:30:29.708Z",
      slug: "kawasaki-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 2142,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.072Z",
      updatedAt: "2023-08-25T07:54:52.026Z",
      publishedAt: "2023-08-15T17:30:30.057Z",
      slug: "norton-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2158,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.167Z",
      updatedAt: "2023-08-25T07:54:53.501Z",
      publishedAt: "2023-08-15T17:30:39.155Z",
      slug: "aprilia-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2146,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.382Z",
      updatedAt: "2023-08-25T07:54:52.390Z",
      publishedAt: "2023-08-15T17:30:30.365Z",
      slug: "qj-motor-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2150,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.447Z",
      updatedAt: "2023-08-25T07:54:52.755Z",
      publishedAt: "2023-08-15T17:30:38.433Z",
      slug: "tvs-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2144,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.225Z",
      updatedAt: "2023-08-25T07:54:52.210Z",
      publishedAt: "2023-08-15T17:30:30.213Z",
      slug: "yezdi-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2152,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.648Z",
      updatedAt: "2023-08-25T07:54:52.938Z",
      publishedAt: "2023-08-15T17:30:38.634Z",
      slug: "hero-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2155,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.904Z",
      updatedAt: "2023-08-25T07:54:53.228Z",
      publishedAt: "2023-08-15T17:30:38.890Z",
      slug: "yamaha-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2148,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.562Z",
      updatedAt: "2023-08-25T07:54:52.569Z",
      publishedAt: "2023-08-15T17:30:30.547Z",
      slug: "brabus-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2151,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.563Z",
      updatedAt: "2023-08-25T07:54:52.846Z",
      publishedAt: "2023-08-15T17:30:38.548Z",
      slug: "honda-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2156,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.988Z",
      updatedAt: "2023-08-25T07:54:53.324Z",
      publishedAt: "2023-08-15T17:30:38.970Z",
      slug: "keeway-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2153,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.736Z",
      updatedAt: "2023-08-25T07:54:53.048Z",
      publishedAt: "2023-08-15T17:30:38.722Z",
      slug: "bajaj-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2154,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:38.826Z",
      updatedAt: "2023-08-25T07:54:53.140Z",
      publishedAt: "2023-08-15T17:30:38.812Z",
      slug: "royal-enfield-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2161,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.556Z",
      updatedAt: "2023-08-25T07:54:53.770Z",
      publishedAt: "2023-08-15T17:30:39.543Z",
      slug: "cfmoto-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2160,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.469Z",
      updatedAt: "2023-08-25T07:54:53.680Z",
      publishedAt: "2023-08-15T17:30:39.450Z",
      slug: "bmw-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2141,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.993Z",
      updatedAt: "2023-08-25T07:54:51.935Z",
      publishedAt: "2023-08-15T17:30:29.980Z",
      slug: "moto-morini-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2143,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.151Z",
      updatedAt: "2023-08-25T07:54:52.115Z",
      publishedAt: "2023-08-15T17:30:30.134Z",
      slug: "triumph-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2223,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.120Z",
      updatedAt: "2023-08-25T07:54:59.498Z",
      publishedAt: "2023-08-15T17:31:00.103Z",
      slug: "indian-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2174,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.576Z",
      updatedAt: "2023-08-25T07:54:54.989Z",
      publishedAt: "2023-08-15T17:30:40.566Z",
      slug: "zontes-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2147,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.477Z",
      updatedAt: "2023-08-25T07:54:52.476Z",
      publishedAt: "2023-08-15T17:30:30.445Z",
      slug: "benda-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2225,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.296Z",
      updatedAt: "2023-08-25T07:54:59.685Z",
      publishedAt: "2023-08-15T17:31:00.282Z",
      slug: "kawasaki-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 2149,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.652Z",
      updatedAt: "2023-08-25T07:54:52.656Z",
      publishedAt: "2023-08-15T17:30:30.638Z",
      slug: "bsa-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2157,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.082Z",
      updatedAt: "2023-08-25T07:54:53.411Z",
      publishedAt: "2023-08-15T17:30:39.070Z",
      slug: "suzuki-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2159,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.359Z",
      updatedAt: "2023-08-25T07:54:53.589Z",
      publishedAt: "2023-08-15T17:30:39.299Z",
      slug: "benelli-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2166,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.960Z",
      updatedAt: "2023-08-25T07:54:54.230Z",
      publishedAt: "2023-08-15T17:30:39.944Z",
      slug: "jawa-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2181,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.672Z",
      updatedAt: "2023-08-25T07:54:55.658Z",
      publishedAt: "2023-08-15T17:30:46.659Z",
      slug: "hero-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2176,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.726Z",
      updatedAt: "2023-08-25T07:54:55.189Z",
      publishedAt: "2023-08-15T17:30:40.712Z",
      slug: "benda-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2168,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.116Z",
      updatedAt: "2023-08-25T07:54:54.410Z",
      publishedAt: "2023-08-15T17:30:40.103Z",
      slug: "ktm-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2163,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.712Z",
      updatedAt: "2023-08-25T07:54:53.950Z",
      publishedAt: "2023-08-15T17:30:39.700Z",
      slug: "harley-davidson-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2164,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.791Z",
      updatedAt: "2023-08-25T07:54:54.041Z",
      publishedAt: "2023-08-15T17:30:39.780Z",
      slug: "husqvarna-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2165,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.874Z",
      updatedAt: "2023-08-25T07:54:54.130Z",
      publishedAt: "2023-08-15T17:30:39.863Z",
      slug: "indian-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2171,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.356Z",
      updatedAt: "2023-08-25T07:54:54.710Z",
      publishedAt: "2023-08-15T17:30:40.343Z",
      slug: "norton-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2185,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.997Z",
      updatedAt: "2023-08-25T07:54:56.019Z",
      publishedAt: "2023-08-15T17:30:46.983Z",
      slug: "keeway-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2175,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.649Z",
      updatedAt: "2023-08-25T07:54:55.098Z",
      publishedAt: "2023-08-15T17:30:40.637Z",
      slug: "qj-motor-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2169,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.192Z",
      updatedAt: "2023-08-25T07:54:54.498Z",
      publishedAt: "2023-08-15T17:30:40.178Z",
      slug: "moto-guzzi-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2182,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.748Z",
      updatedAt: "2023-08-25T07:54:55.746Z",
      publishedAt: "2023-08-15T17:30:46.737Z",
      slug: "bajaj-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2173,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.501Z",
      updatedAt: "2023-08-25T07:54:54.899Z",
      publishedAt: "2023-08-15T17:30:40.490Z",
      slug: "yezdi-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2177,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.804Z",
      updatedAt: "2023-08-25T07:54:55.281Z",
      publishedAt: "2023-08-15T17:30:40.789Z",
      slug: "brabus-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2180,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.593Z",
      updatedAt: "2023-08-25T07:54:55.567Z",
      publishedAt: "2023-08-15T17:30:46.580Z",
      slug: "honda-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2183,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.829Z",
      updatedAt: "2023-08-25T07:54:55.837Z",
      publishedAt: "2023-08-15T17:30:46.815Z",
      slug: "royal-enfield-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2184,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.908Z",
      updatedAt: "2023-08-25T07:54:55.928Z",
      publishedAt: "2023-08-15T17:30:46.895Z",
      slug: "yamaha-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2187,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.169Z",
      updatedAt: "2023-08-25T07:54:56.209Z",
      publishedAt: "2023-08-15T17:30:47.158Z",
      slug: "aprilia-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2186,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.089Z",
      updatedAt: "2023-08-25T07:54:56.107Z",
      publishedAt: "2023-08-15T17:30:47.066Z",
      slug: "suzuki-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2189,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.358Z",
      updatedAt: "2023-08-25T07:54:56.393Z",
      publishedAt: "2023-08-15T17:30:47.318Z",
      slug: "bmw-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2190,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.492Z",
      updatedAt: "2023-08-25T07:54:56.484Z",
      publishedAt: "2023-08-15T17:30:47.476Z",
      slug: "cfmoto-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2191,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.597Z",
      updatedAt: "2023-08-25T07:54:56.571Z",
      publishedAt: "2023-08-15T17:30:47.584Z",
      slug: "ducati-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2199,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.263Z",
      updatedAt: "2023-08-25T07:54:57.306Z",
      publishedAt: "2023-08-15T17:30:48.251Z",
      slug: "moto-morini-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2196,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.011Z",
      updatedAt: "2023-08-25T07:54:57.041Z",
      publishedAt: "2023-08-15T17:30:47.996Z",
      slug: "kawasaki-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 2197,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.100Z",
      updatedAt: "2023-08-25T07:54:57.131Z",
      publishedAt: "2023-08-15T17:30:48.084Z",
      slug: "ktm-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2192,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.676Z",
      updatedAt: "2023-08-25T07:54:56.672Z",
      publishedAt: "2023-08-15T17:30:47.660Z",
      slug: "harley-davidson-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2203,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.579Z",
      updatedAt: "2023-08-25T07:54:57.676Z",
      publishedAt: "2023-08-15T17:30:48.562Z",
      slug: "zontes-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2194,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.844Z",
      updatedAt: "2023-08-25T07:54:56.857Z",
      publishedAt: "2023-08-15T17:30:47.829Z",
      slug: "indian-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2202,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.496Z",
      updatedAt: "2023-08-25T07:54:57.586Z",
      publishedAt: "2023-08-15T17:30:48.484Z",
      slug: "yezdi-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2204,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.661Z",
      updatedAt: "2023-08-25T07:54:57.764Z",
      publishedAt: "2023-08-15T17:30:48.646Z",
      slug: "qj-motor-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2201,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.420Z",
      updatedAt: "2023-08-25T07:54:57.495Z",
      publishedAt: "2023-08-15T17:30:48.407Z",
      slug: "triumph-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2195,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.924Z",
      updatedAt: "2023-08-25T07:54:56.948Z",
      publishedAt: "2023-08-15T17:30:47.911Z",
      slug: "jawa-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2200,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.341Z",
      updatedAt: "2023-08-25T07:54:57.399Z",
      publishedAt: "2023-08-15T17:30:48.330Z",
      slug: "norton-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2205,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.744Z",
      updatedAt: "2023-08-25T07:54:57.861Z",
      publishedAt: "2023-08-15T17:30:48.730Z",
      slug: "benda-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2207,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.905Z",
      updatedAt: "2023-08-25T07:54:58.040Z",
      publishedAt: "2023-08-15T17:30:48.893Z",
      slug: "bsa-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2208,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:58.736Z",
      updatedAt: "2023-08-25T07:54:58.131Z",
      publishedAt: "2023-08-15T17:30:58.724Z",
      slug: "tvs-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2209,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:58.850Z",
      updatedAt: "2023-08-25T07:54:58.223Z",
      publishedAt: "2023-08-15T17:30:58.836Z",
      slug: "honda-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2210,
    attributes: {
      heading: "hero Bikes 500CC In India",
      description:
        "<p>All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.</p>",
      aboutContent: "",
      createdAt: "2023-08-15T17:30:58.930Z",
      updatedAt: "2023-08-25T07:54:58.310Z",
      publishedAt: "2023-08-15T17:30:58.917Z",
      slug: "hero-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 2211,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.012Z",
      updatedAt: "2023-08-25T07:54:58.401Z",
      publishedAt: "2023-08-15T17:30:58.998Z",
      slug: "bajaj-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2226,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.380Z",
      updatedAt: "2023-08-25T07:54:59.772Z",
      publishedAt: "2023-08-15T17:31:00.366Z",
      slug: "ktm-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2213,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.167Z",
      updatedAt: "2023-08-25T07:54:58.587Z",
      publishedAt: "2023-08-15T17:30:59.155Z",
      slug: "yamaha-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2214,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.248Z",
      updatedAt: "2023-08-25T07:54:58.672Z",
      publishedAt: "2023-08-15T17:30:59.236Z",
      slug: "keeway-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 2219,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.652Z",
      updatedAt: "2023-08-25T07:54:59.131Z",
      publishedAt: "2023-08-15T17:30:59.641Z",
      slug: "cfmoto-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2215,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.332Z",
      updatedAt: "2023-08-25T07:54:58.762Z",
      publishedAt: "2023-08-15T17:30:59.320Z",
      slug: "suzuki-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2216,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.416Z",
      updatedAt: "2023-08-25T07:54:58.853Z",
      publishedAt: "2023-08-15T17:30:59.400Z",
      slug: "aprilia-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2220,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.779Z",
      updatedAt: "2023-08-25T07:54:59.231Z",
      publishedAt: "2023-08-15T17:30:59.751Z",
      slug: "ducati-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2222,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.029Z",
      updatedAt: "2023-08-25T07:54:59.410Z",
      publishedAt: "2023-08-15T17:31:00.011Z",
      slug: "husqvarna-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2217,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.496Z",
      updatedAt: "2023-08-25T07:54:58.950Z",
      publishedAt: "2023-08-15T17:30:59.485Z",
      slug: "benelli-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2218,
    attributes: {
      heading: "bmw Bikes CC In India",
      description:
        "All the bmw Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.577Z",
      updatedAt: "2023-08-25T07:54:59.042Z",
      publishedAt: "2023-08-15T17:30:59.565Z",
      slug: "bmw-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bmw-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-08-21T17:15:20.399Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "${totalCount} BMW Bike Showrooms are listed at BikeJunction. So locate BMW bike dealers near you in India. Get certified BMW showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BMW dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bmw",
          },
        },
      },
    },
  },
  {
    id: 2227,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.476Z",
      updatedAt: "2023-08-25T07:54:59.865Z",
      publishedAt: "2023-08-15T17:31:00.460Z",
      slug: "moto-guzzi-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2229,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.657Z",
      updatedAt: "2023-08-25T07:55:00.053Z",
      publishedAt: "2023-08-15T17:31:00.641Z",
      slug: "norton-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2231,
    attributes: {
      heading: "yezdi Bikes CC In India",
      description:
        "All the yezdi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.833Z",
      updatedAt: "2023-08-25T07:55:00.274Z",
      publishedAt: "2023-08-15T17:31:00.818Z",
      slug: "yezdi-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yezdi-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-08-21T17:15:25.535Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "${totalCount} Yezdi Bike Showrooms are listed at BikeJunction. So locate Yezdi bike dealers near you in India. Get certified Yezdi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yezdi dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yezdi",
          },
        },
      },
    },
  },
  {
    id: 2234,
    attributes: {
      heading: "benda Bikes CC In India",
      description:
        "All the benda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:01.115Z",
      updatedAt: "2023-08-25T07:55:00.543Z",
      publishedAt: "2023-08-15T17:31:01.100Z",
      slug: "benda-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benda-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-08-21T17:15:26.394Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "${totalCount} Benda Bike Showrooms are listed at BikeJunction. So locate Benda bike dealers near you in India. Get certified Benda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benda dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benda",
          },
        },
      },
    },
  },
  {
    id: 2228,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.565Z",
      updatedAt: "2023-08-25T07:54:59.961Z",
      publishedAt: "2023-08-15T17:31:00.554Z",
      slug: "moto-morini-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2230,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.739Z",
      updatedAt: "2023-08-25T07:55:00.184Z",
      publishedAt: "2023-08-15T17:31:00.727Z",
      slug: "triumph-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2232,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.913Z",
      updatedAt: "2023-08-25T07:55:00.364Z",
      publishedAt: "2023-08-15T17:31:00.899Z",
      slug: "zontes-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2235,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:01.213Z",
      updatedAt: "2023-08-25T07:55:00.647Z",
      publishedAt: "2023-08-15T17:31:01.199Z",
      slug: "brabus-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2233,
    attributes: {
      heading: "qj-motor Bikes CC In India",
      description:
        "All the qj-motor Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:01.006Z",
      updatedAt: "2023-08-25T07:55:00.455Z",
      publishedAt: "2023-08-15T17:31:00.986Z",
      slug: "qj-motor-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "qj-motor-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-08-21T17:15:25.966Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "${totalCount} QJ Motor Bike Showrooms are listed at BikeJunction. So locate QJ Motor bike dealers near you in India. Get certified QJ Motor showrooms in your city including pune, patna, indore and many more. You can find out a complete list of QJ Motor dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/qj-motor",
          },
        },
      },
    },
  },
  {
    id: 2236,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:01.290Z",
      updatedAt: "2023-08-25T07:55:00.735Z",
      publishedAt: "2023-08-15T17:31:01.279Z",
      slug: "bsa-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2063,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "<p>All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.</p>",
      aboutContent: "",
      createdAt: "2023-08-15T17:30:06.020Z",
      updatedAt: "2023-08-25T07:54:43.896Z",
      publishedAt: "2023-08-15T17:30:06.007Z",
      slug: "tvs-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 1947,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:20.736Z",
      updatedAt: "2023-08-25T07:54:30.237Z",
      publishedAt: "2023-08-15T17:29:20.716Z",
      slug: "tvs-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 1974,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.480Z",
      updatedAt: "2023-08-25T07:54:33.356Z",
      publishedAt: "2023-08-15T17:29:23.464Z",
      slug: "brabus-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2029,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:51.060Z",
      updatedAt: "2023-08-25T07:54:40.156Z",
      publishedAt: "2023-08-15T17:29:51.042Z",
      slug: "zontes-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2178,
    attributes: {
      heading: "bsa Bikes CC In India",
      description:
        "All the bsa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.883Z",
      updatedAt: "2023-08-25T07:54:55.377Z",
      publishedAt: "2023-08-15T17:30:40.871Z",
      slug: "bsa-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bsa-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-08-21T17:15:32.754Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "${totalCount} BSA Bike Showrooms are listed at BikeJunction. So locate BSA bike dealers near you in India. Get certified BSA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BSA dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bsa",
          },
        },
      },
    },
  },
  {
    id: 2038,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.699Z",
      updatedAt: "2023-08-25T07:54:41.012Z",
      publishedAt: "2023-08-15T17:29:58.686Z",
      slug: "royal-enfield-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2162,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:39.634Z",
      updatedAt: "2023-08-25T07:54:53.860Z",
      publishedAt: "2023-08-15T17:30:39.622Z",
      slug: "ducati-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2109,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.773Z",
      updatedAt: "2023-08-25T07:54:48.938Z",
      publishedAt: "2023-08-15T17:30:21.760Z",
      slug: "kawasaki-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 2224,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:31:00.208Z",
      updatedAt: "2023-08-25T07:54:59.590Z",
      publishedAt: "2023-08-15T17:31:00.195Z",
      slug: "jawa-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2198,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.182Z",
      updatedAt: "2023-08-25T07:54:57.218Z",
      publishedAt: "2023-08-15T17:30:48.170Z",
      slug: "moto-guzzi-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 2145,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:30.300Z",
      updatedAt: "2023-08-25T07:54:52.300Z",
      publishedAt: "2023-08-15T17:30:30.287Z",
      slug: "zontes-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 2000,
    attributes: {
      heading: "zontes Bikes CC In India",
      description:
        "All the zontes Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:34.059Z",
      updatedAt: "2023-08-25T07:54:37.472Z",
      publishedAt: "2023-08-15T17:29:34.042Z",
      slug: "zontes-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "zontes-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-08-21T17:15:25.834Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "${totalCount} Zontes Bike Showrooms are listed at BikeJunction. So locate Zontes bike dealers near you in India. Get certified Zontes showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zontes dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/zontes",
          },
        },
      },
    },
  },
  {
    id: 1969,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:23.054Z",
      updatedAt: "2023-08-25T07:54:32.306Z",
      publishedAt: "2023-08-15T17:29:23.040Z",
      slug: "triumph-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2212,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.088Z",
      updatedAt: "2023-08-25T07:54:58.495Z",
      publishedAt: "2023-08-15T17:30:59.077Z",
      slug: "royal-enfield-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 1951,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.201Z",
      updatedAt: "2023-08-25T07:54:30.606Z",
      publishedAt: "2023-08-15T17:29:21.183Z",
      slug: "royal-enfield-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2068,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.468Z",
      updatedAt: "2023-08-25T07:54:44.754Z",
      publishedAt: "2023-08-15T17:30:06.455Z",
      slug: "yamaha-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 1998,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.901Z",
      updatedAt: "2023-08-25T07:54:37.288Z",
      publishedAt: "2023-08-15T17:29:33.884Z",
      slug: "triumph-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2122,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.255Z",
      updatedAt: "2023-08-25T07:54:50.205Z",
      publishedAt: "2023-08-15T17:30:28.243Z",
      slug: "honda-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 2193,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.758Z",
      updatedAt: "2023-08-25T07:54:56.766Z",
      publishedAt: "2023-08-15T17:30:47.741Z",
      slug: "husqvarna-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2037,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:58.613Z",
      updatedAt: "2023-08-25T07:54:40.916Z",
      publishedAt: "2023-08-15T17:29:58.596Z",
      slug: "bajaj-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2167,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.038Z",
      updatedAt: "2023-08-25T07:54:54.318Z",
      publishedAt: "2023-08-15T17:30:40.027Z",
      slug: "kawasaki-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 1950,
    attributes: {
      heading: "bajaj Bikes CC In India",
      description:
        "All the bajaj Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.105Z",
      updatedAt: "2023-08-25T07:54:30.514Z",
      publishedAt: "2023-08-15T17:29:21.084Z",
      slug: "bajaj-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "bajaj-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-08-21T17:15:14.144Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "${totalCount} BAJAJ Bike Showrooms are listed at BikeJunction. So locate BAJAJ bike dealers near you in India. Get certified BAJAJ showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BAJAJ dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/bajaj",
          },
        },
      },
    },
  },
  {
    id: 2021,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.303Z",
      updatedAt: "2023-08-25T07:54:39.409Z",
      publishedAt: "2023-08-15T17:29:50.289Z",
      slug: "jawa-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 2137,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.644Z",
      updatedAt: "2023-08-25T07:54:51.575Z",
      publishedAt: "2023-08-15T17:30:29.630Z",
      slug: "jawa-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 1949,
    attributes: {
      heading: "hero Bikes CC In India",
      description:
        "All the hero Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:20.996Z",
      updatedAt: "2023-08-25T07:54:30.424Z",
      publishedAt: "2023-08-15T17:29:20.974Z",
      slug: "hero-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "hero-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-08-21T17:15:13.998Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/hero",
          },
        },
      },
    },
  },
  {
    id: 1959,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.953Z",
      updatedAt: "2023-08-25T07:54:31.362Z",
      publishedAt: "2023-08-15T17:29:21.937Z",
      slug: "ducati-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2140,
    attributes: {
      heading: "moto-guzzi Bikes CC In India",
      description:
        "All the moto-guzzi Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.912Z",
      updatedAt: "2023-08-25T07:54:51.843Z",
      publishedAt: "2023-08-15T17:30:29.896Z",
      slug: "moto-guzzi-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-guzzi-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-08-21T17:15:24.046Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "${totalCount} Moto Guzzi Bike Showrooms are listed at BikeJunction. So locate Moto Guzzi bike dealers near you in India. Get certified Moto Guzzi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Guzzi dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-guzzi",
          },
        },
      },
    },
  },
  {
    id: 1988,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.027Z",
      updatedAt: "2023-08-25T07:54:35.995Z",
      publishedAt: "2023-08-15T17:29:33.016Z",
      slug: "ducati-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2064,
    attributes: {
      heading: "honda Bikes CC In India",
      description:
        "All the honda Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.136Z",
      updatedAt: "2023-08-25T07:54:43.983Z",
      publishedAt: "2023-08-15T17:30:06.121Z",
      slug: "honda-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "honda-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-08-21T17:15:13.855Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "${totalCount} Honda Bike Showrooms are listed at BikeJunction. So locate Honda bike dealers near you in India. Get certified Honda showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Honda dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
            preview: "bike-dealer-showrooms/honda",
          },
        },
      },
    },
  },
  {
    id: 1960,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.049Z",
      updatedAt: "2023-08-25T07:54:31.451Z",
      publishedAt: "2023-08-15T17:29:22.035Z",
      slug: "harley-davidson-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2179,
    attributes: {
      heading: "tvs Bikes CC In India",
      description:
        "All the tvs Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:46.476Z",
      updatedAt: "2023-08-25T07:54:55.468Z",
      publishedAt: "2023-08-15T17:30:46.461Z",
      slug: "tvs-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "tvs-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-08-21T17:15:13.705Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "${totalCount} TVS Bike Showrooms are listed at BikeJunction. So locate TVS bike dealers near you in India. Get certified TVS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of TVS dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/tvs",
          },
        },
      },
    },
  },
  {
    id: 2096,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.724Z",
      updatedAt: "2023-08-25T07:54:47.750Z",
      publishedAt: "2023-08-15T17:30:20.708Z",
      slug: "royal-enfield-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 1961,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.172Z",
      updatedAt: "2023-08-25T07:54:31.545Z",
      publishedAt: "2023-08-15T17:29:22.146Z",
      slug: "husqvarna-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 2032,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:51.391Z",
      updatedAt: "2023-08-25T07:54:40.453Z",
      publishedAt: "2023-08-15T17:29:51.371Z",
      slug: "brabus-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2103,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.296Z",
      updatedAt: "2023-08-25T07:54:48.379Z",
      publishedAt: "2023-08-15T17:30:21.283Z",
      slug: "cfmoto-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2172,
    attributes: {
      heading: "triumph Bikes CC In India",
      description:
        "All the triumph Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.428Z",
      updatedAt: "2023-08-25T07:54:54.807Z",
      publishedAt: "2023-08-15T17:30:40.418Z",
      slug: "triumph-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "triumph-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-08-21T17:15:25.273Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "${totalCount} Triumph Bike Showrooms are listed at BikeJunction. So locate Triumph bike dealers near you in India. Get certified Triumph showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Triumph dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/triumph",
          },
        },
      },
    },
  },
  {
    id: 2206,
    attributes: {
      heading: "brabus Bikes CC In India",
      description:
        "All the brabus Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:48.824Z",
      updatedAt: "2023-08-25T07:54:57.951Z",
      publishedAt: "2023-08-15T17:30:48.809Z",
      slug: "brabus-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "brabus-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-08-21T17:15:31.479Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description:
              "${totalCount} Brabus Bike Showrooms are listed at BikeJunction. So locate Brabus bike dealers near you in India. Get certified Brabus showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Brabus dealers in India with complete details.",
            brand_id: 93,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/brabus",
          },
        },
      },
    },
  },
  {
    id: 2016,
    attributes: {
      heading: "cfmoto Bikes CC In India",
      description:
        "All the cfmoto Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.820Z",
      updatedAt: "2023-08-25T07:54:38.951Z",
      publishedAt: "2023-08-15T17:29:49.809Z",
      slug: "cfmoto-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "cfmoto-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-08-21T17:15:20.696Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "${totalCount} CFMoto Bike Showrooms are listed at BikeJunction. So locate CFMoto bike dealers near you in India. Get certified CFMoto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of CFMoto dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/cfmoto",
          },
        },
      },
    },
  },
  {
    id: 2125,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.525Z",
      updatedAt: "2023-08-25T07:54:50.476Z",
      publishedAt: "2023-08-15T17:30:28.506Z",
      slug: "royal-enfield-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2072,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.848Z",
      updatedAt: "2023-08-25T07:54:45.209Z",
      publishedAt: "2023-08-15T17:30:06.835Z",
      slug: "benelli-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
      },
    },
  },
  {
    id: 2221,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:59.932Z",
      updatedAt: "2023-08-25T07:54:59.321Z",
      publishedAt: "2023-08-15T17:30:59.911Z",
      slug: "harley-davidson-bikes/best-bikes-above-500cc",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-bikes-above-500cc",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2135,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.480Z",
      updatedAt: "2023-08-25T07:54:51.400Z",
      publishedAt: "2023-08-15T17:30:29.465Z",
      slug: "husqvarna-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 1953,
    attributes: {
      heading: "keeway Bikes CC In India",
      description:
        "All the keeway Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:21.394Z",
      updatedAt: "2023-08-25T07:54:30.798Z",
      publishedAt: "2023-08-15T17:29:21.376Z",
      slug: "keeway-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "keeway-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-08-21T17:15:17.951Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "${totalCount} Keeway Bike Showrooms are listed at BikeJunction. So locate Keeway bike dealers near you in India. Get certified Keeway showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Keeway dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/keeway",
          },
        },
      },
    },
  },
  {
    id: 1963,
    attributes: {
      heading: "jawa Bikes CC In India",
      description:
        "All the jawa Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:22.469Z",
      updatedAt: "2023-08-25T07:54:31.737Z",
      publishedAt: "2023-08-15T17:29:22.453Z",
      slug: "jawa-bikes/best-100cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "jawa-bikes/best-100cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-08-21T17:15:23.324Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "${totalCount} Jawa Bike Showrooms are listed at BikeJunction. So locate Jawa bike dealers near you in India. Get certified Jawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Jawa dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/jawa",
          },
        },
      },
    },
  },
  {
    id: 1980,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:32.289Z",
      updatedAt: "2023-08-25T07:54:35.120Z",
      publishedAt: "2023-08-15T17:29:32.272Z",
      slug: "royal-enfield-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 1990,
    attributes: {
      heading: "husqvarna Bikes CC In India",
      description:
        "All the husqvarna Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.205Z",
      updatedAt: "2023-08-25T07:54:36.190Z",
      publishedAt: "2023-08-15T17:29:33.189Z",
      slug: "husqvarna-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "husqvarna-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-08-21T17:15:23.029Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "${totalCount} Husqvarna Bike Showrooms are listed at BikeJunction. So locate Husqvarna bike dealers near you in India. Get certified Husqvarna showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Husqvarna dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/husqvarna",
          },
        },
      },
    },
  },
  {
    id: 1997,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:33.823Z",
      updatedAt: "2023-08-25T07:54:37.193Z",
      publishedAt: "2023-08-15T17:29:33.808Z",
      slug: "norton-bikes/best-110cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-110cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2018,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:49.993Z",
      updatedAt: "2023-08-25T07:54:39.130Z",
      publishedAt: "2023-08-15T17:29:49.978Z",
      slug: "harley-davidson-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2026,
    attributes: {
      heading: "norton Bikes CC In India",
      description:
        "All the norton Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:50.792Z",
      updatedAt: "2023-08-25T07:54:39.878Z",
      publishedAt: "2023-08-15T17:29:50.777Z",
      slug: "norton-bikes/best-125cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "norton-bikes/best-125cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-08-21T17:15:24.339Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description:
              "${totalCount} Norton Bike Showrooms are listed at BikeJunction. So locate Norton bike dealers near you in India. Get certified Norton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Norton dealers in India with complete details.",
            brand_id: 31,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/norton",
          },
        },
      },
    },
  },
  {
    id: 2046,
    attributes: {
      heading: "ducati Bikes CC In India",
      description:
        "All the ducati Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.437Z",
      updatedAt: "2023-08-25T07:54:41.769Z",
      publishedAt: "2023-08-15T17:29:59.422Z",
      slug: "ducati-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ducati-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-08-21T17:15:20.840Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "${totalCount} Ducati Bike Showrooms are listed at BikeJunction. So locate Ducati bike dealers near you in India. Get certified Ducati showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ducati dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/ducati",
          },
        },
      },
    },
  },
  {
    id: 2047,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.523Z",
      updatedAt: "2023-08-25T07:54:41.867Z",
      publishedAt: "2023-08-15T17:29:59.509Z",
      slug: "harley-davidson-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2051,
    attributes: {
      heading: "kawasaki Bikes CC In India",
      description:
        "All the kawasaki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:29:59.880Z",
      updatedAt: "2023-08-25T07:54:42.255Z",
      publishedAt: "2023-08-15T17:29:59.865Z",
      slug: "kawasaki-bikes/best-150cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "kawasaki-bikes/best-150cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-08-21T17:15:23.614Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description:
              "${totalCount} Kawasaki Bike Showrooms are listed at BikeJunction. So locate Kawasaki bike dealers near you in India. Get certified Kawasaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kawasaki dealers in India with complete details.",
            brand_id: 24,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/kawasaki",
          },
        },
      },
    },
  },
  {
    id: 2067,
    attributes: {
      heading: "royal-enfield Bikes CC In India",
      description:
        "All the royal-enfield Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.388Z",
      updatedAt: "2023-08-25T07:54:44.254Z",
      publishedAt: "2023-08-15T17:30:06.377Z",
      slug: "royal-enfield-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "royal-enfield-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-08-21T17:15:14.283Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "${totalCount} Royal Enfield Bike Showrooms are listed at BikeJunction. So locate Royal Enfield bike dealers near you in India. Get certified Royal Enfield showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Royal Enfield dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/royal-enfieldd",
          },
        },
      },
    },
  },
  {
    id: 2070,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:06.661Z",
      updatedAt: "2023-08-25T07:54:44.969Z",
      publishedAt: "2023-08-15T17:30:06.649Z",
      slug: "suzuki-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2076,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:07.175Z",
      updatedAt: "2023-08-25T07:54:45.741Z",
      publishedAt: "2023-08-15T17:30:07.162Z",
      slug: "harley-davidson-bikes/best-250cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-250cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2099,
    attributes: {
      heading: "suzuki Bikes CC In India",
      description:
        "All the suzuki Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:20.981Z",
      updatedAt: "2023-08-25T07:54:48.020Z",
      publishedAt: "2023-08-15T17:30:20.966Z",
      slug: "suzuki-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "suzuki-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-08-21T17:15:18.314Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "${totalCount} Suzuki Bike Showrooms are listed at BikeJunction. So locate Suzuki bike dealers near you in India. Get certified Suzuki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Suzuki dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/suzuki",
          },
        },
      },
    },
  },
  {
    id: 2100,
    attributes: {
      heading: "aprilia Bikes CC In India",
      description:
        "All the aprilia Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.069Z",
      updatedAt: "2023-08-25T07:54:48.111Z",
      publishedAt: "2023-08-15T17:30:21.050Z",
      slug: "aprilia-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "aprilia-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-08-21T17:15:18.767Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "${totalCount} Aprilia Bike Showrooms are listed at BikeJunction. So locate Aprilia bike dealers near you in India. Get certified Aprilia showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aprilia dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/aprilia",
          },
        },
      },
    },
  },
  {
    id: 2105,
    attributes: {
      heading: "harley-davidson Bikes CC In India",
      description:
        "All the harley-davidson Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:21.457Z",
      updatedAt: "2023-08-25T07:54:48.567Z",
      publishedAt: "2023-08-15T17:30:21.445Z",
      slug: "harley-davidson-bikes/best-300cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "harley-davidson-bikes/best-300cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-08-21T17:15:21.455Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "${totalCount} Harley Davidson Bike Showrooms are listed at BikeJunction. So locate Harley Davidson bike dealers near you in India. Get certified Harley Davidson showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Harley Davidson dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/harley-davidson",
          },
        },
      },
    },
  },
  {
    id: 2126,
    attributes: {
      heading: "yamaha Bikes CC In India",
      description:
        "All the yamaha Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:28.720Z",
      updatedAt: "2023-08-25T07:54:50.570Z",
      publishedAt: "2023-08-15T17:30:28.656Z",
      slug: "yamaha-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "yamaha-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-08-21T17:15:16.352Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "${totalCount} YAMAHA Bike Showrooms are listed at BikeJunction. So locate YAMAHA bike dealers near you in India. Get certified YAMAHA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of YAMAHA dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/yamaha",
          },
        },
      },
    },
  },
  {
    id: 2136,
    attributes: {
      heading: "indian Bikes CC In India",
      description:
        "All the indian Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.560Z",
      updatedAt: "2023-08-25T07:54:51.487Z",
      publishedAt: "2023-08-15T17:30:29.546Z",
      slug: "indian-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "indian-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-08-21T17:15:23.186Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "${totalCount} Indian Bike Showrooms are listed at BikeJunction. So locate Indian bike dealers near you in India. Get certified Indian showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Indian dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/indian",
          },
        },
      },
    },
  },
  {
    id: 2139,
    attributes: {
      heading: "ktm Bikes CC In India",
      description:
        "All the ktm Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:29.828Z",
      updatedAt: "2023-08-25T07:54:51.755Z",
      publishedAt: "2023-08-15T17:30:29.815Z",
      slug: "ktm-bikes/best-350cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "ktm-bikes/best-350cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-08-21T17:15:23.759Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "${totalCount} KTM Bike Showrooms are listed at BikeJunction. So locate KTM bike dealers near you in India. Get certified KTM showrooms in your city including pune, patna, indore and many more. You can find out a complete list of KTM dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
            preview: "bike-dealer-showrooms/ktm",
          },
        },
      },
    },
  },
  {
    id: 2170,
    attributes: {
      heading: "moto-morini Bikes CC In India",
      description:
        "All the moto-morini Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:40.275Z",
      updatedAt: "2023-08-25T07:54:54.589Z",
      publishedAt: "2023-08-15T17:30:40.265Z",
      slug: "moto-morini-bikes/best-400cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "moto-morini-bikes/best-400cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-08-21T17:15:24.193Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "${totalCount} Moto Morini Bike Showrooms are listed at BikeJunction. So locate Moto Morini bike dealers near you in India. Get certified Moto Morini showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Moto Morini dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/moto-morini",
          },
        },
      },
    },
  },
  {
    id: 2188,
    attributes: {
      heading: "benelli Bikes CC In India",
      description:
        "All the benelli Bikes are in one place at BikeJunction. Check a complete list of the Bikes models in India. This section is filled with all the new Bikes launched in India with its price and specifications. All the popular brands have launched some Bikes, which are listed below on the page.",
      aboutContent: null,
      createdAt: "2023-08-15T17:30:47.253Z",
      updatedAt: "2023-08-25T07:54:56.299Z",
      publishedAt: "2023-08-15T17:30:47.237Z",
      slug: "benelli-bikes/best-500cc-bikes",
      pageType: "bikeBrandDisplacementPage",
      about_heading: null,
      listing_heading: null,
      preview: "benelli-bikes/best-500cc-bikes",
      searchPriority: 0,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-08-21T17:15:18.928Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "${totalCount} Benelli Bike Showrooms are listed at BikeJunction. So locate Benelli bike dealers near you in India. Get certified Benelli showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benelli dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
            preview: "bike-dealer-showrooms/benelli",
          },
        },
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
        console.log(JSON.stringify(JSON.parse(requestData), null, 2), url);
        // throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export const capitalizedWords = (inputString) => {
  return inputString
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const promisses = pages
  .slice(0)
  .map((item) => {
    const brand = item.attributes.brand.data.attributes.name;
    const year = "${currentYear}";
    const count = "${totalCount}";
    const cheapestModelName = "${cheapestVariantName}";
    const costliestVariantName = "${costliestVariantName}";
    const mostPowerfulModelName = "${mostPowerfulModelName}";

    const displacement = item.attributes.slug
      .split("best-")
      .pop()
      .split("cc")[0];
    console.log(item.attributes.slug);

    const title = `${brand} ${displacement} CC Bikes in India ${year} - Price, Mileage`;
    const desc = `Looking for ${brand} ${displacement} CC Bikes in India ${year}? Check out all ${displacement} CC Bikes models by ${year} with their price, mileage, photos & specs here.`;
    const content = `${brand} has offered an wide range of ${displacement} CC Bikes & Bike models in Indian 2-Wheeler market. The ${brand} Bike models, we have listed under the ${displacement} CC segment makes easier for you to choose the best Bike model. We have made a complete list of ${displacement} CC Bikes by ${brand}. Here you will get all the latest and best ${brand} ${displacement} CC Bikes with all the specifications, price, mileage & features. There are ${count} ${displacement} CC Bike models by ${brand} available at BikeJunction. In addition, you can also choose the best ${displacement} CC Bike with different colours and variants. Find the most affordable ${displacement} CC Bikes by ${brand} in India.`;

    const body = {
      data: {
        description: content,
        heading: `${brand} ${displacement} CC Bikes`,
        faq: [
          {
            question: `Q. Which is the best ${brand} ${displacement} CC Bike in India?`,
            answer: `A. The best ${brand} ${displacement} CC Bike in India is ${brand} ${mostPowerfulModelName}.`,
          },
          {
            question: `Q. Which is the most expensive ${brand} ${displacement} CC Bike in India?`,
            answer: `A. The most expensive ${brand} ${displacement} CC Bike in India is ${brand} ${costliestVariantName}.`,
          },
          {
            question: `Q. Which is the lowest price ${brand} ${displacement} CC Bike?`,
            answer: `A. The lowest price ${brand} ${displacement} CC Bike in India is ${brand} ${cheapestModelName}`,
          },
        ],
        seo: {
          metaTitle: title,
          metaDescription: desc,
          metaSocial: [
            {
              socialNetwork: "Twitter",
              title: title,
              description: desc,
              image: {
                id: 6470,
              },
            },
          ],
          ogTitle: title,
          ogDescription: desc,
          ogType: "website",
          canonicalURL: `https://bikes.tractorjunction.com/en/${item.attributes.slug}`,
          ogUrl: `https://bikes.tractorjunction.com/en/${item.attributes.slug}`,
          ogImages: [
            {
              id: 6470,
            },
          ],
        },
      },
    };

    console.log(JSON.stringify(body, null, 2));

    return fetchData(
      `https://p5.tractorjunction.in/api/brand-pages/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
    // }
  })
  .filter(Boolean);

// fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

console.log(promisses.length);

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
      // fs.writeFile("users.json", JSON.stringify(data), (err) => {
      //   // Checking for errors
      //   if (err) throw err;
      //   console.log("Done writing"); // Success
      // });
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
