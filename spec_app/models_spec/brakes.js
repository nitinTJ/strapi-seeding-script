import strapi_variant from "../strapi_model.json" assert { type: "json" };
import engine from "./modelSpec/bike_brakes_specifications.json" assert { type: "json" };

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
      const {
        abs,
        brakes_front,
        brakes_rear,
        braking_type,
        ebs,
        front_brake,
        front_brake_diameter,
        rear_brake,
        rear_brake_diameter,
        switchable_abs,
      } = item;
      const body = {
        data: {
          brakes: {
            abs,
            brakes_front,
            brakes_rear,
            braking_type,
            ebs,
            front_brake,
            front_brake_diameter,
            rear_brake,
            rear_brake_diameter,
            switchable_abs,
          },
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