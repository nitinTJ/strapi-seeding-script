import strapi_variant from "./json/strapiVariant.json" assert { type: "json" };
import engine from "./data/next/variant_brakes_specifications (1).json" assert { type: "json" };

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

      console.log(body.data);
      return fetchData(
        `https://bikes-cms.tractorjunction.com/api/variants/${d[0].id}`,
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
