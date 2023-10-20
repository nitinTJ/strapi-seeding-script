// import strapi_brands from "../data/strapi_brands.json" assert { type: "json" };
// import bike_models from "../data/strapi_brands.json" assert { type: "json" };

import best from "../data/strapi_brands.json" assert { type: "json" };

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

const data = {
  data: {
    id: 538,
    attributes: {
      heading: "Best Scooter Under 1 lakh",
      description:
        "Find a curated selection of all the top scooters Under 1 lakh from all the acclaimed brands like Suzuki, Hero, Honda, Bajaj, TVS, etc. Whether you’re looking for efficient commuters, stylish cruisers or sporty rides, we have the ideal bike for you. Explore the best scooters Under 1 lakh, like ${topModels}. Learn every detailed spec, including ex-showroom price, engine power, mileage and more. So, start your search with us today!",
      aboutContent:
        "Are you looking to buy a good Scooter under 1 lakh?\n\nBikeJunction gives you information about all the Scooter coming 1 lakh. You can get all the Scooter under 1 lakh with complete specifications. The Scooter with a stylish body that catches everyone's eyes is available in the 1 lakh.",
      createdAt: "2023-07-25T07:18:04.791Z",
      updatedAt: "2023-08-22T07:39:34.926Z",
      publishedAt: "2023-07-25T07:18:06.491Z",
      slug: "new-scooters/scooters-under-1-lakh",
      pageType: "scooterPricePage",
      about_heading: null,
      listing_heading: null,
      preview: "new-scooters/scooters-under-1-lakh",
      faq: [
        {
          id: 3700,
          question: "Q. Which Is The Best Scooter Under 1 lakh?",
          answer: "A. The best Scooter Under 1 lakh are ${topModels}.",
        },
        {
          id: 3701,
          question: "Q. How Many Bikes Are Available Under 1 lakh Range?",
          answer:
            "A. There are ${totalCount} models Under 1 lakh available at BikeJunction.",
        },
        {
          id: 3702,
          question: "Q. Which Is The Best Mileage Scooter Under 1 lakh Range?",
          answer:
            "A. The best mileage Scooter Under 1 lakh is ${mostEconomicalModelName} providing ${mostEconomicalModalName.attributes.mileage} Kmpl mileage.",
        },
        {
          id: 3703,
          question:
            "Q. Which Scooter Categories Are Available In {priceRange}.",
          answer: "A.  are available Under 1 lakh at BikeJunction.",
        },
      ],
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
      seo: {
        id: 9009,
        metaTitle:
          "Best Scooter Under 1 lakh in India ${currentYear} - Price List, Specs, Reviews",
        metaDescription:
          "Looking for the Best Scooter Under 1 lakh in India? BikeJunction provides a complete list of top Bike Under 1 lakh with on-road Prices, Mileage, Images, Reviews & Specs.",
        keywords: null,
        metaRobots: null,
        structuredData: null,
        metaViewport: null,
        canonicalURL:
          "https://bikes.tractorjunction.com/en/new-scooters/scooters-under-1-lakh",
        ogTitle:
          "Best Scooter Under 1 lakh in India ${currentYear} - Price List, Specs, Reviews",
        ogUrl:
          "https://bikes.tractorjunction.com/en/new-scooters/scooters-under-1-lakh",
        ogType: "website",
        ogDescription:
          "Looking for the Best Scooter Under 1 lakh in India? BikeJunction provides a complete list of top Bike Under 1 lakh with on-road Prices, Mileage, Images, Reviews & Specs.",
      },
    },
  },
  meta: {},
};
// users.data.map((item) => {

let count = 0;
const promisses = [1]
  .map((item) => {
    const body = {
      data: {
        heading: "Best Scooter Under 1 lakh",
        description:
          "Find a curated selection of all the top scooters Under 1 lakh from all the acclaimed brands like Suzuki, Hero, Honda, Bajaj, TVS, etc. Whether you’re looking for efficient commuters, stylish cruisers or sporty rides, we have the ideal bike for you. Explore the best scooters Under 1 lakh, like ${topModels}. Learn every detailed spec, including ex-showroom price, engine power, mileage and more. So, start your search with us today!",
        aboutContent:
          "Are you looking to buy a good Scooter under 1 lakh?\n\nBikeJunction gives you information about all the Scooter coming 1 lakh. You can get all the Scooter under 1 lakh with complete specifications. The Scooter with a stylish body that catches everyone's eyes is available in the 1 lakh.",
        preview: "new-scooters/scooters-under-1-lakh",
        slug: "new-scooters/scooters-under-1-lakh",
        pageType: "scooterPricePage",

        classification: {
          id: 2,
        },
        seo: {
          metaTitle:
            "Best Scooter Under 1 lakh in India ${currentYear} - Price List, Specs, Reviews",
          metaDescription:
            "Looking for the Best Scooter Under 1 lakh in India? BikeJunction provides a complete list of top Bike Under 1 lakh with on-road Prices, Mileage, Images, Reviews & Specs.",
          keywords: null,
          metaRobots: null,
          structuredData: null,
          metaViewport: null,
          canonicalURL:
            "https://bikes.tractorjunction.com/en/new-scooters/scooters-under-1-lakh",
          ogTitle:
            "Best Scooter Under 1 lakh in India ${currentYear} - Price List, Specs, Reviews",
          ogUrl:
            "https://bikes.tractorjunction.com/en/new-scooters/scooters-under-1-lakh",
          ogType: "website",
          ogDescription:
            "Looking for the Best Scooter Under 1 lakh in India? BikeJunction provides a complete list of top Bike Under 1 lakh with on-road Prices, Mileage, Images, Reviews & Specs.",
        },
        faq: [
          {
            question: "Q. Which Is The Best Scooter Under 1 lakh?",
            answer: "A. The best Scooter Under 1 lakh are ${topModels}.",
          },
          {
            question: "Q. How Many Bikes Are Available Under 1 lakh Range?",
            answer:
              "A. There are ${totalCount} models Under 1 lakh available at BikeJunction.",
          },
          {
            question:
              "Q. Which Is The Best Mileage Scooter Under 1 lakh Range?",
            answer:
              "A. The best mileage Scooter Under 1 lakh is ${mostEconomicalModelName} providing ${mostEconomicalModalName.attributes.mileage} Kmpl mileage.",
          },
          {
            question:
              "Q. Which Scooter Categories Are Available In {priceRange}.",
            answer: "A.  are available Under 1 lakh at BikeJunction.",
          },
        ],
      },
    };

    console.log(JSON.stringify(body, null, 2));

    return fetchData(
      `https://p5.tractorjunction.in/api/brand-pages`,
      "POST",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

console.log(count);

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
