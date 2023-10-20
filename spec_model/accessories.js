import strapi_variant from "./json/model.json" assert { type: "json" };
import engine from "./modelSpec/bike_accessories_specifications.json" assert { type: "json" };

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

      const id = d[0].attributes.standard_variant.data.id;
      console.log(JSON.stringify(body, null, 2));
      return fetchData(
        `https://bikes-cms.tractorjunction.com/api/variants/${id}`,
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
