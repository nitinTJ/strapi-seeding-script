import strapi_variant from "../strapi_variants.json" assert { type: "json" };
import engine from "./data/variant_speed_specifications.json" assert { type: "json" };

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
        acceleration_zero_hundred_kmph,
        acceleration_zero_one_sixty_kmph,
        acceleration_zero_eighty_kmph,
        braking_hundred_zero_kmph,
        braking_sixty_zero_kmph,
        braking_eighty_zero_kmph,
        quarter_mile,
        roll_ons_thirty_seventy_kmph,
        roll_ons_fourty_eighty_kmph,
        scooter_speed,
        speed_zero_hundred_kmph_sec,
        speed_zero_fourty_kmph_sec,
        top_speed,
        max_speed,
        eco_mode_speed,
        sport_mode_speed,
        s,
      } = item;
      const body = {
        data: {
          speed: {
            acceleration_zero_hundred_kmph,
            acceleration_zero_one_sixty_kmph,
            acceleration_zero_eighty_kmph,
            braking_hundred_zero_kmph,
            braking_sixty_zero_kmph,
            braking_eighty_zero_kmph,
            quarter_mile,
            roll_ons_thirty_seventy_kmph,
            roll_ons_fourty_eighty_kmph,
            scooter_speed,
            speed_zero_hundred_kmph_sec,
            speed_zero_fourty_kmph_sec,
            top_speed,
            max_speed,
            eco_mode_speed,
            sport_mode_speed,
          },
        },
      };

      console.log(d[0].id);
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
