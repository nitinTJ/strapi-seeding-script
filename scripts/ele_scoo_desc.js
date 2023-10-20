import strapi_variants from "../data/starapi_variant.json" assert { type: "json" };
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
        console.log(JSON.stringify(JSON.parse(requestData), null, 2), url);
        // throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
export const currencyFormatter = (price) => {
  const val = Math.abs(price);
  if (price < 100000) {
    return new Intl.NumberFormat("en-IN").format(price || 0);
  }
  if (val >= 10000000) return `${(price / 10000000).toFixed(2)} Cr`;
  if (val >= 100000) return `${(price / 100000).toFixed(2)} Lakh`;
};

export const getPrice = (minPrice, maxPrice) => {
  if (minPrice != null || maxPrice != null) {
    if (minPrice && maxPrice) {
      return `₹ ${currencyFormatter(minPrice)} - ${currencyFormatter(
        maxPrice
      )}`;
    } else if (minPrice) {
      return `₹ ${currencyFormatter(minPrice)}`;
    }
    return `₹ ${currencyFormatter(maxPrice)}`;
  }
};
const promisses = strapi_variants
  .filter(
    (item) =>
      item?.attributes?.model?.data?.attributes?.classification?.data
        ?.attributes?.Classifications === "Electric Scooter"
  )
  .map((item) => {
    const brand = item?.attributes?.brand?.data?.attributes?.name ?? "N/A";
    const name = item?.attributes?.name ?? "N/A";
    const price = item?.attributes?.min_price ?? "N/A";
    const displacement = item?.attributes?.engine?.displacement ?? "N/A";
    const range = item?.attributes?.range ?? "N/A";
    const motor_type = item?.attributes?.engine?.motor_type ?? "N/A";
    const motor_cap = item?.attributes?.engine?.motor_cap ?? "N/A";
    const battery_type = item?.attributes?.engine?.battery_type ?? "N/A";
    const motor_power_w = item?.attributes?.engine?.motor_power_w ?? "N/A";
    const power = item?.attributes?.engine?.max_power ?? "N/A" ?? "N/A";
    const torque = item?.attributes?.engine?.torque ?? "N/A" ?? "N/A";
    const transmission = item?.attributes?.clutchandgear?.transmission ?? "N/A";
    // const fuel = item.attributes?.fuel?.fuel_capacity ?? "N/A";

    const desc = `
    <p>The ${brand} ${name} is a well known electric Scooter in the Electric vehicle sector of India. This ${name} Scooter is fitted with the cutting edge specification. It is equipped with all the features that help you glide better on the road. All the specifications of ${brand} ${name} enhance the overall performance.</p>
    <p><strong>${brand} ${name} Price In India</strong>
    </p><p>${brand} ${name} price in India starts from ${getPrice(
      price,
      0
    )}. In addition you can avail an updated price of ${brand} ${name} on the basis of its colours &amp; variants. The ${brand} ${name} electric Scooter on road price is different in every state on the basis of Govt. taxation norms.</p>
    <p><strong>${brand} ${name} Range</strong>
    </p><p>${brand} ${name} is fitted with a ${motor_power_w} and has a ${battery_type} type of battery. This battery pack generates ${power} power and ${torque} of Torque. The battery of ${brand} ${name} is aligned with a ${transmission} transmission.</p>
    <p><strong>${brand} ${name} Brakes &amp; Suspension</strong>
    </p><p>${brand} ${name} delivers a Range of ${range} KM in single charge. The ${name} comes with a ${motor_type} of Motor. This combination gives this Scooter a good driving range.</p>
    <p><strong>Why BikeJunction is the Best Platform To Buy ${brand} ${name} Electric Scooter</strong>
    </p><p>${brand} ${name} at BikeJunction is available with complete information. In addition you can easily get the ${brand} ${name} on-road price in India. You can easily compare ${brand} ${name} Scooter with the other Scooter of this segment.</p>
    `;

    const body = {
      data: {
        power_unit: "km/charge",
      },
    };

    console.log(`https://p5.tractorjunction.in/api/variants/${item.id}`);
    return fetchData(
      `https://p5.tractorjunction.in/api/variants/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
  });

console.log(promisses.length);

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      //   console.log(data);
      fs.writeFile("users.json", JSON.stringify(data), (err) => {
        // Checking for errors
        if (err) throw err;
        console.log("Done writing"); // Success
      });
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
