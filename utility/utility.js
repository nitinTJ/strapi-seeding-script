import fs from "fs";
export const writeFile = (path, content) => {
  try {
    fs.writeFileSync(path, content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};

// const result = modelJSON.map((item) => {
//   const findIndex = brand.data?.filter(
//     (i) => i.attributes.brand_id == item.brand_id
//   );
//   console.log(findIndex.length);
//   // console.log(findIndex,d.data?.[findIndex].attributes.brand_id)
//   b.id = item.id;
//   b.slug = `${item.slug}`;
//   b.name = `${item.name}`;
//   b.min_price = item.min_price;
//   b.max_price = item.max_price;
//   b.mileage = item.mileage;
//   b.displacement = item.displacement;
//   b.brand_id = findIndex?.[0]?.attributes.brand_id;
//   b.brand = {
//     id: findIndex?.[0]?.id,
//   };

//   return { ...b };
// });

// console.log(result);
// fs.writeFile("users.json", JSON.stringify(result), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });
