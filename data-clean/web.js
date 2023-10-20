import data from "../data/strapi_story.json" assert { type: "json" };
import web from "../data/web.json" assert { type: "json" };
import fs from "fs";

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

const promisses = web
  .slice(0)
  .map((item) => {
    const webStory = data
      .map((i) => {
        if (
          i.attributes.web_story.data.attributes.slug === item.attributes.slug
        ) {
          return {
            title: i.attributes.title,
            image: {
              id: i.attributes.image?.data?.id,
            },
            position: i.attributes.position,
            story: i.attributes.story,
            link_url: i.attributes.link_url,
            // id: i.id,
          };
        }
      })
      .filter(Boolean);

    console.log(webStory);

    const body = {
      data: {
        slug: item.attributes.slug,
      },
    };

    return {
      id: item.id,
      stories: webStory,
    };
    fetchData(
      `https://p5.tractorjunction.in/api/variants/${item.id}`,
      "PUT",
      JSON.stringify(body)
    );
  })
  .filter(Boolean);

fs.writeFile("users.json", JSON.stringify(promisses), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});

// function updateDate() {
//   Promise.all(promisses)
//     .then((data) => {})
//     .catch((error) => {
//       // Handle any errors that occurred during the API calls
//       console.error(error);
//     });
// }

// updateDate();
