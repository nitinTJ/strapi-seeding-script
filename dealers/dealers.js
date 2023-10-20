import bikec from "./bde.json" assert { type: "json" };
import strapic from "./sde.json" assert { type: "json" };
import c from "../city/c.json" assert { type: "json" };
import bnd from "./bd.json" assert { type: "json" };
import fs from "fs";
import users from "./users.json" assert { type: "json" };

const state = [
  {
    id: 11,
    attributes: {
      name: "GOA",
      abbreviation: null,
      slug: "goa",
      stateid: "11",
      createdAt: "2023-07-22T18:48:49.018Z",
      updatedAt: "2023-08-03T08:50:37.225Z",
      publishedAt: "2023-07-22T18:48:49.012Z",
      rto_charges: "6",
    },
  },
  {
    id: 17,
    attributes: {
      name: "KARNATAKA",
      abbreviation: null,
      slug: "karnataka",
      stateid: "17",
      createdAt: "2023-07-22T18:48:49.902Z",
      updatedAt: "2023-08-03T08:50:37.247Z",
      publishedAt: "2023-07-22T18:48:49.898Z",
      rto_charges: "10",
    },
  },
  {
    id: 3,
    attributes: {
      name: "ARUNACHAL PRADESH",
      abbreviation: null,
      slug: "arunachal-pradesh",
      stateid: "3",
      createdAt: "2023-07-22T18:48:48.465Z",
      updatedAt: "2023-08-03T08:50:37.277Z",
      publishedAt: "2023-07-22T18:48:48.459Z",
      rto_charges: "8",
    },
  },
  {
    id: 4,
    attributes: {
      name: "ASSAM",
      abbreviation: null,
      slug: "assam",
      stateid: "4",
      createdAt: "2023-07-22T18:48:48.542Z",
      updatedAt: "2023-08-03T08:50:37.110Z",
      publishedAt: "2023-07-22T18:48:48.537Z",
      rto_charges: "9",
    },
  },
  {
    id: 5,
    attributes: {
      name: "BIHAR",
      abbreviation: null,
      slug: "bihar",
      stateid: "5",
      createdAt: "2023-07-22T18:48:48.614Z",
      updatedAt: "2023-08-03T08:50:37.145Z",
      publishedAt: "2023-07-22T18:48:48.610Z",
      rto_charges: "9",
    },
  },
  {
    id: 9,
    attributes: {
      name: "DAMAN & DIU",
      abbreviation: null,
      slug: "daman-diu",
      stateid: "9",
      createdAt: "2023-07-22T18:48:48.873Z",
      updatedAt: "2023-08-03T08:50:37.155Z",
      publishedAt: "2023-07-22T18:48:48.870Z",
      rto_charges: "8",
    },
  },
  {
    id: 1,
    attributes: {
      name: "ANDAMAN & NICOBAR ISLANDS",
      abbreviation: null,
      slug: "andaman-nicobar-islands",
      stateid: "1",
      createdAt: "2023-07-22T18:48:48.254Z",
      updatedAt: "2023-08-03T08:50:37.185Z",
      publishedAt: "2023-07-22T18:48:48.245Z",
      rto_charges: "12",
    },
  },
  {
    id: 13,
    attributes: {
      name: "HARYANA",
      abbreviation: null,
      slug: "haryana",
      stateid: "13",
      createdAt: "2023-07-22T18:48:49.404Z",
      updatedAt: "2023-08-03T08:50:37.204Z",
      publishedAt: "2023-07-22T18:48:49.400Z",
      rto_charges: "7",
    },
  },
  {
    id: 6,
    attributes: {
      name: "CHANDIGARH",
      abbreviation: null,
      slug: "chandigarh",
      stateid: "6",
      createdAt: "2023-07-22T18:48:48.675Z",
      updatedAt: "2023-08-03T08:50:37.316Z",
      publishedAt: "2023-07-22T18:48:48.671Z",
      rto_charges: "3",
    },
  },
  {
    id: 21,
    attributes: {
      name: "MAHARASHTRA",
      abbreviation: null,
      slug: "maharashtra",
      stateid: "21",
      createdAt: "2023-07-22T18:48:50.250Z",
      updatedAt: "2023-08-03T08:50:37.335Z",
      publishedAt: "2023-07-22T18:48:50.245Z",
      rto_charges: "8",
    },
  },
  {
    id: 2,
    attributes: {
      name: "ANDHRA PRADESH",
      abbreviation: null,
      slug: "andhra-pradesh",
      stateid: "2",
      createdAt: "2023-07-22T18:48:48.393Z",
      updatedAt: "2023-08-03T08:50:37.348Z",
      publishedAt: "2023-07-22T18:48:48.389Z",
      rto_charges: "12",
    },
  },
  {
    id: 8,
    attributes: {
      name: "DADRA & NAGAR HAVELI",
      abbreviation: null,
      slug: "dadra-nagar-haveli",
      stateid: "8",
      createdAt: "2023-07-22T18:48:48.800Z",
      updatedAt: "2023-08-03T08:50:37.362Z",
      publishedAt: "2023-07-22T18:48:48.797Z",
      rto_charges: "6",
    },
  },
  {
    id: 7,
    attributes: {
      name: "CHATTISGARH",
      abbreviation: null,
      slug: "chattisgarh",
      stateid: "7",
      createdAt: "2023-07-22T18:48:48.738Z",
      updatedAt: "2023-08-03T08:50:37.387Z",
      publishedAt: "2023-07-22T18:48:48.733Z",
      rto_charges: "8",
    },
  },
  {
    id: 10,
    attributes: {
      name: "DELHI",
      abbreviation: null,
      slug: "delhi",
      stateid: "10",
      createdAt: "2023-07-22T18:48:48.953Z",
      updatedAt: "2023-08-03T08:50:37.416Z",
      publishedAt: "2023-07-22T18:48:48.948Z",
      rto_charges: "9",
    },
  },
  {
    id: 20,
    attributes: {
      name: "MADHYA PRADESH",
      abbreviation: null,
      slug: "madhya-pradesh",
      stateid: "20",
      createdAt: "2023-07-22T18:48:50.109Z",
      updatedAt: "2023-08-03T08:50:37.444Z",
      publishedAt: "2023-07-22T18:48:50.105Z",
      rto_charges: "10",
    },
  },
  {
    id: 16,
    attributes: {
      name: "JHARKHAND",
      abbreviation: null,
      slug: "jharkhand",
      stateid: "16",
      createdAt: "2023-07-22T18:48:49.833Z",
      updatedAt: "2023-08-03T08:50:37.480Z",
      publishedAt: "2023-07-22T18:48:49.829Z",
      rto_charges: "14",
    },
  },
  {
    id: 18,
    attributes: {
      name: "KERALA",
      abbreviation: null,
      slug: "kerala",
      stateid: "18",
      createdAt: "2023-07-22T18:48:49.967Z",
      updatedAt: "2023-08-03T08:50:37.501Z",
      publishedAt: "2023-07-22T18:48:49.961Z",
      rto_charges: "10",
    },
  },
  {
    id: 23,
    attributes: {
      name: "MEGHALAYA",
      abbreviation: null,
      slug: "meghalaya",
      stateid: "23",
      createdAt: "2023-07-22T18:48:50.428Z",
      updatedAt: "2023-08-03T08:50:37.528Z",
      publishedAt: "2023-07-22T18:48:50.425Z",
      rto_charges: "8",
    },
  },
  {
    id: 26,
    attributes: {
      name: "ODISHA",
      abbreviation: null,
      slug: "odisha",
      stateid: "26",
      createdAt: "2023-07-22T18:48:50.642Z",
      updatedAt: "2023-08-03T08:50:37.549Z",
      publishedAt: "2023-07-22T18:48:50.637Z",
      rto_charges: "1",
    },
  },
  {
    id: 15,
    attributes: {
      name: "JAMMU & KASHMIR",
      abbreviation: null,
      slug: "jammu-kashmir",
      stateid: "15",
      createdAt: "2023-07-22T18:48:49.672Z",
      updatedAt: "2023-08-03T08:50:37.588Z",
      publishedAt: "2023-07-22T18:48:49.668Z",
      rto_charges: "7",
    },
  },
  {
    id: 22,
    attributes: {
      name: "MANIPUR",
      abbreviation: null,
      slug: "manipur",
      stateid: "22",
      createdAt: "2023-07-22T18:48:50.359Z",
      updatedAt: "2023-08-03T08:50:37.608Z",
      publishedAt: "2023-07-22T18:48:50.356Z",
      rto_charges: "8",
    },
  },
  {
    id: 19,
    attributes: {
      name: "LAKSHADWEEP",
      abbreviation: null,
      slug: "lakshadweep",
      stateid: "19",
      createdAt: "2023-07-22T18:48:50.033Z",
      updatedAt: "2023-08-03T08:50:37.673Z",
      publishedAt: "2023-07-22T18:48:50.024Z",
      rto_charges: "7",
    },
  },
  {
    id: 12,
    attributes: {
      name: "GUJARAT",
      abbreviation: null,
      slug: "gujarat",
      stateid: "12",
      createdAt: "2023-07-22T18:48:49.177Z",
      updatedAt: "2023-08-03T08:50:37.824Z",
      publishedAt: "2023-07-22T18:48:49.167Z",
      rto_charges: "5",
    },
  },
  {
    id: 25,
    attributes: {
      name: "NAGALAND",
      abbreviation: null,
      slug: "nagaland",
      stateid: "25",
      createdAt: "2023-07-22T18:48:50.565Z",
      updatedAt: "2023-08-03T08:50:37.852Z",
      publishedAt: "2023-07-22T18:48:50.557Z",
      rto_charges: "6",
    },
  },
  {
    id: 30,
    attributes: {
      name: "SIKKIM",
      abbreviation: null,
      slug: "sikkim",
      stateid: "30",
      createdAt: "2023-07-22T18:48:50.928Z",
      updatedAt: "2023-08-03T08:50:37.888Z",
      publishedAt: "2023-07-22T18:48:50.925Z",
      rto_charges: "8",
    },
  },
  {
    id: 34,
    attributes: {
      name: "UTTAR PRADESH",
      abbreviation: null,
      slug: "uttar-pradesh",
      stateid: "34",
      createdAt: "2023-07-22T18:48:51.176Z",
      updatedAt: "2023-08-03T08:50:37.905Z",
      publishedAt: "2023-07-22T18:48:51.171Z",
      rto_charges: "8",
    },
  },
  {
    id: 31,
    attributes: {
      name: "TAMIL NADU",
      abbreviation: null,
      slug: "tamil-nadu",
      stateid: "31",
      createdAt: "2023-07-22T18:48:50.982Z",
      updatedAt: "2023-08-03T08:50:37.982Z",
      publishedAt: "2023-07-22T18:48:50.978Z",
      rto_charges: "12",
    },
  },
  {
    id: 36,
    attributes: {
      name: "WEST BENGAL",
      abbreviation: null,
      slug: "west-bengal",
      stateid: "36",
      createdAt: "2023-07-22T18:48:51.319Z",
      updatedAt: "2023-08-03T08:50:37.999Z",
      publishedAt: "2023-07-22T18:48:51.316Z",
      rto_charges: "6",
    },
  },
  {
    id: 29,
    attributes: {
      name: "RAJASTHAN",
      abbreviation: null,
      slug: "rajasthan",
      stateid: "29",
      createdAt: "2023-07-22T18:48:50.860Z",
      updatedAt: "2023-08-03T08:50:38.024Z",
      publishedAt: "2023-07-22T18:48:50.856Z",
      rto_charges: "9",
    },
  },
  {
    id: 33,
    attributes: {
      name: "TRIPURA",
      abbreviation: null,
      slug: "tripura",
      stateid: "33",
      createdAt: "2023-07-22T18:48:51.101Z",
      updatedAt: "2023-08-03T08:50:38.087Z",
      publishedAt: "2023-07-22T18:48:51.098Z",
      rto_charges: "10",
    },
  },
  {
    id: 32,
    attributes: {
      name: "TELANGANA",
      abbreviation: null,
      slug: "telangana",
      stateid: "32",
      createdAt: "2023-07-22T18:48:51.039Z",
      updatedAt: "2023-08-03T08:50:38.134Z",
      publishedAt: "2023-07-22T18:48:51.036Z",
      rto_charges: "7",
    },
  },
  {
    id: 28,
    attributes: {
      name: "PUNJAB",
      abbreviation: null,
      slug: "punjab",
      stateid: "28",
      createdAt: "2023-07-22T18:48:50.798Z",
      updatedAt: "2023-08-03T08:50:38.156Z",
      publishedAt: "2023-07-22T18:48:50.792Z",
      rto_charges: "9",
    },
  },
  {
    id: 14,
    attributes: {
      name: "HIMACHAL PRADESH",
      abbreviation: null,
      slug: "himachal-pradesh",
      stateid: "14",
      createdAt: "2023-07-22T18:48:49.535Z",
      updatedAt: "2023-08-03T08:50:38.163Z",
      publishedAt: "2023-07-22T18:48:49.532Z",
      rto_charges: "9",
    },
  },
  {
    id: 27,
    attributes: {
      name: "PONDICHERRY",
      abbreviation: null,
      slug: "pondicherry",
      stateid: "27",
      createdAt: "2023-07-22T18:48:50.734Z",
      updatedAt: "2023-08-03T08:50:38.187Z",
      publishedAt: "2023-07-22T18:48:50.728Z",
      rto_charges: "7",
    },
  },
  {
    id: 24,
    attributes: {
      name: "MIZORAM",
      abbreviation: null,
      slug: "mizoram",
      stateid: "24",
      createdAt: "2023-07-22T18:48:50.496Z",
      updatedAt: "2023-08-03T08:50:38.206Z",
      publishedAt: "2023-07-22T18:48:50.492Z",
      rto_charges: "7",
    },
  },
  {
    id: 35,
    attributes: {
      name: "UTTARAKHAND",
      abbreviation: null,
      slug: "uttarakhand",
      stateid: "35",
      createdAt: "2023-07-22T18:48:51.244Z",
      updatedAt: "2023-08-03T08:50:38.279Z",
      publishedAt: "2023-07-22T18:48:51.238Z",
      rto_charges: "9",
    },
  },
];

const brands = [
  {
    id: 95,
    attributes: {
      name: "River",
      createdAt: "2023-07-19T10:18:03.089Z",
      updatedAt: "2023-08-21T17:15:31.780Z",
      publishedAt: "2023-07-19T10:18:03.081Z",
      slug: "river",
      dealers_description:
        "${totalCount} River Bike Showrooms are listed at BikeJunction. So locate River bike dealers near you in India. Get certified River showrooms in your city including pune, patna, indore and many more. You can find out a complete list of River dealers in India with complete details.",
      brand_id: 95,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/river",
    },
  },
  {
    id: 80,
    attributes: {
      name: "corrit electric",
      createdAt: "2023-07-19T10:17:57.919Z",
      updatedAt: "2023-08-21T17:15:29.524Z",
      publishedAt: "2023-07-19T10:17:57.914Z",
      slug: "corrit-electric",
      dealers_description:
        "${totalCount} corrit electric Bike Showrooms are listed at BikeJunction. So locate corrit electric bike dealers near you in India. Get certified corrit electric showrooms in your city including pune, patna, indore and many more. You can find out a complete list of corrit electric dealers in India with complete details.",
      brand_id: 74,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/corrit-electric",
    },
  },
  {
    id: 99,
    attributes: {
      name: "Yulu",
      createdAt: "2023-07-19T10:18:04.273Z",
      updatedAt: "2023-08-21T17:15:32.349Z",
      publishedAt: "2023-07-19T10:18:04.266Z",
      slug: "yulu",
      dealers_description:
        "${totalCount} Yulu Bike Showrooms are listed at BikeJunction. So locate Yulu bike dealers near you in India. Get certified Yulu showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yulu dealers in India with complete details.",
      brand_id: 99,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/yulu",
    },
  },
  {
    id: 105,
    attributes: {
      name: "Power Electric",
      createdAt: "2023-07-19T10:18:05.881Z",
      updatedAt: "2023-08-21T17:15:33.319Z",
      publishedAt: "2023-07-19T10:18:05.873Z",
      slug: "power-electric",
      dealers_description:
        "${totalCount} Power Electric Bike Showrooms are listed at BikeJunction. So locate Power Electric bike dealers near you in India. Get certified Power Electric showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Power Electric dealers in India with complete details.",
      brand_id: 105,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/power-electric",
    },
  },
  {
    id: 103,
    attributes: {
      name: "Vmoto Soco",
      createdAt: "2023-07-19T10:18:05.444Z",
      updatedAt: "2023-08-21T17:15:32.888Z",
      publishedAt: "2023-07-19T10:18:05.438Z",
      slug: "vmoto-soco",
      dealers_description:
        "${totalCount} Vmoto Soco Bike Showrooms are listed at BikeJunction. So locate Vmoto Soco bike dealers near you in India. Get certified Vmoto Soco showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Vmoto Soco dealers in India with complete details.",
      brand_id: 103,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/vmoto-soco",
    },
  },
  {
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
  {
    id: 94,
    attributes: {
      name: "LML",
      createdAt: "2023-07-19T10:18:02.778Z",
      updatedAt: "2023-08-21T17:15:31.634Z",
      publishedAt: "2023-07-19T10:18:02.772Z",
      slug: "lml",
      dealers_description:
        "${totalCount} LML Bike Showrooms are listed at BikeJunction. So locate LML bike dealers near you in India. Get certified LML showrooms in your city including pune, patna, indore and many more. You can find out a complete list of LML dealers in India with complete details.",
      brand_id: 94,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/lml",
    },
  },
  {
    id: 113,
    attributes: {
      name: "Super Eco",
      createdAt: "2023-07-19T10:18:08.033Z",
      updatedAt: "2023-08-21T17:15:34.918Z",
      publishedAt: "2023-07-19T10:18:08.020Z",
      slug: "super-eco",
      dealers_description:
        "${totalCount} Super Eco Bike Showrooms are listed at BikeJunction. So locate Super Eco bike dealers near you in India. Get certified Super Eco showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Super Eco dealers in India with complete details.",
      brand_id: 116,
      promotion_weightage: 1,
      preview: "bike-dealer-showrooms/super-eco",
    },
  },
  {
    id: 114,
    attributes: {
      name: "ADMS",
      createdAt: "2023-07-19T10:18:08.186Z",
      updatedAt: "2023-08-21T17:15:35.063Z",
      publishedAt: "2023-07-19T10:18:08.180Z",
      slug: "adms",
      dealers_description:
        "${totalCount} ADMS Bike Showrooms are listed at BikeJunction. So locate ADMS bike dealers near you in India. Get certified ADMS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of ADMS dealers in India with complete details.",
      brand_id: 117,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/adms",
    },
  },
  {
    id: 34,
    attributes: {
      name: "Ampere",
      createdAt: "2023-07-19T10:17:40.264Z",
      updatedAt: "2023-08-24T07:09:57.849Z",
      publishedAt: "2023-07-19T10:17:40.248Z",
      slug: "ampere",
      dealers_description:
        "<p>${totalCount} Ampere Bike Showrooms are listed at BikeJunction. So locate Ampere bike dealers near you in India. Get certified Ampere showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ampere dealers in India with complete details.</p>",
      brand_id: 2,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/ampere",
    },
  },
  {
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
  {
    id: 97,
    attributes: {
      name: "Peugeot",
      createdAt: "2023-07-19T10:18:03.701Z",
      updatedAt: "2023-08-21T17:15:32.067Z",
      publishedAt: "2023-07-19T10:18:03.696Z",
      slug: "peugeot",
      dealers_description:
        "${totalCount} Peugeot Bike Showrooms are listed at BikeJunction. So locate Peugeot bike dealers near you in India. Get certified Peugeot showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Peugeot dealers in India with complete details.",
      brand_id: 97,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/peugeot",
    },
  },
  {
    id: 79,
    attributes: {
      name: "zero",
      createdAt: "2023-07-19T10:17:57.685Z",
      updatedAt: "2023-08-21T17:15:29.381Z",
      publishedAt: "2023-07-19T10:17:57.680Z",
      slug: "zero",
      dealers_description:
        "${totalCount} zero Bike Showrooms are listed at BikeJunction. So locate zero bike dealers near you in India. Get certified zero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of zero dealers in India with complete details.",
      brand_id: 71,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/zero",
    },
  },
  {
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
  {
    id: 10,
    attributes: {
      name: "Tork",
      createdAt: "2023-06-26T10:11:14.990Z",
      updatedAt: "2023-08-29T08:23:59.522Z",
      publishedAt: "2023-07-26T07:21:07.220Z",
      slug: "tork",
      dealers_description:
        "<p>${totalCount} Tork Bike Showrooms are listed at BikeJunction. So locate Tork bike dealers near you in India. Get certified Tork showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Tork dealers in India with complete details.</p>",
      brand_id: 42,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/tork",
    },
  },
  {
    id: 107,
    attributes: {
      name: "BattRE",
      createdAt: "2023-07-19T10:18:06.494Z",
      updatedAt: "2023-08-21T17:15:33.848Z",
      publishedAt: "2023-07-19T10:18:06.489Z",
      slug: "battre",
      dealers_description:
        "${totalCount} BattRE Bike Showrooms are listed at BikeJunction. So locate BattRE bike dealers near you in India. Get certified BattRE showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BattRE dealers in India with complete details.",
      brand_id: 108,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/battre",
    },
  },
  {
    id: 109,
    attributes: {
      name: "Orxa",
      createdAt: "2023-07-19T10:18:07.034Z",
      updatedAt: "2023-08-21T17:15:34.371Z",
      publishedAt: "2023-07-19T10:18:07.027Z",
      slug: "orxa",
      dealers_description:
        "${totalCount} Orxa Bike Showrooms are listed at BikeJunction. So locate Orxa bike dealers near you in India. Get certified Orxa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Orxa dealers in India with complete details.",
      brand_id: 111,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/orxa",
    },
  },
  {
    id: 98,
    attributes: {
      name: "Eeve",
      createdAt: "2023-07-19T10:18:04.001Z",
      updatedAt: "2023-08-21T17:15:32.214Z",
      publishedAt: "2023-07-19T10:18:03.989Z",
      slug: "eeve",
      dealers_description:
        "${totalCount} Eeve Bike Showrooms are listed at BikeJunction. So locate Eeve bike dealers near you in India. Get certified Eeve showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Eeve dealers in India with complete details.",
      brand_id: 98,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/eeve",
    },
  },
  {
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
  {
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
  {
    id: 100,
    attributes: {
      name: "Kyte Energy",
      createdAt: "2023-07-19T10:18:04.635Z",
      updatedAt: "2023-08-21T17:15:32.481Z",
      publishedAt: "2023-07-19T10:18:04.621Z",
      slug: "kyte-energy",
      dealers_description:
        "${totalCount} Kyte Energy Bike Showrooms are listed at BikeJunction. So locate Kyte Energy bike dealers near you in India. Get certified Kyte Energy showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kyte Energy dealers in India with complete details.",
      brand_id: 100,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/kyte-energy",
    },
  },
  {
    id: 96,
    attributes: {
      name: "Vioma",
      createdAt: "2023-07-19T10:18:03.496Z",
      updatedAt: "2023-08-21T17:15:31.932Z",
      publishedAt: "2023-07-19T10:18:03.488Z",
      slug: "vioma",
      dealers_description:
        "${totalCount} Vioma Bike Showrooms are listed at BikeJunction. So locate Vioma bike dealers near you in India. Get certified Vioma showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Vioma dealers in India with complete details.",
      brand_id: 96,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/vioma",
    },
  },
  {
    id: 46,
    attributes: {
      name: "Gemopai",
      createdAt: "2023-07-19T10:17:43.492Z",
      updatedAt: "2023-08-21T17:15:21.305Z",
      publishedAt: "2023-07-19T10:17:43.486Z",
      slug: "gemopai",
      dealers_description:
        "${totalCount} Gemopai Bike Showrooms are listed at BikeJunction. So locate Gemopai bike dealers near you in India. Get certified Gemopai showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Gemopai dealers in India with complete details.",
      brand_id: 15,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/gemopai",
    },
  },
  {
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
  {
    id: 108,
    attributes: {
      name: "Stella Moto",
      createdAt: "2023-07-19T10:18:06.780Z",
      updatedAt: "2023-08-21T17:15:34.235Z",
      publishedAt: "2023-07-19T10:18:06.772Z",
      slug: "stella-moto",
      dealers_description:
        "${totalCount} Stella Moto Bike Showrooms are listed at BikeJunction. So locate Stella Moto bike dealers near you in India. Get certified Stella Moto showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Stella Moto dealers in India with complete details.",
      brand_id: 110,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/stella-moto",
    },
  },
  {
    id: 104,
    attributes: {
      name: "Kinetic Green",
      createdAt: "2023-07-19T10:18:05.630Z",
      updatedAt: "2023-08-21T17:15:33.132Z",
      publishedAt: "2023-07-19T10:18:05.621Z",
      slug: "kinetic-green",
      dealers_description:
        "${totalCount} Kinetic Green Bike Showrooms are listed at BikeJunction. So locate Kinetic Green bike dealers near you in India. Get certified Kinetic Green showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kinetic Green dealers in India with complete details.",
      brand_id: 104,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/kinetic-green",
    },
  },
  {
    id: 106,
    attributes: {
      name: "Thunderbolt",
      createdAt: "2023-07-19T10:18:06.256Z",
      updatedAt: "2023-08-21T17:15:33.454Z",
      publishedAt: "2023-07-19T10:18:06.251Z",
      slug: "thunderbolt",
      dealers_description:
        "${totalCount} Thunderbolt Bike Showrooms are listed at BikeJunction. So locate Thunderbolt bike dealers near you in India. Get certified Thunderbolt showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Thunderbolt dealers in India with complete details.",
      brand_id: 106,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/thunderbolt",
    },
  },
  {
    id: 117,
    attributes: {
      name: "Amo",
      createdAt: "2023-07-19T10:18:09.122Z",
      updatedAt: "2023-08-21T17:15:35.490Z",
      publishedAt: "2023-07-19T10:18:09.117Z",
      slug: "amo",
      dealers_description:
        "${totalCount} Amo Bike Showrooms are listed at BikeJunction. So locate Amo bike dealers near you in India. Get certified Amo showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Amo dealers in India with complete details.",
      brand_id: 121,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/amo",
    },
  },
  {
    id: 110,
    attributes: {
      name: "Svitch",
      createdAt: "2023-07-19T10:18:07.313Z",
      updatedAt: "2023-08-21T17:15:34.508Z",
      publishedAt: "2023-07-19T10:18:07.305Z",
      slug: "svitch",
      dealers_description:
        "${totalCount} Svitch Bike Showrooms are listed at BikeJunction. So locate Svitch bike dealers near you in India. Get certified Svitch showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Svitch dealers in India with complete details.",
      brand_id: 113,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/svitch",
    },
  },
  {
    id: 11,
    attributes: {
      name: "Hop",
      createdAt: "2023-06-26T10:13:00.472Z",
      updatedAt: "2023-08-21T17:15:14.926Z",
      publishedAt: "2023-06-26T10:22:21.597Z",
      slug: "hop",
      dealers_description:
        "${totalCount} Hop Bike Showrooms are listed at BikeJunction. So locate Hop bike dealers near you in India. Get certified Hop showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hop dealers in India with complete details.",
      brand_id: 80,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/hop",
    },
  },
  {
    id: 9,
    attributes: {
      name: "Revolt",
      createdAt: "2023-06-26T10:10:46.489Z",
      updatedAt: "2023-08-21T17:15:14.577Z",
      publishedAt: "2023-06-26T10:23:56.505Z",
      slug: "revolt",
      dealers_description:
        "${totalCount} Revolt Bike Showrooms are listed at BikeJunction. So locate Revolt bike dealers near you in India. Get certified Revolt showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Revolt dealers in India with complete details.",
      brand_id: 37,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/revolt",
    },
  },
  {
    id: 78,
    attributes: {
      name: "gogoro",
      createdAt: "2023-07-19T10:17:57.453Z",
      updatedAt: "2023-08-21T17:15:29.254Z",
      publishedAt: "2023-07-19T10:17:57.444Z",
      slug: "gogoro",
      dealers_description:
        "${totalCount} gogoro Bike Showrooms are listed at BikeJunction. So locate gogoro bike dealers near you in India. Get certified gogoro showrooms in your city including pune, patna, indore and many more. You can find out a complete list of gogoro dealers in India with complete details.",
      brand_id: 70,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/gogoro",
    },
  },
  {
    id: 112,
    attributes: {
      name: "Merico",
      createdAt: "2023-07-19T10:18:07.775Z",
      updatedAt: "2023-08-21T17:15:34.782Z",
      publishedAt: "2023-07-19T10:18:07.769Z",
      slug: "merico",
      dealers_description:
        "${totalCount} Merico Bike Showrooms are listed at BikeJunction. So locate Merico bike dealers near you in India. Get certified Merico showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Merico dealers in India with complete details.",
      brand_id: 115,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/merico",
    },
  },
  {
    id: 120,
    attributes: {
      name: "iVOOMi",
      createdAt: "2023-09-04T11:53:59.327Z",
      updatedAt: "2023-09-04T12:10:36.949Z",
      publishedAt: "2023-09-04T11:53:59.131Z",
      slug: "ivoomi",
      dealers_description:
        "<p>${totalCount} iVOOMi Bike Showrooms are listed at BikeJunction. So locate iVOOMi bike dealers near you in India. Get certified iVOOMi showrooms in your city including pune, patna, indore and many more. You can find out a complete list of iVOOMi dealers in India with complete details. ${currentYear} this brand offers ${totalCount} models.</p>",
      brand_id: 122,
      promotion_weightage: null,
      preview: "newBrand",
    },
  },
  {
    id: 83,
    attributes: {
      name: "Rowet",
      createdAt: "2023-07-19T10:17:58.586Z",
      updatedAt: "2023-08-21T17:15:29.941Z",
      publishedAt: "2023-07-19T10:17:58.578Z",
      slug: "rowet",
      dealers_description:
        "${totalCount} Rowet Bike Showrooms are listed at BikeJunction. So locate Rowet bike dealers near you in India. Get certified Rowet showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Rowet dealers in India with complete details.",
      brand_id: 77,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/rowet",
    },
  },
  {
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
  {
    id: 87,
    attributes: {
      name: "Quantum",
      createdAt: "2023-07-19T10:18:01.035Z",
      updatedAt: "2023-08-21T17:15:30.543Z",
      publishedAt: "2023-07-19T10:18:01.028Z",
      slug: "quantum",
      dealers_description:
        "${totalCount} Quantum Bike Showrooms are listed at BikeJunction. So locate Quantum bike dealers near you in India. Get certified Quantum showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Quantum dealers in India with complete details.",
      brand_id: 85,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/quantum",
    },
  },
  {
    id: 33,
    attributes: {
      name: "22Kymco",
      createdAt: "2023-07-19T10:08:58.218Z",
      updatedAt: "2023-08-24T07:15:20.511Z",
      publishedAt: "2023-08-01T12:14:11.620Z",
      slug: "22kymco",
      dealers_description:
        "<p>${totalCount} 22Kymco Bike Showrooms are listed at BikeJunction. So locate 22Kymco bike dealers near you in India. Get certified 22Kymco showrooms in your city including pune, patna, indore and many more. You can find out a complete list of 22Kymco dealers in India with complete details. ${currentYear}</p><p>&nbsp;</p><p>this brand offers ${<i>totalCount</i>} models.</p>",
      brand_id: 1,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/22kymco",
    },
  },
  {
    id: 88,
    attributes: {
      name: "Vida",
      createdAt: "2023-07-19T10:18:01.262Z",
      updatedAt: "2023-08-21T17:15:30.682Z",
      publishedAt: "2023-07-19T10:18:01.256Z",
      slug: "vida",
      dealers_description:
        "${totalCount} Vida Bike Showrooms are listed at BikeJunction. So locate Vida bike dealers near you in India. Get certified Vida showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Vida dealers in India with complete details.",
      brand_id: 87,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/vida",
    },
  },
  {
    id: 52,
    attributes: {
      name: "Joy e-bike",
      createdAt: "2023-07-19T10:17:45.190Z",
      updatedAt: "2023-08-21T17:15:23.480Z",
      publishedAt: "2023-07-19T10:17:45.185Z",
      slug: "joy-e-bike",
      dealers_description:
        "${totalCount} Joy e-bike Bike Showrooms are listed at BikeJunction. So locate Joy e-bike bike dealers near you in India. Get certified Joy e-bike showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Joy e-bike dealers in India with complete details.",
      brand_id: 23,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/joy-e-bike",
    },
  },
  {
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
  {
    id: 61,
    attributes: {
      name: "PURE EV",
      createdAt: "2023-07-19T10:17:48.713Z",
      updatedAt: "2023-08-21T17:15:24.786Z",
      publishedAt: "2023-07-19T10:17:48.708Z",
      slug: "pure-ev",
      dealers_description:
        "${totalCount} PURE EV Bike Showrooms are listed at BikeJunction. So locate PURE EV bike dealers near you in India. Get certified PURE EV showrooms in your city including pune, patna, indore and many more. You can find out a complete list of PURE EV dealers in India with complete details.",
      brand_id: 36,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/pure-ev",
    },
  },
  {
    id: 48,
    attributes: {
      name: "Hero Electric",
      createdAt: "2023-07-19T10:17:44.020Z",
      updatedAt: "2023-08-21T17:15:21.619Z",
      publishedAt: "2023-07-19T10:17:44.015Z",
      slug: "hero-electric",
      dealers_description:
        "${totalCount} Hero Electric Bike Showrooms are listed at BikeJunction. So locate Hero Electric bike dealers near you in India. Get certified Hero Electric showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero Electric dealers in India with complete details.",
      brand_id: 18,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/hero-electric",
    },
  },
  {
    id: 15,
    attributes: {
      name: "Cyborg",
      createdAt: "2023-06-30T08:29:22.594Z",
      updatedAt: "2023-08-21T17:15:16.485Z",
      publishedAt: "2023-06-30T08:29:24.525Z",
      slug: "cyborg",
      dealers_description:
        "${totalCount} Cyborg Bike Showrooms are listed at BikeJunction. So locate Cyborg bike dealers near you in India. Get certified Cyborg showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Cyborg dealers in India with complete details.",
      brand_id: 86,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/cyborg",
    },
  },
  {
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
  {
    id: 81,
    attributes: {
      name: "dynam",
      createdAt: "2023-07-19T10:17:58.112Z",
      updatedAt: "2023-08-21T17:15:29.664Z",
      publishedAt: "2023-07-19T10:17:58.103Z",
      slug: "dynam",
      dealers_description:
        "${totalCount} dynam Bike Showrooms are listed at BikeJunction. So locate dynam bike dealers near you in India. Get certified dynam showrooms in your city including pune, patna, indore and many more. You can find out a complete list of dynam dealers in India with complete details.",
      brand_id: 75,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/dynam",
    },
  },
  {
    id: 44,
    attributes: {
      name: "Emflux Motors",
      createdAt: "2023-07-19T10:17:43.043Z",
      updatedAt: "2023-08-21T17:15:20.992Z",
      publishedAt: "2023-07-19T10:17:43.037Z",
      slug: "emflux-motors",
      dealers_description:
        "${totalCount} Emflux Motors Bike Showrooms are listed at BikeJunction. So locate Emflux Motors bike dealers near you in India. Get certified Emflux Motors showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Emflux Motors dealers in India with complete details.",
      brand_id: 13,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/emflux-motors",
    },
  },
  {
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
  {
    id: 122,
    attributes: {
      name: "cake ",
      createdAt: "2023-09-04T11:53:59.332Z",
      updatedAt: "2023-09-04T12:05:42.511Z",
      publishedAt: "2023-09-04T11:53:59.162Z",
      slug: "cake-4236",
      dealers_description:
        "<p>${totalCount} Cake Bike Showrooms are listed at BikeJunction. So locate Cake bike dealers near you in India. Get certified Cake showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Cake dealers in India with complete details. ${currentYear} this brand offers ${totalCount} models.</p>",
      brand_id: 62,
      promotion_weightage: null,
      preview: "newBrand",
    },
  },
  {
    id: 75,
    attributes: {
      name: "Birla",
      createdAt: "2023-07-19T10:17:56.534Z",
      updatedAt: "2023-08-21T17:15:27.802Z",
      publishedAt: "2023-07-19T10:17:56.527Z",
      slug: "birla",
      dealers_description:
        "${totalCount} Birla Bike Showrooms are listed at BikeJunction. So locate Birla bike dealers near you in India. Get certified Birla showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Birla dealers in India with complete details.",
      brand_id: 67,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/birla",
    },
  },
  {
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
  {
    id: 41,
    attributes: {
      name: "Bounce",
      createdAt: "2023-07-19T10:17:42.402Z",
      updatedAt: "2023-08-21T17:15:20.558Z",
      publishedAt: "2023-07-19T10:17:42.394Z",
      slug: "bounce",
      dealers_description:
        "${totalCount} Bounce Bike Showrooms are listed at BikeJunction. So locate Bounce bike dealers near you in India. Get certified Bounce showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Bounce dealers in India with complete details.",
      brand_id: 10,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/bounce",
    },
  },
  {
    id: 71,
    attributes: {
      name: "Ultraviolette",
      createdAt: "2023-07-19T10:17:54.974Z",
      updatedAt: "2023-08-21T17:15:26.254Z",
      publishedAt: "2023-07-19T10:17:54.964Z",
      slug: "ultraviolette",
      dealers_description:
        "${totalCount} Ultraviolette Bike Showrooms are listed at BikeJunction. So locate Ultraviolette bike dealers near you in India. Get certified Ultraviolette showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ultraviolette dealers in India with complete details.",
      brand_id: 59,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/ultraviolette",
    },
  },
  {
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
  {
    id: 92,
    attributes: {
      name: "Livewire",
      createdAt: "2023-07-19T10:18:02.136Z",
      updatedAt: "2023-08-21T17:15:31.337Z",
      publishedAt: "2023-07-19T10:18:02.130Z",
      slug: "livewire",
      dealers_description:
        "${totalCount} Livewire Bike Showrooms are listed at BikeJunction. So locate Livewire bike dealers near you in India. Get certified Livewire showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Livewire dealers in India with complete details.",
      brand_id: 92,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/livewire",
    },
  },
  {
    id: 89,
    attributes: {
      name: "Motovolt",
      createdAt: "2023-07-19T10:18:01.422Z",
      updatedAt: "2023-08-21T17:15:30.825Z",
      publishedAt: "2023-07-19T10:18:01.414Z",
      slug: "motovolt",
      dealers_description:
        "${totalCount} Motovolt Bike Showrooms are listed at BikeJunction. So locate Motovolt bike dealers near you in India. Get certified Motovolt showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Motovolt dealers in India with complete details.",
      brand_id: 88,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/motovolt",
    },
  },
  {
    id: 85,
    attributes: {
      name: "Srivaru",
      createdAt: "2023-07-19T10:18:00.317Z",
      updatedAt: "2023-08-21T17:15:30.271Z",
      publishedAt: "2023-07-19T10:18:00.311Z",
      slug: "srivaru",
      dealers_description:
        "${totalCount} Srivaru Bike Showrooms are listed at BikeJunction. So locate Srivaru bike dealers near you in India. Get certified Srivaru showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Srivaru dealers in India with complete details.",
      brand_id: 82,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/srivaru",
    },
  },
  {
    id: 86,
    attributes: {
      name: "Evtric",
      createdAt: "2023-07-19T10:18:00.728Z",
      updatedAt: "2023-08-21T17:15:30.405Z",
      publishedAt: "2023-07-19T10:18:00.722Z",
      slug: "evtric",
      dealers_description:
        "${totalCount} Evtric Bike Showrooms are listed at BikeJunction. So locate Evtric bike dealers near you in India. Get certified Evtric showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Evtric dealers in India with complete details.",
      brand_id: 84,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/evtric",
    },
  },
  {
    id: 12,
    attributes: {
      name: "OLA",
      createdAt: "2023-06-26T10:13:45.050Z",
      updatedAt: "2023-08-21T17:15:15.069Z",
      publishedAt: "2023-06-26T10:55:57.597Z",
      slug: "ola",
      dealers_description:
        "${totalCount} OLA Bike Showrooms are listed at BikeJunction. So locate OLA bike dealers near you in India. Get certified OLA showrooms in your city including pune, patna, indore and many more. You can find out a complete list of OLA dealers in India with complete details.",
      brand_id: 35,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/ola",
    },
  },
  {
    id: 62,
    attributes: {
      name: "Simple Energy",
      createdAt: "2023-07-19T10:17:49.057Z",
      updatedAt: "2023-08-21T17:15:24.953Z",
      publishedAt: "2023-07-19T10:17:49.051Z",
      slug: "simple-energy",
      dealers_description:
        "${totalCount} Simple Energy Bike Showrooms are listed at BikeJunction. So locate Simple Energy bike dealers near you in India. Get certified Simple Energy showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Simple Energy dealers in India with complete details.",
      brand_id: 39,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/simple-energy",
    },
  },
  {
    id: 24,
    attributes: {
      name: "Tunwal",
      createdAt: "2023-06-30T10:27:32.046Z",
      updatedAt: "2023-08-21T17:15:17.806Z",
      publishedAt: "2023-06-30T10:27:33.625Z",
      slug: "tunwal",
      dealers_description:
        "${totalCount} Tunwal Bike Showrooms are listed at BikeJunction. So locate Tunwal bike dealers near you in India. Get certified Tunwal showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Tunwal dealers in India with complete details.",
      brand_id: 72,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/tunwal",
    },
  },
  {
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
  {
    id: 67,
    attributes: {
      name: "Fujiyama",
      createdAt: "2023-07-19T10:17:54.072Z",
      updatedAt: "2023-08-21T17:15:25.689Z",
      publishedAt: "2023-07-19T10:17:54.066Z",
      slug: "fujiyama",
      dealers_description:
        "${totalCount} Fujiyama Bike Showrooms are listed at BikeJunction. So locate Fujiyama bike dealers near you in India. Get certified Fujiyama showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Fujiyama dealers in India with complete details.",
      brand_id: 50,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/fujiyama",
    },
  },
  {
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
  {
    id: 16,
    attributes: {
      name: "Emote",
      createdAt: "2023-06-30T09:48:56.128Z",
      updatedAt: "2023-08-21T17:15:16.619Z",
      publishedAt: "2023-06-30T09:48:57.749Z",
      slug: "emote",
      dealers_description:
        "${totalCount} Emote Bike Showrooms are listed at BikeJunction. So locate Emote bike dealers near you in India. Get certified Emote showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Emote dealers in India with complete details.",
      brand_id: 112,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/emote",
    },
  },
  {
    id: 123,
    attributes: {
      name: "Godawari",
      createdAt: "2023-09-04T11:53:59.334Z",
      updatedAt: "2023-09-04T12:09:47.074Z",
      publishedAt: "2023-09-04T11:53:59.195Z",
      slug: "godawari",
      dealers_description:
        "<p>${totalCount} Godawari Bike Showrooms are listed at BikeJunction. So locate Godawari bike dealers near you in India. Get certified Godawari showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Godawari dealers in India with complete details. ${currentYear} this brand offers ${totalCount} models.</p>",
      brand_id: 124,
      promotion_weightage: null,
      preview: "newBrand",
    },
  },
  {
    id: 13,
    attributes: {
      name: "Okaya",
      createdAt: "2023-06-26T10:14:49.024Z",
      updatedAt: "2023-08-21T17:15:16.213Z",
      publishedAt: "2023-06-26T10:56:06.900Z",
      slug: "okaya",
      dealers_description:
        "${totalCount} Okaya Bike Showrooms are listed at BikeJunction. So locate Okaya bike dealers near you in India. Get certified Okaya showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Okaya dealers in India with complete details.",
      brand_id: 33,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/okaya",
    },
  },
  {
    id: 26,
    attributes: {
      name: "Lambretta",
      createdAt: "2023-06-30T10:34:49.113Z",
      updatedAt: "2023-08-21T17:15:18.152Z",
      publishedAt: "2023-06-30T10:34:50.887Z",
      slug: "lambretta",
      dealers_description:
        "${totalCount} Lambretta Bike Showrooms are listed at BikeJunction. So locate Lambretta bike dealers near you in India. Get certified Lambretta showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Lambretta dealers in India with complete details.",
      brand_id: 27,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/lambretta",
    },
  },
  {
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
  {
    id: 124,
    attributes: {
      name: "Enigma",
      createdAt: "2023-09-04T11:53:59.348Z",
      updatedAt: "2023-09-04T12:43:25.482Z",
      publishedAt: "2023-09-04T11:53:59.108Z",
      slug: "enigma",
      dealers_description:
        "<p>${totalCount} Enigma Bike Showrooms are listed at BikeJunction. So locate Enigma bike dealers near you in India. Get certified Enigma showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Enigma dealers in India with complete details. ${currentYear} this brand offers ${totalCount} models.</p>",
      brand_id: 123,
      promotion_weightage: null,
      preview: "newBrand",
    },
  },
  {
    id: 39,
    attributes: {
      name: "BGauss",
      createdAt: "2023-07-19T10:17:41.757Z",
      updatedAt: "2023-08-21T17:15:20.264Z",
      publishedAt: "2023-07-19T10:17:41.750Z",
      slug: "bgauss",
      dealers_description:
        "${totalCount} BGauss Bike Showrooms are listed at BikeJunction. So locate BGauss bike dealers near you in India. Get certified BGauss showrooms in your city including pune, patna, indore and many more. You can find out a complete list of BGauss dealers in India with complete details.",
      brand_id: 8,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/bgauss",
    },
  },
  {
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
  {
    id: 115,
    attributes: {
      name: "Zelio",
      createdAt: "2023-07-19T10:18:08.449Z",
      updatedAt: "2023-08-21T17:15:35.210Z",
      publishedAt: "2023-07-19T10:18:08.438Z",
      slug: "zelio",
      dealers_description:
        "${totalCount} Zelio Bike Showrooms are listed at BikeJunction. So locate Zelio bike dealers near you in India. Get certified Zelio showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Zelio dealers in India with complete details.",
      brand_id: 119,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/zelio",
    },
  },
  {
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
  {
    id: 20,
    attributes: {
      name: "Komaki",
      createdAt: "2023-06-30T10:14:08.194Z",
      updatedAt: "2023-08-21T17:15:17.202Z",
      publishedAt: "2023-06-30T10:14:14.130Z",
      slug: "komaki",
      dealers_description:
        "${totalCount} Komaki Bike Showrooms are listed at BikeJunction. So locate Komaki bike dealers near you in India. Get certified Komaki showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Komaki dealers in India with complete details.",
      brand_id: 83,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/komaki",
    },
  },
  {
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
  {
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
  {
    id: 90,
    attributes: {
      name: "Future Garage",
      createdAt: "2023-07-19T10:18:01.754Z",
      updatedAt: "2023-08-21T17:15:30.965Z",
      publishedAt: "2023-07-19T10:18:01.746Z",
      slug: "future-garage",
      dealers_description:
        "${totalCount} Future Garage Bike Showrooms are listed at BikeJunction. So locate Future Garage bike dealers near you in India. Get certified Future Garage showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Future Garage dealers in India with complete details.",
      brand_id: 89,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/future-garage",
    },
  },
  {
    id: 121,
    attributes: {
      name: "ultraviolette",
      createdAt: "2023-09-04T11:53:59.328Z",
      updatedAt: "2023-09-04T12:11:39.587Z",
      publishedAt: "2023-09-04T11:53:59.050Z",
      slug: "ultraviolette-5133",
      dealers_description:
        "<p>${totalCount} Ultraviolette Bike Showrooms are listed at BikeJunction. So locate Ultraviolette bike dealers near you in India. Get certified Ultraviolette showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ultraviolette dealers in India with complete details. ${currentYear} this brand offers ${totalCount} models.</p>",
      brand_id: 61,
      promotion_weightage: null,
      preview: "newBrand",
    },
  },
  {
    id: 1,
    attributes: {
      name: "Ather",
      createdAt: "2023-06-08T07:14:32.043Z",
      updatedAt: "2023-08-21T17:15:13.538Z",
      publishedAt: "2023-06-08T07:15:34.690Z",
      slug: "ather",
      dealers_description:
        "${totalCount} Ather Bike Showrooms are listed at BikeJunction. So locate Ather bike dealers near you in India. Get certified Ather showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Ather dealers in India with complete details.",
      brand_id: 4,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/ather",
    },
  },
  {
    id: 17,
    attributes: {
      name: "Oben",
      createdAt: "2023-06-30T09:55:06.813Z",
      updatedAt: "2023-08-21T17:15:16.755Z",
      publishedAt: "2023-06-30T09:55:08.336Z",
      slug: "oben",
      dealers_description:
        "${totalCount} Oben Bike Showrooms are listed at BikeJunction. So locate Oben bike dealers near you in India. Get certified Oben showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Oben dealers in India with complete details.",
      brand_id: 79,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/oben",
    },
  },
  {
    id: 19,
    attributes: {
      name: "Revamp",
      createdAt: "2023-06-30T10:06:01.685Z",
      updatedAt: "2023-08-21T17:15:17.046Z",
      publishedAt: "2023-06-30T10:06:03.475Z",
      slug: "revamp",
      dealers_description:
        "${totalCount} Revamp Bike Showrooms are listed at BikeJunction. So locate Revamp bike dealers near you in India. Get certified Revamp showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Revamp dealers in India with complete details.",
      brand_id: 91,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/revamp",
    },
  },
  {
    id: 23,
    attributes: {
      name: "Yo",
      createdAt: "2023-06-30T10:25:04.206Z",
      updatedAt: "2023-08-21T17:15:17.664Z",
      publishedAt: "2023-06-30T10:25:06.124Z",
      slug: "yo",
      dealers_description:
        "${totalCount} Yo Bike Showrooms are listed at BikeJunction. So locate Yo bike dealers near you in India. Get certified Yo showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Yo dealers in India with complete details.",
      brand_id: 48,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/yo",
    },
  },
  {
    id: 101,
    attributes: {
      name: "Everve",
      createdAt: "2023-07-19T10:18:04.940Z",
      updatedAt: "2023-08-21T17:15:32.616Z",
      publishedAt: "2023-07-19T10:18:04.922Z",
      slug: "everve",
      dealers_description:
        "${totalCount} Everve Bike Showrooms are listed at BikeJunction. So locate Everve bike dealers near you in India. Get certified Everve showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Everve dealers in India with complete details.",
      brand_id: 101,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/everve",
    },
  },
  {
    id: 8,
    attributes: {
      name: "Matter",
      createdAt: "2023-06-26T10:10:06.429Z",
      updatedAt: "2023-08-21T17:15:14.429Z",
      publishedAt: "2023-06-26T10:22:48.497Z",
      slug: "matter",
      dealers_description:
        "${totalCount} Matter Bike Showrooms are listed at BikeJunction. So locate Matter bike dealers near you in India. Get certified Matter showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Matter dealers in India with complete details.",
      brand_id: 49,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/matter",
    },
  },
  {
    id: 22,
    attributes: {
      name: "Kabira",
      createdAt: "2023-06-30T10:23:00.485Z",
      updatedAt: "2023-08-21T17:15:17.521Z",
      publishedAt: "2023-06-30T10:23:07.852Z",
      slug: "kabira",
      dealers_description:
        "${totalCount} Kabira Bike Showrooms are listed at BikeJunction. So locate Kabira bike dealers near you in India. Get certified Kabira showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Kabira dealers in India with complete details.",
      brand_id: 81,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/kabira",
    },
  },
  {
    id: 60,
    attributes: {
      name: "Okinawa",
      createdAt: "2023-07-19T10:17:48.542Z",
      updatedAt: "2023-08-21T17:15:24.634Z",
      publishedAt: "2023-07-19T10:17:48.536Z",
      slug: "okinawa",
      dealers_description:
        "${totalCount} Okinawa Bike Showrooms are listed at BikeJunction. So locate Okinawa bike dealers near you in India. Get certified Okinawa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Okinawa dealers in India with complete details.",
      brand_id: 34,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/okinawa",
    },
  },
  {
    id: 111,
    attributes: {
      name: "EKO TEJAS",
      createdAt: "2023-07-19T10:18:07.589Z",
      updatedAt: "2023-08-21T17:15:34.643Z",
      publishedAt: "2023-07-19T10:18:07.583Z",
      slug: "eko-tejas",
      dealers_description:
        "${totalCount} EKO TEJAS Bike Showrooms are listed at BikeJunction. So locate EKO TEJAS bike dealers near you in India. Get certified EKO TEJAS showrooms in your city including pune, patna, indore and many more. You can find out a complete list of EKO TEJAS dealers in India with complete details.",
      brand_id: 114,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/eko-tejas",
    },
  },
  {
    id: 116,
    attributes: {
      name: "Hayasa",
      createdAt: "2023-07-19T10:18:08.824Z",
      updatedAt: "2023-08-21T17:15:35.348Z",
      publishedAt: "2023-07-19T10:18:08.818Z",
      slug: "hayasa",
      dealers_description:
        "${totalCount} Hayasa Bike Showrooms are listed at BikeJunction. So locate Hayasa bike dealers near you in India. Get certified Hayasa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hayasa dealers in India with complete details.",
      brand_id: 120,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/hayasa",
    },
  },
  {
    id: 21,
    attributes: {
      name: "Lectrix",
      createdAt: "2023-06-30T10:19:54.225Z",
      updatedAt: "2023-08-21T17:15:17.365Z",
      publishedAt: "2023-06-30T10:20:01.513Z",
      slug: "lectrix",
      dealers_description:
        "${totalCount} Lectrix Bike Showrooms are listed at BikeJunction. So locate Lectrix bike dealers near you in India. Get certified Lectrix showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Lectrix dealers in India with complete details.",
      brand_id: 118,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/lectrix",
    },
  },
  {
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
  {
    id: 59,
    attributes: {
      name: "Odysse",
      createdAt: "2023-07-19T10:17:48.239Z",
      updatedAt: "2023-08-21T17:15:24.480Z",
      publishedAt: "2023-07-19T10:17:48.230Z",
      slug: "odysse",
      dealers_description:
        "${totalCount} Odysse Bike Showrooms are listed at BikeJunction. So locate Odysse bike dealers near you in India. Get certified Odysse showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Odysse dealers in India with complete details.",
      brand_id: 32,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/odysse",
    },
  },
  {
    id: 74,
    attributes: {
      name: "Liger",
      createdAt: "2023-07-19T10:17:56.222Z",
      updatedAt: "2023-08-21T17:15:27.668Z",
      publishedAt: "2023-07-19T10:17:56.216Z",
      slug: "liger",
      dealers_description:
        "${totalCount} Liger Bike Showrooms are listed at BikeJunction. So locate Liger bike dealers near you in India. Get certified Liger showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Liger dealers in India with complete details.",
      brand_id: 66,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/liger",
    },
  },
  {
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
  {
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
  {
    id: 76,
    attributes: {
      name: "Aeroride",
      createdAt: "2023-07-19T10:17:56.836Z",
      updatedAt: "2023-08-21T17:15:28.963Z",
      publishedAt: "2023-07-19T10:17:56.831Z",
      slug: "aeroride-electric",
      dealers_description:
        "${totalCount} Aeroride Bike Showrooms are listed at BikeJunction. So locate Aeroride bike dealers near you in India. Get certified Aeroride showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Aeroride dealers in India with complete details.",
      brand_id: 68,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/aeroride-electric",
    },
  },
  {
    id: 4,
    attributes: {
      name: "Hero",
      createdAt: "2023-06-08T10:59:58.716Z",
      updatedAt: "2023-08-29T07:17:02.245Z",
      publishedAt: "2023-06-08T11:00:01.236Z",
      slug: "hero",
      dealers_description:
        "<p>${totalCount} Hero Bike Showrooms are listed at BikeJunction. So locate Hero bike dealers near you in India. Get certified Hero showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Hero dealers in India with complete details.</p>",
      brand_id: 17,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/hero",
    },
  },
  {
    id: 18,
    attributes: {
      name: "Gravton",
      createdAt: "2023-06-30T09:59:26.661Z",
      updatedAt: "2023-08-21T17:15:16.900Z",
      publishedAt: "2023-06-30T09:59:28.414Z",
      slug: "gravton",
      dealers_description:
        "${totalCount} Gravton Bike Showrooms are listed at BikeJunction. So locate Gravton bike dealers near you in India. Get certified Gravton showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Gravton dealers in India with complete details.",
      brand_id: 63,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/gravton",
    },
  },
  {
    id: 38,
    attributes: {
      name: "Benling",
      createdAt: "2023-07-19T10:17:41.486Z",
      updatedAt: "2023-08-21T17:15:19.066Z",
      publishedAt: "2023-07-19T10:17:41.474Z",
      slug: "benling",
      dealers_description:
        "${totalCount} Benling Bike Showrooms are listed at BikeJunction. So locate Benling bike dealers near you in India. Get certified Benling showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Benling dealers in India with complete details.",
      brand_id: 7,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/benling",
    },
  },
  {
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
  {
    id: 82,
    attributes: {
      name: "emotorad",
      createdAt: "2023-07-19T10:17:58.374Z",
      updatedAt: "2023-08-21T17:15:29.799Z",
      publishedAt: "2023-07-19T10:17:58.368Z",
      slug: "emotorad",
      dealers_description:
        "${totalCount} emotorad Bike Showrooms are listed at BikeJunction. So locate emotorad bike dealers near you in India. Get certified emotorad showrooms in your city including pune, patna, indore and many more. You can find out a complete list of emotorad dealers in India with complete details.",
      brand_id: 76,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/emotorad",
    },
  },
  {
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
  {
    id: 77,
    attributes: {
      name: "Atum mobility",
      createdAt: "2023-07-19T10:17:57.147Z",
      updatedAt: "2023-08-21T17:15:29.105Z",
      publishedAt: "2023-07-19T10:17:57.140Z",
      slug: "atum-mobility",
      dealers_description:
        "${totalCount} Atum mobility Bike Showrooms are listed at BikeJunction. So locate Atum mobility bike dealers near you in India. Get certified Atum mobility showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Atum mobility dealers in India with complete details.",
      brand_id: 69,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/atum-mobility",
    },
  },
  {
    id: 55,
    attributes: {
      name: "Lectro",
      createdAt: "2023-07-19T10:17:45.938Z",
      updatedAt: "2023-08-21T17:15:23.893Z",
      publishedAt: "2023-07-19T10:17:45.930Z",
      slug: "lectro",
      dealers_description:
        "${totalCount} Lectro Bike Showrooms are listed at BikeJunction. So locate Lectro bike dealers near you in India. Get certified Lectro showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Lectro dealers in India with complete details.",
      brand_id: 28,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/lectro",
    },
  },
  {
    id: 91,
    attributes: {
      name: "Evoke",
      createdAt: "2023-07-19T10:18:01.985Z",
      updatedAt: "2023-08-21T17:15:31.091Z",
      publishedAt: "2023-07-19T10:18:01.979Z",
      slug: "evoke",
      dealers_description:
        "${totalCount} Evoke Bike Showrooms are listed at BikeJunction. So locate Evoke bike dealers near you in India. Get certified Evoke showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Evoke dealers in India with complete details.",
      brand_id: 90,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/evoke",
    },
  },
  {
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
  {
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
  {
    id: 65,
    attributes: {
      name: "Vespa",
      createdAt: "2023-07-19T10:17:53.387Z",
      updatedAt: "2023-08-21T17:15:25.399Z",
      publishedAt: "2023-07-19T10:17:53.380Z",
      slug: "vespa",
      dealers_description:
        "${totalCount} Vespa Bike Showrooms are listed at BikeJunction. So locate Vespa bike dealers near you in India. Get certified Vespa showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Vespa dealers in India with complete details.",
      brand_id: 45,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/vespa",
    },
  },
  {
    id: 45,
    attributes: {
      name: "Evolet",
      createdAt: "2023-07-19T10:17:43.320Z",
      updatedAt: "2023-08-21T17:15:21.133Z",
      publishedAt: "2023-07-19T10:17:43.313Z",
      slug: "evolet",
      dealers_description:
        "${totalCount} Evolet Bike Showrooms are listed at BikeJunction. So locate Evolet bike dealers near you in India. Get certified Evolet showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Evolet dealers in India with complete details.",
      brand_id: 14,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/evolet",
    },
  },
  {
    id: 70,
    attributes: {
      name: "Cake",
      createdAt: "2023-07-19T10:17:54.764Z",
      updatedAt: "2023-09-04T12:06:53.564Z",
      publishedAt: "2023-07-19T10:17:54.759Z",
      slug: "cake",
      dealers_description:
        "<p>${totalCount} Cake Bike Showrooms are listed at BikeJunction. So locate Cake bike dealers near you in India. Get certified Cake showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Cake dealers in India with complete details.</p>",
      brand_id: 58,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/cake",
    },
  },
  {
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
  {
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
  {
    id: 84,
    attributes: {
      name: "One",
      createdAt: "2023-07-19T10:17:58.990Z",
      updatedAt: "2023-08-21T17:15:30.102Z",
      publishedAt: "2023-07-19T10:17:58.980Z",
      slug: "one",
      dealers_description:
        "${totalCount} One Bike Showrooms are listed at BikeJunction. So locate One bike dealers near you in India. Get certified One showrooms in your city including pune, patna, indore and many more. You can find out a complete list of One dealers in India with complete details.",
      brand_id: 78,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/one",
    },
  },
  {
    id: 63,
    attributes: {
      name: "Techo Electra",
      createdAt: "2023-07-19T10:17:52.539Z",
      updatedAt: "2023-08-21T17:15:25.131Z",
      publishedAt: "2023-07-19T10:17:52.534Z",
      slug: "techo-electra",
      dealers_description:
        "${totalCount} Techo Electra Bike Showrooms are listed at BikeJunction. So locate Techo Electra bike dealers near you in India. Get certified Techo Electra showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Techo Electra dealers in India with complete details.",
      brand_id: 41,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/techo-electra",
    },
  },
  {
    id: 73,
    attributes: {
      name: "Devot",
      createdAt: "2023-07-19T10:17:55.921Z",
      updatedAt: "2023-08-21T17:15:27.523Z",
      publishedAt: "2023-07-19T10:17:55.909Z",
      slug: "devot",
      dealers_description:
        "${totalCount} Devot Bike Showrooms are listed at BikeJunction. So locate Devot bike dealers near you in India. Get certified Devot showrooms in your city including pune, patna, indore and many more. You can find out a complete list of Devot dealers in India with complete details.",
      brand_id: 65,
      promotion_weightage: 0,
      preview: "bike-dealer-showrooms/devot",
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

const d = users
  .slice(7000)
  .map((item) => {
    const {
      name,
      dealer_id,
      address,
      mobile1,
      mobile2,
      pincode,
      state,
      city,
      brands,
    } = item.data;

    const body = {
      data: {
        name,
        dealer_id,
        address,
        mobile1,
        mobile2,
        pincode,
        state,
        city,
        brands,
      },
    };

    return fetchData(
      `https://bikes-cms.tractorjunction.com/api/dealers`,
      "POST",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

function updateDate() {
  Promise.all(d)
    .then((data) => {
      console.log(data.length);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
