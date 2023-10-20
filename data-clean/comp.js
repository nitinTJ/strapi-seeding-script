import com from "../data/com.json" assert { type: "json" };
import comp from "../data/bike_com.json" assert { type: "json" };
import sm from "../data/strapi_model.json" assert { type: "json" };
import sv from "../data/starapi_variant.json" assert { type: "json" };
import fs from "fs";
// import strapi_com from "../data/strapi_com.json";

// const comparison = strapi_com.map((item) => {

// })

const comparision = comp
  .map((item) => {
    const model_one = sm.filter(
      (i) => i.attributes.model_id == item.first_model_id
    );
    const model_two = sm.filter(
      (i) => i.attributes.model_id === item.second_model_id
    );

    const variant_one = sv.filter(
      (i) => i.attributes.variant_id === item.first_bike_id
    );

    const variant_two = sv.filter(
      (i) => i.attributes.variant_id === item.second_bike_id
    );

    if (model_one.length && model_two.length) {
      const body = {
        data: {
          model_one: { id: model_one[0].id },
          model_two: { id: model_two[0].id },
          variant_one: { id: variant_one[0].id },
          variant_two: { id: variant_two[0].id },
        },
      };

      return body;
    }
  })
  .filter(Boolean);

fs.writeFile("users.json", JSON.stringify(comparision), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
// function fetchData(url, method, requestData) {
//   const options = {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   if (requestData) {
//     options.body = requestData;
//   }

//   return fetch(url, options)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// const promisses = com
//   .map((item) => {
//     const body = {
//       ...item,
//     };
//     return fetchData(
//       `https://p5.tractorjunction.in/api/comparison-listings`,
//       "POST",
//       JSON.stringify(body)
//     );
//   })
//   .filter(Boolean);

// function updateDate() {
//   Promise.all(promisses)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the API calls
//       console.error(error);
//     });
// }

// updateDate();
