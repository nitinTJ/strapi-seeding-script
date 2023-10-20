import brand from "../data/news.json" assert { type: "json" };
import fs from "fs";
// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes
// const pages = brand.filter((item) => {
//   return item.attributes.pageType === "electricBikeBrandPage";
// });

// console.log(pages.length);
const best = {
  "S. No.": 22,
  "Page Type": "News Detail Page",
  URLs: "https://bikes.tractorjunction.com/en/news/tvs-bmw-partnership-embarks-on-a-new-milestone-of-10-years-with-over-14-lakh-sales",
  "Meta Title":
    "TVS-BMW Partnership Embarks On A New Milestone of 10 Years With Over 1.4 \nLakh Sales",
  "Meta Description":
    "TVS Motor Company and BMW Motorrad are commemorating ten years of their \noutstanding display of innovation and cooperation.",
  Schema: "WebPage, NewsArticle, Organization, BreadcrumbList",
  "Meta Sitename": "BikeJunction",
  URL: "https://bikes.tractorjunction.com/en/news/tvs-bmw-partnership-embarks-on-a-new-milestone-of-10-years-with-over-14-lakh-sales",
  Locale: "en_EN",
  "Image SRC":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  Image:
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Sitename": "BikeJunction",
  "OG URL":
    "https://bikes.tractorjunction.com/en/news/tvs-bmw-partnership-embarks-on-a-new-milestone-of-10-years-with-over-14-lakh-sales",
  "OG Locale": "en_EN",
  "OG Description":
    "TVS Motor Company and BMW Motorrad are commemorating ten years of their \noutstanding display of innovation and cooperation.",
  "OG Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "OG Type": "website",
  "OG Title":
    "TVS-BMW Partnership Embarks On A New Milestone of 10 Years With Over 1.4 \nLakh Sales",
  Author: "BikeJunction",
  Canonical:
    "https://bikes.tractorjunction.com/en/news/tvs-bmw-partnership-embarks-on-a-new-milestone-of-10-years-with-over-14-lakh-sales",
  "Twitter Description":
    "TVS Motor Company and BMW Motorrad are commemorating ten years of their \noutstanding display of innovation and cooperation.",
  "Twitter Image":
    "https://assets.tractorjunction.com/bike-junction/assets/frontend/images/bikeklogo-n.svg?format=png",
  "Twitter Card": "summary",
  "Twitter Title":
    "TVS-BMW Partnership Embarks On A New Milestone of 10 Years With Over 1.4 \nLakh Sales",
  "Twitter Site": "@bikejnofficial",
  "Twitter Creator": "@bikejnofficial",
  "Twitter URL":
    "https://bikes.tractorjunction.com/en/news/tvs-bmw-partnership-embarks-on-a-new-milestone-of-10-years-with-over-14-lakh-sales",
  "Content( Top)": "NA",
  H1: "TVS-BMW Partnership Embarks On A New Milestone of 10 Years With Over 1.4 \nLakh Sales",
  H2: "TVS-BMW Partnership: A Progressful Decade",
  H2: "A Testimony from the Leaders",
  H2: "Towards a Sustainable Future",
  H2: "Latest News",
  H2: "Sign In",
  H2: "Register",
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
  .slice(0, 100)
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
          metaTitle: item?.attributes?.seo?.title ?? "",
          metaDescription: item?.attributes?.seo?.ogDescription ?? "",
          ogUrl: `https://bikes.tractorjunction.com/en/news/${item.attributes.slug}`,
          ogImages: [{ id: 6470 }],
          canonicalURL: `https://bikes.tractorjunction.com/en/news/${item.attributes.slug}`,
          metaRobots: "",
          ogType: "website",
          ogTitle: item?.attributes?.seo?.title ?? "",
          metaSocial: [
            {
              image: { id: 6470 },
              title: item?.attributes?.title ?? "",
              description: item?.attributes?.seo?.ogDescription ?? "",
              socialNetwork: "Twitter",
            },
          ],
        },
      },
    };

    // console.log(item?.attributes?.seo?.ogDescription);
    console.log(JSON.stringify(body, null, 2));
    console.log(`https://p5.tractorjunction.in/api/articles/${item.id}`);
    return body;
    fetchData(
      `https://p5.tractorjunction.in/api/articles/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

// console.log(JSON.stringify(promisses, null, 2));
console.log(promisses.length);

fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});

function updateDate() {
  Promise.all(promisses)
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
