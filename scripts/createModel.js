import strapi_brand from "./users.json" assert { type: "json" };

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

const promisses = strapi_brand.map((item) => {
  // const findItem = bike_brands.findIndex((i) => i.slug === item.slug);
  const body = {
    data: {
      ...item,
    },
  };

  console.log(body);
  // return fetchData(
  //   `https://p5.tractorjunction.in/api/models`,
  //   "POST",
  //   JSON.stringify(body)
  // );
});

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

// const b = {};

// const result = bike_mode.map((item) => {
//   const findIndex = strapi_brand.data?.filter(
//     (i) => i.attributes.brand_id == item.brand_id
//   );
//   console.log(findIndex.length);
//   // console.log(findIndex,d.data?.[findIndex].attributes.brand_id)
//   b.slug = `${item.slug}`;
//   b.name = `${item.name}`;
//   b.min_price = item.min_price;
//   b.max_price = item.max_price;
//   b.mileage = item.mileage;
//   b.displacement = item.displacement;
//   b.brand_id = findIndex?.[0]?.attributes.brand_id;
//   b.brand = {
//     id: findIndex?.[0]?.id,
//   };

//   return { ...b };
// });

// // console.log(result);
// fs.writeFile("users.json", JSON.stringify(result), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });
