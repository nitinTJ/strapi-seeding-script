import faq from "../data/faq/bike_brand_faqs.json" assert { type: "json" };
import fs from "fs";

const bike_brands = [
  {
    id: 365,
    attributes: {
      heading: "BAJAJ Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.078Z",
      updatedAt: "2023-07-27T11:29:09.798Z",
      publishedAt: "2023-07-25T06:48:00.851Z",
      slug: "bajaj-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1333,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1334,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1335,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-07-31T11:48:22.921Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 384,
    attributes: {
      heading: "Triumph Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.491Z",
      updatedAt: "2023-07-27T11:29:12.501Z",
      publishedAt: "2023-07-25T06:48:03.458Z",
      slug: "triumph-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1390,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1391,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1392,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 64,
          attributes: {
            name: "Triumph",
            createdAt: "2023-07-19T10:17:53.087Z",
            updatedAt: "2023-07-31T11:48:23.188Z",
            publishedAt: "2023-07-19T10:17:53.081Z",
            slug: "triumph",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 43,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 369,
    attributes: {
      heading: "Suzuki Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.444Z",
      updatedAt: "2023-07-27T11:29:10.376Z",
      publishedAt: "2023-07-25T06:48:01.421Z",
      slug: "suzuki-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1345,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1346,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1347,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-07-31T11:48:22.899Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 362,
    attributes: {
      heading: "TVS Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:00.240Z",
      updatedAt: "2023-07-27T11:29:09.732Z",
      publishedAt: "2023-07-25T06:48:00.208Z",
      slug: "tvs-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1324,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1325,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1326,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-07-31T11:48:22.762Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 372,
    attributes: {
      heading: "BMW Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.740Z",
      updatedAt: "2023-07-27T11:29:09.843Z",
      publishedAt: "2023-07-25T06:48:01.717Z",
      slug: "bmw-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1354,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1355,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1356,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-07-31T11:48:23.168Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 544,
    attributes: {
      heading: "Matter Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:56.134Z",
      updatedAt: "2023-07-27T11:29:12.545Z",
      publishedAt: "2023-07-25T07:28:56.112Z",
      slug: "electric-bikes/matter",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1855,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1854,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1856,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 8,
          attributes: {
            name: "Matter",
            createdAt: "2023-06-26T10:10:06.429Z",
            updatedAt: "2023-07-28T08:10:57.129Z",
            publishedAt: "2023-06-26T10:22:48.497Z",
            slug: "matter",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 49,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 381,
    attributes: {
      heading: "Moto Guzzi Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.024Z",
      updatedAt: "2023-07-27T11:29:09.694Z",
      publishedAt: "2023-07-25T06:48:02.945Z",
      slug: "moto-guzzi-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1381,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1383,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1382,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 56,
          attributes: {
            name: "Moto Guzzi",
            createdAt: "2023-07-19T10:17:46.287Z",
            updatedAt: "2023-07-31T11:48:22.779Z",
            publishedAt: "2023-07-19T10:17:46.282Z",
            slug: "moto-guzzi",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 29,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 546,
    attributes: {
      heading: "Hop Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:56.324Z",
      updatedAt: "2023-07-27T11:29:12.398Z",
      publishedAt: "2023-07-25T07:28:56.305Z",
      slug: "electric-bikes/hop",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1860,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1862,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1861,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 11,
          attributes: {
            name: "Hop",
            createdAt: "2023-06-26T10:13:00.472Z",
            updatedAt: "2023-07-31T11:48:22.875Z",
            publishedAt: "2023-06-26T10:22:21.597Z",
            slug: "hop",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 80,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 387,
    attributes: {
      heading: "QJ Motor Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.789Z",
      updatedAt: "2023-07-27T11:29:09.444Z",
      publishedAt: "2023-07-25T06:48:03.767Z",
      slug: "qj-motor-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1399,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1400,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1401,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 69,
          attributes: {
            name: "QJ Motor",
            createdAt: "2023-07-19T10:17:54.518Z",
            updatedAt: "2023-07-28T08:10:56.491Z",
            publishedAt: "2023-07-19T10:17:54.510Z",
            slug: "qj-motor",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 57,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 558,
    attributes: {
      heading: "Gemopai Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.111Z",
      updatedAt: "2023-07-27T11:29:09.237Z",
      publishedAt: "2023-07-25T07:28:58.068Z",
      slug: "electric-bikes/gemopai",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1896,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1897,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1898,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 46,
          attributes: {
            name: "Gemopai",
            createdAt: "2023-07-19T10:17:43.492Z",
            updatedAt: "2023-07-28T08:10:54.140Z",
            publishedAt: "2023-07-19T10:17:43.486Z",
            slug: "gemopai",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 15,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 561,
    attributes: {
      heading: "Kawasaki Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.412Z",
      updatedAt: "2023-07-27T11:29:10.177Z",
      publishedAt: "2023-07-25T07:28:58.386Z",
      slug: "electric-bikes/kawasaki",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1905,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1906,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1907,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-07-31T11:48:22.645Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description: null,
            brand_id: 24,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 375,
    attributes: {
      heading: "Harley Davidson Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:02.121Z",
      updatedAt: "2023-07-27T11:29:09.885Z",
      publishedAt: "2023-07-25T06:48:02.052Z",
      slug: "harley-davidson-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1363,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1365,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1364,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 47,
          attributes: {
            name: "Harley Davidson",
            createdAt: "2023-07-19T10:17:43.832Z",
            updatedAt: "2023-07-31T11:48:22.618Z",
            publishedAt: "2023-07-19T10:17:43.824Z",
            slug: "harley-davidson",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 16,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 366,
    attributes: {
      heading: "Royal Enfield Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.182Z",
      updatedAt: "2023-07-27T11:29:09.768Z",
      publishedAt: "2023-07-25T06:48:01.158Z",
      slug: "royal-enfield-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1336,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1337,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1338,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 7,
          attributes: {
            name: "Royal Enfield",
            createdAt: "2023-06-14T07:07:07.690Z",
            updatedAt: "2023-07-31T11:48:22.693Z",
            publishedAt: "2023-06-14T07:07:09.269Z",
            slug: "royal-enfield",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 38,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 555,
    attributes: {
      heading: "Tunwal Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.805Z",
      updatedAt: "2023-07-27T11:29:12.620Z",
      publishedAt: "2023-07-25T07:28:57.785Z",
      slug: "electric-bikes/tunwal",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1887,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1888,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1889,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 24,
          attributes: {
            name: "Tunwal",
            createdAt: "2023-06-30T10:27:32.046Z",
            updatedAt: "2023-07-28T08:10:56.498Z",
            publishedAt: "2023-06-30T10:27:33.625Z",
            slug: "tunwal",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 72,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 390,
    attributes: {
      heading: "BSA Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:04.109Z",
      updatedAt: "2023-07-27T11:29:09.011Z",
      publishedAt: "2023-07-25T06:48:04.081Z",
      slug: "bsa-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1408,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1409,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1410,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 102,
          attributes: {
            name: "BSA",
            createdAt: "2023-07-19T10:18:05.165Z",
            updatedAt: "2023-07-28T08:10:54.004Z",
            publishedAt: "2023-07-19T10:18:05.159Z",
            slug: "bsa",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 102,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 545,
    attributes: {
      heading: "Revolt Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:56.213Z",
      updatedAt: "2023-07-27T12:51:22.025Z",
      publishedAt: "2023-07-25T07:28:56.190Z",
      slug: "electric-bikes/revolt",
      pageType: "electricBikeBrandPage",
      about_heading: "About ${heading}",
      listing_heading: "${heading} Price in India",
      Faq: [
        {
          id: 1857,
          question:
            "Q. Which ${brand.data.attributes.slug} Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1858,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1859,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 9,
          attributes: {
            name: "Revolt",
            createdAt: "2023-06-26T10:10:46.489Z",
            updatedAt: "2023-07-28T08:10:53.246Z",
            publishedAt: "2023-06-26T10:23:56.505Z",
            slug: "revolt",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 37,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 368,
    attributes: {
      heading: "Keeway Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.355Z",
      updatedAt: "2023-07-27T11:29:09.925Z",
      publishedAt: "2023-07-25T06:48:01.327Z",
      slug: "keeway-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1342,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1343,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1344,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-07-31T11:48:23.084Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 582,
    attributes: {
      heading: "Orxa Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:10.104Z",
      updatedAt: "2023-07-27T11:29:10.331Z",
      publishedAt: "2023-07-25T07:29:10.020Z",
      slug: "electric-bikes/orxa",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1968,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1970,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1969,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 109,
          attributes: {
            name: "Orxa",
            createdAt: "2023-07-19T10:18:07.034Z",
            updatedAt: "2023-07-28T08:10:53.514Z",
            publishedAt: "2023-07-19T10:18:07.027Z",
            slug: "orxa",
            dealers_description: null,
            brand_id: 111,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 377,
    attributes: {
      heading: "Indian Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:02.421Z",
      updatedAt: "2023-07-27T11:29:09.588Z",
      publishedAt: "2023-07-25T06:48:02.398Z",
      slug: "indian-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1369,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1370,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1371,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 50,
          attributes: {
            name: "Indian",
            createdAt: "2023-07-19T10:17:44.576Z",
            updatedAt: "2023-07-31T11:48:23.146Z",
            publishedAt: "2023-07-19T10:17:44.570Z",
            slug: "indian",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 21,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 553,
    attributes: {
      heading: "Lectrix Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.608Z",
      updatedAt: "2023-07-27T11:29:12.741Z",
      publishedAt: "2023-07-25T07:28:57.588Z",
      slug: "electric-bikes/lectrix",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1881,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1882,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1883,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 21,
          attributes: {
            name: "Lectrix",
            createdAt: "2023-06-30T10:19:54.225Z",
            updatedAt: "2023-07-28T08:10:56.581Z",
            publishedAt: "2023-06-30T10:20:01.513Z",
            slug: "lectrix",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 118,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 568,
    attributes: {
      heading: "Aeroride Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.209Z",
      updatedAt: "2023-07-27T11:29:12.872Z",
      publishedAt: "2023-07-25T07:28:59.172Z",
      slug: "electric-bikes/aeroride-electric",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1926,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1927,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1928,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 76,
          attributes: {
            name: "Aeroride",
            createdAt: "2023-07-19T10:17:56.836Z",
            updatedAt: "2023-07-28T08:10:56.818Z",
            publishedAt: "2023-07-19T10:17:56.831Z",
            slug: "aeroride-electric",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 68,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 572,
    attributes: {
      heading: "Rowet Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.667Z",
      updatedAt: "2023-07-27T11:29:10.421Z",
      publishedAt: "2023-07-25T07:28:59.625Z",
      slug: "electric-bikes/rowet",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1938,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1940,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1939,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 83,
          attributes: {
            name: "Rowet",
            createdAt: "2023-07-19T10:17:58.586Z",
            updatedAt: "2023-07-28T08:10:55.215Z",
            publishedAt: "2023-07-19T10:17:58.578Z",
            slug: "rowet",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 77,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 571,
    attributes: {
      heading: "dynam Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.550Z",
      updatedAt: "2023-07-27T11:29:12.982Z",
      publishedAt: "2023-07-25T07:28:59.512Z",
      slug: "electric-bikes/dynam",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1935,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1936,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1937,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 81,
          attributes: {
            name: "dynam",
            createdAt: "2023-07-19T10:17:58.112Z",
            updatedAt: "2023-07-28T08:10:52.606Z",
            publishedAt: "2023-07-19T10:17:58.103Z",
            slug: "dynam",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 75,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 573,
    attributes: {
      heading: "One Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.783Z",
      updatedAt: "2023-07-27T11:29:12.459Z",
      publishedAt: "2023-07-25T07:28:59.744Z",
      slug: "electric-bikes/one",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1941,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1943,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1942,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 84,
          attributes: {
            name: "One",
            createdAt: "2023-07-19T10:17:58.990Z",
            updatedAt: "2023-07-28T08:10:54.863Z",
            publishedAt: "2023-07-19T10:17:58.980Z",
            slug: "one",
            dealers_description: null,
            brand_id: 78,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 550,
    attributes: {
      heading: "Gravton Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.341Z",
      updatedAt: "2023-07-27T11:29:12.864Z",
      publishedAt: "2023-07-25T07:28:57.321Z",
      slug: "electric-bikes/gravton",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1872,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1873,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1874,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 18,
          attributes: {
            name: "Gravton",
            createdAt: "2023-06-30T09:59:26.661Z",
            updatedAt: "2023-07-28T08:10:53.171Z",
            publishedAt: "2023-06-30T09:59:28.414Z",
            slug: "gravton",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 63,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 379,
    attributes: {
      heading: "Kawasaki Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:02.787Z",
      updatedAt: "2023-07-27T11:29:12.709Z",
      publishedAt: "2023-07-25T06:48:02.732Z",
      slug: "kawasaki-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1375,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1377,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1376,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 53,
          attributes: {
            name: "Kawasaki",
            createdAt: "2023-07-19T10:17:45.572Z",
            updatedAt: "2023-07-31T11:48:22.645Z",
            publishedAt: "2023-07-19T10:17:45.567Z",
            slug: "kawasaki",
            dealers_description: null,
            brand_id: 24,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 378,
    attributes: {
      heading: "Jawa Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:02.593Z",
      updatedAt: "2023-07-27T11:29:09.363Z",
      publishedAt: "2023-07-25T06:48:02.489Z",
      slug: "jawa-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1372,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1374,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1373,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 51,
          attributes: {
            name: "Jawa",
            createdAt: "2023-07-19T10:17:44.958Z",
            updatedAt: "2023-07-31T11:48:23.107Z",
            publishedAt: "2023-07-19T10:17:44.950Z",
            slug: "jawa",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 22,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 373,
    attributes: {
      heading: "CFMoto Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.850Z",
      updatedAt: "2023-07-27T11:29:09.654Z",
      publishedAt: "2023-07-25T06:48:01.828Z",
      slug: "cfmoto-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1357,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1358,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1359,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 42,
          attributes: {
            name: "CFMoto",
            createdAt: "2023-07-19T10:17:42.706Z",
            updatedAt: "2023-07-31T11:48:22.986Z",
            publishedAt: "2023-07-19T10:17:42.700Z",
            slug: "cfmoto",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 11,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 374,
    attributes: {
      heading: "Ducati Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.984Z",
      updatedAt: "2023-07-27T11:29:13.125Z",
      publishedAt: "2023-07-25T06:48:01.935Z",
      slug: "ducati-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1360,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1361,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1362,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 43,
          attributes: {
            name: "Ducati",
            createdAt: "2023-07-19T10:17:42.914Z",
            updatedAt: "2023-07-31T11:48:23.060Z",
            publishedAt: "2023-07-19T10:17:42.906Z",
            slug: "ducati",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 12,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 364,
    attributes: {
      heading: "Hero Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:00.497Z",
      updatedAt: "2023-07-27T11:29:12.332Z",
      publishedAt: "2023-07-25T06:48:00.427Z",
      slug: "hero-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1330,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1331,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1332,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-07-31T11:48:22.675Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 564,
    attributes: {
      heading: "PURE EV Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.720Z",
      updatedAt: "2023-07-27T11:29:09.515Z",
      publishedAt: "2023-07-25T07:28:58.686Z",
      slug: "electric-bikes/pure-ev",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1915,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1914,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1916,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 61,
          attributes: {
            name: "PURE EV",
            createdAt: "2023-07-19T10:17:48.713Z",
            updatedAt: "2023-07-28T08:10:53.001Z",
            publishedAt: "2023-07-19T10:17:48.708Z",
            slug: "pure-ev",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 36,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 560,
    attributes: {
      heading: "Joy e-bike Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.325Z",
      updatedAt: "2023-07-27T11:29:10.471Z",
      publishedAt: "2023-07-25T07:28:58.285Z",
      slug: "electric-bikes/joy-e-bike",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1902,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1903,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1904,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 52,
          attributes: {
            name: "Joy e-bike",
            createdAt: "2023-07-19T10:17:45.190Z",
            updatedAt: "2023-07-28T08:10:53.480Z",
            publishedAt: "2023-07-19T10:17:45.185Z",
            slug: "joy-e-bike",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 23,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 382,
    attributes: {
      heading: "Moto Morini Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.291Z",
      updatedAt: "2023-07-27T11:29:12.591Z",
      publishedAt: "2023-07-25T06:48:03.263Z",
      slug: "moto-morini-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1384,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1385,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1386,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 57,
          attributes: {
            name: "Moto Morini",
            createdAt: "2023-07-19T10:17:47.623Z",
            updatedAt: "2023-07-28T08:10:55.961Z",
            publishedAt: "2023-07-19T10:17:47.616Z",
            slug: "moto-morini",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 30,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 386,
    attributes: {
      heading: "Zontes Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.711Z",
      updatedAt: "2023-07-27T11:29:13.246Z",
      publishedAt: "2023-07-25T06:48:03.642Z",
      slug: "zontes-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1396,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1398,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1397,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-07-28T08:10:55.338Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 548,
    attributes: {
      heading: "Emote Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.038Z",
      updatedAt: "2023-07-27T11:29:13.404Z",
      publishedAt: "2023-07-25T07:28:56.636Z",
      slug: "electric-bikes/emote",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1866,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1868,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1867,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 16,
          attributes: {
            name: "Emote",
            createdAt: "2023-06-30T09:48:56.128Z",
            updatedAt: "2023-07-28T08:10:55.164Z",
            publishedAt: "2023-06-30T09:48:57.749Z",
            slug: "emote",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 112,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 367,
    attributes: {
      heading: "YAMAHA Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.268Z",
      updatedAt: "2023-07-27T11:29:13.181Z",
      publishedAt: "2023-07-25T06:48:01.244Z",
      slug: "yamaha-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1339,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1340,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1341,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-07-31T11:48:23.027Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 371,
    attributes: {
      heading: "Benelli Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.653Z",
      updatedAt: "2023-07-27T11:29:13.177Z",
      publishedAt: "2023-07-25T06:48:01.618Z",
      slug: "benelli-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1351,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1352,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1353,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 37,
          attributes: {
            name: "Benelli",
            createdAt: "2023-07-19T10:17:41.174Z",
            updatedAt: "2023-07-31T11:48:22.950Z",
            publishedAt: "2023-07-19T10:17:41.165Z",
            slug: "benelli",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 6,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 385,
    attributes: {
      heading: "Yezdi Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.571Z",
      updatedAt: "2023-07-27T11:29:13.258Z",
      publishedAt: "2023-07-25T06:48:03.553Z",
      slug: "yezdi-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1393,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1394,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1395,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 66,
          attributes: {
            name: "Yezdi",
            createdAt: "2023-07-19T10:17:53.769Z",
            updatedAt: "2023-07-31T11:48:22.749Z",
            publishedAt: "2023-07-19T10:17:53.759Z",
            slug: "yezdi",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 47,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 547,
    attributes: {
      heading: "Cyborg Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:56.416Z",
      updatedAt: "2023-07-27T11:29:13.327Z",
      publishedAt: "2023-07-25T07:28:56.377Z",
      slug: "electric-bikes/cyborg",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1863,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1864,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1865,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 15,
          attributes: {
            name: "Cyborg",
            createdAt: "2023-06-30T08:29:22.594Z",
            updatedAt: "2023-07-28T08:10:55.639Z",
            publishedAt: "2023-06-30T08:29:24.525Z",
            slug: "cyborg",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 86,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 380,
    attributes: {
      heading: "KTM Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:02.864Z",
      updatedAt: "2023-07-27T11:29:13.363Z",
      publishedAt: "2023-07-25T06:48:02.845Z",
      slug: "ktm-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1378,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1380,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1379,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 54,
          attributes: {
            name: "KTM",
            createdAt: "2023-07-19T10:17:45.718Z",
            updatedAt: "2023-07-31T11:48:23.203Z",
            publishedAt: "2023-07-19T10:17:45.712Z",
            slug: "ktm",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 26,
            promotion_weightage: 2,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 554,
    attributes: {
      heading: "Kabira Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.725Z",
      updatedAt: "2023-07-27T11:29:12.660Z",
      publishedAt: "2023-07-25T07:28:57.677Z",
      slug: "electric-bikes/kabira",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1884,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1885,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1886,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 22,
          attributes: {
            name: "Kabira",
            createdAt: "2023-06-30T10:23:00.485Z",
            updatedAt: "2023-07-28T08:10:53.665Z",
            publishedAt: "2023-06-30T10:23:07.852Z",
            slug: "kabira",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 81,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 563,
    attributes: {
      heading: "Okinawa Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.611Z",
      updatedAt: "2023-07-27T11:29:13.439Z",
      publishedAt: "2023-07-25T07:28:58.586Z",
      slug: "electric-bikes/okinawa",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1911,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1913,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1912,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 60,
          attributes: {
            name: "Okinawa",
            createdAt: "2023-07-19T10:17:48.542Z",
            updatedAt: "2023-07-28T08:10:53.425Z",
            publishedAt: "2023-07-19T10:17:48.536Z",
            slug: "okinawa",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 34,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 559,
    attributes: {
      heading: "Hero Electric Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.224Z",
      updatedAt: "2023-07-27T11:29:09.371Z",
      publishedAt: "2023-07-25T07:28:58.195Z",
      slug: "electric-bikes/hero-electric",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1899,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1901,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1900,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 48,
          attributes: {
            name: "Hero Electric",
            createdAt: "2023-07-19T10:17:44.020Z",
            updatedAt: "2023-07-31T11:48:22.851Z",
            publishedAt: "2023-07-19T10:17:44.015Z",
            slug: "hero-electric",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 18,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 570,
    attributes: {
      heading: "zero Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.444Z",
      updatedAt: "2023-07-27T11:29:15.257Z",
      publishedAt: "2023-07-25T07:28:59.369Z",
      slug: "electric-bikes/zero",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1932,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1933,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1934,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 79,
          attributes: {
            name: "zero",
            createdAt: "2023-07-19T10:17:57.685Z",
            updatedAt: "2023-07-28T08:10:53.862Z",
            publishedAt: "2023-07-19T10:17:57.680Z",
            slug: "zero",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 71,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 557,
    attributes: {
      heading: "Evolet Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.003Z",
      updatedAt: "2023-07-27T11:29:14.914Z",
      publishedAt: "2023-07-25T07:28:57.951Z",
      slug: "electric-bikes/evolet",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1893,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1895,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1894,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 45,
          attributes: {
            name: "Evolet",
            createdAt: "2023-07-19T10:17:43.320Z",
            updatedAt: "2023-07-28T08:10:56.058Z",
            publishedAt: "2023-07-19T10:17:43.313Z",
            slug: "evolet",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 14,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 574,
    attributes: {
      heading: "Srivaru Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.904Z",
      updatedAt: "2023-07-27T11:29:15.047Z",
      publishedAt: "2023-07-25T07:28:59.866Z",
      slug: "electric-bikes/srivaru",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1944,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1946,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1945,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 85,
          attributes: {
            name: "Srivaru",
            createdAt: "2023-07-19T10:18:00.317Z",
            updatedAt: "2023-07-28T08:10:55.094Z",
            publishedAt: "2023-07-19T10:18:00.311Z",
            slug: "srivaru",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 82,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 585,
    attributes: {
      heading: "ADMS Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:10.481Z",
      updatedAt: "2023-07-27T11:29:15.434Z",
      publishedAt: "2023-07-25T07:29:10.453Z",
      slug: "electric-bikes/adms",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1977,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1979,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1978,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 114,
          attributes: {
            name: "ADMS",
            createdAt: "2023-07-19T10:18:08.186Z",
            updatedAt: "2023-07-28T08:10:52.553Z",
            publishedAt: "2023-07-19T10:18:08.180Z",
            slug: "adms",
            dealers_description: null,
            brand_id: 117,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 552,
    attributes: {
      heading: "Komaki Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.531Z",
      updatedAt: "2023-07-27T11:29:12.824Z",
      publishedAt: "2023-07-25T07:28:57.492Z",
      slug: "electric-bikes/komaki",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1880,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1878,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1879,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 20,
          attributes: {
            name: "Komaki",
            createdAt: "2023-06-30T10:14:08.194Z",
            updatedAt: "2023-07-28T08:10:55.901Z",
            publishedAt: "2023-06-30T10:14:14.130Z",
            slug: "komaki",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 83,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 581,
    attributes: {
      heading: "Power Electric Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.821Z",
      updatedAt: "2023-07-27T11:29:12.955Z",
      publishedAt: "2023-07-25T07:29:00.747Z",
      slug: "electric-bikes/power-electric",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1965,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1966,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1967,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 105,
          attributes: {
            name: "Power Electric",
            createdAt: "2023-07-19T10:18:05.881Z",
            updatedAt: "2023-07-28T08:10:52.868Z",
            publishedAt: "2023-07-19T10:18:05.873Z",
            slug: "power-electric",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 105,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 576,
    attributes: {
      heading: "Future Garage Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.179Z",
      updatedAt: "2023-07-27T11:29:15.248Z",
      publishedAt: "2023-07-25T07:29:00.121Z",
      slug: "electric-bikes/future-garage",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1950,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1952,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1951,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 90,
          attributes: {
            name: "Future Garage",
            createdAt: "2023-07-19T10:18:01.754Z",
            updatedAt: "2023-07-28T08:10:56.651Z",
            publishedAt: "2023-07-19T10:18:01.746Z",
            slug: "future-garage",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 89,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 551,
    attributes: {
      heading: "Revamp Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.431Z",
      updatedAt: "2023-07-27T11:29:13.502Z",
      publishedAt: "2023-07-25T07:28:57.413Z",
      slug: "electric-bikes/revamp",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1875,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1877,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1876,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 19,
          attributes: {
            name: "Revamp",
            createdAt: "2023-06-30T10:06:01.685Z",
            updatedAt: "2023-07-28T08:10:56.850Z",
            publishedAt: "2023-06-30T10:06:03.475Z",
            slug: "revamp",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 91,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 389,
    attributes: {
      heading: "Brabus Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:04.024Z",
      updatedAt: "2023-07-27T11:29:10.627Z",
      publishedAt: "2023-07-25T06:48:03.999Z",
      slug: "brabus-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1405,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1406,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1407,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 93,
          attributes: {
            name: "Brabus",
            createdAt: "2023-07-19T10:18:02.477Z",
            updatedAt: "2023-07-28T08:10:52.784Z",
            publishedAt: "2023-07-19T10:18:02.471Z",
            slug: "brabus",
            dealers_description: null,
            brand_id: 93,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 388,
    attributes: {
      heading: "Benda Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.921Z",
      updatedAt: "2023-07-27T11:29:10.574Z",
      publishedAt: "2023-07-25T06:48:03.846Z",
      slug: "benda-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1402,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1403,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1404,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 72,
          attributes: {
            name: "Benda",
            createdAt: "2023-07-19T10:17:55.255Z",
            updatedAt: "2023-07-28T08:10:56.402Z",
            publishedAt: "2023-07-19T10:17:55.247Z",
            slug: "benda",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 60,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 383,
    attributes: {
      heading: "Norton Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:03.373Z",
      updatedAt: "2023-07-27T11:29:10.786Z",
      publishedAt: "2023-07-25T06:48:03.351Z",
      slug: "norton-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1387,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1388,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1389,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 58,
          attributes: {
            name: "Norton",
            createdAt: "2023-07-19T10:17:47.937Z",
            updatedAt: "2023-07-28T08:10:57.011Z",
            publishedAt: "2023-07-19T10:17:47.928Z",
            slug: "norton",
            dealers_description: null,
            brand_id: 31,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 549,
    attributes: {
      heading: "Oben Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.267Z",
      updatedAt: "2023-07-27T11:29:12.750Z",
      publishedAt: "2023-07-25T07:28:57.215Z",
      slug: "electric-bikes/oben",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1869,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1871,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1870,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 17,
          attributes: {
            name: "Oben",
            createdAt: "2023-06-30T09:55:06.813Z",
            updatedAt: "2023-07-28T08:10:56.299Z",
            publishedAt: "2023-06-30T09:55:08.336Z",
            slug: "oben",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 79,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 363,
    attributes: {
      heading: "Honda Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications}  ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.\n>price in India starts from\n\n# Best Bike Images #\n[![honda-shine-1001681977592.png](https://centralization-images.s3.ap-south-1.amazonaws.com/honda_shine_1001681977592_03f4fde5c1.png)](https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350)\n\n\n<u>_**Best Models**_</u>\n- Honda SP 200\n- Honda Shine\n\n1. Honda SP 200\n2. Honda Shine\n\n\n\n\n",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:00.367Z",
      updatedAt: "2023-07-31T07:52:16.755Z",
      publishedAt: "2023-07-25T06:48:00.314Z",
      slug: "honda-bikes",
      pageType: "brandPage",
      about_heading: "About ${heading}",
      listing_heading: "${heading} Price in India",
      Faq: [
        {
          id: 1327,
          question:
            "Q. Which ${brand.data.attributes.slug} Bike Model Is The Most Expensive In India?",
          answer:
            "A. ${brand.data.attributes.slug} Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1328,
          question:
            "Q. Which ${brand.data.attributes.slug} Bike Model Is The Most Expensive In India?",
          answer:
            "A. ${brand.data.attributes.slug} Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1329,
          question:
            "Q. Which ${brand.data.attributes.slug} Bike Model Is The Most Expensive In India?",
          answer:
            "A. ${brand.data.attributes.slug} Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: {
        id: 2282,
        title: "Honda Bikes",
        description: "Honda Bikes",
        keywords: "Honda Bikes",
        structured_data: [],
        ogtitle: "Honda Bikes",
        ogtype: "website",
        ogurl: "https://website-builder-bike.vercel.app/honda-bikes",
        robot_index: true,
        robot_follow: true,
        robot_archive: true,
      },
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-07-31T11:48:23.007Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 579,
    attributes: {
      heading: "Eeve Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.555Z",
      updatedAt: "2023-07-27T11:29:16.044Z",
      publishedAt: "2023-07-25T07:29:00.505Z",
      slug: "electric-bikes/eeve",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1959,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1960,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1961,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 98,
          attributes: {
            name: "Eeve",
            createdAt: "2023-07-19T10:18:04.001Z",
            updatedAt: "2023-07-28T08:10:52.383Z",
            publishedAt: "2023-07-19T10:18:03.989Z",
            slug: "eeve",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 98,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 578,
    attributes: {
      heading: "Livewire Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.421Z",
      updatedAt: "2023-07-27T11:29:14.059Z",
      publishedAt: "2023-07-25T07:29:00.388Z",
      slug: "electric-bikes/livewire",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1956,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1957,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1958,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 92,
          attributes: {
            name: "Livewire",
            createdAt: "2023-07-19T10:18:02.136Z",
            updatedAt: "2023-07-28T08:10:56.575Z",
            publishedAt: "2023-07-19T10:18:02.130Z",
            slug: "livewire",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 92,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 565,
    attributes: {
      heading: "Cake Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.850Z",
      updatedAt: "2023-07-27T11:29:14.116Z",
      publishedAt: "2023-07-25T07:28:58.778Z",
      slug: "electric-bikes/cake",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1917,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1918,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1919,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 70,
          attributes: {
            name: "Cake",
            createdAt: "2023-07-19T10:17:54.764Z",
            updatedAt: "2023-07-28T08:10:54.530Z",
            publishedAt: "2023-07-19T10:17:54.759Z",
            slug: "cake",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 58,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 521,
    attributes: {
      heading: "Sports Naked Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:33.926Z",
      updatedAt: "2023-07-27T11:29:17.277Z",
      publishedAt: "2023-07-25T07:09:33.903Z",
      slug: "new-bikes/sports-naked-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1801,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1803,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1802,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 637,
    attributes: {
      heading: "Merico Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:55.942Z",
      updatedAt: "2023-07-27T11:29:15.716Z",
      publishedAt: "2023-07-25T07:29:55.921Z",
      slug: "electric-scooters/merico",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2133,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2134,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2135,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 112,
          attributes: {
            name: "Merico",
            createdAt: "2023-07-19T10:18:07.775Z",
            updatedAt: "2023-07-28T08:10:53.591Z",
            publishedAt: "2023-07-19T10:18:07.769Z",
            slug: "merico",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 115,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 621,
    attributes: {
      heading: "Rowet Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:45.779Z",
      updatedAt: "2023-07-27T11:29:11.826Z",
      publishedAt: "2023-07-25T07:29:45.710Z",
      slug: "electric-scooters/rowet",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2087,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2086,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2085,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 83,
          attributes: {
            name: "Rowet",
            createdAt: "2023-07-19T10:17:58.586Z",
            updatedAt: "2023-07-28T08:10:55.215Z",
            publishedAt: "2023-07-19T10:17:58.578Z",
            slug: "rowet",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 77,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 599,
    attributes: {
      heading: "Suzuki Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:41.483Z",
      updatedAt: "2023-07-27T11:29:14.009Z",
      publishedAt: "2023-07-25T07:29:41.460Z",
      slug: "electric-scooters/suzuki",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2019,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2020,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2021,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-07-31T11:48:22.899Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 562,
    attributes: {
      heading: "Odysse Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.502Z",
      updatedAt: "2023-07-27T11:29:15.801Z",
      publishedAt: "2023-07-25T07:28:58.474Z",
      slug: "electric-bikes/odysse",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1908,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1909,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1910,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 59,
          attributes: {
            name: "Odysse",
            createdAt: "2023-07-19T10:17:48.239Z",
            updatedAt: "2023-07-28T08:10:56.693Z",
            publishedAt: "2023-07-19T10:17:48.230Z",
            slug: "odysse",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 32,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 583,
    attributes: {
      heading: "Svitch Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:10.229Z",
      updatedAt: "2023-07-27T11:29:10.131Z",
      publishedAt: "2023-07-25T07:29:10.171Z",
      slug: "electric-bikes/svitch",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1971,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1972,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1973,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 110,
          attributes: {
            name: "Svitch",
            createdAt: "2023-07-19T10:18:07.313Z",
            updatedAt: "2023-07-28T08:10:54.035Z",
            publishedAt: "2023-07-19T10:18:07.305Z",
            slug: "svitch",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 113,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 619,
    attributes: {
      heading: "gogoro Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:45.476Z",
      updatedAt: "2023-07-27T11:29:10.960Z",
      publishedAt: "2023-07-25T07:29:45.400Z",
      slug: "electric-scooters/gogoro",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2081,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2079,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2080,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 78,
          attributes: {
            name: "gogoro",
            createdAt: "2023-07-19T10:17:57.453Z",
            updatedAt: "2023-07-28T08:10:54.407Z",
            publishedAt: "2023-07-19T10:17:57.444Z",
            slug: "gogoro",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 70,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 569,
    attributes: {
      heading: "Atum mobility Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.310Z",
      updatedAt: "2023-07-27T11:29:10.863Z",
      publishedAt: "2023-07-25T07:28:59.277Z",
      slug: "electric-bikes/atum-mobility",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1929,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1931,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1930,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 77,
          attributes: {
            name: "Atum mobility",
            createdAt: "2023-07-19T10:17:57.147Z",
            updatedAt: "2023-07-28T08:10:52.847Z",
            publishedAt: "2023-07-19T10:17:57.140Z",
            slug: "atum-mobility",
            dealers_description: null,
            brand_id: 69,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 620,
    attributes: {
      heading: "dynam Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:45.601Z",
      updatedAt: "2023-07-27T11:29:11.158Z",
      publishedAt: "2023-07-25T07:29:45.556Z",
      slug: "electric-scooters/dynam",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2082,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2083,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2084,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 81,
          attributes: {
            name: "dynam",
            createdAt: "2023-07-19T10:17:58.112Z",
            updatedAt: "2023-07-28T08:10:52.606Z",
            publishedAt: "2023-07-19T10:17:58.103Z",
            slug: "dynam",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 75,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 566,
    attributes: {
      heading: "Ultraviolette Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:58.954Z",
      updatedAt: "2023-07-27T11:29:15.857Z",
      publishedAt: "2023-07-25T07:28:58.914Z",
      slug: "electric-bikes/ultraviolette",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1922,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1920,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1921,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 71,
          attributes: {
            name: "Ultraviolette",
            createdAt: "2023-07-19T10:17:54.974Z",
            updatedAt: "2023-07-28T08:10:54.800Z",
            publishedAt: "2023-07-19T10:17:54.964Z",
            slug: "ultraviolette",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 59,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 609,
    attributes: {
      heading: "Odysse Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:43.862Z",
      updatedAt: "2023-07-27T11:29:10.010Z",
      publishedAt: "2023-07-25T07:29:43.734Z",
      slug: "electric-scooters/odysse",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2049,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2050,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2051,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 59,
          attributes: {
            name: "Odysse",
            createdAt: "2023-07-19T10:17:48.239Z",
            updatedAt: "2023-07-28T08:10:56.693Z",
            publishedAt: "2023-07-19T10:17:48.230Z",
            slug: "odysse",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 32,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 610,
    attributes: {
      heading: "Okinawa Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.080Z",
      updatedAt: "2023-07-27T11:29:11.190Z",
      publishedAt: "2023-07-25T07:29:43.997Z",
      slug: "electric-scooters/okinawa",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2052,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2053,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2054,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 60,
          attributes: {
            name: "Okinawa",
            createdAt: "2023-07-19T10:17:48.542Z",
            updatedAt: "2023-07-28T08:10:53.425Z",
            publishedAt: "2023-07-19T10:17:48.536Z",
            slug: "okinawa",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 34,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 587,
    attributes: {
      heading: "TVS Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:39.711Z",
      updatedAt: "2023-07-27T11:29:10.892Z",
      publishedAt: "2023-07-25T07:29:39.695Z",
      slug: "electric-scooters/tvs",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1983,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1985,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1984,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-07-31T11:48:22.762Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 584,
    attributes: {
      heading: "EKO TEJAS Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:10.375Z",
      updatedAt: "2023-07-27T11:29:09.972Z",
      publishedAt: "2023-07-25T07:29:10.300Z",
      slug: "electric-bikes/eko-tejas",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1974,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1976,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1975,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 111,
          attributes: {
            name: "EKO TEJAS",
            createdAt: "2023-07-19T10:18:07.589Z",
            updatedAt: "2023-07-28T08:10:53.361Z",
            publishedAt: "2023-07-19T10:18:07.583Z",
            slug: "eko-tejas",
            dealers_description: null,
            brand_id: 114,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 617,
    attributes: {
      heading: "Birla Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:45.219Z",
      updatedAt: "2023-07-27T11:29:10.074Z",
      publishedAt: "2023-07-25T07:29:45.063Z",
      slug: "electric-scooters/birla",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2073,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2074,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2075,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 75,
          attributes: {
            name: "Birla",
            createdAt: "2023-07-19T10:17:56.534Z",
            updatedAt: "2023-07-28T08:10:52.881Z",
            publishedAt: "2023-07-19T10:17:56.527Z",
            slug: "birla",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 67,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 580,
    attributes: {
      heading: "Vmoto Soco Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.683Z",
      updatedAt: "2023-07-27T11:29:10.095Z",
      publishedAt: "2023-07-25T07:29:00.630Z",
      slug: "electric-bikes/vmoto-soco",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1962,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1963,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1964,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 103,
          attributes: {
            name: "Vmoto Soco",
            createdAt: "2023-07-19T10:18:05.444Z",
            updatedAt: "2023-07-28T08:10:53.680Z",
            publishedAt: "2023-07-19T10:18:05.438Z",
            slug: "vmoto-soco",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 103,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 655,
    attributes: {
      heading: "Best 250cc Bike Models",
      description: "${heading}",
      aboutContent: "${heading}",
      createdAt: "2023-07-28T11:28:56.224Z",
      updatedAt: "2023-07-28T11:46:40.476Z",
      publishedAt: "2023-07-28T11:46:40.457Z",
      slug: "new-bikes/best-250cc-bikes",
      pageType: "displacementPage",
      about_heading: "About bike",
      listing_heading: "Popular 250cc Bike",
      Faq: [
        {
          id: 2167,
          question: null,
          answer: null,
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 588,
    attributes: {
      heading: "Honda Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.119Z",
      updatedAt: "2023-07-27T11:29:11.254Z",
      publishedAt: "2023-07-25T07:29:39.930Z",
      slug: "electric-scooters/honda",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1986,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1987,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1988,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-07-31T11:48:23.007Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 597,
    attributes: {
      heading: "Yo Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:41.282Z",
      updatedAt: "2023-07-27T11:29:16.505Z",
      publishedAt: "2023-07-25T07:29:41.260Z",
      slug: "electric-scooters/yo",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2015,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2013,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2014,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 23,
          attributes: {
            name: "Yo",
            createdAt: "2023-06-30T10:25:04.206Z",
            updatedAt: "2023-07-28T08:10:56.364Z",
            publishedAt: "2023-06-30T10:25:06.124Z",
            slug: "yo",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 48,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 604,
    attributes: {
      heading: "Bounce Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:42.869Z",
      updatedAt: "2023-07-27T11:29:14.529Z",
      publishedAt: "2023-07-25T07:29:42.848Z",
      slug: "electric-scooters/bounce",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2034,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2035,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2036,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 41,
          attributes: {
            name: "Bounce",
            createdAt: "2023-07-19T10:17:42.402Z",
            updatedAt: "2023-07-28T08:10:55.480Z",
            publishedAt: "2023-07-19T10:17:42.394Z",
            slug: "bounce",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 10,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 592,
    attributes: {
      heading: "OLA Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.818Z",
      updatedAt: "2023-07-27T11:29:16.472Z",
      publishedAt: "2023-07-25T07:29:40.791Z",
      slug: "electric-scooters/ola",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1998,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1999,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2000,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 12,
          attributes: {
            name: "OLA",
            createdAt: "2023-06-26T10:13:45.050Z",
            updatedAt: "2023-07-28T08:10:55.103Z",
            publishedAt: "2023-06-26T10:55:57.597Z",
            slug: "ola",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 35,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 593,
    attributes: {
      heading: "Okaya Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.897Z",
      updatedAt: "2023-07-27T11:29:11.298Z",
      publishedAt: "2023-07-25T07:29:40.880Z",
      slug: "electric-scooters/okaya",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2001,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2003,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2002,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 13,
          attributes: {
            name: "Okaya",
            createdAt: "2023-06-26T10:14:49.024Z",
            updatedAt: "2023-07-28T08:10:56.824Z",
            publishedAt: "2023-06-26T10:56:06.900Z",
            slug: "okaya",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 33,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 598,
    attributes: {
      heading: "Tunwal Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:41.393Z",
      updatedAt: "2023-07-27T11:29:16.487Z",
      publishedAt: "2023-07-25T07:29:41.369Z",
      slug: "electric-scooters/tunwal",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2018,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2016,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2017,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 24,
          attributes: {
            name: "Tunwal",
            createdAt: "2023-06-30T10:27:32.046Z",
            updatedAt: "2023-07-28T08:10:56.498Z",
            publishedAt: "2023-06-30T10:27:33.625Z",
            slug: "tunwal",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 72,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 405,
    attributes: {
      heading: "Honda Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh. Honda: The Power of Dreams",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:02.934Z",
      updatedAt: "2023-07-27T12:49:21.107Z",
      publishedAt: "2023-07-25T06:55:02.911Z",
      slug: "honda-scooters",
      pageType: "brandPage",
      about_heading: "About ${heading}",
      listing_heading: "Honda Scooters Price in India",
      Faq: [
        {
          id: 1453,
          question:
            "Q. Which ${brand.data.attributes.slug} Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1454,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1455,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 3,
          attributes: {
            name: "Honda",
            createdAt: "2023-06-08T10:58:24.821Z",
            updatedAt: "2023-07-31T11:48:23.007Z",
            publishedAt: "2023-06-08T10:58:27.197Z",
            slug: "honda",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 19,
            promotion_weightage: 1,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 605,
    attributes: {
      heading: "Evolet Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:43.022Z",
      updatedAt: "2023-07-27T11:29:14.282Z",
      publishedAt: "2023-07-25T07:29:42.971Z",
      slug: "electric-scooters/evolet",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2037,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2038,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2039,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 45,
          attributes: {
            name: "Evolet",
            createdAt: "2023-07-19T10:17:43.320Z",
            updatedAt: "2023-07-28T08:10:56.058Z",
            publishedAt: "2023-07-19T10:17:43.313Z",
            slug: "evolet",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 14,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 595,
    attributes: {
      heading: "Lectrix Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:41.083Z",
      updatedAt: "2023-07-27T11:29:11.006Z",
      publishedAt: "2023-07-25T07:29:41.039Z",
      slug: "electric-scooters/lectrix",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2009,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2007,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2008,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 21,
          attributes: {
            name: "Lectrix",
            createdAt: "2023-06-30T10:19:54.225Z",
            updatedAt: "2023-07-28T08:10:56.581Z",
            publishedAt: "2023-06-30T10:20:01.513Z",
            slug: "lectrix",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 118,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 596,
    attributes: {
      heading: "Kabira Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:41.202Z",
      updatedAt: "2023-07-27T11:29:11.100Z",
      publishedAt: "2023-07-25T07:29:41.166Z",
      slug: "electric-scooters/kabira",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2010,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2011,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2012,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 22,
          attributes: {
            name: "Kabira",
            createdAt: "2023-06-30T10:23:00.485Z",
            updatedAt: "2023-07-28T08:10:53.665Z",
            publishedAt: "2023-06-30T10:23:07.852Z",
            slug: "kabira",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 81,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 586,
    attributes: {
      heading: "Ather Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:39.594Z",
      updatedAt: "2023-07-27T11:29:11.233Z",
      publishedAt: "2023-07-25T07:29:39.576Z",
      slug: "electric-scooters/ather",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1980,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1981,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1982,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 1,
          attributes: {
            name: "Ather",
            createdAt: "2023-06-08T07:14:32.043Z",
            updatedAt: "2023-07-28T08:10:52.990Z",
            publishedAt: "2023-06-08T07:15:34.690Z",
            slug: "ather",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 4,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 625,
    attributes: {
      heading: "LML Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.359Z",
      updatedAt: "2023-07-27T11:29:10.217Z",
      publishedAt: "2023-07-25T07:29:46.340Z",
      slug: "electric-scooters/lml",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2097,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2098,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2099,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 94,
          attributes: {
            name: "LML",
            createdAt: "2023-07-19T10:18:02.778Z",
            updatedAt: "2023-07-28T08:10:56.985Z",
            publishedAt: "2023-07-19T10:18:02.772Z",
            slug: "lml",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 94,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 594,
    attributes: {
      heading: "Komaki Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.970Z",
      updatedAt: "2023-07-27T11:29:11.378Z",
      publishedAt: "2023-07-25T07:29:40.951Z",
      slug: "electric-scooters/komaki",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2004,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2005,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2006,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 20,
          attributes: {
            name: "Komaki",
            createdAt: "2023-06-30T10:14:08.194Z",
            updatedAt: "2023-07-28T08:10:55.901Z",
            publishedAt: "2023-06-30T10:14:14.130Z",
            slug: "komaki",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 83,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 632,
    attributes: {
      heading: "Kinetic Green Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:47.221Z",
      updatedAt: "2023-07-27T11:29:11.686Z",
      publishedAt: "2023-07-25T07:29:47.177Z",
      slug: "electric-scooters/kinetic-green",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2118,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2119,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2120,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 104,
          attributes: {
            name: "Kinetic Green",
            createdAt: "2023-07-19T10:18:05.630Z",
            updatedAt: "2023-07-28T08:10:52.902Z",
            publishedAt: "2023-07-19T10:18:05.621Z",
            slug: "kinetic-green",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 104,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 613,
    attributes: {
      heading: "Techo Electra Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.614Z",
      updatedAt: "2023-07-27T11:29:11.522Z",
      publishedAt: "2023-07-25T07:29:44.548Z",
      slug: "electric-scooters/techo-electra",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2061,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2062,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2063,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 63,
          attributes: {
            name: "Techo Electra",
            createdAt: "2023-07-19T10:17:52.539Z",
            updatedAt: "2023-07-28T08:10:54.588Z",
            publishedAt: "2023-07-19T10:17:52.534Z",
            slug: "techo-electra",
            dealers_description: null,
            brand_id: 41,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 618,
    attributes: {
      heading: "Aeroride Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:45.308Z",
      updatedAt: "2023-07-27T11:29:11.550Z",
      publishedAt: "2023-07-25T07:29:45.274Z",
      slug: "electric-scooters/aeroride-electric",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2076,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2077,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2078,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 76,
          attributes: {
            name: "Aeroride",
            createdAt: "2023-07-19T10:17:56.836Z",
            updatedAt: "2023-07-28T08:10:56.818Z",
            publishedAt: "2023-07-19T10:17:56.831Z",
            slug: "aeroride-electric",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 68,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 415,
    attributes: {
      heading: "Srivaru Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.766Z",
      updatedAt: "2023-07-27T11:29:15.173Z",
      publishedAt: "2023-07-25T06:55:04.733Z",
      slug: "srivaru-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1484,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1483,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1485,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 85,
          attributes: {
            name: "Srivaru",
            createdAt: "2023-07-19T10:18:00.317Z",
            updatedAt: "2023-07-28T08:10:55.094Z",
            publishedAt: "2023-07-19T10:18:00.311Z",
            slug: "srivaru",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 82,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 408,
    attributes: {
      heading: "Keeway Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:03.952Z",
      updatedAt: "2023-07-27T11:29:16.566Z",
      publishedAt: "2023-07-25T06:55:03.900Z",
      slug: "keeway-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1462,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1463,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1464,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 25,
          attributes: {
            name: "Keeway",
            createdAt: "2023-06-30T10:32:52.967Z",
            updatedAt: "2023-07-31T11:48:23.084Z",
            publishedAt: "2023-06-30T10:33:39.817Z",
            slug: "keeway",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 25,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 589,
    attributes: {
      heading: "Hero Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.394Z",
      updatedAt: "2023-07-27T11:29:11.438Z",
      publishedAt: "2023-07-25T07:29:40.375Z",
      slug: "electric-scooters/hero",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1989,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1990,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1991,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-07-31T11:48:22.675Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 642,
    attributes: {
      heading: "Latest Bikes in India",
      description:
        "All the ${heading} are in one place at BikeJunction. Check a complete list of the latest Bike in India. This section is filled with all the new Bike launched in India with its price and specifications. New Bike launches India happen almost every month. Check out all the latest Bike's in India 2023 with all the latest electric Bike's. All the popular brands have launched some latest Bike models, which are listed below on the page.",
      aboutContent: "${heading} About Content",
      createdAt: "2023-07-26T16:35:28.266Z",
      updatedAt: "2023-07-28T05:29:03.200Z",
      publishedAt: "2023-07-26T16:35:28.251Z",
      slug: "latest-bikes",
      pageType: "latestPage",
      about_heading: "Find Latest Bikes",
      listing_heading: "Latest Bikes",
      Faq: [
        {
          id: 2151,
          question: "Q. What Are The ${heading} Launched ?",
          answer:
            "A. Honda Shine,KTM 200 Duke,KTM 250 Duke are currently launched in India.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 633,
    attributes: {
      heading: "Thunderbolt Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:47.306Z",
      updatedAt: "2023-07-27T11:29:11.596Z",
      publishedAt: "2023-07-25T07:29:47.284Z",
      slug: "electric-scooters/thunderbolt",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2121,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2122,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2123,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 106,
          attributes: {
            name: "Thunderbolt",
            createdAt: "2023-07-19T10:18:06.256Z",
            updatedAt: "2023-07-28T08:10:57.182Z",
            publishedAt: "2023-07-19T10:18:06.251Z",
            slug: "thunderbolt",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 106,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 404,
    attributes: {
      heading: "TVS Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:02.852Z",
      updatedAt: "2023-07-27T11:29:14.787Z",
      publishedAt: "2023-07-25T06:55:02.832Z",
      slug: "tvs-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1450,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1451,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1452,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 2,
          attributes: {
            name: "TVS",
            createdAt: "2023-06-08T10:54:48.845Z",
            updatedAt: "2023-07-31T11:48:22.762Z",
            publishedAt: "2023-06-08T10:54:51.182Z",
            slug: "tvs",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 44,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 600,
    attributes: {
      heading: "22Kymco Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:41.694Z",
      updatedAt: "2023-07-27T11:29:16.722Z",
      publishedAt: "2023-07-25T07:29:41.545Z",
      slug: "electric-scooters/22kymco",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2022,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2023,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2024,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 33,
          attributes: {
            name: "22Kymco",
            createdAt: "2023-07-19T10:08:58.218Z",
            updatedAt: "2023-07-28T08:10:52.816Z",
            publishedAt: "2023-07-25T12:16:26.826Z",
            slug: "22kymco",
            dealers_description:
              "**Bike Showrooms**303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 1,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 529,
    attributes: {
      heading: "Tourer Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.731Z",
      updatedAt: "2023-07-27T11:29:12.197Z",
      publishedAt: "2023-07-25T07:09:34.685Z",
      slug: "new-bikes/tourer-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1825,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1826,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1827,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 515,
    attributes: {
      heading: "Scooter Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:33.362Z",
      updatedAt: "2023-07-27T11:29:15.284Z",
      publishedAt: "2023-07-25T07:09:33.337Z",
      slug: "new-bikes/scooter-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1784,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1783,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1785,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 411,
    attributes: {
      heading: "Aprilia Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.235Z",
      updatedAt: "2023-07-27T11:29:12.026Z",
      publishedAt: "2023-07-25T06:55:04.209Z",
      slug: "aprilia-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1471,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1472,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1473,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-07-31T11:48:22.712Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 526,
    attributes: {
      heading: "Fully faired Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.427Z",
      updatedAt: "2023-07-27T11:29:10.762Z",
      publishedAt: "2023-07-25T07:09:34.396Z",
      slug: "new-bikes/fully-faired-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1816,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1817,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1818,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 410,
    attributes: {
      heading: "Suzuki Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.143Z",
      updatedAt: "2023-07-27T11:29:15.510Z",
      publishedAt: "2023-07-25T06:55:04.119Z",
      slug: "suzuki-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1468,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1469,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1470,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 27,
          attributes: {
            name: "Suzuki",
            createdAt: "2023-06-30T10:37:54.359Z",
            updatedAt: "2023-07-31T11:48:22.899Z",
            publishedAt: "2023-06-30T10:37:56.224Z",
            slug: "suzuki",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 40,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 530,
    attributes: {
      heading: "Cruiser Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.832Z",
      updatedAt: "2023-07-27T11:29:10.768Z",
      publishedAt: "2023-07-25T07:09:34.800Z",
      slug: "new-bikes/cruiser-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1828,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1829,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1830,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 518,
    attributes: {
      heading: "Sports Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:33.639Z",
      updatedAt: "2023-07-27T11:29:12.154Z",
      publishedAt: "2023-07-25T07:09:33.607Z",
      slug: "new-bikes/sports-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1792,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1793,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1794,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 533,
    attributes: {
      heading: "Street Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:35.166Z",
      updatedAt: "2023-07-27T11:29:16.769Z",
      publishedAt: "2023-07-25T07:09:35.123Z",
      slug: "new-bikes/street-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1837,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1838,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1839,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 414,
    attributes: {
      heading: "Zontes Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.559Z",
      updatedAt: "2023-07-27T11:29:10.675Z",
      publishedAt: "2023-07-25T06:55:04.531Z",
      slug: "zontes-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1480,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1481,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1482,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 68,
          attributes: {
            name: "Zontes",
            createdAt: "2023-07-19T10:17:54.253Z",
            updatedAt: "2023-07-28T08:10:55.338Z",
            publishedAt: "2023-07-19T10:17:54.245Z",
            slug: "zontes",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 56,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 519,
    attributes: {
      heading: "Super Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:33.736Z",
      updatedAt: "2023-07-27T11:29:12.237Z",
      publishedAt: "2023-07-25T07:09:33.707Z",
      slug: "new-bikes/super-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1795,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1796,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1797,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 407,
    attributes: {
      heading: "YAMAHA Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:03.641Z",
      updatedAt: "2023-07-27T11:29:12.180Z",
      publishedAt: "2023-07-25T06:55:03.211Z",
      slug: "yamaha-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1459,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1460,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1461,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 14,
          attributes: {
            name: "YAMAHA",
            createdAt: "2023-06-30T06:47:49.536Z",
            updatedAt: "2023-07-31T11:48:23.027Z",
            publishedAt: "2023-06-30T06:48:08.509Z",
            slug: "yamaha",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 46,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 416,
    attributes: {
      heading: "Peugeot Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.905Z",
      updatedAt: "2023-07-27T11:29:10.522Z",
      publishedAt: "2023-07-25T06:55:04.854Z",
      slug: "peugeot-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1486,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1487,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1488,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 97,
          attributes: {
            name: "Peugeot",
            createdAt: "2023-07-19T10:18:03.701Z",
            updatedAt: "2023-07-28T08:10:54.727Z",
            publishedAt: "2023-07-19T10:18:03.696Z",
            slug: "peugeot",
            dealers_description: null,
            brand_id: 97,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 516,
    attributes: {
      heading: "Adventure Tourer Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${heading} About Content",
      createdAt: "2023-07-25T07:09:33.453Z",
      updatedAt: "2023-07-28T05:02:29.968Z",
      publishedAt: "2023-07-25T07:09:33.430Z",
      slug: "new-bikes/adventure-tourer-bikes",
      pageType: "categoryPage",
      about_heading: "About Adventure Tourer Bikes",
      listing_heading: "Popular Adventure Tourer Bikes",
      Faq: [
        {
          id: 1786,
          question:
            "Q. Which ${heading} Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1787,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1788,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 603,
    attributes: {
      heading: "BGauss Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:42.793Z",
      updatedAt: "2023-07-27T11:29:15.614Z",
      publishedAt: "2023-07-25T07:29:42.663Z",
      slug: "electric-scooters/bgauss",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2031,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2033,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2032,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 39,
          attributes: {
            name: "BGauss",
            createdAt: "2023-07-19T10:17:41.757Z",
            updatedAt: "2023-07-28T08:10:54.620Z",
            publishedAt: "2023-07-19T10:17:41.750Z",
            slug: "bgauss",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 8,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 591,
    attributes: {
      heading: "Hop Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.703Z",
      updatedAt: "2023-07-27T11:29:12.339Z",
      publishedAt: "2023-07-25T07:29:40.564Z",
      slug: "electric-scooters/hop",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1995,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1997,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1996,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 11,
          attributes: {
            name: "Hop",
            createdAt: "2023-06-26T10:13:00.472Z",
            updatedAt: "2023-07-31T11:48:22.875Z",
            publishedAt: "2023-06-26T10:22:21.597Z",
            slug: "hop",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 80,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 601,
    attributes: {
      heading: "Ampere Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:42.356Z",
      updatedAt: "2023-07-27T11:29:16.932Z",
      publishedAt: "2023-07-25T07:29:42.239Z",
      slug: "electric-scooters/ampere",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2025,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2026,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2027,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 34,
          attributes: {
            name: "Ampere",
            createdAt: "2023-07-19T10:17:40.264Z",
            updatedAt: "2023-07-28T08:10:52.832Z",
            publishedAt: "2023-07-19T10:17:40.248Z",
            slug: "ampere",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 2,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 629,
    attributes: {
      heading: "Yulu Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.814Z",
      updatedAt: "2023-07-27T11:29:16.996Z",
      publishedAt: "2023-07-25T07:29:46.781Z",
      slug: "electric-scooters/yulu",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2109,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2110,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2111,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 99,
          attributes: {
            name: "Yulu",
            createdAt: "2023-07-19T10:18:04.273Z",
            updatedAt: "2023-07-28T08:10:53.800Z",
            publishedAt: "2023-07-19T10:18:04.266Z",
            slug: "yulu",
            dealers_description: null,
            brand_id: 99,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 406,
    attributes: {
      heading: "Hero Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:03.106Z",
      updatedAt: "2023-07-27T11:29:16.905Z",
      publishedAt: "2023-07-25T06:55:03.030Z",
      slug: "hero-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1456,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1457,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1458,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 4,
          attributes: {
            name: "Hero",
            createdAt: "2023-06-08T10:59:58.716Z",
            updatedAt: "2023-07-31T11:48:22.675Z",
            publishedAt: "2023-06-08T11:00:01.236Z",
            slug: "hero",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 17,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 606,
    attributes: {
      heading: "Gemopai Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:43.143Z",
      updatedAt: "2023-07-27T11:29:15.674Z",
      publishedAt: "2023-07-25T07:29:43.112Z",
      slug: "electric-scooters/gemopai",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2040,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2041,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2042,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 46,
          attributes: {
            name: "Gemopai",
            createdAt: "2023-07-19T10:17:43.492Z",
            updatedAt: "2023-07-28T08:10:54.140Z",
            publishedAt: "2023-07-19T10:17:43.486Z",
            slug: "gemopai",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 15,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 590,
    attributes: {
      heading: "BAJAJ Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:40.495Z",
      updatedAt: "2023-07-27T11:29:15.322Z",
      publishedAt: "2023-07-25T07:29:40.451Z",
      slug: "electric-scooters/bajaj",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1994,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1992,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1993,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 6,
          attributes: {
            name: "BAJAJ",
            createdAt: "2023-06-14T07:05:41.987Z",
            updatedAt: "2023-07-31T11:48:22.921Z",
            publishedAt: "2023-06-14T07:05:43.255Z",
            slug: "bajaj",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 5,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 527,
    attributes: {
      heading: "Naked Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.531Z",
      updatedAt: "2023-07-27T11:29:13.581Z",
      publishedAt: "2023-07-25T07:09:34.498Z",
      slug: "new-bikes/naked-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1819,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1821,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1820,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 522,
    attributes: {
      heading: "Cafe Racer Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.024Z",
      updatedAt: "2023-07-27T11:29:15.515Z",
      publishedAt: "2023-07-25T07:09:33.994Z",
      slug: "new-bikes/cafe-racer-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1804,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1805,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1806,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 611,
    attributes: {
      heading: "PURE EV Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.357Z",
      updatedAt: "2023-07-27T11:29:17.035Z",
      publishedAt: "2023-07-25T07:29:44.220Z",
      slug: "electric-scooters/pure-ev",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2055,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2056,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2057,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 61,
          attributes: {
            name: "PURE EV",
            createdAt: "2023-07-19T10:17:48.713Z",
            updatedAt: "2023-07-28T08:10:53.001Z",
            publishedAt: "2023-07-19T10:17:48.708Z",
            slug: "pure-ev",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 36,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 626,
    attributes: {
      heading: "River Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.463Z",
      updatedAt: "2023-07-27T11:29:17.053Z",
      publishedAt: "2023-07-25T07:29:46.416Z",
      slug: "electric-scooters/river",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2102,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2100,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2101,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 95,
          attributes: {
            name: "River",
            createdAt: "2023-07-19T10:18:03.089Z",
            updatedAt: "2023-07-28T08:10:53.294Z",
            publishedAt: "2023-07-19T10:18:03.081Z",
            slug: "river",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 95,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 607,
    attributes: {
      heading: "Hero Electric Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:43.239Z",
      updatedAt: "2023-07-27T11:29:12.287Z",
      publishedAt: "2023-07-25T07:29:43.219Z",
      slug: "electric-scooters/hero-electric",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2043,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2044,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2045,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 48,
          attributes: {
            name: "Hero Electric",
            createdAt: "2023-07-19T10:17:44.020Z",
            updatedAt: "2023-07-31T11:48:22.851Z",
            publishedAt: "2023-07-19T10:17:44.015Z",
            slug: "hero-electric",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 18,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 409,
    attributes: {
      heading: "Lambretta Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.052Z",
      updatedAt: "2023-07-27T11:29:17.165Z",
      publishedAt: "2023-07-25T06:55:04.025Z",
      slug: "lambretta-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1465,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1466,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1467,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 26,
          attributes: {
            name: "Lambretta",
            createdAt: "2023-06-30T10:34:49.113Z",
            updatedAt: "2023-07-28T08:10:55.912Z",
            publishedAt: "2023-06-30T10:34:50.887Z",
            slug: "lambretta",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 27,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 517,
    attributes: {
      heading: "Sports Tourer Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:33.544Z",
      updatedAt: "2023-07-27T11:29:17.258Z",
      publishedAt: "2023-07-25T07:09:33.519Z",
      slug: "new-bikes/sports-tourer-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1789,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1790,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1791,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 325,
    attributes: {
      heading: "50 kmpl to 60 kmpl Best Mileage Bike",
      description:
        "Are you looking for the best 50 kmpl to 60 kmpl bikes in India? You have reached the right place because BikeJunction brings you a complete list of all the above 50 bikes in India for you on a single page. You can further find out about the price range, detailed specifications, expert reviews, ratings and images of 50 kmpl to 60 kmpl mileage bikes exclusively at BikeJunction. In India, Hero Splendor Plus, Hero Super Splendor, Hero Passion Pro are 3 most popular bike models with mileage between 50 kmpl to 60 kmpl. The list is created by our bike enthusiast expert based on user reviews, ratings, technologies and more to help make you a more informed decision. So, shortlist and compare your top 50 kmpl to 60 kmpl mileage bikes, and choose the ideal option for yourself.",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 50 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice. Therefore, we have crafted an extensive list under a single page to clear all your confusion and give you a fair idea of some of India’s best bike mileage above 50 kmpl by some of the leading manufacturers in the industry. Find below India’s top 3 bike models with mileage range between 50 kmpl to 60 kmpl.",
      createdAt: "2023-07-24T10:30:25.898Z",
      updatedAt: "2023-07-27T11:29:17.113Z",
      publishedAt: "2023-07-24T10:30:27.377Z",
      slug: "50kmpl-60kmpl-mileage-bikes",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 520,
    attributes: {
      heading: "Moped Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:33.831Z",
      updatedAt: "2023-07-27T11:29:17.207Z",
      publishedAt: "2023-07-25T07:09:33.794Z",
      slug: "new-bikes/moped-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1798,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1799,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1800,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 413,
    attributes: {
      heading: "Vespa Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.449Z",
      updatedAt: "2023-07-27T11:29:13.653Z",
      publishedAt: "2023-07-25T06:55:04.416Z",
      slug: "vespa-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1477,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1478,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1479,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 65,
          attributes: {
            name: "Vespa",
            createdAt: "2023-07-19T10:17:53.387Z",
            updatedAt: "2023-07-28T08:10:53.062Z",
            publishedAt: "2023-07-19T10:17:53.380Z",
            slug: "vespa",
            dealers_description: null,
            brand_id: 45,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 412,
    attributes: {
      heading: "BMW Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:55:04.340Z",
      updatedAt: "2023-07-27T11:29:16.275Z",
      publishedAt: "2023-07-25T06:55:04.310Z",
      slug: "bmw-scooters",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1474,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1475,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1476,
          question:
            "Q. Which Honda Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive scooter by Honda scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 40,
          attributes: {
            name: "BMW",
            createdAt: "2023-07-19T10:17:42.097Z",
            updatedAt: "2023-07-31T11:48:23.168Z",
            publishedAt: "2023-07-19T10:17:42.092Z",
            slug: "bmw",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 9,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 541,
    attributes: {
      heading: "30 kmpl to 40 kmpl Best Mileage Scooter",
      description:
        "Are you looking for the best 30 kmpl to 40 kmpl bikes in India? You have reached the right place because BikeJunction brings you a complete list of all the above 30 bikes in India for you on a single page. You can further find out about the price range, detailed specifications, expert reviews, ratings and images of 30 kmpl to 40 kmpl mileage bikes exclusively at BikeJunction. In India, Aprilia SR 125, Vespa SXL 150, Vespa SXL 125 are 3 most popular bike models with mileage between 30 kmpl to 40 kmpl. The list is created by our bike enthusiast expert based on user reviews, ratings, technologies and more to help make you a more informed decision. So, shortlist and compare your top 30 kmpl to 40 kmpl mileage bikes, and choose the ideal option for yourself.",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice. Therefore, we have crafted an extensive list under a single page to clear all your confusion and give you a fair idea of some of India’s best bike mileage above 30 kmpl by some of the leading manufacturers in the industry. Find below India’s top 3 bike models with mileage range between 30 kmpl to 40 kmpl.",
      createdAt: "2023-07-25T07:21:23.550Z",
      updatedAt: "2023-07-28T05:05:01.085Z",
      publishedAt: "2023-07-25T07:21:24.736Z",
      slug: "30kmpl-40kmpl-mileage-scooters",
      pageType: "scooterMileagePage",
      about_heading: "About 30 kmpl to 40 kmpl Best Mileage Scooters",
      listing_heading: "Find Other Best Mileage Scooter",
      Faq: [
        {
          id: 2165,
          question: "${heading}",
          answer: "${heading}\n",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 649,
    attributes: {
      heading: "Best Electric Scooters",
      description:
        "Are you looking for the best electric scooter in India which is smart, convenient, and eco-friendly? If yes, you have landed on the right page, where you can easily review, compare & buy best electric scooters in India. Get easy access to the best electric scooter in India 2023 from top brands like Ola electric, Hero Electric, Bajaj, TVS and more. Scroll down to find out more about the best electric scooters prices, specifications, features, battery range, power, etc.  ${heading}",
      aboutContent:
        "With electric vehicles becoming a hot topic in India, it’s high time you make the change. BikeJunction comes into the picture when it comes to choosing the best electric scooters in India. Our platform makes it easy to review, compare & choose the e-scooter that gives you the best performance, comfort and option to ride in style. Here we are answering your most asked question– “which is the best electric scooter in India 2022?” by serving the best-in-class models.If you are in the market for the best e scooter in India, you should know that electric scooters offer many advantages over petrol-powered scooters. Electric scooty are eco-friendly, as they have zero emissions and run on battery. They also have lower running costs, as they do not require frequent refuelling or maintenance. ${heading}",
      createdAt: "2023-07-26T17:18:54.652Z",
      updatedAt: "2023-07-28T07:46:14.107Z",
      publishedAt: "2023-07-26T17:18:54.631Z",
      slug: "electric-scooters/best",
      pageType: "bestPage",
      about_heading: "About Electric Scooters",
      listing_heading: "Electric Scooters in India",
      Faq: [
        {
          id: 2157,
          question: "Q. Which Electric Scooter Is Best In India?",
          answer:
            "A. Some of the best electric scooters in India are Ather 450X Gen 3, Ola s1 Pro, TVS iQube Electric, Vida V1 etc. ${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 643,
    attributes: {
      heading: "Latest Scooters in India",
      description:
        "Checkout a comprehensive list of ${heading} new models in India for you. New Scooter/scooty launch in India happen almost every month, there are 60 scooty models launched recently by 12 scooter/scooty manufacturers in last 6 months. Most affordable scooty model is Hero Xoom with estimated price range starting from Rs 68,599. The latest scooter/scooty launch in India is Honda Activa 7G with approximate price range of Rs 79,000. You can choose your preferred choice in the below list of lastest scooters.",
      aboutContent: "${heading} About Content",
      createdAt: "2023-07-26T16:39:54.134Z",
      updatedAt: "2023-07-28T05:39:09.668Z",
      publishedAt: "2023-07-26T16:39:54.123Z",
      slug: "latest-scooters",
      pageType: "latestPage",
      about_heading: "Find Latest Scooters",
      listing_heading: "Latest Scooters",
      Faq: [
        {
          id: 2152,
          question: "Q. Which Is The ${heading} Launched?",
          answer: "A. The latest scooter launched in India is Hero Xoom.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 656,
    attributes: {
      heading: "Bikes Under ₹90,000 Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.159Z",
      updatedAt: "2023-07-28T11:50:10.159Z",
      publishedAt: "2023-07-28T11:50:10.096Z",
      slug: "bikes-under-90000",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 660,
    attributes: {
      heading: "Bikes Under ₹15 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.558Z",
      updatedAt: "2023-07-28T11:50:10.558Z",
      publishedAt: "2023-07-28T11:50:10.327Z",
      slug: "bikes-under-15-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 661,
    attributes: {
      heading: "Bikes Under ₹30 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.601Z",
      updatedAt: "2023-07-28T11:50:10.601Z",
      publishedAt: "2023-07-28T11:50:10.379Z",
      slug: "bikes-under-30-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 602,
    attributes: {
      heading: "Benling Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:42.459Z",
      updatedAt: "2023-07-27T11:29:16.012Z",
      publishedAt: "2023-07-25T07:29:42.424Z",
      slug: "electric-scooters/benling",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2028,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2029,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2030,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 38,
          attributes: {
            name: "Benling",
            createdAt: "2023-07-19T10:17:41.486Z",
            updatedAt: "2023-07-28T08:10:55.310Z",
            publishedAt: "2023-07-19T10:17:41.474Z",
            slug: "benling",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 7,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 608,
    attributes: {
      heading: "Joy e-bike Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:43.383Z",
      updatedAt: "2023-07-27T11:29:16.176Z",
      publishedAt: "2023-07-25T07:29:43.308Z",
      slug: "electric-scooters/joy-e-bike",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2046,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2048,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2047,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 52,
          attributes: {
            name: "Joy e-bike",
            createdAt: "2023-07-19T10:17:45.190Z",
            updatedAt: "2023-07-28T08:10:53.480Z",
            publishedAt: "2023-07-19T10:17:45.185Z",
            slug: "joy-e-bike",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 23,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 612,
    attributes: {
      heading: "Simple Energy Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.429Z",
      updatedAt: "2023-07-27T11:29:17.243Z",
      publishedAt: "2023-07-25T07:29:44.411Z",
      slug: "electric-scooters/simple-energy",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2058,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2059,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2060,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 62,
          attributes: {
            name: "Simple Energy",
            createdAt: "2023-07-19T10:17:49.057Z",
            updatedAt: "2023-07-28T08:10:55.610Z",
            publishedAt: "2023-07-19T10:17:49.051Z",
            slug: "simple-energy",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 39,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 525,
    attributes: {
      heading: "Commuter Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.326Z",
      updatedAt: "2023-07-27T11:29:13.844Z",
      publishedAt: "2023-07-25T07:09:34.295Z",
      slug: "new-bikes/commuter-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1813,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1815,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1814,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 615,
    attributes: {
      heading: "Fujiyama Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.864Z",
      updatedAt: "2023-07-27T11:29:13.838Z",
      publishedAt: "2023-07-25T07:29:44.817Z",
      slug: "electric-scooters/fujiyama",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2069,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2067,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2068,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 67,
          attributes: {
            name: "Fujiyama",
            createdAt: "2023-07-19T10:17:54.072Z",
            updatedAt: "2023-07-28T08:10:54.232Z",
            publishedAt: "2023-07-19T10:17:54.066Z",
            slug: "fujiyama",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 50,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 534,
    attributes: {
      heading: "Dirt Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:35.257Z",
      updatedAt: "2023-07-27T11:29:13.917Z",
      publishedAt: "2023-07-25T07:09:35.229Z",
      slug: "new-bikes/dirt-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1840,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1841,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1842,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 523,
    attributes: {
      heading: "Off Road Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.127Z",
      updatedAt: "2023-07-27T11:29:16.344Z",
      publishedAt: "2023-07-25T07:09:34.088Z",
      slug: "new-bikes/off-road-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1807,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1808,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1809,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 531,
    attributes: {
      heading: "Maxi Scooter Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.971Z",
      updatedAt: "2023-07-27T11:29:14.328Z",
      publishedAt: "2023-07-25T07:09:34.902Z",
      slug: "new-bikes/maxi-scooter-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1831,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1832,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1833,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 528,
    attributes: {
      heading: "Electric Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.621Z",
      updatedAt: "2023-07-27T11:29:14.413Z",
      publishedAt: "2023-07-25T07:09:34.591Z",
      slug: "new-bikes/electric-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1822,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1823,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1824,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 624,
    attributes: {
      heading: "Motovolt Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.281Z",
      updatedAt: "2023-07-27T11:29:17.341Z",
      publishedAt: "2023-07-25T07:29:46.231Z",
      slug: "electric-scooters/motovolt",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2094,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2096,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2095,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 89,
          attributes: {
            name: "Motovolt",
            createdAt: "2023-07-19T10:18:01.422Z",
            updatedAt: "2023-07-28T08:10:53.111Z",
            publishedAt: "2023-07-19T10:18:01.414Z",
            slug: "motovolt",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 88,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 524,
    attributes: {
      heading: "Bicycle Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:34.231Z",
      updatedAt: "2023-07-27T11:29:13.769Z",
      publishedAt: "2023-07-25T07:09:34.193Z",
      slug: "new-bikes/bicycle",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1810,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1812,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1811,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 614,
    attributes: {
      heading: "Vespa Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.740Z",
      updatedAt: "2023-07-27T11:29:16.375Z",
      publishedAt: "2023-07-25T07:29:44.702Z",
      slug: "electric-scooters/vespa",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2064,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2066,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2065,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 65,
          attributes: {
            name: "Vespa",
            createdAt: "2023-07-19T10:17:53.387Z",
            updatedAt: "2023-07-28T08:10:53.062Z",
            publishedAt: "2023-07-19T10:17:53.380Z",
            slug: "vespa",
            dealers_description: null,
            brand_id: 45,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 616,
    attributes: {
      heading: "Liger Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:44.979Z",
      updatedAt: "2023-07-27T11:29:17.346Z",
      publishedAt: "2023-07-25T07:29:44.957Z",
      slug: "electric-scooters/liger",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2072,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2070,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2071,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 74,
          attributes: {
            name: "Liger",
            createdAt: "2023-07-19T10:17:56.222Z",
            updatedAt: "2023-07-28T08:10:56.331Z",
            publishedAt: "2023-07-19T10:17:56.216Z",
            slug: "liger",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 66,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 622,
    attributes: {
      heading: "Quantum Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:45.918Z",
      updatedAt: "2023-07-27T11:29:13.704Z",
      publishedAt: "2023-07-25T07:29:45.838Z",
      slug: "electric-scooters/quantum",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2088,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2089,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2090,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 87,
          attributes: {
            name: "Quantum",
            createdAt: "2023-07-19T10:18:01.035Z",
            updatedAt: "2023-07-28T08:10:54.476Z",
            publishedAt: "2023-07-19T10:18:01.028Z",
            slug: "quantum",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 85,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 536,
    attributes: {
      heading: "Best Scooter Under 70000",
      description:
        "Are you in a search for the best Scooter under 70000. BikeJunction, an online platform, comes with a page dedicated for Scooter under 70000. Here you get all 70 under 70000 in India. We all have a budget while buying Scooter and we have prepared a list of all Scooter under 70000 including the electric Scooter in this range. Top brands which are available 70000 are Hero, Honda, TVS. The most popular Scooter under 70000 is Honda Dio, Hero Pleasure + Xtec, TVS Scooty Pep Plus. Get the reviews, specifications, features, prices, variants, and colours of Scooter under 70000 under one roof. Here you can also find the all electric Scooter under 70000.",
      aboutContent:
        "Are you looking to buy a good Scooter under 70000?\n\nBikeJunction gives you information about all the Scooter coming 70000. You can get all the Scooter under 70000 with complete specifications. The Scooter with a stylish body that catches everyone's eyes is available in the 70000.",
      createdAt: "2023-07-25T07:12:10.021Z",
      updatedAt: "2023-07-27T11:29:14.533Z",
      publishedAt: "2023-07-25T07:12:39.334Z",
      slug: "new-scooters/scooters-under-70000",
      pageType: "scooterPricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1846,
          question: "Q. Which Is The Best Scooter Under 70000?",
          answer:
            "A. The best Scooter under 70000 are Honda Dio, Hero Pleasure + Xtec, TVS Scooty Pep Plus.",
        },
        {
          id: 1847,
          question: "Q. How Many Scooters Are Available Under 70000 Range?",
          answer:
            "A. There are 70 models under 70000 available at BikeJunction.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 532,
    attributes: {
      heading: "Scrambler Bikes",
      description:
        "Explore the widest range of the best ${category.attributes.title} bike in India. Get all the inside scoop on all the popular ${category.attributes.title} bikes, including Yamaha FZ S FI, Bajaj Pulsar NS200, Suzuki Gixxer, Honda Hornet 2.0 & TVS Apache RR310. Get your hands on all information, including accurate ex-showroom prices, mileage, acceleration, engine power, and more. Get your hands on the best ${category.attributes.title} bike from leading brands like Yamaha, Bajaj, Suzuki, Honda & TVS. ",
      aboutContent: "${${category.attributes.title}} About Content",
      createdAt: "2023-07-25T07:09:35.059Z",
      updatedAt: "2023-07-27T11:29:16.843Z",
      publishedAt: "2023-07-25T07:09:35.032Z",
      slug: "new-bikes/scrambler-bikes",
      pageType: "categoryPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1834,
          question:
            "Q. Which Sports Bikes Are The Highest-Selling 2-Wheelers In India?",
          answer:
            "A. Yamaha FZ S FI, Bajaj Pulsar NS200, and Yamaha R15S are the highest-selling 2-wheelers in the country.",
        },
        {
          id: 1835,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
        {
          id: 1836,
          question: "Q. Which Sports Bikes Have The Highest Mileage In India?",
          answer: "A. Yamaha FZ25 delivers the highest mileage in the country.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 567,
    attributes: {
      heading: "Birla Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:59.098Z",
      updatedAt: "2023-07-27T11:29:12.937Z",
      publishedAt: "2023-07-25T07:28:59.055Z",
      slug: "electric-bikes/birla",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1923,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1924,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1925,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 75,
          attributes: {
            name: "Birla",
            createdAt: "2023-07-19T10:17:56.534Z",
            updatedAt: "2023-07-28T08:10:52.881Z",
            publishedAt: "2023-07-19T10:17:56.527Z",
            slug: "birla",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 67,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 623,
    attributes: {
      heading: "Vida Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.022Z",
      updatedAt: "2023-07-27T11:29:11.108Z",
      publishedAt: "2023-07-25T07:29:45.992Z",
      slug: "electric-scooters/vida",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2091,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2093,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2092,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 88,
          attributes: {
            name: "Vida",
            createdAt: "2023-07-19T10:18:01.262Z",
            updatedAt: "2023-07-28T08:10:56.179Z",
            publishedAt: "2023-07-19T10:18:01.256Z",
            slug: "vida",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 87,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 651,
    attributes: {
      heading: "Upcoming Scooters in India",
      description:
        "18 models are listed here, and you can get all the details about them exclusively at our website. These Scooters are becoming the favourite ways of travelling in urban and rural areas. Upcoming scooter price in India starts from Rs. ₹ 80,000 - 90,000 and goes up to Rs. ₹ 7.2 - 7.3 Lakh. BikeJunction has everything you need for the upcoming scooters in India 2023. In this section, you can check out all the upcoming scooters, including the maxi scooters and the upcoming electric scooty. ${heading}",
      aboutContent:
        "Are You Waiting For The Perfect Scooter?<br/>Gearless scooters are the trend, and many companies have entered this industry. This section has been the fastest-growing segment in the past years and has dominated the two-wheeler market. Along with the complete list of the upcoming scooter in India 2022, you get the option to filter the upcoming scooter on your choices. In addition, our team provides you with the estimated price so you can plan your next vehicle according to your budget. ${heading}",
      createdAt: "2023-07-26T17:35:30.525Z",
      updatedAt: "2023-07-30T13:16:46.423Z",
      publishedAt: "2023-07-26T17:35:30.503Z",
      slug: "upcoming-scooters",
      pageType: "upcomingPage",
      about_heading: "About Upcoming Scooters",
      listing_heading: "Upcoming Scooters",
      Faq: [
        {
          id: 2159,
          question: "Q. Which New Scooters Are Coming To India In 2023?",
          answer:
            "A. The new scooters which are coming to India in 2023 are Honda Activa 7G,Lambretta V200,Lambretta V125.  ${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 376,
    attributes: {
      heading: "Husqvarna Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:02.341Z",
      updatedAt: "2023-07-27T11:29:12.439Z",
      publishedAt: "2023-07-25T06:48:02.316Z",
      slug: "husqvarna-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1366,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1368,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1367,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 49,
          attributes: {
            name: "Husqvarna",
            createdAt: "2023-07-19T10:17:44.347Z",
            updatedAt: "2023-07-31T11:48:22.828Z",
            publishedAt: "2023-07-19T10:17:44.339Z",
            slug: "husqvarna",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 20,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 575,
    attributes: {
      heading: "Evtric Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.028Z",
      updatedAt: "2023-07-27T11:29:13.087Z",
      publishedAt: "2023-07-25T07:28:59.975Z",
      slug: "electric-bikes/evtric",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1948,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1947,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1949,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 86,
          attributes: {
            name: "Evtric",
            createdAt: "2023-07-19T10:18:00.728Z",
            updatedAt: "2023-07-28T08:10:56.280Z",
            publishedAt: "2023-07-19T10:18:00.722Z",
            slug: "evtric",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 84,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 635,
    attributes: {
      heading: "Stella Moto Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:47.490Z",
      updatedAt: "2023-07-27T11:29:14.406Z",
      publishedAt: "2023-07-25T07:29:47.462Z",
      slug: "electric-scooters/stella-moto",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2127,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2129,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2128,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 108,
          attributes: {
            name: "Stella Moto",
            createdAt: "2023-07-19T10:18:06.780Z",
            updatedAt: "2023-07-28T08:10:53.574Z",
            publishedAt: "2023-07-19T10:18:06.772Z",
            slug: "stella-moto",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 110,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 540,
    attributes: {
      heading: "Below 30 kmpl Best Mileage Scooter",
      description:
        "Are you finding India’s best below 30 kmpl mileage bikes that suits your needs perfectly? You’ve reached the right place. BikeJunction brings you the list of India’s most popular below 30 kmpl mileage bikes so you can easily shortlist and compare your top choices. Along with the list, our bike experts also provide you with all the highlighting features the bikes are manufactured with. You also get the updated on-road price range below 30 kmpl mileage bikes in India. The top 3 models in India with mileage below 30 kmpl are Keeway Sixties 300i, Keeway Vieste 300, BMW C 400 GT.",
      aboutContent:
        "India is one of the largest two-wheeler markets in the world, with over 17.7 million motorcycles sold per year. With increasing fuel prices and the need for easy commutation, getting a highly fuel-efficient bike has become more than a necessity for bike buyers in India. And due to the increasing demand, several manufacturers of 2-wheelers have shifted their focus on producing bike mileage below 30 kmpl. Today, buyers are spoilt with choices in the category that has made their decision-making more tough and confusing. Keeping that in mind, BikeJunction brings an extensively researched list of the top and most popular bikes mileage above 30, so you can easily shortlist and compare your best choices in the segment.",
      createdAt: "2023-07-25T07:20:28.632Z",
      updatedAt: "2023-07-27T11:29:13.540Z",
      publishedAt: "2023-07-25T07:20:29.770Z",
      slug: "under-30kmpl-mileage-scooters",
      pageType: "scooterMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 556,
    attributes: {
      heading: "Emflux Motors Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:28:57.892Z",
      updatedAt: "2023-07-27T11:29:14.977Z",
      publishedAt: "2023-07-25T07:28:57.860Z",
      slug: "electric-bikes/emflux-motors",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1890,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1891,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1892,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 44,
          attributes: {
            name: "Emflux Motors",
            createdAt: "2023-07-19T10:17:43.043Z",
            updatedAt: "2023-07-28T08:10:55.488Z",
            publishedAt: "2023-07-19T10:17:43.037Z",
            slug: "emflux-motors",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 13,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 652,
    attributes: {
      heading: "Upcoming Electric Bikes",
      description:
        "BikeJunction brings you a compiled list of all the upcoming electric bikes in India 2023, so you can find one that fits your requirements and budget. With us, you can easily access complete information on its battery type, range, top speed and price in India. This list includes popular brands, upcoming models and their release dates as well. We are regularly updating the list and the information on each new upcoming e bikes in India. So, stay tuned with us to get the latest updates on upcoming EV bikes in India.\n${heading}",
      aboutContent:
        "${heading} India has been experiencing an EV revolution in its auto industry like never before. The popularity of electric bikes and scooters is growing at an exponential rate. Upcoming EV bikes in India are all the rave these days. People now are finally understanding the importance of reducing their carbon footprint. Hence, they are looking for greener alternatives for commuting. With such a growing demand for electric bikes, many industry leaders like Hero Electric and TVS are coming out with multiple electric bike models. In addition to them, numerous startups are also emerging in the market, like Ather Energy and Ola Electric, coming out with future-forward electric bikes. Furthermore, OEMs like Revolt and Kratos ruled the market for upcoming electric bikes in India 2023 with great sales figures. The year-2023 will be even more exciting for customers and the auto market. Several other industry leaders like Harley Davidson, Kawasaki, Ola Electric, Royal Enfield and Hero are also set to enter the market with their upcoming e bikes in India. Unlike a few years ago, customers are now spoiled with choices, which has made decision-making more difficult. Therefore, we have created this page entirely dedicated to all the upcoming electric bikes in India 2023.",
      createdAt: "2023-07-26T17:40:28.957Z",
      updatedAt: "2023-07-30T13:32:35.456Z",
      publishedAt: "2023-07-26T17:40:28.936Z",
      slug: "electric-bikes/upcoming",
      pageType: "upcomingPage",
      about_heading: "About Electric Upcoming Bikes",
      listing_heading: "Upcoming Electric Bikes",
      Faq: [
        {
          id: 2160,
          question:
            "Q. Which Are The Top Brands Coming Out With Upcoming Electric Bikes In India 2023?",
          answer:
            "A. Harley Davidson, Kawasaki, Ola Electric, Royal Enfield and Hero Electric are the top brands coming out with EV bikes in India this year. ${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 627,
    attributes: {
      heading: "Vioma Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.569Z",
      updatedAt: "2023-07-27T11:29:11.383Z",
      publishedAt: "2023-07-25T07:29:46.533Z",
      slug: "electric-scooters/vioma",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2103,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2104,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2105,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 96,
          attributes: {
            name: "Vioma",
            createdAt: "2023-07-19T10:18:03.496Z",
            updatedAt: "2023-07-28T08:10:53.906Z",
            publishedAt: "2023-07-19T10:18:03.488Z",
            slug: "vioma",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 96,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 628,
    attributes: {
      heading: "Eeve Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:46.641Z",
      updatedAt: "2023-07-27T11:29:16.570Z",
      publishedAt: "2023-07-25T07:29:46.621Z",
      slug: "electric-scooters/eeve",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2106,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2107,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2108,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 98,
          attributes: {
            name: "Eeve",
            createdAt: "2023-07-19T10:18:04.001Z",
            updatedAt: "2023-07-28T08:10:52.383Z",
            publishedAt: "2023-07-19T10:18:03.989Z",
            slug: "eeve",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 98,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 631,
    attributes: {
      heading: "Everve Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:47.122Z",
      updatedAt: "2023-07-27T11:29:12.120Z",
      publishedAt: "2023-07-25T07:29:47.091Z",
      slug: "electric-scooters/everve",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2116,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2115,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2117,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 101,
          attributes: {
            name: "Everve",
            createdAt: "2023-07-19T10:18:04.940Z",
            updatedAt: "2023-07-28T08:10:53.716Z",
            publishedAt: "2023-07-19T10:18:04.922Z",
            slug: "everve",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 101,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 370,
    attributes: {
      heading: "Aprilia Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T06:48:01.534Z",
      updatedAt: "2023-07-27T11:29:13.055Z",
      publishedAt: "2023-07-25T06:48:01.505Z",
      slug: "aprilia-bikes",
      pageType: "brandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1348,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1349,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1350,
          question: "Q. Which Honda Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive bike by Honda bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 35,
          attributes: {
            name: "Aprilia",
            createdAt: "2023-07-19T10:17:40.560Z",
            updatedAt: "2023-07-31T11:48:22.712Z",
            publishedAt: "2023-07-19T10:17:40.552Z",
            slug: "aprilia",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 3,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 630,
    attributes: {
      heading: "Kyte Energy Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:47.023Z",
      updatedAt: "2023-07-27T11:29:14.780Z",
      publishedAt: "2023-07-25T07:29:46.903Z",
      slug: "electric-scooters/kyte-energy",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2112,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2113,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2114,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 100,
          attributes: {
            name: "Kyte Energy",
            createdAt: "2023-07-19T10:18:04.635Z",
            updatedAt: "2023-07-28T08:10:52.912Z",
            publishedAt: "2023-07-19T10:18:04.621Z",
            slug: "kyte-energy",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 100,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 634,
    attributes: {
      heading: "BattRE Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:47.399Z",
      updatedAt: "2023-07-27T11:29:11.646Z",
      publishedAt: "2023-07-25T07:29:47.358Z",
      slug: "electric-scooters/battre",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2124,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2126,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2125,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 107,
          attributes: {
            name: "BattRE",
            createdAt: "2023-07-19T10:18:06.494Z",
            updatedAt: "2023-07-28T08:10:54.277Z",
            publishedAt: "2023-07-19T10:18:06.489Z",
            slug: "battre",
            dealers_description: null,
            brand_id: 108,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 323,
    attributes: {
      heading: "30 kmpl to 40 kmpl Best Mileage Bike",
      description:
        "Are you looking for the best 30 kmpl to 40 kmpl bikes in India? You have reached the right place because BikeJunction brings you a complete list of all the above 30 bikes in India for you on a single page. You can further find out about the price range, detailed specifications, expert reviews, ratings and images of 30 kmpl to 40 kmpl mileage bikes exclusively at BikeJunction. In India, Bajaj Pulsar NS200, Yamaha R15S, Royal Enfield Meteor 350 are 3 most popular bike models with mileage between 30 kmpl to 40 kmpl.",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice. Therefore, we have crafted an extensive list under a single page to clear all your confusion and give you a fair idea of some of India’s best bike mileage above 30 kmpl by some of the leading manufacturers in the industry. Find below India’s top 3 bike models with mileage range between 30 kmpl to 40 kmpl.",
      createdAt: "2023-07-24T10:29:05.646Z",
      updatedAt: "2023-07-27T11:29:13.575Z",
      publishedAt: "2023-07-24T10:29:07.031Z",
      slug: "30kmpl-40kmpl-mileage-bikes",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 646,
    attributes: {
      heading: "Best Bikes in India",
      description:
        "Say goodbye to endless browsing & hello to a streamlined experience of finding all the best bikes in India in one place. Get easy access to all the best bikes India including their ex-showroom prices, engine specifications, performance metrics, mileage figures, etc. On this page, you get all the bikes produced by India’s leading manufacturers, including Hero, Honda, Bajaj, TVS, Royal Enfield and more. Some of the best bikes to buy that deliver exhilarating performances are Bajaj Platina 100, Hero HF Deluxe, TVS Radeon, etc ${heading}",
      aboutContent:
        "In recent years, India has witnessed a remarkable growth in the number of motorcycle demand, making them a ubiquitous sight on bustling streets. This unprecedented rise is fueled by several factors, including a growing population, urbanisation & better economy. Another reason for the motorcycle’s rising popularity is its affordability, fuel efficiency, manoeuvrability & versatility. Moreover, the development and availability of a wide range of models catering to various segments of the market, coupled with aggressive marketing strategies by manufacturers, have further propelled the popularity of motorcycles in India. This surge in demand reflects the changing transportation preferences and highlights the role motorcycles play in addressing the evolving needs of a dynamic and aspirational society seeking reliable and accessible mobility options.\n${heading}",
      createdAt: "2023-07-26T17:04:50.939Z",
      updatedAt: "2023-07-28T07:11:55.888Z",
      publishedAt: "2023-07-26T17:04:50.896Z",
      slug: "best-bikes-in-india",
      pageType: "bestPage",
      about_heading: "About Best Bikes",
      listing_heading: "Popular Bikes of 2023",
      Faq: [
        {
          id: 2154,
          question: "Q. Which Are The Best Top 5 Bike Brands In India?",
          answer:
            "A. Hero, Honda, Bajaj, TVS & Royal Enfield are the top 5 bike brands in India.\n${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 356,
    attributes: {
      heading: "Best Bike Under 2.5 lakh",
      description:
        "Are you in a search for the best Bike under 2.5 lakh. BikeJunction, an online platform, comes with a page dedicated for Bike under 2.5 lakh. Here you get all 197 under 2.5 lakh in India. We all have a budget while buying Bike and we have prepared a list of all Bike under 2.5 lakh including the electric Bike in this range. Top brands which are available 2.5 lakh are Hero, Honda, TVS. The most popular Bike under 2.5 lakh is Hero Splendor Plus, Honda Shine, Hero HF Deluxe. Get the reviews, specifications, features, prices, variants, and colours of Bike under 2.5 lakh under one roof. Here you can also find the all electric Bike under 2.5 lakh.",
      aboutContent:
        "Are you looking to buy a good Bike under 2.5 lakh?\n\nBikeJunction gives you information about all the Bike coming 2.5 lakh. You can get all the Bike under 2.5 lakh with complete specifications. The Bike with a stylish body that catches everyone's eyes is available in the 2.5 lakh.",
      createdAt: "2023-07-24T11:31:52.887Z",
      updatedAt: "2023-07-27T11:29:15.134Z",
      publishedAt: "2023-07-24T11:31:54.137Z",
      slug: "new-bikes/bikes-under-2.5-lakh",
      pageType: "bikePricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1214,
          question: "Q. Which Is The Best Bike Under 2.5 Lakh?",
          answer:
            "A. The best Bike under 2.5 lakh are Hero Splendor Plus, Honda Shine, Hero HF Deluxe.\n",
        },
        {
          id: 1215,
          question: "Q. How Many Bikes Are Available Under 2.5 Lakh Range?",
          answer:
            "A. There are 197 models under 2.5 lakh available at BikeJunction.\n",
        },
        {
          id: 1216,
          question: "Q. Which Is The Best Mileage Bike Under 2.5 Lakh Range?",
          answer:
            "A. The best mileage Bike under 2.5 lakh is Hero Splendor Plus.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 354,
    attributes: {
      heading: "Best Bike Under 1.5 lakh",
      description:
        "Discover the best bike under 1.5 lakh that combines power, style, and affordability from leading brands like Bajaj, Yamaha, Royal Enfield, TVS, Keeway, etc. Experience the thrill of riding popular bikes such as the Bajaj Avenger 400, Yamaha WR 155R, TVS Zeppelin, Royal Enfield Bullet 350 Next Gen &  Keeway SR 250. Get updated best bikes under 1.5 lakh on road price & their robust engines, advanced features, and impressive handling. Whether you're a city commuter or an adventure enthusiast, our selection of bikes under 1.5 lakh caters to diverse preferences.",
      aboutContent:
        "Our commitment to transparency & reliability ensures that you receive updated, accurate information about all bikes under 1.5 lakh, including comprehensive specifications, key features, pricing details, and expert reviews. We understand that choosing the ideal bike requires a deep understanding of its capabilities. With us, you get all the knowledge needed to make an informed decision that perfectly aligns with your unique preferences.",
      createdAt: "2023-07-24T11:27:25.581Z",
      updatedAt: "2023-07-28T04:50:42.167Z",
      publishedAt: "2023-07-24T11:27:31.792Z",
      slug: "new-bikes/bikes-under-1.5-lakh",
      pageType: "bikePricePage",
      about_heading: "Bikes Under 1.5 lakh Overview",
      listing_heading: "Popular Bike under 1.5 lakh",
      Faq: [
        {
          id: 1209,
          question: "Q. Which Is The Best Bike Under 1.5 Lakh?",
          answer:
            "A. The ${heading} are Bajaj Avenger 400, Yamaha WR 155R, TVS Zeppelin, Royal Enfield Bullet 350 Next Gen & Keeway SR 250.\n",
        },
        {
          id: 1210,
          question: "Q. How Many Bikes Are Available Under 1.5 Lakh Range?",
          answer:
            "A. There are 118 models under 1.5 lakh available at BikeJunction.\n",
        },
        {
          id: 1211,
          question: "Q. Which Is The Best Mileage Bike Under 1.5 Lakh Range?",
          answer:
            "A. The best mileage Bike under 1.5 lakh is Kawasaki Ninja 125, offering 48 kmpl mileage.\n",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 577,
    attributes: {
      heading: "Evoke Electric Bikes",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:00.324Z",
      updatedAt: "2023-07-27T11:29:16.106Z",
      publishedAt: "2023-07-25T07:29:00.275Z",
      slug: "electric-bikes/evoke",
      pageType: "electricBikeBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1953,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1955,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
        {
          id: 1954,
          question:
            "Q. Which Honda Electric Bike Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric bike by Honda electric bikes priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 91,
          attributes: {
            name: "Evoke",
            createdAt: "2023-07-19T10:18:01.985Z",
            updatedAt: "2023-07-28T08:10:55.989Z",
            publishedAt: "2023-07-19T10:18:01.979Z",
            slug: "evoke",
            dealers_description: null,
            brand_id: 90,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 353,
    attributes: {
      heading: "Best Bike Under 1 lakh",
      description:
        "Find a curated selection of all the top bikes under 1 lakh from all the acclaimed brands like Suzuki, Hero, Honda, Bajaj, TVS, etc. Whether you’re looking for efficient commuters, stylish cruisers or sporty rides, we have the ideal bike for you. Explore the best bike under 1 lakh, like Suzuki GSX S125, Hero Xtreme 200R, TVS Raider 125, Honda SP 125 & Bajaj Pulsar 125. Learn every detailed spec, including ex-showroom price, engine power, mileage and more. So, start your search with us today!.",
      aboutContent:
        "f you're on the lookout for a reasonable yet thrilling two-wheeler experience, you've come to the right place. In a world of budget-friendly rides, you'll discover many options that combines performance, style, and value for money. Whether you're a daily commuter seeking fuel efficiency, an enthusiast craving adrenaline-pumping adventures, or a practical rider seeking versatility, bikes under 1 lakh offer a perfect blend of affordability and excitement.",
      createdAt: "2023-07-24T11:25:57.018Z",
      updatedAt: "2023-07-27T11:29:17.423Z",
      publishedAt: "2023-07-24T11:26:07.845Z",
      slug: "new-bikes/bikes-under-1-lakh",
      pageType: "bikePricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1208,
          question: "Q. Which Is The Best Bike Under 1 Lakh?",
          answer:
            "A. The best Bike under 1 lakh are Suzuki GSX S125, Hero Xtreme 200R, TVS Raider 125, Honda SP 125 & Bajaj Pulsar 125.\n",
        },
        {
          id: 1207,
          question: "Q. How Many Bikes Are Available Under 1 Lakh Range?",
          answer:
            "A. There are 46 models under 1 lakh available at BikeJunction.\n",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 357,
    attributes: {
      heading: "Best Bike Under 3 lakh",
      description:
        "Are you in a search for the best Bike under 3 lakh. BikeJunction, an online platform, comes with a page dedicated for Bike under 3 lakh. Here you get all 224 under 3 lakh in India. We all have a budget while buying Bike and we have prepared a list of all Bike under 3 lakh including the electric Bike in this range. Top brands which are available 3 lakh are Hero, Honda, TVS. The most popular Bike under 3 lakh is Hero Splendor Plus, Honda Shine, Hero HF Deluxe. Get the reviews, specifications, features, prices, variants, and colours of Bike under 3 lakh under one roof. Here you can also find the all electric Bike under 3 lakh.",
      aboutContent:
        "Are you looking to buy a good Bike under 3 lakh?\n\nBikeJunction gives you information about all the Bike coming 3 lakh. You can get all the Bike under 3 lakh with complete specifications. The Bike with a stylish body that catches everyone's eyes is available in the 3 lakh.",
      createdAt: "2023-07-24T11:33:26.719Z",
      updatedAt: "2023-07-27T11:29:14.182Z",
      publishedAt: "2023-07-24T11:33:28.178Z",
      slug: "new-bikes/bikes-under-3-lakh",
      pageType: "bikePricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1217,
          question: "Q. Which Is The Best Bike Under 3 Lakh?",
          answer:
            "A. The best Bike under 3 lakh are Hero Splendor Plus, Honda Shine, Hero HF Deluxe.\n",
        },
        {
          id: 1218,
          question: "Q. How Many Bikes Are Available Under 3 Lakh Range?",
          answer:
            "A. There are 224 models under 3 lakh available at BikeJunction.\n",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 641,
    attributes: {
      heading: "Amo Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:56.262Z",
      updatedAt: "2023-07-27T11:29:14.255Z",
      publishedAt: "2023-07-25T07:29:56.227Z",
      slug: "electric-scooters/amo",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2147,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2146,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2145,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 117,
          attributes: {
            name: "Amo",
            createdAt: "2023-07-19T10:18:09.122Z",
            updatedAt: "2023-07-28T08:10:55.564Z",
            publishedAt: "2023-07-19T10:18:09.117Z",
            slug: "amo",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 121,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 636,
    attributes: {
      heading: "EKO TEJAS Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:55.867Z",
      updatedAt: "2023-07-27T11:29:11.761Z",
      publishedAt: "2023-07-25T07:29:55.850Z",
      slug: "electric-scooters/eko-tejas",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2130,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2131,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2132,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 111,
          attributes: {
            name: "EKO TEJAS",
            createdAt: "2023-07-19T10:18:07.589Z",
            updatedAt: "2023-07-28T08:10:53.361Z",
            publishedAt: "2023-07-19T10:18:07.583Z",
            slug: "eko-tejas",
            dealers_description: null,
            brand_id: 114,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 639,
    attributes: {
      heading: "ADMS Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:56.096Z",
      updatedAt: "2023-07-27T11:29:15.007Z",
      publishedAt: "2023-07-25T07:29:56.079Z",
      slug: "electric-scooters/adms",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2139,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2140,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2141,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 114,
          attributes: {
            name: "ADMS",
            createdAt: "2023-07-19T10:18:08.186Z",
            updatedAt: "2023-07-28T08:10:52.553Z",
            publishedAt: "2023-07-19T10:18:08.180Z",
            slug: "adms",
            dealers_description: null,
            brand_id: 117,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 647,
    attributes: {
      heading: "Best Scooters in India",
      description:
        "Discover the best scooters in India at your fingertips! This page gives you easy access to a comprehensive list of all the best scooty in India from leading brands like TVS, Honda, Hero, Suzuki & Yamaha. From their price & engine capacity to its mileage, brakes, suspension & more, we’ve got you covered. Explore the highest-selling scooter models like Honda Activa 125, TVS Jupiter, Suzuki Access 125 & Hero Pleasure + Xtec. Your perfect scooter awaits – start your search with us today! \n\n${heading}",
      aboutContent:
        "Welcome to our one-stop destination for all things scooters in India! So, if you are browsing through the internet to find an ideal mode of transportation that is a perfect combination of style, efficiency & reliability, you’ve come to the right place. So, whether you’re a daily commuter searching for a highly fuel-efficient option or looking for a more powerful ride, this page will provide you with it all. <br/>Our page will give you access to a complete list of all the best scooters in India. Moreover, you can easily sort the list according to budget range (low to high or high to low), popularity, mileage and latest models. Along with the complete list, you can access detailed specifications covering everything from engine capacity to mileage, brakes, suspension, and much more.<br/>With so many options in the Indian market, finding the best scooter for all your needs might make you feel confused and overwhelmed. This is why we have created a smart and easy-to-use scooter comparison tool. This tool lets you compare your favourite scooter head to head with each other to help you make an educated decision.  ${heading}",
      createdAt: "2023-07-26T17:10:40.115Z",
      updatedAt: "2023-07-28T07:16:50.030Z",
      publishedAt: "2023-07-26T17:10:40.097Z",
      slug: "best-scooters-in-india",
      pageType: "bestPage",
      about_heading: "About Best Scooters",
      listing_heading: "Popular Scooters of 2023",
      Faq: [
        {
          id: 2155,
          question: "Q. Which Are The Best Top 5 Scooter Brands In India?",
          answer:
            "A. TVS, Honda, Hero, Suzuki & Yamaha are the top 5 scooter brands in India. ${heading}",
        },
        {
          id: 2166,
          question: null,
          answer: null,
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 640,
    attributes: {
      heading: "Zelio Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:56.169Z",
      updatedAt: "2023-07-27T11:29:15.957Z",
      publishedAt: "2023-07-25T07:29:56.146Z",
      slug: "electric-scooters/zelio",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2142,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2143,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2144,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 115,
          attributes: {
            name: "Zelio",
            createdAt: "2023-07-19T10:18:08.449Z",
            updatedAt: "2023-07-28T08:10:55.523Z",
            publishedAt: "2023-07-19T10:18:08.438Z",
            slug: "zelio",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 119,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 542,
    attributes: {
      heading: "40 kmpl to 50 kmpl Best Mileage Scooter",
      description:
        "Are you looking for the best 40 kmpl to 50 kmpl bikes in India? You have reached the right place because BikeJunction brings you a complete list of all the above 40 bikes in India for you on a single page. You can further find out about the price range, detailed specifications, expert reviews, ratings and images of 40 kmpl to 50 kmpl mileage bikes exclusively at BikeJunction. In India, Honda Activa 125, Hero Pleasure + Xtec, TVS Scooty Pep Plus are 3 most popular bike models with mileage between 40 kmpl to 50 kmpl. The list is created by our bike enthusiast expert based on user reviews, ratings, technologies and more to help make you a more informed decision. So, shortlist and compare your top 40 kmpl to 50 kmpl mileage bikes, and choose the ideal option for yourself.",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 40 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice. Therefore, we have crafted an extensive list under a single page to clear all your confusion and give you a fair idea of some of India’s best bike mileage above 40 kmpl by some of the leading manufacturers in the industry. Find below India’s top 3 bike models with mileage range between 40 kmpl to 50 kmpl.",
      createdAt: "2023-07-25T07:22:49.283Z",
      updatedAt: "2023-07-27T11:29:16.199Z",
      publishedAt: "2023-07-25T07:22:50.316Z",
      slug: "40kmpl-50kmpl-mileage-scooters",
      pageType: "scooterMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 539,
    attributes: {
      heading: "Best Scooter Under 1 lakh",
      description:
        "Find a curated selection of all the top bikes under 1 lakh from all the acclaimed brands like Suzuki, Hero, Honda, Bajaj, TVS, etc. Whether you’re looking for efficient commuters, stylish cruisers or sporty rides, we have the ideal bike for you. Explore the best bike under 1 lakh, like Suzuki GSX S125, Hero Xtreme 200R, TVS Raider 125, Honda SP 125 & Bajaj Pulsar 125. Learn every detailed spec, including ex-showroom price, engine power, mileage and more. So, start your search with us today!",
      aboutContent:
        "BikeJunction is the ultimate platform for you to find the best mileage bike under 1 lakh in India. After conducting extensive research, we have compiled a comprehensive list of all the best bikes that are just under 1 Lakh rupees in the market. \n\nWith us, you get easy access to accurate & up-to-date data about each best bike under 1 lakh on road price, performance, features & unique selling points. From popular brands to emerging start-ups, we have meticulously gathered an array of top-notch bikes the industry offers. ",
      createdAt: "2023-07-25T07:19:27.686Z",
      updatedAt: "2023-07-27T11:29:14.261Z",
      publishedAt: "2023-07-25T07:19:29.112Z",
      slug: "new-scooters/scooters-under-1-lakh",
      pageType: "scooterPricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1852,
          question: "Q. Which Is The Best Bike Under 1 Lakh?",
          answer:
            "A. The best Bike under 1 lakh are Suzuki GSX S125, Hero Xtreme 200R, TVS Raider 125, Honda SP 125 & Bajaj Pulsar 125.",
        },
        {
          id: 1853,
          question: "Q. How Many Bikes Are Available Under 1 Lakh Range?",
          answer:
            "A. There are 46 models under 1 lakh available at BikeJunction.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 638,
    attributes: {
      heading: "Super Eco Electric Scooters",
      description:
        "${brand.data.attributes.slug} offers a wide range of ${models.data.length} models. The most popular model of ${brand.data.attributes.slug} is Aera 4000 priced at ₹ 1.35 Lakh. ${brand.data.attributes.slug} ${classification.data.attributes.Classifications} price in India starts from ₹ 1.35 Lakh and goes upto ₹ 1.75 Lakh.",
      aboutContent: "${brand.data.attributes.slug} About Content",
      createdAt: "2023-07-25T07:29:56.013Z",
      updatedAt: "2023-07-27T11:29:15.364Z",
      publishedAt: "2023-07-25T07:29:55.994Z",
      slug: "electric-scooters/super-eco",
      pageType: "electricScooterBrandPage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 2136,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2138,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
        {
          id: 2137,
          question:
            "Q. Which Honda Electric Scooter Model Is The Most Expensive In India?",
          answer:
            "A. Honda Goldwing is the most expensive electric scooter by Honda electric scooters priced from Rs 39,88,635 onwards.",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 113,
          attributes: {
            name: "Super Eco",
            createdAt: "2023-07-19T10:18:08.033Z",
            updatedAt: "2023-07-28T09:01:52.900Z",
            publishedAt: "2023-07-19T10:18:08.020Z",
            slug: "super-eco",
            dealers_description:
              "303 ${name} Bike Showrooms are listed at BikeJunction. So, locate ${name} bike dealers near you in India. Get certified ${name} showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ${name} dealers in India with complete details.",
            brand_id: 116,
            promotion_weightage: 1,
          },
        },
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 543,
    attributes: {
      heading: "Above 50 kmpl Best Mileage Scooter",
      description:
        "Are you finding India’s best above 50 kmpl mileage bikes that suits your needs perfectly? You’ve reached the right place. BikeJunction brings you the list of India’s most popular above 50 kmpl mileage bikes so you can easily shortlist and compare your top choices. Along with the list, our bike experts also provide you with all the highlighting features the bikes are manufactured with. You also get the updated on-road price range above 50 kmpl mileage bikes in India. The top 3 models in India with mileage above 50 kmpl are TVS Jupiter, Suzuki Access 125, Honda Dio.",
      aboutContent:
        "India is one of the largest two-wheeler markets in the world, with over 17.7 million motorcycles sold per year. With increasing fuel prices and the need for easy commutation, getting a highly fuel-efficient bike has become more than a necessity for bike buyers in India. And due to the increasing demand, several manufacturers of 2-wheelers have shifted their focus on producing bike mileage above 50 kmpl. Today, buyers are spoilt with choices in the category that has made their decision-making more tough and confusing. Keeping that in mind, BikeJunction brings an extensively researched list of the top and most popular bikes mileage above 50, so you can easily shortlist and compare your best choices in the segment.",
      createdAt: "2023-07-25T07:23:32.978Z",
      updatedAt: "2023-07-27T11:29:16.716Z",
      publishedAt: "2023-07-25T07:23:35.037Z",
      slug: "above-50kmpl-mileage-scooters",
      pageType: "scooterMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 645,
    attributes: {
      heading: "Latest Electric Scooters",
      description:
        "Want to explore & compare the latest electric scooter in India? With us, get complete information on the on road price, specifications, features, reviews and more about the in-demand electric scooter latest models. We have gathered promising choices for the latest EV scooters from trusted brands like Ather, Hero Electric, Bajaj Chetak, TVS, etc.To distil your searches & help you find the suitable one amongst the multiple choices, we bring our innovative and easy-to-use e scooter comparison tool.",
      aboutContent:
        "As the Indian Auto sector is adapting to the EV revolution, the auto market is bringing advanced and latest EV scooters. Major industry leaders like Hero MotoCorp, TVS Motor, and Ather are contributing energy and power-efficient EV scooter models. Emerging startups like Ola Electric, Ather Energy, Ultraviolette are stepping up to introduce improved and the latest battery scooty that meets the needs of actual customers. \n\nThese electric scooter latest models are backed by the support of the Indian Government, who’s releasing policies that encourage OEMs to bring in EV revelation. As of now, various leading OEMs and emerging startups have launched an exhaustive range of new electric bikes across various segments.\n\nWith so many latest EV scooters spanning across the market, and each one offering something new, it can make the selection process tough. This is why BikeJunction helps in making your search quick & effective by offering a complete list of the latest battery scooty with updated on-road price, technical specifications, expert reviews, and more.",
      createdAt: "2023-07-26T16:53:18.557Z",
      updatedAt: "2023-07-28T05:44:27.222Z",
      publishedAt: "2023-07-26T16:53:18.536Z",
      slug: "electric-scooters/latest",
      pageType: "latestPage",
      about_heading: "Find Electric Latest Scooters",
      listing_heading: "Latest Electric Scooters",
      Faq: [
        {
          id: 2153,
          question:
            "Q. Which Are The Top Brands With The Latest Electric Scooter In India?",
          answer:
            "A. Ather, Hero Electric, Bajaj Chetak, TVS and Ola Electric are a few of the top brands that are coming out with new electric scooters in India.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 538,
    attributes: {
      heading: "Best Scooter Under 90000",
      description:
        "Are you in a search for the best Scooter under 90000. BikeJunction, an online platform, comes with a page dedicated for Scooter under 90000. Here you get all 154 under 90000 in India. We all have a budget while buying Scooter and we have prepared a list of all Scooter under 90000 including the electric Scooter in this range. Top brands which are available 90000 are Hero, Honda, TVS. The most popular Scooter under 90000 is Honda Activa 125, TVS Jupiter, Suzuki Access 125. Get the reviews, specifications, features, prices, variants, and colours of Scooter under 90000 under one roof. Here you can also find the all electric Scooter under 90000.",
      aboutContent:
        "Are you looking to buy a good Scooter under 90000?\n\nBikeJunction gives you information about all the Scooter coming 90000. You can get all the Scooter under 90000 with complete specifications. The Scooter with a stylish body that catches everyone's eyes is available in the 90000.",
      createdAt: "2023-07-25T07:18:04.791Z",
      updatedAt: "2023-07-27T11:29:14.953Z",
      publishedAt: "2023-07-25T07:18:06.491Z",
      slug: "new-scooters/scooters-under-90000",
      pageType: "scooterPricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1850,
          question: "Q. Which Is The Best Scooter Under 90000?",
          answer:
            "A. The best Scooter under 90000 are Honda Activa 125, TVS Jupiter, Suzuki Access 125.",
        },
        {
          id: 1851,
          question: "Q. How Many Scooters Are Available Under 90000 Range?",
          answer:
            "A. There are 154 models under 90000 available at BikeJunction.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 648,
    attributes: {
      heading: "Best Electric Bikes",
      description:
        "${heading} Are you searching for the best electric bike in India 2023 & beyond? You’ve come to the right place. BikeJunction offers the largest selection of all the best EV bikes in India from brands like Revolt, Tork Motors and more. Now you can easily explore, shortlist and compare your top choices with just a click. You can also sort through the list as per your interested brands, budget, range, charging time, body type and more. Discover all the top EV bikes in India along with their updated ex-showroom prices, specifications, features, driving range and more. ",
      aboutContent:
        "${heading} With the rise of eco-friendly commuting options, electric bikes are becoming increasingly popular in India. The best electric bike in India are known for their easy handling, low maintenance needs and means to reduce daily fuel consumption and expenses.<br/>And given our current environmental position, the best of the best E bike in India is the need of the hour. Lucky for customers, multiple OEMs like Hero Electric and Revolt Motors are entering the electric market, dashing out with feature-rich vehicles. Along with them, multiple emerging startup companies are introducing future-forward top bikes. Emerging startups today includes Matter Energy, Ultraviolette, PureEV and more. <br/>With so many brands in the game now, customers are overwhelmed with choices making it difficult for them to pick the top E bike in India that suits them the best. Therefore, we are here to list all the available top electric bikes in India to make it easy for users to find the best suitable electric bike.",
      createdAt: "2023-07-26T17:15:47.226Z",
      updatedAt: "2023-07-31T11:57:50.220Z",
      publishedAt: "2023-07-26T17:15:47.205Z",
      slug: "electric-bikes/best",
      pageType: "bestPage",
      about_heading: "About Electric Bikes",
      listing_heading: "Electric Bikes in India",
      Faq: [
        {
          id: 2156,
          question:
            "Q. Which Are The Best Top 5 Electric Bike Brands In India?",
          answer:
            "A. Tork Motors, Matter Energy, Birla, Ultraviolette and Zero Motorcycles are the top 5 electric bike brands in India. ${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: {
          id: 10,
          attributes: {
            name: "Tork",
            createdAt: "2023-06-26T10:11:14.990Z",
            updatedAt: "2023-07-31T11:48:22.808Z",
            publishedAt: "2023-07-26T07:21:07.220Z",
            slug: "Tork",
            dealers_description: null,
            brand_id: 42,
            promotion_weightage: 0,
          },
        },
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 355,
    attributes: {
      heading: "Best Bike Under 2 lakh",
      description:
        "Discover the best bike under 2 lakh rupees in India from all the top bike brands & models that offer exceptional value for money. Dive into the top 5 bike models like Hero Karizma 400, CFMoto 250SR, TVS RTR 310, Honda CB350 & QJ Motor SRV125. With us, experience the magic of the top 5 brands – Hero, CFMOTO, Honda, TVS, & QJ Motor. With detailed specifications, features, & competitive pricing, find your perfect ride without compromising on quality. So, start your journey with BikeJunction today!",
      aboutContent:
        "Our commitment to transparency and reliability ensures you receive detailed, accurate information about each super bike under 2 lakh. The detailed information includes comprehensive specifications, key features, pricing details, and expert reviews. We understand that choosing the ideal bike requires a deep understanding of its capabilities. With us, you get all the knowledge necessary to make an informed decision that perfectly aligns with your unique preferences.",
      createdAt: "2023-07-24T11:28:39.842Z",
      updatedAt: "2023-07-27T11:29:15.581Z",
      publishedAt: "2023-07-24T11:28:41.093Z",
      slug: "new-bikes/bikes-under-2-lakh",
      pageType: "bikePricePage",
      about_heading: null,
      listing_heading: null,
      Faq: [
        {
          id: 1212,
          question: "Q. How Many Bikes Are Available Under 2 Lakh Range?",
          answer:
            "A. There are 170 models under 2 lakh available at BikeJunction.\n",
        },
        {
          id: 1213,
          question: "Q. Which Is The Best Mileage Bike Under 2 Lakh Range?",
          answer:
            "A. The best mileage Bike under 2 lakh is TVS Star City Plus offering 83.09 Kmpl mileage.\n",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 665,
    attributes: {
      heading: "Bikes Under ₹7.5 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.713Z",
      updatedAt: "2023-07-28T11:50:10.713Z",
      publishedAt: "2023-07-28T11:50:10.592Z",
      slug: "bikes-under-7.5-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 644,
    attributes: {
      heading: "Latest Electric Bikes",
      description:
        "${heading}  Chheckout a comprehensive list of latest scooters & scooty new models in India for you. New Scooter/scooty launch in India happen almost every month, there are 60 scooty models launched recently by 12 scooter/scooty manufacturers in last 6 months. Most affordable scooty model is Hero Xoom with estimated price range starting from Rs 68,599. The latest scooter/scooty launch in India is Honda Activa 7G with approximate price range of Rs 79,000. You can choose your preferred choice in the below list of lastest scooters.  ",
      aboutContent:
        "${heading} is on its way to a greener future; with that, the auto industry is transitioning from fuel-based vehicles to battery-powered ones. People are beginning to feel more environmentally cautious, increasing the demand for electric bikes and scooters like never before.And to tap into this growing demand, numerous industry leaders are coming out with the latest electric bike in India. In addition, multiple startups have also emerged that are coming out with feature-rich EV bikes in the Indian market. And, unlike a few years ago, today, customers have a plethora of options to choose from. Today, customers can explore the widest range of the latest E bikes in terms of the price range, driving range, charging time, power outputs and more. So everyone can find the latest electric bike model that suits their lifestyle and budget.",
      createdAt: "2023-07-26T16:44:06.400Z",
      updatedAt: "2023-07-28T05:41:09.185Z",
      publishedAt: "2023-07-26T16:44:06.389Z",
      slug: "electric-bikes/latest",
      pageType: "latestPage",
      about_heading: "Find Electric Latest Bikes",
      listing_heading: "Latest Electric Bikes",
      Faq: [
        {
          id: 2150,
          question: "Q. What Are The ${heading} ?",
          answer:
            "A. Revolt, Tork Motors, Odysse, Matter, and Birla are a few of the top brands that are coming out with new electric bikes in India.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 3,
          attributes: {
            Classifications: "Electric Bike",
            createdAt: "2023-06-08T11:34:04.926Z",
            updatedAt: "2023-06-08T11:34:05.610Z",
            publishedAt: "2023-06-08T11:34:05.606Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 657,
    attributes: {
      heading: "Bikes Under ₹60,000 Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.239Z",
      updatedAt: "2023-07-28T11:50:10.239Z",
      publishedAt: "2023-07-28T11:50:10.140Z",
      slug: "bikes-under-60000",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 662,
    attributes: {
      heading: "Bikes Under ₹3.5 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.644Z",
      updatedAt: "2023-07-28T11:50:10.644Z",
      publishedAt: "2023-07-28T11:50:10.425Z",
      slug: "bikes-under-3.5-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 326,
    attributes: {
      heading: "60 kmpl to 70 kmpl Best Mileage Bike",
      description:
        "Are you looking for the best 60 kmpl to 70 kmpl bikes in India? You have reached the right place because BikeJunction brings you a complete list of all the above 60 bikes in India for you on a single page. You can further find out about the price range, detailed specifications, expert reviews, ratings and images of 60 kmpl to 70 kmpl mileage bikes exclusively at BikeJunction. In India, Honda Shine, Hero HF Deluxe, Hero Glamour are 3 most popular bike models with mileage between 60 kmpl to 70 kmpl. The list is created by our bike enthusiast expert based on user reviews, ratings, technologies and more to help make you a more informed decision. So, shortlist and compare your top 60 kmpl to 70 kmpl mileage bikes, and choose the ideal option for yourself.",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 60 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice. Therefore, we have crafted an extensive list under a single page to clear all your confusion and give you a fair idea of some of India’s best bike mileage above 60 kmpl by some of the leading manufacturers in the industry. Find below India’s top 3 bike models with mileage range between 60 kmpl to 70 kmpl.",
      createdAt: "2023-07-24T10:31:11.896Z",
      updatedAt: "2023-07-27T11:29:16.225Z",
      publishedAt: "2023-07-24T10:31:12.911Z",
      slug: "60kmpl-70kmpl-mileage-bikes",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 324,
    attributes: {
      heading: "40 kmpl to 50 kmpl Best Mileage Bike",
      description:
        "Are you looking for the best 40 kmpl to 50 kmpl bikes in India? You have reached the right place because BikeJunction brings you a complete list of all the above 40 bikes in India for you on a single page. You can further find out about the price range, detailed specifications, expert reviews, ratings and images of 40 kmpl to 50 kmpl mileage bikes exclusively at BikeJunction. In India, Bajaj Pulsar 125, Bajaj Pulsar 150, TVS Apache RTR 160 are 3 most popular bike models with mileage between 40 kmpl to 50 kmpl. The list is created by our bike enthusiast expert based on user reviews, ratings, technologies and more to help make you a more informed decision. So, shortlist and compare your top 40 kmpl to 50 kmpl mileage bikes, and choose the ideal option for yourself.",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 40 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice. Therefore, we have crafted an extensive list under a single page to clear all your confusion and give you a fair idea of some of India’s best bike mileage above 40 kmpl by some of the leading manufacturers in the industry. Find below India’s top 3 bike models with mileage range between 40 kmpl to 50 kmpl.",
      createdAt: "2023-07-24T10:29:45.913Z",
      updatedAt: "2023-07-27T13:06:00.644Z",
      publishedAt: "2023-07-24T10:29:47.190Z",
      slug: "40kmpl-50kmpl-mileage-bikes",
      pageType: "bikeMileagePage",
      about_heading: "About ${heading}",
      listing_heading: "Find Other Best Mileage Bike",
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 658,
    attributes: {
      heading: "Bikes Under ₹50,000 Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.395Z",
      updatedAt: "2023-07-28T11:50:10.395Z",
      publishedAt: "2023-07-28T11:50:10.208Z",
      slug: "bikes-under-50000",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 659,
    attributes: {
      heading: "Bikes Under ₹5 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.443Z",
      updatedAt: "2023-07-28T11:50:10.443Z",
      publishedAt: "2023-07-28T11:50:10.267Z",
      slug: "bikes-under-5-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 663,
    attributes: {
      heading: "Bikes Under ₹70,000 Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.696Z",
      updatedAt: "2023-07-28T11:50:10.696Z",
      publishedAt: "2023-07-28T11:50:10.485Z",
      slug: "bikes-under-70000",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 664,
    attributes: {
      heading: "Bikes Under ₹80,000 Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.699Z",
      updatedAt: "2023-07-28T11:50:10.699Z",
      publishedAt: "2023-07-28T11:50:10.538Z",
      slug: "bikes-under-80000",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 666,
    attributes: {
      heading: "Bikes Under ₹60 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.733Z",
      updatedAt: "2023-07-28T11:50:10.733Z",
      publishedAt: "2023-07-28T11:50:10.635Z",
      slug: "bikes-under-60-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 537,
    attributes: {
      heading: "Best Scooter Under 80000",
      description:
        "Are you in a search for the best Scooter under 80000. BikeJunction, an online platform, comes with a page dedicated for Scooter under 80000. Here you get all 121 under 80000 in India. We all have a budget while buying Scooter and we have prepared a list of all Scooter under 80000 including the electric Scooter in this range. Top brands which are available 80000 are Hero, Honda, TVS. The most popular Scooter under 80000 is Honda Activa 125, TVS Jupiter, Suzuki Access 125. Get the reviews, specifications, features, prices, variants, and colours of Scooter under 80000 under one roof. Here you can also find the all electric Scooter under 80000.",
      aboutContent:
        "Are you looking to buy a good Scooter under 80000?\n\nBikeJunction gives you information about all the Scooter coming 80000. You can get all the Scooter under 80000 with complete specifications. The Scooter with a stylish body that catches everyone's eyes is available in the 80000.",
      createdAt: "2023-07-25T07:16:58.411Z",
      updatedAt: "2023-07-28T04:52:17.459Z",
      publishedAt: "2023-07-25T07:17:00.146Z",
      slug: "new-scooters/scooters-under-80000",
      pageType: "scooterPricePage",
      about_heading: "Scooters Under 80000 Overview",
      listing_heading: "Popular Scooter under 80000",
      Faq: [
        {
          id: 1848,
          question: "Q. Which Is The Best Scooter Under 80000?",
          answer:
            "A. The ${heading} are Honda Activa 125, TVS Jupiter, Suzuki Access 125.",
        },
        {
          id: 1849,
          question: "Q. How Many Scooters Are Available Under 80000 Range?",
          answer:
            "A. There are 121 models under 80000 available at BikeJunction.",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 2,
          attributes: {
            Classifications: "Scooter",
            createdAt: "2023-06-08T11:33:59.445Z",
            updatedAt: "2023-06-08T11:34:00.108Z",
            publishedAt: "2023-06-08T11:34:00.104Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 654,
    attributes: {
      heading: "Best Mileage Bikes",
      description:
        "Total 370 best mileage bikes are available on BikeJunction. The most popular best mileage bikes in India are, TVS Star City Plus, Hero Splendor Plus Xtec, Honda Livo and many more. The price range of high mileage bikes starts from Rs. 74,990 for TVS Star City Plus in India. Best brands like Hero, Honda, TVS have top Mileage bikes in India in our comprehensive list. You can find which is the highest mileage bike in India according to their mileage range. If you want to explore or buy the best mileage bike then this is the right place for you. Below is the price list of best mileage bikes in India, May 2023. ${heading}",
      aboutContent:
        "${heading}\nWelcome to the ultimate destination where you can discover India’s best mileage scooty. This is our comprehensive landing page, designed to serve you with a wealth of information about all the mileage scooters available on the market. Explore everything from specification to performance of the highest mileage scooty from the leading brands in India. $\nWhen it comes to finding the best-suited scooter, mileage plays a prominent role. It is that one factor that may either make or break your commute. The highest mileage scooty will help you cut down on your daily fuel expenses, making your commute cheaper than ever. \n\nAnd that is why we’ve created this platform where you can explore an extensive range of top mileage scooty from all the leading brands in India. These companies are known for their commitment to innovation & quality. \n\nBut we don’t just stop at listing scooty mileage. We know how necessary it is to learn about all the detailed specifications before making the decision. Ergo, you can easily get all the in-depth information on all aspects of the scooter we feature. From engine power to suspension system, brakes, fuel efficiency, performance, wheels and more, we provide info on all. \n\nIndia’s 5 Leading Brands Offering Best Mileage Scooty \n\nHere are the 5 manufacturers in India that offer top mileage scooty in India at a highly competitive pricing range - \n\nYamaha\nTVS\nHero\nHonda\nSuzuki ",
      createdAt: "2023-07-27T13:17:49.544Z",
      updatedAt: "2023-07-28T09:27:48.041Z",
      publishedAt: "2023-07-27T13:17:51.357Z",
      slug: "best-mileage-bikes",
      pageType: "bestPage",
      about_heading: "About Best Mileage bikes",
      listing_heading: "Popular Mileage Bikes in India",
      Faq: [
        {
          id: 2163,
          question: "Q. Which Are The Best Top 5 Bike Brands In India?",
          answer:
            "A. Bajaj Platina 100, priced between Rs 52,733 - 65,856, is the most affordable bike in India. ${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: null,
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 667,
    attributes: {
      heading: "Bikes Under ₹12.5 Lakh Budget",
      description:
        "Are you in a search for the best ${heading}. BikeJunction, an online platform, comes with a page dedicated for ${heading}. Here you get all 3 under 50000 in India. We all have a budget while buying Bike and we have prepared a list of all ${heading} including the electric Bike in this range. Top brands which are available 50000 are Hero, Honda, TVS",
      aboutContent:
        "Considering the rising fuel prices in the country, buying a fuel-efficient vehicle has become necessary to cut down daily expenses. Thus, it comes as no surprise that manufacturers have shifted their focus to offer the best mileage bikes with ultra-competitive pricing in the industry. However, with so many manufacturers producing 30 kmpl mileage bikes and above, it has got increasingly difficult for new bike buyers to make an ideal choice.",
      createdAt: "2023-07-28T11:50:10.829Z",
      updatedAt: "2023-07-28T11:50:10.829Z",
      publishedAt: "2023-07-28T11:50:10.685Z",
      slug: "bikes-under-12.5-lakh",
      pageType: "bikeMileagePage",
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 676,
    attributes: {
      heading: "Above 500cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:41.798Z",
      updatedAt: "2023-07-28T12:35:41.798Z",
      publishedAt: "2023-07-28T12:35:41.754Z",
      slug: "best-bikes-above-500cc",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 677,
    attributes: {
      heading: "200cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:41.812Z",
      updatedAt: "2023-07-28T12:35:41.812Z",
      publishedAt: "2023-07-28T12:35:41.784Z",
      slug: "best-200cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 678,
    attributes: {
      heading: "500cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:41.887Z",
      updatedAt: "2023-07-28T12:35:41.887Z",
      publishedAt: "2023-07-28T12:35:41.830Z",
      slug: "best-500cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 679,
    attributes: {
      heading: "110cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:41.890Z",
      updatedAt: "2023-07-28T12:35:41.890Z",
      publishedAt: "2023-07-28T12:35:41.853Z",
      slug: "best-110cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 680,
    attributes: {
      heading: "250cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:41.983Z",
      updatedAt: "2023-07-28T12:35:41.983Z",
      publishedAt: "2023-07-28T12:35:41.912Z",
      slug: "best-250cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 681,
    attributes: {
      heading: "100cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:41.993Z",
      updatedAt: "2023-07-28T12:35:41.993Z",
      publishedAt: "2023-07-28T12:35:41.955Z",
      slug: "best-100cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 682,
    attributes: {
      heading: "125cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:42.090Z",
      updatedAt: "2023-07-28T12:35:42.090Z",
      publishedAt: "2023-07-28T12:35:42.012Z",
      slug: "best-125cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 683,
    attributes: {
      heading: "150cc Bikes",
      description:
        "A Bike's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 110cc segment, choosing the best one is challenging. So we have made a complete list of Bike under the 110cc. Here you will get all the latest and best 110cc Bike with all the specifications. We have provided all the 110cc Bike price, mileage, power, and all specifications. There are 15 Bike 110cc available at BikeJunction. In addition, you can also choose the best 110cc Bike with different colours and variants. Find the most powerful 110cc Bike in India.",
      aboutContent: null,
      createdAt: "2023-07-28T12:35:42.099Z",
      updatedAt: "2023-07-28T12:35:42.099Z",
      publishedAt: "2023-07-28T12:35:42.071Z",
      slug: "best-150cc-bikes",
      pageType: null,
      about_heading: null,
      listing_heading: null,
      Faq: [],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 684,
    attributes: {
      heading: "Single Disc Brake Bikes",
      description: "${heading}",
      aboutContent: "${heading}",
      createdAt: "2023-07-28T12:39:29.918Z",
      updatedAt: "2023-07-31T07:28:22.865Z",
      publishedAt: "2023-07-28T12:39:29.871Z",
      slug: "single-disc-brake-bikes",
      pageType: "brakeTypePage",
      about_heading: "Find Single Disc Brake Bikes",
      listing_heading: "488 Bikes With Single Disc Brake",
      Faq: [
        {
          id: 2170,
          question: "${heading}",
          answer: "${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: null,
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 685,
    attributes: {
      heading: "Double Disc Brake Bikes",
      description:
        "In India, most bikes come with a combination of 130 mm drum brakes at the front and 110 mm rear drum brakes. Drum brake bikes are widely preferred as they are economical and simple to operate and maintain. In addition, this bike drum brake type is one of the most reasonably priced compared to disc brakes. Drum brakes bring the vehicle to a complete halt safely and quickly. Thus riders enjoy a stable and skid-free riding experience even in the raining conditions. Some of the popular bikes which are equipped with Drum Brakes are Hero Splendor Plus, Hero HF Deluxe and Bajaj Platina 100.\n${heading}",
      aboutContent: "${heading}",
      createdAt: "2023-07-28T12:39:29.951Z",
      updatedAt: "2023-07-31T07:29:20.320Z",
      publishedAt: "2023-07-28T12:39:29.906Z",
      slug: "double-disc-brake-bikes",
      pageType: "brakeTypePage",
      about_heading: "Find Double Disc Brake Bikes",
      listing_heading: "21 Bikes With Double Disc Brake",
      Faq: [
        {
          id: 2169,
          question: "${heading}",
          answer: "${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 650,
    attributes: {
      heading: "Upcoming Bikes in India",
      description:
        "Curious to know about the upcoming bikes in India? You’ve reached the right place. BikeJunction provides you a complete list of all new upcoming bikes in India 2023 and beyond. With thorough market research, we help you stay updated on the latest bike models along with their features and specifications. 84 models, launching soon in India, including Royal Enfield Bullet 350 Next Gen,Honda CB350,BMW F900XR. Stay tuned with us to know about the expected launch date and on-road price of all the upcoming bikes in India 2023.\n\n${heading}",
      aboutContent:
        "Are You Waiting For The Perfect Bike?<br/>The bike industry is witnessing new models from all of the brands, and choosing the perfect bike is a challenging task. BikeJunction helps you and makes you updated about the upcoming bike in India. It features all the upcoming bikes which are going to be launching soon. Get all the complete list of upcoming electric bikes in India with us. We care about your patience, and we know how eagerly you wait for the upcoming bikes. BikeJunction ensures to deliver the best price along with the best customer support to its users for the best experience. So stay connected with us to get the updated price of upcoming bikes in India 2023\n${heading}",
      createdAt: "2023-07-26T17:30:14.105Z",
      updatedAt: "2023-07-30T12:41:10.815Z",
      publishedAt: "2023-07-26T17:30:14.066Z",
      slug: "upcoming-bikes",
      pageType: "upcomingPage",
      about_heading: "About Upcoming Bikes",
      listing_heading: "Upcoming Bikes",
      Faq: [
        {
          id: 2158,
          question: "Q. Which New Bikes Are Launching In India In 2023?",
          answer:
            "A. The new bikes which are launching in India in 2023 are Royal Enfield Bullet 350 Next Gen,Honda CB350,BMW F900X.  \n${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 653,
    attributes: {
      heading: "Upcoming Electric Scooters",
      description:
        "Searching for all the upcoming electric scooters in India has never been this easy. BikeJunction brings you an updated list of all the soon-to-be-launched electric scooters all on one page. Now you can discover expected ex-showroom prices, technical specifications like battery power and range per charge, etc., with just a click. Top brands like Hero Electric, Ola Electric, Bajaj Auto and more are coming out with the best upcoming electric scooter in India 2023. So, stay connected and be the first one to get the expected release dates along with other information about all the electric scooter upcoming. ${heading}",
      aboutContent:
        "${heading} Indian automotive market has been making a swift shift towards an electric future. And with the government releasing various subsidies, the popularity of upcoming electric scooters in India is rising exponentially. Many OEMs that were hesitant to the transition first are also working towards tapping into the market today. Harley Davidson, one of the world's biggest bike manufacturers, plans to go full-electric by 2050. Royal Enfield, another huge brand in India, is also working on a new platform for its future electric bikes. <br/>A few years ago, however, the term electric vehicles weren’t popular. Not many manufacturers believed EVs could be a success in India. Fast forward to today, all the major brands have either already launched their EV range of products or are planning to launch electric scooter upcoming.<br/>Electric scooter demand and sales numbers are increasing each month that too for good reasons. For reasons like how they offer convenience like no other, are easy to maintain, can easily be charged overnight and be driven for hours without needing to worry about refuelling. So, scroll below to find the list of the best upcoming electric scooter in India 2023.",
      createdAt: "2023-07-26T17:43:15.968Z",
      updatedAt: "2023-07-30T13:44:34.905Z",
      publishedAt: "2023-07-26T17:43:15.949Z",
      slug: "electric-scooters/upcoming",
      pageType: "upcomingPage",
      about_heading: "About Upcoming Electric Scooters",
      listing_heading: "Upcoming Electric Scooters",
      Faq: [
        {
          id: 2161,
          question:
            "Q. Which Are The Top Brands Coming Out With Upcoming Electric Scooters In India 2023",
          answer:
            "A. Honda, Hero Electric, Suzuki, TVS Motor, and KTM are the top brands coming out with EV scooters in India this year. ${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 4,
          attributes: {
            Classifications: "Electric Scooter",
            createdAt: "2023-06-08T11:34:11.088Z",
            updatedAt: "2023-06-08T11:34:11.686Z",
            publishedAt: "2023-06-08T11:34:11.675Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 686,
    attributes: {
      heading: "Disc with ABS Brake Bikes",
      description:
        "In India, most bikes come with a combination of 130 mm drum brakes at the front and 110 mm rear drum brakes. Drum brake bikes are widely preferred as they are economical and simple to operate and maintain. In addition, this bike drum brake type is one of the most reasonably priced compared to disc brakes. Drum brakes bring the vehicle to a complete halt safely and quickly. Thus riders enjoy a stable and skid-free riding experience even in the raining conditions. Some of the popular bikes which are equipped with Drum Brakes are Hero Splendor Plus, Hero HF Deluxe and Bajaj Platina 100. ${heading}",
      aboutContent: "${heading}",
      createdAt: "2023-07-28T12:39:29.996Z",
      updatedAt: "2023-07-31T07:19:18.232Z",
      publishedAt: "2023-07-28T12:39:29.939Z",
      slug: "disc-with-abs-brake-bikes",
      pageType: null,
      about_heading: "Find Disc with ABS Brake Bikes",
      listing_heading: "258 Bikes With Disc with ABS Brake",
      Faq: [
        {
          id: 2168,
          question: "${heading}",
          answer: "${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
  {
    id: 687,
    attributes: {
      heading: "Drum Brake Bikes",
      description:
        "In India, most bikes come with a combination of 130 mm drum brakes at the front and 110 mm rear drum brakes. Drum brake bikes are widely preferred as they are economical and simple to operate and maintain. In addition, this bike drum brake type is one of the most reasonably priced compared to disc brakes. Drum brakes bring the vehicle to a complete halt safely and quickly. Thus riders enjoy a stable and skid-free riding experience even in the raining conditions. Some of the popular bikes which are equipped with Drum Brakes are Hero Splendor Plus, Hero HF Deluxe and Bajaj Platina 100.${heading}",
      aboutContent: "${heading}",
      createdAt: "2023-07-28T12:39:30.010Z",
      updatedAt: "2023-07-31T07:29:02.554Z",
      publishedAt: "2023-07-28T12:39:29.981Z",
      slug: "drum-brake-bikes",
      pageType: "brakeTypePage",
      about_heading: "Find Drum Brake Bikes",
      listing_heading: "191 Bikes With Drum Brake",
      Faq: [
        {
          id: 2171,
          question: "${heading}",
          answer: "${heading}",
        },
      ],
      Seo: null,
      brand: {
        data: null,
      },
      classification: {
        data: {
          id: 1,
          attributes: {
            Classifications: "Bike",
            createdAt: "2023-06-08T11:33:51.982Z",
            updatedAt: "2023-06-08T11:33:52.906Z",
            publishedAt: "2023-06-08T11:33:52.896Z",
          },
        },
      },
      models: {
        data: [],
      },
    },
  },
];
// function getBrandsWithUniqueCombination(arr) {
//   const uniqueBrandCombination = new Set();
//   const uniqueBrands = [];

//   arr.forEach((item) => {
//     const combination = `${item.bike_id}`;
//     if (!uniqueBrandCombination.has(combination)) {
//       uniqueBrandCombination.add(combination);
//       uniqueBrands.push(item);
//     }
//   });

//   return uniqueBrands;
// }

// const uniqueBrands = getBrandsWithUniqueCombination(faq);

// console.log(uniqueBrands);

// Function to group items by brandId
function groupItemsByBrandId(items) {
  return items.reduce((result, item) => {
    const brandId = item.brand_id;
    const existingGroup = result.find((group) => group[0].brand_id === brandId);

    if (existingGroup) {
      existingGroup.push(item);
    } else {
      result.push([item]);
    }

    return result;
  }, []);
}

// Call the function and get the grouped arrays
const groupedItems = groupItemsByBrandId(faq);

const arr = [];
groupedItems.map((item) => {
  let a = {};

  item.map((i, index) => {
    if (index == 0) {
      const filter = bike_brands.filter(
        (j) => j?.attributes?.brand?.data?.attributes?.brand_id == i.brand_id
      );

      console.log(filter);
      a = {
        id: filter[0]?.id,
        name: filter[0]?.attributes?.brand?.data?.attributes?.name,
        slug: filter[0]?.attributes?.slug,

        faq: [{ question: i.question, answer: i.answer }],
      };

      console.log(a);
    } else {
      a.faq.push({ question: i.question, answer: i.answer });
    }
  });
  arr.push(a);
});

fs.writeFile("users.json", JSON.stringify(arr), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
