import model from "../data/model.json" assert { type: "json" };
import brand from "../data/v.json" assert { type: "json" };
import b from "../data/b.json" assert { type: "json" };
import strapi_variants from "../data/web.json" assert { type: "json" };

// https://bikes.tractorjunction.com/en/electric-bikes/best/Dirt Bikes

// const data = brand
//   .map((item) => {
//     const b = strapi_variants.filter((i) => i.attributes.slug === item.slug);

//     if (!b.length) {
//       return item;
//     }
//   })
//   .filter(Boolean);

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

const promisses = strapi_variants
  .map((item) => {
    const body = {
      data: {
        slug: item.attributes.slug,
      },
    };
    // const brand = b.filter((i) => i.attributes.brand_id == item.brand_id);
    // const m = model.slice(0).filter((i) => {
    //   return i.attributes.model_id == item.bike_id;
    // });

    // if (m.length === 0) {
    //   console.log(item);
    // }

    // console.log(JSON.stringify(m.length, null, 2));
    // const name = brand[0].attributes.name;

    // const title =
    //   "TVS Ronin DS - Single Channel ABS Price - Ronin DS - Single Channel ABS Mileage, Review & Images"
    //     .replaceAll("TVS Ronin DS - Single Channel ABS", `${name} ${item.name}`)
    //     .replaceAll("Ronin DS - Single Channel ABS", item.name);

    // const desc =
    //   "TVS Ronin DS - Single Channel ABS price starts from 195625 in India. Check out TVS Ronin DS - Single Channel ABS on-road price, Ronin DS - Single Channel ABS Mileage, specification, images & colours at BikeJunction."
    //     .replaceAll("TVS Ronin DS - Single Channel ABS", `${name} ${item.name}`)
    //     .replaceAll("Ronin DS - Single Channel ABS", item.name);

    // const classification = brand[0].attributes.classifications.data[0];

    // const body = {
    //   data: {
    //     classification: {
    //       id: classification.id,
    //     },
    //     brand: {
    //       id: brand[0].id,
    //     },
    //     model: {
    //       id: model[0].id,
    //     },
    //     name: item.name,
    //     slug: item.slug,
    //     max_price: item.min_price,
    //     min_price: item.max_price,
    //     variant_id: item.id,
    //     release_date: item?.launch_date,
    //     slug: item.slug,
    //     cover_image: item.cover,
    //     comparison_slug: item.slug,
    //     mileage: item.mileage,
    //     displacement: item.displacement,
    //     preview: "newVariants",
    //     seo: {
    //       metaTitle: title,
    //       metaDescription: desc,
    //       metaSocial: [
    //         {
    //           socialNetwork: "Twitter",
    //           title: title,
    //           description: desc,
    //           image: {
    //             id: 6470,
    //           },
    //         },
    //       ],
    //       ogTitle: title,
    //       ogDescription: desc,
    //       ogType: "website",
    //       ogUrl: `https://bikes.tractorjunction.com/en/${item.slug}`,
    //       ogImages: [
    //         {
    //           id: 6470,
    //         },
    //       ],
    //     },
    //   },
    // };
    return {};
    fetchData(
      `https://bikes-cms.tractorjunction.com/api/variants/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

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
