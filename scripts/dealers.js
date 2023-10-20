import fs from "fs";
import sd from "../data/strapi_dealers.json" assert { type: "json" };
import sc from "../data/strapi_city.json" assert { type: "json" };
import de from "../data/bike_dealers.json" assert { type: "json" };
async function callApiAndStoreResults() {
  let results = [];
  let count = 0;

  for (let i = 0; i < sd.length; i++) {
    const apiUrl = `https://p5.tractorjunction.in/api/dealers/${sd[i].id}`;
    const bdf = de.filter((j) => j.dealer_id === sd[i].attributes.dealer_id);

    const filter = sc.filter(
      (item) => item.attributes.city_id == bdf[0].city_id
    );

    if (!bdf.length) {
      console.log(count++);
    }

    if (i === 0) {
      console.log(bdf, filter);
    }
    // const body = {
    //   data:{
    //     city:{
    //       id:
    //     }
    //   }
    // }
    // try {
    //   const response = await fetch(apiUrl);
    //   const data = await response.json();
    //   results = [...results, ...data.data];
    //   console.log(`API call ${i + 1} successful`);
    // } catch (error) {
    //   console.error(`API call ${i + 1} failed: ${error}`);
    // }

    // fs.writeFile("users.json", JSON.stringify(results), (err) => {
    //   // Checking for errors
    //   if (err) throw err;

    //   console.log("Done writing"); // Success
    // });
    // console.log(apiUrl);
  }
  // return results;
}

// Call the function and handle the results
callApiAndStoreResults()
  .then((results) => {
    console.log("All API calls completed:");
    console.log(results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
