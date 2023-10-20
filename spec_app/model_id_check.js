import bike from "./bike_models.json" assert { type: "json" };
import strapi from "./strapi_model.json" assert { type: "json" };

bike
  .slice(0)
  .filter((i) => i.status == "1")
  .map((item) => {
    const filtered_variants = strapi.filter(
      (i) => i.attributes.model_id == item.id
    );
    if (!filtered_variants.length) {
      console.log(item.id, filtered_variants, "mmmmmm");
    }
  });
