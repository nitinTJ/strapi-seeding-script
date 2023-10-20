import strapi_variant from "../strapi_variants.json" assert { type: "json" };
import engine from "./data/variant_accessories_specifications.json" assert { type: "json" };

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
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.variant_id == item.bike_variant_id
    );

    if (d.length) {
      const {
        alternator,
        bluetooth_connectivity,
        charging_point,
        mobile_connectivity,
        usb_charging_port,
      } = item;
      const body = {
        data: {
          electricalaccessories: {
            alternator,
            bluetooth_connectivity,
            charging_point,
            mobile_connectivity,
            usb_charging_port,
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
