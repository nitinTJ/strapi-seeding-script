import brand from "../data/product_listing.json" assert { type: "json" };
import b from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/matter
const pages = brand.filter((item) => {
  return item.attributes.pageType === "scooterMileageBrandTypePage";
});

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

console.log(pages.length);
const best = {
  "S. No.": 19,
  "Page Type": "Scooter Brand + Brake Type Page",
  URLs: "https://bikes.tractorjunction.com/en/30kmpl-40kmpl-mileage-scooters/honda",
  "Meta Title":
    "Honda Scooters 30kmpl to 40kmpl in India with Price, Specs & Images",
  "Meta Description":
    "Check out the complete list of Honda Scooters 30kmpl to 40kmpl in India \nincluding price, specifications, comparison, review, rating & images at \nBikeJunction!",
  Breadcrumb: "Home > 30kmpl to 40kmpl Scooters > Honda \n",
  Schema: "WebPage, Table, BreadcrumbList, ItemList",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/30kmpl-40kmpl-mileage-scooters/honda",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/30kmpl-40kmpl-mileage-scooters/honda",
  "OG Locale": "en_EN",
  "OG Description":
    "Check out the complete list of Honda Scooters 30kmpl to 40kmpl in India \nincluding price, specifications, comparison, review, rating & images at \nBikeJunction!",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Honda Scooters 30kmpl to 40kmpl in India with Price, Specs & Images",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/30kmpl-40kmpl-mileage-scooters/honda",
  "Twitter Description":
    "Check out the complete list of Honda Scooters 30kmpl to 40kmpl in India \nincluding price, specifications, comparison, review, rating & images at \nBikeJunction!",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Honda Scooters 30kmpl to 40kmpl in India with Price, Specs & Images",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/30kmpl-40kmpl-mileage-scooters/honda",
  "Content( Top)":
    "Are you searching for India’s best Honda Scooters 30kmpl to 40kmpl that suits your needs perfectly? You’ve reached the right place. BikeJunction brings you the list of India’s most popular Honda Scooters giving mileage 30kmpl to 40kmpl so you can easily shortlist and compare your top choices. Along with the list, our bike experts also provide you with all the highlighting features the Scooters are manufactured with. You also get the updated prices of Honda Scooters 30kmpl to 40kmpl mileage in India. The top :total bike models of Honda in India with 30kmpl to 40kmpl mileage are ${popularModelName} . \n\nFind below all the necessary details about the features these bikes come with, along with its price list in India",
  H1: "Honda Scooters 30kmpl to 40kmpl Mileage",
  H2: "Price List of Honda Drum Brake Scooters in India 2023",
  H2: "Find best Honda Scooters 30kmpl to 40kmpl Mileage",
  H2: "Sign In",
  H2: "Register",
  H2: "NA",
  H2: "NA",
  H2: "NA",
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
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H4: "NA",
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
  "FAQ's": "N-A",
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
    const brand = item.attributes.brand.data.attributes.name;
    const brake = item.attributes.slug
      .split("-mileage-scooters")[0]
      .replace("kmpl-", " to ");

    console.log(brake);

    const year = "${currentYear}";
    const title = best["Meta Title"]
      .replaceAll("Honda", brand)
      .replaceAll("30kmpl to 40kmpl", capitalizedWords(brake))
      .replaceAll("2023", year);

    const desc = best["OG Description"]
      .replaceAll("Honda", brand)
      .replaceAll("30kmpl to 40kmpl", capitalizedWords(brake))
      .replaceAll("2023", year);

    let content = best["Content( Top)"].replaceAll("Honda", brand);

    content = content.replaceAll("30kmpl to 40kmpl", capitalizedWords(brake));

    // if (capitalizedWords(brand)) {
    const body = {
      data: {
        description: content,

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
