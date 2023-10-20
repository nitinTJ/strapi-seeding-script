import strapi_variant from "./json/strapiVariant.json" assert { type: "json" };
import engine from "./data/variant_lights_specifications.json" assert { type: "json" };

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
