import strapi_variant from "../strapi_model.json" assert { type: "json" };
import engine from "./modelSpec/bike_tyres_specifications.json" assert { type: "json" };

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

const data = engine
  .slice(600)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.model_id == item.bike_id
    );
    if (d.length && d[0].attributes.standard_variant.data) {
      const id = d[0].attributes.standard_variant.data.id;
      const {
        front_tyre_pressure_rider,
        front_tyre_pressure_rider_and_pillion,
        ignition,
        radial_tyre,
        rear_tyre_pressure_rider,
        rear_tyre_pressure_rider_and_pillion,
        torque_wheel,
        tubeless_tyre,
        tyre_brand,
        tyre_size,
        wheel_size,
        wheelbase,
        wheels_type,
      } = item;
      const body = {
        data: {
          typesandwheels: {
            front_tyre_pressure_rider,
            front_tyre_pressure_rider_and_pillion,
            ignition,
            radial_tyre,
            rear_tyre_pressure_rider,
            rear_tyre_pressure_rider_and_pillion,
            torque_wheel,
            tubeless_tyre,
            tyre_brand,
            tyre_size,
            wheel_size,
            wheelbase,
            wheels_type,
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
