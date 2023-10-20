import models from "./users.json" assert { type: "json" };

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

const promisses = models.map((item) => {
  // const findItem = bike_brands.findIndex((i) => i.slug === item.slug);
  const body = {
    data: {
      models: [...item.models],
    },
  };

  console.log(JSON.stringify(body), item.id);

  return fetchData(
    `https://p5.tractorjunction.in/api/categories/${item.id}`,
    "PUT",
    JSON.stringify(body)
  );
});

// fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });
// console.log(arr);

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
      //   const arr = data.map((item) => {
      //     return item.data;
      //   });

      //   fs.writeFile("users.json", JSON.stringify(arr), (err) => {
      //     // Checking for errors
      //     if (err) throw err;

      //     console.log("Done writing"); // Success
      //   });
      //   console.log(arr);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
