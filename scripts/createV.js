import strapi_model from "../data/starapi_variant.json" assert { type: "json" };
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

// const result = brandjson.map((item) => {
//   b.id = item.id;
//   b.slug = item.slug;
//   b.name = item.name;
//   b.brand_id = "";

//   return { ...b };
// });

const promisses = strapi_model.slice(1100, 1147).map((item) => {
  // const findItem = bike_brands.findIndex((i) => i.slug === item.slug);
  const body = {
    data: {
      ...item,
    },
  };

  console.log(body);

  return fetchData(
    `https://p5.tractorjunction.in/api/variants`,
    "POST",
    JSON.stringify(body)
  );
});

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
      const arr = data.map((item) => {
        return item.data;
      });

      fs.writeFile("users.json", JSON.stringify(arr), (err) => {
        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
      });
      console.log(arr);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
