import bike_news from "../data/bikeModel.json" assert { type: "json" };
import strapi_news from "../data/strapi_model.json" assert { type: "json" };
import fs from "fs";
import brand from "../data/strapi_brands.json" assert { type: "json" };
import cat from "../data/strapi_com.json" assert { type: "json" };

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

function findDuplicateItems(arr) {
  const itemMap = {};
  const duplicates = [];

  for (const item of arr) {
    if (itemMap[item.slug]) {
      duplicates.push(item);
    } else {
      itemMap[item.slug] = true;
    }
  }

  return duplicates;
}

const duplicates = findDuplicateItems(bike_news);

const generateClassificationId = (fueltype, categoryId) => {
  if (categoryId == 1 && fueltype == 1) {
    return 1;
  } else if (categoryId == 1 && fueltype == 2) {
    return 3;
  } else if (categoryId == 2 && fueltype == 1) {
    return 2;
  } else if ((categoryId == 2) & (fueltype == 2)) {
    return 4;
  }
};

const generateClassificationName = (fueltype, categoryId) => {
  if (categoryId == 1 && fueltype == 1) {
    return "Bike";
  } else if (categoryId == 1 && fueltype == 2) {
    return "Electric Bike";
  } else if (categoryId == 2 && fueltype == 1) {
    return "Scooter";
  } else if ((categoryId == 2) & (fueltype == 2)) {
    return "Electric Scooter";
  }
};

export function getItemURL(classification, brand, slug) {
  const sanitizedClassification = classification
    ?.toLowerCase()
    ?.replace(/\s/g, "-");
  const sanitizedBrand = brand?.toLowerCase()?.replace(/\s/g, "-");
  const sanitizedSlug = slug?.toLowerCase()?.replace(/\s/g, "-");
  let url;

  if (classification === "Bike" || classification === "Scooter") {
    url = `/${sanitizedBrand}-${sanitizedClassification}s`;
  } else {
    url = `/${sanitizedClassification}s/${sanitizedBrand}`;
  }
  if (slug) {
    url = url + `/${sanitizedSlug}`;
  }
  return url;
}
console.log(duplicates.length, "jjjjjj");
// const data = strapi_news.map((item) => {
//   const body = {
//     data: {
//       slug: item.attributes.slug,
//     },
//   };

//   return fetchData(
//     `https://bikes-cms.tractorjunction.com/api/models/${item.id}`,
//     "PUT",
//     JSON.stringify(body)
//   );
// });

const data = duplicates
  .map((item) => {
    const news = strapi_news.filter((i) => i.attributes.slug === item.slug);
    const b = brand.filter((i) => i.attributes.brand_id == item.brand_id);
    // console.log(b.length);
    const c = cat.filter((i) => i.attributes.categorie_id == item.category_id);
    console.log(c.length, item.category_id);
    const min_price = "${min_price}";

    const classification = generateClassificationName(
      item.fuel_type_id,
      item.category_id
    );

    if (news.length) {
      const title = `${b[0].attributes.name} ${item.name} Price - ${item.name} Mileage, Review & Images`;
      const desc = `${b[0].attributes.name} ${item.name} price starts from ${min_price} in India. Check out ${b[0].attributes.name} ${item.name} on-road price, ${item.name} Mileage, specification, images & colours at BikeJunction.`;

      const body = {
        data: {
          slug: item.slug,
          name: item.name,
          preview: `lostModel`,
          brand_id: item.brand_id,
          model_id: item.id,
          model_id: item.bike_id,
          max_price: item.max_price,
          min_price: item.min_price,
          displacement: item.displacement,
          mileage: item.mileage,
          launch_date: item.launch_date,
          categories: [
            {
              id: c[0].id,
            },
          ],
          brand: [{ id: b[0].id }],
          classification: [
            {
              id: generateClassificationId(item.fuel_type_id, item.category_id),
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
            ogType: "website",
            canonicalURL: `https://bikes.tractorjunction.com/en${getItemURL(
              b[0].attributes.classifications.data[0].attributes
                .Classifications,
              b[0].attributes.slug,
              item.slug
            )}`,
            ogUrl: `https://bikes.tractorjunction.com/en${getItemURL(
              classification,
              b[0].attributes.slug,
              item.slug
            )}`,
            ogImages: [
              {
                id: 6470,
              },
            ],
          },
        },
      };
      // console.log(JSON.stringify(body, null, 2));
      return fetchData(
        `https://bikes-cms.tractorjunction.com/api/models`,
        "POST",
        JSON.stringify(body)
      );
    }
  })
  .filter(Boolean);

// fs.writeFile("users.json", JSON.stringify(data), (err) => {
//   // Checking for errors
//   if (err) throw err;
//   console.log("Done writing"); // Success
// });

function updateDate() {
  Promise.all(data)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the API calls
      console.error(error);
    });
}

updateDate();
