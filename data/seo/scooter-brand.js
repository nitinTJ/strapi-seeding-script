import brand from "../data/product_listing.json" assert { type: "json" };

// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes
const pages = brand.filter((item) => {
  return (
    item.attributes.pageType === "brandPage" &&
    item.attributes.slug.includes("scooters")
  );
});

console.log(pages.length);
const best = {
  "S. No.": 7,
  "Page Type": "Scooter Brand Listing Page",
  URLs: "https://bikes.tractorjunction.com/en/honda-scooters",
  "Meta Title":
    "Honda Scooter Price, Honda New Models 2023, Images, Specs & Reviews",
  "Meta Description":
    "${totalCount} Honda Scooters are available at BikeJunction! Honda Scooter price starts \nfrom Rs. ${cheapestModelPrice} in India. Find New Honda Scooters Models, on road price, \nmileage, images & review.",
  Breadcrumb: "Home > Honda Scooters in India",
  Schema: "Brand, WebPage, Table, BreadcrumbList, ItemList",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/honda-scooters",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL": "https://bikes.tractorjunction.com/en/honda-scooters",
  "OG Locale": "en_EN",
  "OG Description":
    "13 Honda Scooters are available at BikeJunction! Honda Scooter price starts \nfrom Rs. 67817 in India. Find New Honda Scooters Models, on road price, \nmileage, images & review.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Honda Scooter Price, Honda New Models 2023, Images, Specs & Reviews",
  Author: "BikeJunction",
  Canonical: "https://bikes.tractorjunction.com/en/honda-scooters",
  "Twitter Description":
    "13 Honda Scooters are available at BikeJunction! Honda Scooter price starts \nfrom Rs. 67817 in India. Find New Honda Scooters Models, on road price, \nmileage, images & review.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Honda Scooter Price, Honda New Models 2023, Images, Specs & Reviews",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL": "https://bikes.tractorjunction.com/en/honda-scooters",
  "Content( Top)":
    "Honda offers a wide range of ${totalCount} models. The most popular model of Honda is ${mostEconomicalModelName} priced at ₹ ${mostEconomicalModelPrice}. Honda Scooter price in India starts from ₹ ${mostEconomicalModelPrice} and goes upto ₹ ${costliestModelPrice} Lakh.",
  H1: "Honda Scooters in India",
  H2: "Honda Scooters Price List in India",
  H2: "Honda Scooters Models",
  H2: "Honda Scooter by Budget",
  H2: "Popular Honda Bikes",
  H2: "Similar scooter brands",
  H2: "Honda New Scooters in India",
  H2: "Popular Honda Scooter Comparisons",
  H2: "HondaScooter Dealers & Showrooms",
  H2: "Latest Honda News",
  H2: "Sign In",
  H2: "Register",
  H3: "Brand",
  H3: "Budget",
  H3: "Mileage",
  H3: "Displacement",
  H3: "Brakes",
  H5: "Quick Links",
  H5: "Company",
  H5: "Connect with Us",
  H5: "Keep in Touch",
  H5: "Please connect with us:",
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
    const title = best["Meta Title"]
      .replaceAll("Honda", item?.attributes?.brand?.data?.attributes?.name)
      .replaceAll("2023", "${currentYear}");
    const desc = best["Meta Description"]
      .replaceAll("Honda", item?.attributes?.brand?.data?.attributes?.name)
      .replaceAll("2023", "${currentYear}");

    // const faq = best["FAQ's"].split("\n\n");

    // console.log(faq);

    if (item?.attributes?.brand?.data?.attributes?.name) {
      const body = {
        data: {
          description: best["Content( Top)"].replaceAll(
            "Honda",
            item?.attributes?.brand?.data?.attributes?.name
          ),
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
