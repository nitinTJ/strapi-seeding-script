import strapi_variant from "../strapi_variants.json" assert { type: "json" };
import engine from "./data/variant_tyres_specifications.json" assert { type: "json" };

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
  .slice(800)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.variant_id === item.bike_variant_id
    );

    if (d.length) {
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

      // console.log(body.data);
      return fetchData(
        `https://dev-bikescms.tractorjunction.com/api/variants/${d[0].id}`,
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
