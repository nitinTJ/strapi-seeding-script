import strapi_variant from "../strapi_variants.json" assert { type: "json" };
import engine from "./data/variant_battery_specifications.json" assert { type: "json" };

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
  .slice(500)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.variant_id === item.bike_variant_id
    );

    if (d.length) {
      const {
        battery_capacity,
        battery_warranty,
        charging_time_zero_hundred,
        charging_time_zero_eighty,
        fast_charging_time,
        no_of_batteries,
        removable_battery_weight,
        swappable_battery,
      } = item;
      const body = {
        data: {
          battery: {
            battery_capacity,
            battery_warranty,
            charging_time_zero_hundred,
            charging_time_zero_eighty,
            fast_charging_time,
            no_of_batteries,
            removable_battery_weight,
            swappable_battery,
          },
        },
      };

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
