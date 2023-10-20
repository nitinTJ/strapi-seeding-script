import brand from "../data/product_listing.json" assert { type: "json" };
import b from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/matter
const pages = brand.filter((item) => {
  return item.attributes.pageType === "scooterBrakeBrandTypePage";
});

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

console.log(pages.length);
const best = {
  "S. No.": 17,
  "Page Type": "Scooter Brand + Brake Type Page",
  URLs: "https://bikes.tractorjunction.com/en/drum-brake-scooters/honda",
  "Meta Title":
    "Honda Drum Brake Scooters, Motorcycle & Scooty Price List 2023 in India",
  "Meta Description":
    "Honda Drum brake Scooters price list in India 2023. Get the list of all \nHonda Drum Scooter models & scooters/scooty with the detailed fetures & \nspecifications of front & rear brakes at BikeJunction.",
  Breadcrumb: "Home > Brake Scooters in India > Honda \n",
  Schema: "WebPage, Table, BreadcrumbList, ItemList, FAQPage",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/drum-brake-scooters/honda",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL": "https://bikes.tractorjunction.com/en/drum-brake-scooters/honda",
  "OG Locale": "en_EN",
  "OG Description":
    "Honda Drum brake Scooters price list in India 2023. Get the list of all \nHonda Drum Scooter models & scooters/scooty with the detailed fetures & \nspecifications of front & rear brakes at BikeJunction.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Honda Drum Brake Scooters, Motorcycle & Scooty Price List 2023 in India",
  Author: "BikeJunction",
  Canonical: "https://bikes.tractorjunction.com/en/drum-brake-scooters/honda",
  "Twitter Description":
    "Honda Drum brake Scooters price list in India 2023. Get the list of all \nHonda Drum Scooter models & scooters/scooty with the detailed fetures & \nspecifications of front & rear brakes at BikeJunction.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Honda Drum Brake Scooters, Motorcycle & Scooty Price List 2023 in India",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/drum-brake-scooters/honda",
  "Content( Top)":
    "In India, most Honda Scooters come with a combination Drum Scooters at the front and rear Drum brakes. Honda Drum brake Scooters are widely preferred as they are economical and simple to operate and maintain. In addition, the Scooter having Drum brake is comes in very reasonably prices compared to disc Scooters. Honda Drum brakes bring the vehicle to a complete halt safely and quickly. Thus riders enjoy a stable and skid-free riding experience even in the raining conditions. Some of the popular Honda Scooters which are equipped with Drum brakes are Honda Dio , Honda Activa 6G & Honda EM1 E. \n",
  H1: "Honda Drum Brake Scooters",
  H2: "Price List of Honda Drum Brake Scooters in India 2023 \n",
  H2: "9 Honda Scooters with Drum Brakes",
  H2: "Popular Honda Scooters in India",
  H2: "Find All Drum Brake Scooters",
  H2: "FAQ's of Honda Drum in India",
  H2: "Sign In",
  H2: "Register",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H3: "Budget",
  H3: "Mileage",
  H3: "Displacement",
  H3: "Brakes",
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
    "Q. What Are The Popular Honda Drum Brake Scooters In India? \n\nA. The most popular Honda Drum brake Scooters in India are Honda Dio , Honda Activa 6G. \n",
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
    const brake = item.attributes.slug.split("-scooters/")[0];
    const brandId = b.filter((item) => item.attributes.slug === brand);

    console.log(brake);

    const year = "${currentYear}";
    const title = best["Meta Title"]
      .replaceAll("Honda", capitalizedWords(brand))
      .replaceAll("Drum brake", capitalizedWords(brake))
      .replaceAll("Drum", capitalizedWords(brake))
      .replaceAll("2023", year);

    const desc = best["OG Description"]
      .replaceAll("Honda", capitalizedWords(brand))
      .replaceAll("Drum brake", capitalizedWords(brake))
      .replaceAll("Drum", capitalizedWords(brake))
      .replaceAll("2023", year);

    let content = best["Content( Top)"].replaceAll(
      "Honda",
      capitalizedWords(brand)
    );

    content = content.replaceAll("Drum brake", capitalizedWords(brake));
    content = content.replaceAll("Drum", capitalizedWords(brake));

    // if (capitalizedWords(brand)) {
    const body = {
      data: {
        description: content,
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
