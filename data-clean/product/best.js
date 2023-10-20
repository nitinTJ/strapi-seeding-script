import brand from "../data/strapi_brands.json" assert { type: "json" };
import fs from "fs";

function fetchData(slug, method, requestData) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (requestData) {
    options.body = requestData;
  }

  return fetch(slug, options)
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
let count = 0;

let promisses = brand
  .filter((item) => {
    return item?.attributes.classifications?.data?.some(
      (item) => item.attributes.Classifications === "Bike"
    );
  })
  .map((item) => {
    const title = `Best ${item.attributes.name} Bikes in India`;
    const slug = `best-bikes-in-india/${item.attributes.slug}`;
    const brand = {
      id: item.id,
    };
    const content = ``;
    const listing_heading = `Best ${item.attributes.name} Bike Models`;

    const body = {
      data: {
        title,
        Seo: {
          title: title,
        },
        slug,
        brand,
        content,
        listing_heading,
        classifications: {
          id: 1,
        },
        pageType: "bestBikeBrandPage",
      },
    };

    count++;

    return body;
  });

const promisses2 = brand
  .filter((item) => {
    return item?.attributes.classifications?.data?.some(
      (item) => item.attributes.Classifications === "Scooter"
    );
  })
  .map((item) => {
    const title = `Best ${item.attributes.name} Scooters in India`;
    const slug = `best-scooters-in-india/${item.attributes.slug}`;
    const brand = {
      id: item.id,
    };
    const content = ``;
    const listing_heading = `Best ${item.attributes.name} Scooter Models`;

    const body = {
      data: {
        title,
        Seo: {
          title: title,
        },
        slug,
        brand,
        content,
        listing_heading,
        classifications: {
          id: 2,
        },
        pageType: "bestScooterBrandPage",
      },
    };

    count++;
    return body;
  });

const promisses3 = brand
  .filter((item) => {
    return item?.attributes.classifications?.data?.some(
      (item) => item.attributes.Classifications === "Electric Bike"
    );
  })
  .map((item) => {
    const title = `Best ${item.attributes.name} Electric Bikes in India`;
    const slug = `electric-bikes/best/${item.attributes.slug}`;
    const brand = {
      id: item.id,
    };
    const content = ``;
    const listing_heading = `Best ${item.attributes.name} Electric Bike Models`;

    const body = {
      data: {
        title,
        Seo: {
          title: title,
        },
        slug,
        brand,
        content,
        listing_heading,
        classifications: {
          id: 3,
        },
        pageType: "bestElectricBikeBrandPage",
      },
    };

    count++;

    return body;
  });

const promisses4 = brand
  .filter((item) => {
    return item?.attributes.classifications?.data?.some(
      (item) => item.attributes.Classifications === "Electric Scooter"
    );
  })
  .map((item) => {
    const title = `Best ${item.attributes.name} Electric Scooters in India`;
    const slug = `electric-scooters/best/${item.attributes.slug}-electric`;
    const brand = {
      id: item.id,
    };
    const content = ``;
    const listing_heading = `Best ${item.attributes.name} Electric Scooter Models`;

    const body = {
      data: {
        title,
        Seo: {
          title: title,
        },
        slug,
        brand,
        content,
        listing_heading,
        classifications: {
          id: 4,
        },
        pageType: "bestElectricScooterBrandPage",
      },
    };

    count++;

    return body;
  });

fs.writeFile(
  "users.json",
  JSON.stringify([...promisses, ...promisses2, ...promisses3, ...promisses4]),
  (err) => {
    // Checking for errors
    if (err) throw err;

    console.log("Done writing"); // Success
  }
);

console.log(count);

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
