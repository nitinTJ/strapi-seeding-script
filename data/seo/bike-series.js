import brand from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

const json = [
  {
    label: "Hero Splendor Series",
    redirectTo: "hero-bikes/series-splendor",
  },
  // {
  //   label: "Honda Activa Series",
  //   redirectTo: "honda-scooters/series-activa",
  // },
  {
    label: "Bajaj Platina Series",
    redirectTo: "bajaj-bikes/series-platina",
  },
  {
    label: "Bajaj CT Series",
    redirectTo: "bajaj-bikes/series-ct",
  },
  {
    label: "TVS sports Series",
    redirectTo: "tvs-bikes/series-sport",
  },
  {
    label: "Honda shine Series",
    redirectTo: "honda-bikes/series-shine",
  },
  // {
  //   label: "TVS Jupiter Series",
  //   redirectTo: "tvs-scooters/series-jupiter",
  // },
  {
    label: "TVS XL Moped Series",
    redirectTo: "tvs-bikes/series-xl-moped",
  },
  {
    label: "Hero Glamour Series",
    redirectTo: "hero-bikes/series-glamour",
  },
  {
    label: "Bajaj Pulsar Series",
    redirectTo: "bajaj-bikes/series-pulsar",
  },
];
// console.log(pages.length);

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

export const capitalizedWords = (inputString) => {
  return inputString
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const promisses = json
  .map((item) => {
    const count = "${totalCount}";
    const name = item.label;
    const b = item.redirectTo.split("/")[0].replace("-bikes", "");
    const topModel = "${topModel}";
    const cheapestModelPrice = "${cheapestModelPrice}";
    const costliestModelPrice = "${costliestModelPrice}";
    const costliestModelName = "${costliestModelName}";
    const cheapestModelName = "${cheapestModelName}";
    const mostPowerfulModelName = "${mostPowerfulModelName}";
    const year = "${currentYear}";
    const popularModelName = "${popularModelName}";
    const br = brand.filter((item) => item.attributes.slug.includes(b));
    console.log(br.length, b);

    const description = `There are ${count} bike models of ${name} available on BikeJunction. You can easily access all the latest & vital information of the ${name}, including specs, mileage, price, features and many more.
    The popular motorcycles of the ${name} are ${topModel}. The price of ${name} bikes in India starts from ${cheapestModelPrice} and goes up to Rs. ${costliestModelPrice}.
    The most expensive bike model of ${name} is ${costliestModelName} priced at Rs. ${costliestModelPrice}(Ex-Showroom Price in Delhi) . The most affordable bike model of ${name} is ${cheapestModelName} priced at Rs ${cheapestModelPrice}(Ex-Showroom Price in Delhi).`;

    const title = `${name.replace(
      "Series",
      ""
    )} Price ${year} - ${name} Bike Specs, Mileage, & Review`;
    const desc = `Find New model ${name.replace(
      "Series",
      ""
    )} price in India starts from ${cheapestModelName} - ${costliestModelName}. Check ${name} new model ${year} price list, certified dealers, mileage, specs & reviews at BikeJunction.`;

    const body = {
      data: {
        description: description,
        heading: item.label,
        slug: item.redirectTo,
        brand: {
          id: br[0].id,
        },
        pageType: "bikeBrandSeriesTypePage",
        listing_heading: name.replace("Series", "Bike"),
        faq: [
          {
            question: `Q. How many bikes are there in the ${name}?`,
            answer: `A. There are ${count} models in ${name}.`,
          },
          {
            question: `Q. What is the highest priced bike model within the ${name}?`,
            answer: `A. The highest price model of this series is ${costliestModelName}`,
          },
          {
            question: `Q. Which is the most powerful model of ${name}?`,
            answer: `A. The most powerful model of ${name} is ${mostPowerfulModelName}`,
          },
          {
            question: `Q. Which is the most popular bike of ${name}?`,
            answer: `A. The most popular bike of this series is ${popularModelName}.`,
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
          canonicalURL: `https://bikes.tractorjunction.com/en/${item.redirectTo}`,
          ogUrl: `https://bikes.tractorjunction.com/en/${item.redirectTo}`,
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
      `https://p5.tractorjunction.in/api/brand-pages`,
      "POST",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

// fs.writeFile("./users.json", JSON.stringify(promisses), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });
console.log(promisses.length);

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
