import { type } from "os";
import strapi_brands from "../data/strapi_brands.json" assert { type: "json" };
import bike_brands from "../data/bike_junction_brands.json" assert { type: "json" };

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

const promisses = strapi_brands.map((item) => {
  const findItem = bike_brands.findIndex((i) => i.slug === item.slug);
  const body = {
    data: {
      brand_id: bike_brands?.[findItem].id,
    },
  };

  return fetchData(
    `https://p5.tractorjunction.in/api/brands/${item.id}`,
    "PUT",
    JSON.stringify(body)
  );
});

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

//   convert data

// const b = {
//     id: "",
//     slug: "",
//     name: "",
//     brand_id: "",
//   };

//   const result = brandjson.map((item) => {
//     b.id = item.id;
//     b.slug = item.slug;
//     b.name = item.name;
//     b.brand_id = "";

//     return { ...b };
//   });
