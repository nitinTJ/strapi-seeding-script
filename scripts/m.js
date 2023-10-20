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
const promisses = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
  // const findItem = bike_brands.findIndex((i) => i.slug === item.slug);

  return fetchData(
    `https://p5.tractorjunction.in/api/models?populate[0]=variants&pagination[page]=${item}&pagination[pageSize]=100`,
    "GET"
  );
});

console.log(promisses.length);

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
      let arr = [];
      data.map((item) => {
        arr = [...arr, ...item.data];
      });
      fs.writeFile("users.json", JSON.stringify(arr), (err) => {
        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
      });
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
