import brand from "../data/product_listing.json" assert { type: "json" };
import fs from "fs";
import current from "./users.json" assert { type: "json" };

// https://bikes.tractorjunction.com/en/electric-bikes/best/matter
// const pages = brand.filter((item) => {
//   return item.attributes.slug.includes("electric-bikes/best/");
// });

// fs.writeFile("./users.json", JSON.stringify(pages), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

// console.log(pages.length);
const best = {
  "S. No.": 6,
  "Page Type": "Electric Bikes Brand + Best Page",
  URLs: "https://bikes.tractorjunction.com/en/electric-bikes/best/matter",
  "Meta Title": "Best Matter Bikes In India - Bike Models, Price, Mileage",
  "Meta Description":
    "Find list of best Matter Bikes in India 2023. Explore best Matter Bike \nmodels, variants, price, mileage, specifications & colors at BikeJunction.",
  Breadcrumb: "Home > Best Electric Bikes > Matter",
  Schema: "WebPage, Table, BreadcrumbList, ItemList, FAQPage",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/electric-bikes/best/matter",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL": "https://bikes.tractorjunction.com/en/electric-bikes/best/matter",
  "OG Locale": "en_EN",
  "OG Description":
    "Find list of best Matter Bikes in India 2023. Explore best Matter Bike \nmodels, variants, price, mileage, specifications & colors at BikeJunction.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title": "Best Matter Bikes In India - Bike Models, Price, Mileage",
  Author: "BikeJunction",
  Canonical: "https://bikes.tractorjunction.com/en/electric-bikes/best/matter",
  "Twitter Description":
    "Find list of best Matter Bikes in India 2023. Explore best Matter Bike \nmodels, variants, price, mileage, specifications & colors at BikeJunction.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title": "Best Matter Bikes In India - Bike Models, Price, Mileage",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/electric-bikes/best/matter",
  "Content( Top)":
    "${totalCount} Bike Models of best Matter Bikes in India are available at BikeJunction. Buying a motorcycle is hectic work as tons of Bike models are available in the market. All the popular brands manufacture the best Bikes in India with value-added features. We at BikeJunction have created a complete list of the best Bike Bikes in India based on thier price. There are many bikes like {topModels} listed here. So get the best Matter two wheelers in India at BikeJunction. \n",
  H1: "Best Matter Bikes in India",
  H2: "Best Matter Bikes Price List in India 2023",
  H2: "Best Matter Bike Models",
  H2: "Best Matter Bikes News & Updates",
  H2: "FAQ's on Best Matter electric Bikes in India",
  H2: "Sign In",
  H2: "Register",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H3: "FAQ Q1",
  H3: "FAQ Q2",
  H3: "NA",
  H3: "NA",
  H3: "NA",
  H3: "NA",
  H3: "NA",
  H3: "NA",
  H3: "NA",
  H3: "NA",
  H3: "NA",
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
  "FAQ's":
    "Q. What Are The Latest Matter Bike In India? \n\nA. ${topModels} are the latest Matter Bike in India. \n\nQ. What Are The Latest Matter Bike Under 2 Lakh? \n\nA. are the latest Matter Bike under 2 Lakh in India",
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

const promisses = current
  .map((item) => {
    const title = best["Meta Title"].replaceAll(
      "Matter",
      item?.attributes?.brand?.data?.attributes?.name
    );
    const desc = best["Meta Description"]
      .replaceAll("Matter", item?.attributes?.brand?.data?.attributes?.name)
      .replaceAll("2023", "${currentYear}");

    const faq = best["FAQ's"].split("\n\n");

    console.log({
      faq: [
        {
          question: faq[0].replaceAll(
            "Matter",
            item?.attributes?.brand?.data?.attributes?.name
          ),
          answer: faq[1].replaceAll(
            "Matter",
            item?.attributes?.brand?.data?.attributes?.name
          ),
        },
        {
          question: faq[2].replaceAll(
            "Matter",
            item?.attributes?.brand?.data?.attributes?.name
          ),
          answer: faq[3].replaceAll(
            "Matter",
            item?.attributes?.brand?.data?.attributes?.name
          ),
        },
      ],
    });

    if (item?.attributes?.brand?.data?.attributes?.name) {
      const body = {
        data: {
          description: best["Content( Top)"].replaceAll(
            "Matter",
            item?.attributes?.brand?.data?.attributes?.name
          ),
          faq: [
            {
              question: faq[0].replaceAll(
                "Matter",
                item?.attributes?.brand?.data?.attributes?.name
              ),
              answer: faq[1].replaceAll(
                "Matter",
                item?.attributes?.brand?.data?.attributes?.name
              ),
            },
            {
              question: faq[2].replaceAll(
                "Matter",
                item?.attributes?.brand?.data?.attributes?.name
              ),
              answer: faq[3].replaceAll(
                "Matter",
                item?.attributes?.brand?.data?.attributes?.name
              ),
            },
          ],
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

      return fetchData(
        `https://p5.tractorjunction.in/api/brand-pages/${item.id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

console.log(JSON.stringify(promisses, null, 2));
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
