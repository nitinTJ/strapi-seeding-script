import strapi_brands from "../data/strapi_brands.json" assert { type: "json" };
import bike_models from "../data/bikes_junction_model.json" assert { type: "json" };

import users from "./users.json" assert { type: "json" };

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

// users.data.map((item) => {

const promisses = users
  .map((item) => {
    const findItem = strapi_brands.data.filter(
      (i) => i.attributes.brand_id === item.brand_id
    );
    const body = {
      data: {
        data: {
          classification: item.classification,
        },
      },
    };

    console.log(findItem.length);
    if (findItem.length) {
      return fetchData(
        `https://p5.tractorjunction.in/api/brands/${findItem[0].id}`,
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

// updateDate();
// })

const generateClassificationId = (fueltype, categoryId) => {
  if (categoryId === 1 && fueltype === 1) {
    return 1;
  } else if (categoryId === 1 && fueltype === 2) {
    return 3;
  } else if (categoryId === 2 && fueltype === 1) {
    return 2;
  } else if ((categoryId === 2) & (fueltype === 2)) {
    return 4;
  }
};

function getBrandsWithUniqueCombination(arr) {
  const uniqueBrandCombination = new Set();
  const uniqueBrands = [];

  arr.forEach((item) => {
    const combination = `${item.brand_id}-${item.fuel_type_id}-${item.category_id}`;
    if (!uniqueBrandCombination.has(combination)) {
      uniqueBrandCombination.add(combination);
      uniqueBrands.push(item);
    }
  });

  return uniqueBrands;
}

const uniqueBrands = getBrandsWithUniqueCombination(bike_models);
// // console.log(uniqueBrands.length);

function groupByBrandId(arr) {
  const brandGroups = {};

  arr.forEach((item) => {
    const brandId = item.brand_id;
    if (!brandGroups[brandId]) {
      brandGroups[brandId] = [];
    }
    brandGroups[brandId].push(item);
  });

  return Object.values(brandGroups);
}

const brandGroupsArray = groupByBrandId(uniqueBrands);
console.log(brandGroupsArray);

// console.log

// console.log(result);

// const arr = [];
// brandGroupsArray.map((item) => {
//   let a = {};
//   item.map((i, index) => {
//     if (index == 0) {
//       a = {
//         brand_id: i.brand_id,
//         classification: [
//           { id: generateClassificationId(i.fuel_type_id, i.category_id) },
//         ],
//       };
//     } else {
//       a.classification.push({
//         id: generateClassificationId(i.fuel_type_id, i.category_id),
//       });
//     }
//   });
//   arr.push(a);
// });

fs.writeFile("users.json", JSON.stringify(brandGroupsArray), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});

// const promisses = bike_brands.map((i) => {
//   const findItem = strapi_brands.data.filter(
//     (item) => i.id === item.attributes.brand_id
//   );
//   console.log(findItem);
//   const body = {
//     data: {
//       classifications: {
//         id: generateClassificationId(
//           findItem[0].categoryId,
//           findItem[0].fueltype
//         ),
//       },
//     },
//   };

//   console.log(console.log(body));
//   // return fetchData(
//   //   `https://p5.tractorjunction.in/api/brands/${item.id}`,
//   //   "PUT",
//   //   JSON.stringify(body)
//   // );
// });

// // convert data

// const b = {
//   id: "",
//   slug: "",
//   name: "",
//   brand_id: "",
// };

// const result = brandjson.map((item) => {
//   b.id = item.id;
//   b.slug = item.slug;
//   b.name = item.name;
//   b.brand_id = "";

//   return { ...b };
// });
