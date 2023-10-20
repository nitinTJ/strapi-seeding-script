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
        ?.attributes?.Classifications === "Scooter"
  )
  .map((item) => {
    const brand = item?.attributes?.brand?.data?.attributes?.name ?? "N/A";
    const name = item?.attributes?.name ?? "N/A";
    const price = item?.attributes?.min_price ?? "N/A";
    const displacement = item?.attributes?.engine?.displacement ?? "N/A";
    const mileage = item?.attributes?.mileage ?? "N/A";
    const power = item?.attributes?.engine?.max_power ?? "N/A";
    const torque = item?.attributes?.engine?.torque ?? "N/A";
    const stroke = item.attributes?.engine?.stroke ?? "N/A";
    const fuel = item.attributes?.fuel?.fuel_capacity ?? "N/A";

    const desc = `
<p>${brand} ${name} Scooter is one of India’s most reputed 2-wheelers. The ${name} Scooter is manufactured by ${brand}, popularly known for their technologically advanced manufacturing value. The Scooter boasts high-tech specifications like ${displacement} CC engine that produces ${power} power, ${mileage} Kmpl mileage and giving the most superior driving experience to its users. ${brand} ${name} Scooter is the kind of 2-wheeler that will turn heads wherever it’s driven.</p>
<p><strong>${brand} ${name} Price In India</strong></p> <p>${brand} ${name} Price in India starts from ${getPrice(
      price
    )}. BikeJunction provides you a complete list of the updated and accurate price range of ${brand} ${name} Scooter. However, it is necessary to know that the on-road price of the ${name} Scooter may differ from state to state, depending upon their specific government taxation policies.</p> <p><strong>${brand} ${name} Engine</strong></p>
<p>${brand} ${name} engine capacity is ${displacement} CC and engineered with Fan Cooled, ${stroke} Stroke, SI Engine engine. This engine generates ${power} and ${torque} of Torque. The engine of ${name} is aligned with the Automatic clutch.</p><p> </p><p><strong>${brand} ${name} Mileage</strong></p>
<p>${brand} ${name} mileage is ${mileage} Kmpl which is very adequate. The Scooter comes with a fuel tank capacity of ${fuel}  litres. This combination gives this Scooter a good driving range.</p>
<p><strong>${brand} ${name} Brakes &amp; Suspension</strong></p>
<p>${brand} ${name} comes with the top-of-the-line enhanced and powerful braking system. In addition, the 2-wheeler has powerful and strong brakes, giving maximum control to its users. The suspension system of the ${name} Scooter is also very impressive that ensures smoother drive experience while enabling the Scooter to negotiate through rough terrains.</p>
<p><strong>Why BikeJunction is Best For ${brand} ${name}</strong></p>
<p>${brand} ${name} at BikeJunction is available with complete information. In addition you can easily get the ${brand} ${name} on-road price in India. BikeJunction also provides you a smart comparison tool that will let you comprehensively compare the ${brand} ${name} Scooter with your other top choices.</p>
    `;
    const body = {
      data: {
        unit: "Kmpl",
        power_unit: "cc",
        // description: desc,
      },
    };

    // const body = {
    //   data: {
    //     description: desc,
    //   },
    // };

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
