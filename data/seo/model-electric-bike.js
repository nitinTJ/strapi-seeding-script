import brand from "../data/strapi_model.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes
const pages = brand.filter((item) => {
  return (
    item?.attributes?.classification?.data?.attributes?.Classifications ===
    "Electric Bike"
  );
});

// console.log(pages.length);
const best = {
  "S. No.": 12,
  "Page Type": "Product/Model Detail Page",
  URLs: "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350",
  "Meta Title":
    "Royal Enfield Hunter 350 Price - Hunter 350 Mileage, Review & Images",
  "Meta Description":
    "Royal Enfield Hunter 350 price starts from ${min_price} in India. Check out Royal Enfield Hunter 350 on-road price, Hunter 350 Mileage, specification, images \n& colours at BikeJunction.",
  Breadcrumb: "Home > Royal Enfield > Hunter 350",
  Schema: "Vehicle, WebPage, BreadcrumbList, FAQPage",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350",
  "OG Locale": "en_EN",
  "OG Description":
    "Royal Enfield Hunter 350 price starts from ${min_price} in India. Check out Royal \nEnfield Hunter 350 on-road price, Hunter 350 Mileage, specification, images \n& colours at BikeJunction.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Royal Enfield Hunter 350 Price - Hunter 350 Mileage, Review & Images",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350",
  "Twitter Description":
    "Royal Enfield Hunter 350 price starts from 174110 in India. Check out Royal \nEnfield Hunter 350 on-road price, Hunter 350 Mileage, specification, images \n& colours at BikeJunction.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Royal Enfield Hunter 350 Price - Hunter 350 Mileage, Review & Images",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350",
  "Content( Top)": "N/A",
  H1: "Royal Enfield Hunter 350",
  H2: "Royal Enfield Hunter 350 Variants",
  H2: "Specification",
  H2: "Royal Enfield Hunter 350 Overview",
  H2: "Features",
  H2: "Popular Comparisons",
  H2: "Similar Bikes",
  H2: "Royal Enfield Showrooms/Dealers in India",
  H2: "Latest Royal Enfield Hunter 350 Updates",
  H2: "Frequently asked questions",
  H2: "Sign In",
  H2: "Register",
  H3: "FAQ Q1",
  H3: "FAQ Q2",
  H3: "FAQ Q3",
  H3: "FAQ Q4",
  H3: "FAQ Q5",
  H3: "FAQ Q6",
  H3: "FAQ Q7",
  H3: "FAQ Q8",
  H3: "FAQ Q9",
  H3: "FAQ Q10",
  H3: "Select City",
  H3: "Select Variant",
  H4: "FAQ A1",
  H4: "FAQ A2",
  H4: "FAQ A3",
  H4: "FAQ A4",
  H4: "FAQ A5",
  H4: "FAQ A6",
  H4: "FAQ A7",
  H4: "FAQ A8",
  H4: "FAQ A9",
  H4: "FAQ A10",
  H5: "Quick Links",
  H5: "Company",
  H5: "Connect with Us",
  H5: "Keep in Touch",
  H5: "Please connect with us:",
  "Content(Body)":
    "Royal Enfield Hunter 350 ${classification.data.attributes.Classifications} is one of India’s most reputed 2-wheelers. The Hunter 350 ${classification.data.attributes.Classifications} is manufactured by Royal Enfield, popularly known for their technologically advanced manufacturing value. Royal Enfield Hunter 350 ${classification.data.attributes.Classifications} belongs to the ${classification.data.attributes.Classifications} category. The ${classification.data.attributes.Classifications} boasts high-tech specifications like 349 CC engine that produces 15 kW @ 6,100 rpm power, 36.2 Kmpl mileage and giving the most superior driving experience to its users. Royal Enfield Hunter 350 ${classification.data.attributes.Classifications} is the kind of 2-wheeler that will turn heads wherever it’s driven. \n\nRoyal Enfield Hunter 350 Price In India \n\nRoyal Enfield Hunter 350 Price in India starts from ₹ 1.74 Lakh and goes up to ₹ 2.01 Lakh. ${classification.data.attributes.Classifications}Junction provides you a complete list of the updated and accurate price range of Royal Enfield Hunter 350 ${classification.data.attributes.Classifications}. However, it is necessary to know that the on-road price of the Hunter 350 ${classification.data.attributes.Classifications} may differ from state to state, depending upon their specific government taxation policies. \n\nRoyal Enfield Hunter 350 Engine \n\nRoyal Enfield Hunter 350 engine capacity is 349 CC and engineered with Single cylinder, 4-stroke engine. This engine generates 15 kW @ 6,100 rpm and 27 Nm @ 4,000 rpm of Torque. The engine of Hunter 350 is aligned with a 5 Speed gear transmission. \n\nRoyal Enfield Hunter 350 Mileage \n\nRoyal Enfield Hunter 350 mileage is 36.2 Kmpl which is very adequate. The ${classification.data.attributes.Classifications} comes with a fuel tank capacity of 13 L litres. This combination gives this ${classification.data.attributes.Classifications} a good driving range. \n\nRoyal Enfield Hunter 350 Brakes & Suspension \n\nRoyal Enfield Hunter 350 comes with the top-of-the-line enhanced and powerful braking system. In addition, the 2-wheeler has powerful and strong brakes, giving maximum control to its users. The suspension system of the Hunter 350 ${classification.data.attributes.Classifications} is also very impressive that ensures smoother drive experience while enabling the ${classification.data.attributes.Classifications} to negotiate through rough terrains. \n\nWhy ${classification.data.attributes.Classifications}Junction is Best For Royal Enfield Hunter 350 \n\nRoyal Enfield Hunter 350 at ${classification.data.attributes.Classifications}Junction is available with complete information. In addition you can easily get the Royal Enfield Hunter 350 on-road price in India. ${classification.data.attributes.Classifications}Junction also provides you a smart comparison tool that will let you comprehensively compare the Royal Enfield Hunter 350 ${classification.data.attributes.Classifications} with your other top choices.",
  "FAQ's":
    "Q. What Is The Price Of Royal Enfield Hunter 350 In India? \nA. Royal Enfield Hunter 350 electric ${classification.data.attributes.Classifications} price in India is Rs. 1.74 Lakh - 2.01 Lakh \n\nQ. What Is The Engine Capacity Of Royal Enfield Hunter 350? \nA. Royal Enfield Hunter 350 engine capacity is 349 CC. \n\nQ. What Type Of Transmission Is Fitted In Royal Enfield Hunter 350? \nA. Royal Enfield Hunter 350 is designed with a Manual type of transmission. \n\nQ. What Is The Mileage Of Royal Enfield Hunter 350? \nA. Royal Enfield Hunter 350 mileage is 36.2 Kmpl . \n\nQ. What Is The Power Of The Royal Enfield Hunter 350 Engine? \nA. The Royal Enfield Hunter 350 generates a power of 15 kW @ 6,100 rpm. \n\nQ. What Is The Weight Of Royal Enfield Hunter 350? \nA. The weight of Royal Enfield Hunter 350 is 360 kg Weight. \n\nQ. What Is The Body Type Of Royal Enfield Hunter 350? \nA. Hunter 350 is a ${classification.data.attributes.Classifications} ${classification.data.attributes.Classifications} manufactured by Royal Enfield. \n\nQ. What Is The Fuel Tank Capacity Of Royal Enfield Hunter 350? \nA. Royal Enfield Hunter 350 fuel tank capacity is 13 L. \n\nQ. What Is The Starting Mode Of Royal Enfield Hunter 350? \nA. Royal Enfield Hunter 350 Starting mode is Electric Start. \n\nQ. How Many Cylinders Are In The Royal Enfield Hunter 350 Engine? \nA. Royal Enfield Hunter 350 comes with a 1 Cylinder engine in the market.",
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
    console.log(item?.attributes?.brand);
    const title = best["Meta Title"]
      .replaceAll(
        "Royal Enfield",
        item?.attributes?.brand?.data?.attributes?.name
      )
      .replaceAll("Hunter 350", item?.attributes?.name)
      .replaceAll("2023", "${currentYear}")
      .replaceAll(
        "Bike ",
        `${item.attributes.classification.data.attributes.Classifications}`
      )
      .replaceAll(
        "Bikes ",
        `${item.attributes.classification.data.attributes.Classifications}s`
      );
    const desc = best["Meta Description"]
      .replaceAll(
        "Royal Enfield",
        item?.attributes?.brand?.data?.attributes?.name
      )
      .replaceAll("Hunter 350", item?.attributes?.name)
      .replaceAll(
        "Bike ",
        `${item.attributes.classification.data.attributes.Classifications}`
      )
      .replaceAll(
        "Bikes ",
        `${item.attributes.classification.data.attributes.Classifications}s`
      )
      .replaceAll("2023", "${currentYear}");

    // const faq = best["FAQ's"].split("\n\n");

    // console.log(faq);

    if (item?.attributes?.brand?.data?.attributes?.name) {
      const body = {
        data: {
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
            canonicalURL: `https://bikes.tractorjunction.com/en/electric-bikes/${item.attributes.brand.data.attributes.slug}/${item.attributes.slug}`,
            ogUrl: `https://bikes.tractorjunction.com/en/electric-bikes${item.attributes.brand.data.attributes.slug}/${item.attributes.slug}`,
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
        `https://p5.tractorjunction.in/api/models/${item.id}`,
        "PUT",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

fs.writeFile("./users.json", JSON.stringify(promisses), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
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
