import brand from "../data/strapi_web.json" assert { type: "json" };

// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes
// const pages = brand.filter((item) => {
//   return item.attributes.pageType === "electricBikeBrandPage";
// });

// console.log(pages.length);
const best = {
  "S. No.": 24,
  "Page Type": "Webstory Detail Page",
  URLs: "https://bikes.tractorjunction.com/en/web-stories/simple-energy-one-standard-vs-ampere-primus-standard-features-comparison",
  "Meta Title":
    "Simple Energy One Standard VS Ampere Primus standard - Features Comparison",
  "Meta Description":
    "Explore here the ultimate comparison between simple energy one standard and \nampere primus standard electric scooter. Compare the price, features and \nspecifications details",
  Schema: "WebPage, NewsArticle",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/web-stories/simple-energy-one-standard-vs-ampere-primus-standard-features-comparison",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/web-stories/simple-energy-one-standard-vs-ampere-primus-standard-features-comparison",
  "OG Locale": "en_EN",
  "OG Description":
    "Explore here the ultimate comparison between simple energy one standard and \nampere primus standard electric scooter. Compare the price, features and \nspecifications details",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "Simple Energy One Standard VS Ampere Primus standard - Features Comparison",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/web-stories/simple-energy-one-standard-vs-ampere-primus-standard-features-comparison",
  "Twitter Description":
    "Explore here the ultimate comparison between simple energy one standard and \nampere primus standard electric scooter. Compare the price, features and \nspecifications details",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "Simple Energy One Standard VS Ampere Primus standard - Features Comparison",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/web-stories/simple-energy-one-standard-vs-ampere-primus-standard-features-comparison",
  "Content( Top)": "NA",
  H1: "#N/A",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H2: "NA",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
  H3: "N-A",
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

const promisses = brand
  .map((item) => {
    // const title = best["Meta Title"]
    //   .replaceAll("Honda", item?.attributes?.brand?.data?.attributes?.name)
    //   .replaceAll("2023", "${currentYear}");
    // const desc = best["Meta Description"]
    //   .replaceAll("Honda", item?.attributes?.brand?.data?.attributes?.name)
    //   .replaceAll("2023", "${currentYear}");

    // const faq = best["FAQ's"].split("\n\n");

    // console.log(faq);

    const body = {
      data: {
        seo: {
          ogDescription: item?.attributes?.seo?.metaDescription ?? "",
          metaTitle: item.attributes.title,
          metaDescription: item.attributes?.seo?.metaDescription ?? "",
          ogUrl: `https://bikes.tractorjunction.com/en/web-stories/${item.attributes.slug}`,
          ogImages: [{ id: 6470 }],
          canonicalURL: `https://bikes.tractorjunction.com/en/web-stories/${item.attributes.slug}`,
          metaRobots: "",
          ogTitle: item.attributes.title,
          ogType: "website",
          metaSocial: [
            {
              image: { id: 6470 },
              socialNetwork: "Twitter",
              title: item.attributes.title,
              description: item.attributes?.seo?.metaDescription ?? "",
            },
          ],
        },
      },
    };

    console.log(JSON.stringify(body, null, 2));

    return fetchData(
      `https://p5.tractorjunction.in/api/web-stories/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
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
