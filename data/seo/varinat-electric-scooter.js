import brand from "../data/starapi_variant.json" assert { type: "json" };
import fs from "fs";

// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes
const pages = brand.filter((item) => {
  return (
    item?.attributes?.model?.data?.attributes?.classification?.data?.attributes
      ?.Classifications === "Electric Scooter"
  );
});

console.log(pages.length);

const best = {
  "S. No.": 13,
  "Page Type": "Variants Detail Page",
  URLs: "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350-metro-dapper",
  "Meta Title":
    "Royal Enfield Hunter 350 Metro Dapper Price - Hunter 350 Metro Dapper \nMileage, Review & Images",
  "Meta Description":
    "Royal Enfield Hunter 350 Metro Dapper price starts from 195625 in India. \nCheck out Royal Enfield Hunter 350 Metro Dapper on-road price, Hunter 350 Metro Dapper Mileage, specification, images & colours at BikeJunction.",
  Breadcrumb: "Home > Royal Enfield > Hunter 350 Metro Dapper",
  Schema: "Vehicle, WebPage, BreadcrumbList, FAQPage",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350-metro-dapper",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350-metro-dapper",
  "OG Locale": "en_EN",
  "OG Description":
    "Royal Enfield Hunter 350 Metro Dapper price starts from 195625 in India. \nCheck out Royal Enfield Hunter 350 Metro Dapper on-road price, Hunter 350 Metro Dapper Mileage, specification, images & colours at BikeJunction.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Royal Enfield Hunter 350 Metro Dapper Price - Hunter 350 Metro Dapper \nMileage, Review & Images",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350-metro-dapper",
  "Twitter Description":
    "Royal Enfield Hunter 350 Metro Dapper price starts from 195625 in India. \nCheck out Royal Enfield Hunter 350 Metro Dapper on-road price, Hunter 350 \nMetro Dapper Mileage, specification, images & colours at BikeJunction.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Royal Enfield Hunter 350 Metro Dapper Price - Hunter 350 Metro Dapper \nMileage, Review & Images",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/royal-enfield-bikes/hunter-350-metro-dapper",
  "Content( Top)": "N/A",
  H1: "Royal Enfield Hunter 350 Metro Dapper",
  H2: "Royal Enfield Hunter 350 Variants",
  H2: "Specification",
  H2: "Royal Enfield Hunter 350 Metro Dapper Overview",
  H2: "Features",
  H2: "Popular Comparisons",
  H2: "Similar Bikes",
  H2: "Royal Enfield Showrooms/Dealers in India",
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
  H5: "Quick Links",
  H5: "Company",
  H5: "Connect with Us",
  H5: "Keep in Touch",
  H5: "Please connect with us:",
  H5: "Engine",
  H5: "Mileage & Performance",
  H5: "Speed",
  H5: "Tyres & Wheels",
  "Content(Body)":
    "Royal Enfield Hunter 350 Metro Dapper Bike is one of India’s most reputed 2-wheelers. The Hunter 350 Metro Dapper Bike is manufactured by Royal Enfield, popularly known for their technologically advanced manufacturing value. The Bike boasts high-tech specifications like 349 CC engine that produces 20.2 bhp @ 6,100 rpm power, 36.2 Kmpl mileage and giving the most superior driving experience to its users. Royal Enfield Hunter 350 Metro Dapper Bike is the kind of 2-wheeler that will turn heads wherever it’s driven. \n\nRoyal Enfield Hunter 350 Metro Dapper Price In India \n\nRoyal Enfield Hunter 350 Metro Dapper Price in India starts from ₹ 1.96 Lakh. BikeJunction provides you a complete list of the updated and accurate price range of Royal Enfield Hunter 350 Metro Dapper Bike. However, it is necessary to know that the on-road price of the Hunter 350 Metro Dapper Bike may differ from state to state, depending upon their specific government taxation policies. \n\nRoyal Enfield Hunter 350 Metro Dapper Engine \n\nRoyal Enfield Hunter 350 Metro Dapper engine capacity is 349 CC and engineered with Air Cooled , 1 Cylinder, 2 Valve engine. This engine generates 20.2 bhp @ 6,100 rpm and 27 Nm @ 4,000 rpm of Torque. The engine of Hunter 350 Metro Dapper is aligned with a 1 Down 4 Up gear transmission. \n\nRoyal Enfield Hunter 350 Metro Dapper Mileage \n\nRoyal Enfield Hunter 350 Metro Dapper mileage is 36.2 Kmpl which is very adequate. The Bike comes with a fuel tank capacity of 13 L litres. This combination gives this Bike a good driving range. \n\nRoyal Enfield Hunter 350 Metro Dapper Brakes & Suspension \n\nRoyal Enfield Hunter 350 Metro Dapper comes with the top-of-the-line enhanced and powerful braking system. In addition, the 2-wheeler has powerful and strong brakes, giving maximum control to its users. The suspension system of the Hunter 350 Metro Dapper Bike is also very impressive that ensures smoother drive experience while enabling the Bike to negotiate through rough terrains. \n\nWhy BikeJunction is Best For Royal Enfield Hunter 350 Metro Dapper \n\nRoyal Enfield Hunter 350 Metro Dapper at BikeJunction is available with complete information. In addition you can easily get the Royal Enfield Hunter 350 Metro Dapper on-road price in India. BikeJunction also provides you a smart comparison tool that will let you comprehensively compare the Royal Enfield Hunter 350 Metro Dapper Bike with your other top choices.",
  "FAQ's":
    "Q. What Is The Price Of Royal Enfield Hunter 350 Metro Dapper In India? \nA. Royal Enfield Hunter 350 Metro Dapper electric Bike price in India is Rs. 1.96 Lakh. \n\nQ. What Is The Engine Capacity Of Royal Enfield Hunter 350 Metro Dapper? \nA. Royal Enfield Hunter 350 Metro Dapper engine capacity is 349 CC. \n\nQ. What Type Of Transmission Is Fitted In Royal Enfield Hunter 350 Metro Dapper? \nA. Royal Enfield Hunter 350 Metro Dapper is designed with a 5 Speed Manual type of transmission. \n\nQ. What Is The Mileage Of Royal Enfield Hunter 350 Metro Dapper? \nA. Royal Enfield Hunter 350 Metro Dapper mileage is 36.2 Kmpl . \n\nQ. What Is The Power Of The Royal Enfield Hunter 350 Metro Dapper Engine? \nA. The Royal Enfield Hunter 350 Metro Dapper generates a power of 20.2 bhp @ 6,100 rpm . \n\nQ. What Is The Fuel Tank Capacity Of Royal Enfield Hunter 350 Metro Dapper? \nA. Royal Enfield Hunter 350 Metro Dapper fuel tank capacity is 13 L. \n\nQ. What Is The Starting Mode Of Royal Enfield Hunter 350 Metro Dapper? \nA. Royal Enfield Hunter 350 Metro Dapper Starting mode is Electric Start . \n\nQ. How Many Cylinders Are In The Royal Enfield Hunter 350 Metro Dapper Engine? \nA. Royal Enfield Hunter 350 Metro Dapper comes with a 1 Cylinder engine in the market.",
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
      .replaceAll(
        "Royal Enfield",
        item?.attributes?.brand?.data?.attributes?.name
      )
      .replaceAll("Hunter 350 Metro Dapper", item?.attributes?.name)
      .replaceAll("2023", "${currentYear}")
      .replaceAll(
        "Bike ",
        `${item?.attributes?.model?.data?.attributes?.classification?.data?.attributes?.Classifications} `
      )
      .replaceAll(
        "Bikes ",
        `${item?.attributes?.model?.data?.attributes?.classification?.data?.attributes?.Classifications} `
      );
    const desc = best["Meta Description"]
      .replaceAll(
        "Royal Enfield",
        item?.attributes?.brand?.data?.attributes?.name
      )
      .replaceAll("Hunter 350 Metro Dapper", item?.attributes?.name)
      .replaceAll(
        "Bike ",
        `${item?.attributes?.model?.data?.attributes?.classification?.data?.attributes?.Classifications}`
      )
      .replaceAll(
        "Bikes ",
        `${item?.attributes?.model?.data?.attributes?.classification?.data?.attributes?.Classifications}`
      )
      .replaceAll("2023", "${currentYear}");

    // const faq = best["FAQ's"].split("\n\n");

    // console.log(faq);

    if (item?.attributes?.brand?.data?.attributes?.name) {
      const body = {
        data: {
          id: item.id,
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
            canonicalURL: `https://bikes.tractorjunction.com/en/electric-scooters/${item.attributes.brand.data.attributes.slug}/${item.attributes.slug}`,
            ogUrl: `https://bikes.tractorjunction.com/en/electric-scooters/${item.attributes.brand.data.attributes.slug}/${item.attributes.slug}`,
            ogImages: [
              {
                id: 6470,
              },
            ],
          },
        },
      };

      // console.log(JSON.stringify(body, null, 2));

      console.log(`https://p5.tractorjunction.in/api/variants/${item.id}`);

      return fetchData(
        `https://p5.tractorjunction.in/api/variants/${item.id}`,
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
// console.log(promisses.length);

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
