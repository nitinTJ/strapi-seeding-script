import brand from "../data/product_listing.json" assert { type: "json" };
import b from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/matter
const pages = brand.filter((item) => {
  return item.attributes.pageType === "scooterDisplacementTypePage";
});

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

console.log(pages.length);
const best = {
  "S. No.": 11,
  "Page Type": "Scooter Displacement Listing Page",
  URLs: "https://bikes.tractorjunction.com/en/new-scooters/best-125cc-scooters",
  "Meta Title":
    "Best 125cc Scooters in India ${currentYear} - Popular 125cc Scooters Price List",
  "Meta Description":
    "Looking for the best 125cc Scooters in India ${currentYear}? Check all the latest 125cc engine Scooters with mileage, specs, body type, images and reviews at BikeJunction.",
  Breadcrumb: "Home > Best 125cc Scooter Models",
  Schema: "WebPage ,Table ,BreadcrumbList , ItemList , FAQPage",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/new-scooters/best-125cc-scooters",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/new-scooters/best-125cc-scooters",
  "OG Locale": "en_EN",
  "OG Description":
    "Looking for the best 125cc Scooters in India 2022? Check all the latest 125cc engine Scooters with mileage, specs, body type, images and reviews at BikeJunction.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Best 125cc Scooters in India 2022 - Popular 125cc Scooters Price List",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/new-scooters/best-125cc-scooters",
  "Twitter Description":
    "Looking for the best 125cc Scooters in India 2022? Check all the latest 125cc engine Scooters with mileage, specs, body type, images and reviews at BikeJunction.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Best 125cc Scooters in India 2022 - Popular 125cc Scooters Price List",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/new-scooters/best-125cc-scooters",
  "Content( Top)":
    "A Scooter's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 125cc segment, choosing the best one is challenging. So we have made a complete list of Scooter under the 125cc. Here you will get all the latest and best 125cc Scooter with all the specifications. We have provided all the 125cc Scooter price, mileage, power, and all specifications. There are 39 Scooter 125cc available at BikeJunction. In addition, you can also choose the best 125cc Scooter with different colours and variants. Find the most powerful 125cc Bike in India.",
  H1: "Best 125cc Scooter Models",
  H2: "125cc Scooters Price List in India 2023",
  H2: "Popular 125cc Scooter",
  H2: "Best Scooters in India",
  H2: "Frequently asked questions",
  H2: "Sign In",
  H2: "Register",
  H2: "N/A",
  H2: "N/A",
  H2: "N/A",
  H2: "N/A",
  H2: "N/A",
  H2: "N/A",
  H3: "FAQ Q1",
  H3: "FAQ Q2",
  H3: "FAQ Q3",
  H3: "FAQ Q4",
  H3: "FAQ Q5",
  H3: "FAQ Q6",
  H3: "N/A",
  H3: "N/A",
  H3: "N/A",
  H3: "N/A",
  H3: "N/A",
  H4: "FAQ A1",
  H4: "FAQ A2",
  H4: "FAQ A3",
  H4: "FAQ A4",
  H4: "FAQ A5",
  H4: "FAQ A6",
  H5: "Quick Links",
  H5: "Company",
  H5: "Connect with Us",
  H5: "Keep in Touch",
  H5: "Please connect with us:",
  "FAQ's":
    "Q. Which Is The Best 125cc Scooter In India? \n\nA. The best 125cc bikes in India are . \n\nQ. Which Is The Most Expensive 125cc Scooter In India? \n\nA. The most expensive Scooter 125cc in India is YamahaTricity 125. \n\nQ. How Many Scooter Are Listed In The 125cc? \n\nA. There are 39 available in the 125cc. \n\nQ. Which Is The Lowest Price Scooter In The 125cc? \n\nA. The lowest price Scooter in the 125cc segment is AmoS-pin. \n\nQ. Which Are The Upcoming Bikes 125cc Segment? \n\nA. Zontes 350 D is the upcoming bike in the 125cc segment in India. \n\nQ. Which Is This Segment's Latest Scooter In 125cc? \n\nA. Latest 125cc Scooter in this segment is and",
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
    // const brand = item.attributes.brand.data.attributes.name;
    const brake = item.attributes.slug.split("/").pop();

    console.log(brake);

    const year = "${currentYear}";
    const title = best["Meta Title"]
      .replaceAll("Best 125cc Scooters", capitalizedWords(brake))
      .replaceAll("best 125cc Scooters", capitalizedWords(brake))
      .replaceAll("2022", year);

    const desc = best["OG Description"]
      // .replaceAll("Honda", brand)
      .replaceAll("Best 125cc Scooters", capitalizedWords(brake))
      .replaceAll("best 125cc Scooters", capitalizedWords(brake))
      .replaceAll("2022", year);

    let content = best["Content( Top)"];

    content = content
      .replaceAll("Best 125cc Scooters", capitalizedWords(brake))
      .replaceAll("best 125cc Scooters", capitalizedWords(brake));

    // if (capitalizedWords(brand)) {
    const body = {
      data: {
        description:
          "A Scooter's engine capacity is the essential factor when buying two-wheelers. And with the options we have under the 100cc segment, choosing the best one is challenging. So we have made a complete list of Scooter under the 100cc. Here you will get all the latest and best 100cc Scooter with all the specifications. We have provided all the 100cc Scooter price, mileage, power, and all specifications. There are ${totalCount} Scooter 100cc available at BikeJunction. In addition, you can also choose the best 100cc Scooter with different colours and variants. Find the most powerful 100cc Bike in India.",

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
