import strapi_variant from "./strapiVariant.json" assert { type: "json" };
import bike_variant from ".//bikeVariant.json" assert { type: "json" };
import b from "./strapi_brand.json" assert { type: "json" };
import fs from "fs";

export function getItemURL(classification, brand, slug) {
  const sanitizedClassification = classification
    ?.toLowerCase()
    ?.replace(/\s/g, "-");
  const sanitizedBrand = brand?.toLowerCase()?.replace(/\s/g, "-");
  const sanitizedSlug = slug?.toLowerCase()?.replace(/\s/g, "-");
  let url;

  if (classification === "Bike" || classification === "Scooter") {
    url = `/${sanitizedBrand}-${sanitizedClassification}s`;
  } else {
    url = `/${sanitizedClassification}s/${sanitizedBrand}`;
  }
  if (slug) {
    url = url + `/${sanitizedSlug}`;
  }
  return url;
}

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
const data = strapi_variant
  .map((item) => {
    if (
      !item.attributes.content &&
      item.attributes.model.data &&
      item.attributes.classification.data
    ) {
      const url = `${getItemURL(
        item.attributes.classification.data.attributes.Classifications,
        item.attributes.brand.data.attributes.slug,
        item.attributes.model.data.attributes.slug
      )}/${item.attributes.slug}`;
      const body = {
        data: {
          id: item.id,
          url: `https://bikes.tractorjunction.com/en/${url}`,
        },
      };
      return body;
      fetchData(
        `https://bikes-cms.tractorjunction.com/api/variants/${item.id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
    // const body = {
    //   data: {
    //     min_price: v[0].min_price,
    //     max_price: v[0].max_price,
    //   },
    // };
  })
  .filter(Boolean);

fs.writeFile("users.json", JSON.stringify(data), (err) => {
  // Checking for errors
  if (err) throw err;
  console.log("Done writing"); // Success
});

console.log(data.length);

function updateDate() {
  Promise.all(data)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
