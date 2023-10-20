import strapi from "./strapi_variants.json" assert { type: "json" };
import bike from "./v.json" assert { type: "json" };
import fs from "fs";

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

const d = strapi
  ?.map((item, index) => {
    if (
      !item.attributes.power &&
      item.attributes.classification.data &&
      (item.attributes.classification.data.attributes.Classifications ===
        "Bike" ||
        item.attributes.classification.data.attributes.Classifications ===
          "Scooters")
    ) {
      const v = bike.filter((i) => i.id === item?.attributes?.variant_id);
      const body = {
        id: item.id,
        data: {
          power: v[0].displacement.replace(",", ""),
          power_unit: "CC",
          unit: "Kmpl",
        },
      };

      return fetchData(
        `https://bikes-cms.tractorjunction.com/api/variants/${item.id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

// fs.writeFile("users.json", JSON.stringify(d), (err) => {
//   // Checking for errors
//   if (err) throw err;
//   console.log("Done writing"); // Success
// });

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
