import strapi_variant from "../strapi_model.json" assert { type: "json" };
import engine from "./modelSpec/bike_performance_specifications.json" assert { type: "json" };

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

const data = engine
  .slice(600)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.model_id == item.bike_id
    );
    if (d.length && d[0].attributes.standard_variant.data) {
      const id = d[0].attributes.standard_variant.data.id;
      console.log(id);
      const { arai_mileage, city_mileage, highway_mileage, overall_mileage } =
        item;
      const body = {
        data: {
          mileageandperformance: {
            arai_mileage,
            city_mileage,
            highway_mileage,
            overall_mileage,
          },
        },
      };

      if (id == 1651) {
        console.log(body.data);
      }
      // return fetchData(
      //   `https://dev-bikescms.tractorjunction.com/api/variants/${id}`,
      //   "PUT",
      //   JSON.stringify(body)
      // );
    }
  })
  .filter(Boolean);

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
