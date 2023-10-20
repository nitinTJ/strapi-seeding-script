import bc from "../data/bike_cities.json" assert { type: "json" };
import sc from "../data/strapi_city.json" assert { type: "json" };

const arr = bc
  .map((item) => {
    const filter = sc.filter((i) => i.attributes.name === item.name);

    if (filter.length) {
      return {
        city_id: item.id,
        id: filter[0].id,
      };
    }

    console.log(filter.length);
  })
  .filter(Boolean);

// console.log(arr);

async function callApiAndStoreResults() {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const apiUrl = `https://p5.tractorjunction.in/api/cities/${arr[i].id}`;
    const body = {
      data: {
        city_id: arr[i].city_id,
      },
    };

    console.log(body);
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      const data = await response.json();
      results.push(data);
      console.log(`API call ${i + 1} successful`, body.data.city_id);
    } catch (error) {
      console.error(`API call ${i + 1} failed: ${error},`, body);
    }
  }

  return results;
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
