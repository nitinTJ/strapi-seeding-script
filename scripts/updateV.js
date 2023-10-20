import fs from "fs";
import data from "../data/bike_metas.json" assert { type: "json" };
import model from "../data/bikes_junction_model.json" assert { type: "json" };
import strapi from "../data/strapi_model.json" assert { type: "json" };
import { promises } from "dns";

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

const promisses = data.map((item) => {
  const vari = model.filter((i) => i.id == item.bike_id);
  const strapi_model = strapi.filter(
    (i) => i.attributes.model_id == item.bike_id
  );

  // console.log(vari[0].attributes?.standard_variant?.data);
  // if (!vari[0].attributes?.standard_variant?.data) {
  //   console.log(vari[0].attributes.slug);
  // }
  const id = strapi_model[0].attributes?.standard_variant?.data.id;
  console.log(strapi_model.length);
  const body = {
    // id: id,
    data: {
      id: id,
      slug: `https://bikes.tractorjunction.com/en/${
        strapi_model[0].attributes.preview.split("/")[0]
      }/${vari[0].slug}`.replace(" ", ""),
      content: "",
      // slug: item,
    },
  };
  // console.log(JSON.stringify(body));

  return body;
  fetchData(
    `https://testp5.tractorjunction.in/api/variants/${id}`,
    "PUT",
    JSON.stringify(body)
  );
});

fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
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
