import strapi_variant from "../strapi_model.json" assert { type: "json" };
import engine from "./modelSpec/bike_engine_specifications.json" assert { type: "json" };
import fs from "fs";

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
        battery_type,
        bore,
        charging_at_charging_station,
        charging_at_home,
        charging_network_and_battery_swapping_network,
        charging_station_locater,
        charging_time,
        claimed_range,
        compression_ratio,
        continuous_power,
        cooling_system,
        electricity_consumed_on_full_charge,
        emission_type,
        engine_oil,
        engine_type,
        fast_charging,
        keyless_ignition,
        launch_control,
        load_carrying_capacity,
        max_power,
        max_torque,
        mileage_city,
        motor_power_w,
        motor_type,
        motor_warranty,
        no_of_cylinders,
        peak_power,
        power_modes,
        power_to_weight_ratio_ps_tonne,
        quick_shifter,
        range,
        range_eco_mode,
        range_normal_mode,
        range_sport_mode,
        regenerative_braking,
        stroke,
        torque_motor,
        valve_per_cylinder,
      } = item;
      const body = {
        data: {
          engine: {
            battery_type,
            bore,
            charging_at_charging_station,
            charging_at_home,
            charging_network_and_battery_swapping_network,
            charging_station_locater,
            charging_time,
            claimed_range,
            compression_ratio,
            continuous_power,
            cooling_system,
            electricity_consumed_on_full_charge,
            emission_type,
            engine_oil,
            engine_type,
            fast_charging,
            keyless_ignition,
            launch_control,
            load_carrying_capacity,
            max_power,
            max_torque,
            mileage_city,
            motor_power_w,
            motor_type,
            motor_warranty,
            no_of_cylinders,
            peak_power,
            power_modes,
            power_to_weight_ratio_ps_tonne,
            quick_shifter,
            range,
            range_eco_mode,
            range_normal_mode,
            range_sport_mode,
            regenerative_braking,
            stroke,
            torque_motor,
            valve_per_cylinder,
          },
        },
      };

      // console.log(body.data);

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
