// const fetch = require("node-fetch");
// const fs = require("fs");
import fs from "fs";
import fetch from "node-fetch";
import path from "path";

// Function to download an image from a URL
async function downloadImage(url, filename) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }

  const destinationPath = path.join(process.cwd(), filename);

  const imageArrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(destinationPath, Buffer.from(imageArrayBuffer));
  console.log(destinationPath);
  return destinationPath;
}

// Function to upload an image to another URL
async function uploadImage(imagePath, uploadUrl) {
  const formData = new FormData();
  formData.append("files", fs.createReadStream(imagePath));

  console.log(formData);

  const response = await fetch(uploadUrl, {
    method: "POST",
    body: formData,
  });

  console.log(uploadUrl);
  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }

  const responseData = await response.json();
  return responseData[0].id; // Assuming the API responds with the uploaded image URL
}

// Function to link the uploaded image to a product using an API
async function linkImageToProduct(apiUrl, imageUrl) {
  const requestBody = {
    data: {
      images: [{ id: imageUrl }],
    },
    // Add any other data you need to link the image to the product
  };

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(`Failed to link image to product: ${response.statusText}`);
  }

  const responseData = await response.json();
  return responseData; // Modify this based on the API response format
}

// Example usage
(async () => {
  const imageUrl =
    "https://assets.tractorjunction.com/bike-junction/bikes/ktm-1290-super-adventure-s/ktm-1290-super-adventure-s.webp?format=webp&width=429&height=255";
  const uploadUrl = "https://bikes-cms.tractorjunction.com/api/upload";
  const apiUrl = "https://bikes-cms.tractorjunction.com/api/varinats/1832";
  const filename = "ktm-1290-super-adventure-s.webp";

  try {
    // Download the image to the current working directory
    const downloadedImagePath = await downloadImage(imageUrl, filename);

    // Upload the image to another URL
    const uploadedImageUrl = await uploadImage(downloadedImagePath, uploadUrl);

    // Link the uploaded image to a product using an API
    const result = await linkImageToProduct(apiUrl, uploadedImageUrl);

    console.log("Image download, upload, and linking successful:", result);
  } catch (error) {
    console.error("Error:", error);
  }
})();
