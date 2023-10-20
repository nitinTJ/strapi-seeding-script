import brand from "../data/product_listing.json" assert { type: "json" };
import cat from "../data/category.json" assert { type: "json" };

import fs from "fs";
import current from "./users.json" assert { type: "json" };

// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes
const pages = brand.filter((item) => {
  return item.attributes.pageType === "latestBikeBodyTypePage";
});

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

console.log(pages.length);
const best = {
  "S. No.": 20,
  "Page Type": "Category + Body Type Page",
  URLs: "https://bikes.tractorjunction.com/en/latest-bikes/dirt-bikes",
  "Meta Title":
    "Latest Dirt Bikes in India 2023 | New Dirt Bike Models, Images, Prices",
  "Meta Description":
    "Find out the Latest Dirt Bikes in India, new Dirt Bike launches online at \nBikeJunction. Check the price, images, features, mileage, latest Dirt Bike \nmodels and new Dirt Bike launch in India.",
  Breadcrumb: "Home > Latest Bikes in India > Dirt \n",
  Schema: "WebPage, Table, BreadcrumbList, ItemList",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/latest-bikes/dirt-bikes",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL": "https://bikes.tractorjunction.com/en/latest-bikes/dirt-bikes",
  "OG Locale": "en_EN",
  "OG Description":
    "Find out the Latest Dirt Bikes in India, new Dirt Bike launches online at \nBikeJunction. Check the price, images, features, mileage, latest Dirt Bike \nmodels and new Dirt Bike launch in India.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Latest Dirt Bikes in India 2023 | New Dirt Bike Models, Images, Prices",
  Author: "BikeJunction",
  Canonical: "https://bikes.tractorjunction.com/en/latest-bikes/dirt-bikes",
  "Twitter Description":
    "Find out the Latest Dirt Bikes in India, new Dirt Bike launches online at \nBikeJunction. Check the price, images, features, mileage, latest Dirt Bike \nmodels and new Dirt Bike launch in India.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Latest Dirt Bikes in India 2023 | New Dirt Bike Models, Images, Prices",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL": "https://bikes.tractorjunction.com/en/latest-bikes/dirt-bikes",
  "Content( Top)":
    "All the latest Dirt Bikes are in one place at BikeJunction. Check a complete list of the latest Dirt Bike models in India. This section is filled with all the new Dirt Bike launched in India with its price and specifications. All the popular brands have launched some latest Dirt Bike, which are listed below on the page. \n",
  H1: "Latest Dirt Bikes in India",
  H2: "Pricelist of Latest Dirt Bikes in India August 2023",
  H2: "Latest Dirt Bike Models",
  H2: "Popular Brands",
  H2: "Upcoming Dirt Bikes In India",
  H2: "Popular Comparisons",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H3: "Brand",
  H3: "Budget",
  H3: "Mileage",
  H3: "Displacement",
  H3: "Brakes",
  H3: "Body Type",
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
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const promisses = pages
  .map((item) => {
    const c = cat.filter((i) => {
      //   if (item.attributes.slug.split("/").pop() !== i.attributes.slug) {
      //     console.log(item.attributes.slug.split("/").pop(), i.attributes.slug);
      //   }
      return item.attributes.slug.split("/").pop() === i.attributes.slug;
    });

    if (c.length === 0) {
      console.log("len", item, c);
    }
    // console.log(c.length);

    const title = best["Meta Title"]
      .replaceAll("Dirt", c[0].attributes.title)
      .replaceAll("Dirt", c[0].attributes.title)
      .replaceAll("2023", "${currentYear}");
    const desc = best["Meta Description"]
      .replaceAll("Dirt", c[0].attributes.title)
      .replaceAll("Dirt", c[0].attributes.title)
      .replaceAll("2023", "${currentYear}");

    console.log(c);
    if (c[0].attributes.title) {
      const body = {
        data: {
          description: best["Content( Top)"]
            .replaceAll("Dirt", c[0].attributes.title)
            .replaceAll("Dirt", c[0].attributes.title)
            .replaceAll("2023", "${currentYear}"),
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

      console.log(JSON.stringify(body, null, 2));

      return fetchData(
        `https://p5.tractorjunction.in/api/brand-pages/${item.id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

// console.log(JSON.stringify(promisses, null, 2));
console.log(promisses.length);

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
