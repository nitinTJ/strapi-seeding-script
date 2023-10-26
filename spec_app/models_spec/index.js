import strapi_variant from "../strapi_model.json" assert { type: "json" };
import bike_model from '../bike_models.json' assert {type: "json"}
// import engine from "./modelSpec/bike_engine_specifications.json" assert { type: "json" };
// import mileage from "./modelSpec/bike_performance_specifications.json" assert { type: "json" };


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
        throw new Error(`Error: ${url}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const data = bike_model
  .slice(600)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.model_id == item.id
    );
    if (d.length && d[0].attributes.standard_variant.data) {
      const id = d[0].attributes.standard_variant.data.id;
      const body = {
        data: {
          mileage: item.mileage,
          displacement:item.displacement,
          min_price:item.min_price,
          max_price:item.max_price
        },
      };

      console.log(id);
    
      return fetchData(
        `https://dev-bikescms.tractorjunction.com/api/variants/${id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

  console.log(data.length)

function updateDate() {
  Promise.all(data)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
