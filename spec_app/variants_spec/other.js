import strapi_variant from "../strapi_variants.json" assert { type: "json" };
import engine from "./data/variant_others_specifications.json" assert { type: "json" };

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
  .slice(850)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.variant_id === item.bike_variant_id
    );

    if (d.length) {
      const {
        additional_features,
        airbag,
        anti_theft_alarm,
        artificial_exhaust_sound_system,
        call_sms_alerts,
        carry_hook,
        central_locking,
        charger_output,
        cruise_control,
        engine_immobilizer,
        external_speakers,
        geo_fencing,
        gradeability,
        hill_hold,
        i3s_technology,
        internet_connectivity,
        mobile_application,
        motor_ip_rating,
        music_control,
        navigation,
        operating_system,
        ota,
        paddle,
        processor,
        roadside_assistance,
        underseat_storage,
      } = item;
      const body = {
        data: {
          otherspecs: {
            additional_features,
            airbag,
            anti_theft_alarm,
            artificial_exhaust_sound_system,
            call_sms_alerts,
            carry_hook,
            central_locking,
            charger_output,
            cruise_control,
            engine_immobilizer,
            external_speakers,
            geo_fencing,
            gradeability,
            hill_hold,
            i3s_technology,
            internet_connectivity,
            mobile_application,
            motor_ip_rating,
            music_control,
            navigation,
            operating_system,
            ota,
            paddle,
            processor,
            roadside_assistance,
            underseat_storage,
          },
        },
      };

      console.log(body.data);
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
