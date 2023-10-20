import strapi_model from "../data/strapi_model.json" assert { type: "json" };

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

const promisses = strapi_model.map((item) => {
  // const findItem = bike_brands.findIndex((i) => i.slug === item.slug);
  const body = {
    data: {
      name: item.name,
      slug: item.slug,
    },
  };

  console.log(body, item.id);

  return fetchData(
    `https://p5.tractorjunction.in/api/models/${item.id}`,
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

updateDate();
