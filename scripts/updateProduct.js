import brand from "../data/product_listing.json" assert { type: "json" };
import fs from "fs";

function fetchData(slug, method, requestData) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (requestData) {
    options.body = requestData;
  }

  return fetch(slug, options)
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

let promisses = brand
  .map((item) => {
    if (item.attributes.slug.includes("scooter/")) {
      const body = {
        data: {
          slug: item.attributes.slug.replace("-scooter/", "-scooters/"),
          preview: item.attributes.preview.replace("-scooter/", "-scooters/"),
          // brand: item.data.brand,
        },
      };

      return fetchData(
        `https://p5.tractorjunction.in/api/brand-pages/${item.id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

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
