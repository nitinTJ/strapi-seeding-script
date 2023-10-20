import fs from "fs";
const categories = [
  {
    id: "1",
    name: "Adventure Tourer",
    slug: "adventure-tourer",
    image: "adventure-tourer.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:46:42",
  },
  {
    id: "2",
    name: "Bicycle",
    slug: "bicycle",
    image: "bicycle.jpg",
    status: "0",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2023-07-17 16:21:55",
  },
  {
    id: "3",
    name: "Cafe Racer",
    slug: "cafe-racer",
    image: "cafe-racer.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "4",
    name: "Commuter",
    slug: "commuter",
    image: "commuter.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "5",
    name: "Cruiser",
    slug: "cruiser",
    image: "cruiser.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "6",
    name: "Dirt",
    slug: "dirt",
    image: "dirt.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "7",
    name: "Electric",
    slug: "electric",
    image: "electric.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "8",
    name: "Fully faired",
    slug: "fully-faired",
    image: "fully-faired.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "9",
    name: "Maxi Scooter",
    slug: "maxi-scooter",
    image: "maxi-scooter.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "10",
    name: "Moped",
    slug: "moped",
    image: "moped.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "11",
    name: "Naked",
    slug: "naked",
    image: "naked.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "12",
    name: "Off Road",
    slug: "off-road",
    image: "off-road.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "13",
    name: "Scooter",
    slug: "scooter",
    image: "scooter.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "14",
    name: "Scrambler",
    slug: "scrambler",
    image: "scrambler.webp",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2023-04-17 17:26:12",
  },
  {
    id: "15",
    name: "Sports",
    slug: "sports",
    image: "sports.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "16",
    name: "Sports Naked",
    slug: "sports-naked",
    image: "sports-naked.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "17",
    name: "Sports Tourer",
    slug: "sports-tourer",
    image: "sports-tourer.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "18",
    name: "Street",
    slug: "street",
    image: "street.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "19",
    name: "Super",
    slug: "super",
    image: "super.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
  {
    id: "20",
    name: "Tourer",
    slug: "tourer",
    image: "tourer.jpg",
    status: "1",
    created_at: "2022-11-09 18:08:35",
    updated_at: "2022-11-14 19:47:54",
  },
];

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

const promisses = categories.map((item) => {
  // const findItem = bike_brands.findIndex((i) => i.slug === item.slug);
  const body = {
    data: {
      title: item.name,
      slug: item.slug,
      categorie_id: item.id,
      categorie_image: item.image,
    },
  };

  console.log(body);

  return fetchData(
    `https://p5.tractorjunction.in/api/categories`,
    "POST",
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
