import bike from "./bike_variants.json" assert { type: "json" };
import strapi from "./strapi_variants.json" assert { type: "json" };

bike
  .slice(0)
  .filter((i) => i.status == "1")
  .map((item) => {
    const filtered_variants = strapi.filter(
      (i) => i.attributes.variant_id == item.id
    );
    if (!filtered_variants.length) {
      console.log(item.id, filtered_variants, "mmmmmm");
    }
  });
