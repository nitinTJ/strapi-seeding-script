import brand from "../data/product_listing.json" assert { type: "json" };
import b from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/matter
const pages = brand.filter((item) => {
  return item.attributes.pageType === "electricScooterBrakeBrandTypePage";
});

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

console.log(pages.length);
const best = {
  "S. No.": 14,
  "Page Type": "Electric Scooters Brand + Brake Type Page",
  URLs: "https://bikes.tractorjunction.com/en/drum-brake-electric-scooters/ola",
  "Meta Title":
    "OLA Drum Brake Scooters, Motorcycle & Scooty Price List 2023 in India",
  "Meta Description":
    "OLA Drum brake Scooters price list in India 2023. Get the list of all OLA \nDrum Scooter models & scooters/scooty with the detailed fetures & \nspecifications of front & rear brakes at BikeJunction.",
  Breadcrumb: "Home > brake Electric Scooters > OLA \n",
  Schema: "WebPage, Table, BreadcrumbList, ItemList, FAQPage",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/drum-brake-electric-scooters/ola",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/drum-brake-electric-scooters/ola",
  "OG Locale": "en_EN",
  "OG Description":
    "OLA Drum brake Scooters price list in India 2023. Get the list of all OLA \nDrum Scooter models & scooters/scooty with the detailed fetures & \nspecifications of front & rear brakes at BikeJunction.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "OLA Drum Brake Scooters, Motorcycle & Scooty Price List 2023 in India",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/drum-brake-electric-scooters/ola",
  "Twitter Description":
    "OLA Drum brake Scooters price list in India 2023. Get the list of all OLA \nDrum Scooter models & scooters/scooty with the detailed fetures & \nspecifications of front & rear brakes at BikeJunction.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "OLA Drum Brake Scooters, Motorcycle & Scooty Price List 2023 in India",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/drum-brake-electric-scooters/ola",
  "Content( Top)":
    "In India, most OLA Electric Scooters come with a combination Drum Electric Scooters at the front and rear Drum brakes. OLA Drum brake Electric Scooters are widely preferred as they are economical and simple to operate and maintain. In addition, the E-Scooter having Drum brake is comes in very reasonably prices compared to disc Scooters. OLA Drum brakes bring the vehicle to a complete halt safely and quickly. Thus riders enjoy a stable and skid-free riding experience even in the raining conditions. Some of the popular OLA E-Scooters which are equipped with Drum brakes are ${popularModelName}. \n",
  H1: "OLA Drum Brake Electric Scooters",
  H2: "Price List of OLA Drum Brake Electric Scooters in India 2023",
  H2: "2 OLA Electric Scooters with Drum Brakes",
  H2: "Popular OLA Scooters in India",
  H2: "Popular OLA Scooters in India",
  H2: "FAQ's of OLA Drum in India",
  H2: "Sign In",
  H2: "Register",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H3: "Budget",
  H3: "Range",
  H3: "Brakes",
  H3: "Charging Time",
  H3: "FAQ Q1",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H4: "FAQ A1",
  H4: "NA",
  H4: "NA",
  H4: "NA",
  H4: "NA",
  H4: "NA",
  H5: "Quick Links",
  H5: "Company",
  H5: "Connect with Us",
  H5: "Keep in Touch",
  H5: "Please connect with us:",
  "Content(Body)": "N - A",
  "FAQ's":
    "Q. What Are The Popular OLA Drum Brake Scooters In India?\n\nA. The most popular OLA Drum brake Scooters in India are OLA S1 Air , OLA S1 X. \n",
};

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

export const capitalizedWords = (inputString) => {
  return inputString
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const promisses = pages
  .slice(0)
  .map((item) => {
    const brand = item.attributes.slug.split("/").pop();
    const brake = item.attributes.slug.split("-electric-scooters")[0];
    const brandId = b.filter((item) => item.attributes.slug === brand);

    const year = "${currentYear}";
    const title = best["Meta Title"]
      .replaceAll("OLA", capitalizedWords(brand))
      .replaceAll("Drum brake", capitalizedWords(brake))
      .replaceAll("2023", year);

    const desc = best["OG Description"]
      .replaceAll("OLA", capitalizedWords(brand))
      .replaceAll("Drum brake", capitalizedWords(brake))
      .replaceAll("2023", year);

    // if (capitalizedWords(brand)) {
    const body = {
      data: {
        description: best["Content( Top)"]
          .replaceAll("OLA", capitalizedWords(brand))
          .replaceAll("Drum brake", capitalizedWords(brake)),
        brand: {
          id: brandId[0].id,
        },

        seo: {
          metaTitle: title,
          metaDescription: desc,
          metaSocial: [
            {
              socialNetwork: "Twitter",
              title: title,
              description: desc,
              image: {
                id: 6470,
              },
            },
          ],
          ogTitle: title,
          ogDescription: desc,
          ogType: best["OG Type"],
          canonicalURL: `https://bikes.tractorjunction.com/en/${item.attributes.slug}`,
          ogUrl: `https://bikes.tractorjunction.com/en/${item.attributes.slug}`,
          ogImages: [
            {
              id: 6470,
            },
          ],
        },
      },
    };

    // if (!capitalizedWords(brand)) {
    //   console.log(item);
    // }
    console.log(JSON.stringify(body, null, 2));

    // console.log(capitalizedWords(brand));

    return fetchData(
      `https://p5.tractorjunction.in/api/brand-pages/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
    // }
  })
  .filter(Boolean);

// fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

// console.log(JSON.stringify(promisses, null, 2));
console.log(promisses.length);

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
      // fs.writeFile("users.json", JSON.stringify(data), (err) => {
      //   // Checking for errors
      //   if (err) throw err;
      //   console.log("Done writing"); // Success
      // });
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
