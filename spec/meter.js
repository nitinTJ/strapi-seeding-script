import strapi_variant from "./json/strapiVariant.json" assert { type: "json" };
import engine from "./data/variant_meter_specifications.json" assert { type: "json" };

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
  .slice(0)
  .map((item) => {
    const d = strapi_variant.filter(
      (j) => j.attributes.variant_id === item.bike_variant_id
    );

    if (d.length) {
      const {
        average_fuel_economy_indicator,
        clock,
        display,
        distance_to_empty_indicator,
        fuel_gauge,
        instrument_console,
        low_battery_indicator,
        low_oil_indicator,
        odometer,
        real_time_mileage_indicator,
        reverse_assist,
        service_due_indicator,
        speedometer,
        techometer,
        tachometer,
        tripmeter,
      } = item;
      const body = {
        data: {
          meter: {
            average_fuel_economy_indicator,
            clock,
            display,
            distance_to_empty_indicator,
            fuel_gauge,
            instrument_console,
            low_battery_indicator,
            low_oil_indicator,
            odometer,
            real_time_mileage_indicator,
            reverse_assist,
            service_due_indicator,
            speedometer,
            techometer,
            tripmeter,
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
