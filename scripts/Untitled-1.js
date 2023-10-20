import sd from "../data/strapi_dealers.json" assert { type: "json" };
import bd from "../data/bike_dealers.json" assert { type: "json" };
import city from "../data/strapi_city.json" assert { type: "json" };

import fs from "fs";

const arr = sd.slice(0, 5).map((item) => {
  const bdf = bd
    .slice(0, 5)
    .filter((i) => i.dealer_id === item.attributes.dealer_id);

    const city = city.map((i) => i.attributes.name === bdf[0].name )



  console.log(bdf.length);

  return {
    id: item.id,
    // city: {
    //     id:
    // }
  };
});

async function callApiAndStoreResults() {
  let results = [];

  for (let i = 1; i < 8; i++) {
    const apiUrl = `https://p5.tractorjunction.in/api/cities?pagination[page]=${i}&pagination[pageSize]=3000`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      results = [...results, ...data.data];
      console.log(`API call ${i + 1} successful`);
    } catch (error) {
      console.error(`API call ${i + 1} failed: ${error}`);
    }
  }

  return results;
}

// Call the function and handle the results
// callApiAndStoreResults()
//   .then((results) => {
//     console.log("All API calls completed:");
//     console.log(results);
//     fs.writeFile("users.json", JSON.stringify(results), (err) => {
//       // Checking for errors
//       if (err) throw err;

//       console.log("Done writing"); // Success
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
