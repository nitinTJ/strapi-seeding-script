import strapi_variant from "./json/strapiVariant.json" assert { type: "json" };
import engine from "./data/next2/variant_controls_specifications.json" assert { type: "json" };

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
        engine_kill_switch,
        pass_switch,
        riding_modes,
        seat_opening_switch,
        starting,
        traction_control,
      } = item;
      const body = {
        data: {
          switchesandcontrols: {
            engine_kill_switch,
            pass_switch,
            riding_modes,
            seat_opening_switch,
            starting,
            traction_control,
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
