import strapi_variant from "../strapi_model.json" assert { type: "json" };
import engine from "./modelSpec/bike_lights_specifications.json" assert { type: "json" };

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
        drls,
        head_light,
        led_tail_light,
        low_fuel_indicator,
        pilot_lamps,
        projector_Headlights,
        tail_light,
        turn_signal_lamp,
      } = item;
      const body = {
        data: {
          lights: {
            drls,
            head_light,
            led_tail_light,
            low_fuel_indicator,
            pilot_lamps,
            projector_headlights: projector_Headlights,
            tail_light,
            turn_signal_lamp,
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
