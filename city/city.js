import bikec from "./c.json" assert { type: "json" };
import strapic from "./s.json" assert { type: "json" };

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

const d = bikec
  .map((item) => {
    const s = strapic.filter((i) => i.attributes.city_id == item.id);
    const st = state.filter((i) => item.state_id === i.attributes.stateid);

    if (!s.length) {
      const body = {
        data: {
          name: item.name,
          slug: item.slug,
          city_id: item.id,
          state: {
            id: st[0].id,
          },
        },
      };
      return fetchData(
        `https://bikes-cms.tractorjunction.com/api/cities`,
        "POST",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

console.log(d);

function updateDate() {
  Promise.all(d)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
