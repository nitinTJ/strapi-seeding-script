import strapi_variant from "./json/model.json" assert { type: "json" };
import engine from "./modelSpec/bike_controls_specifications.json" assert { type: "json" };

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
      (j) => j.attributes.model_id == item.bike_id
    );
    if (d.length && d[0].attributes.standard_variant.data) {
      const id = d[0].attributes.standard_variant.data.id;
      console.log(id);
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
