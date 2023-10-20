const brands = require('./brands')
const fs = require('fs');
const fetch = require('node-fetch')
const brandpages = require('./brand-page.json')
const models = require('./bikes.json');
const FormData = require('form-data');
const variants = require('./bike_variants.json');
const variantsImages = require('./bike_variant_images.json');
const dealer = require('./dealers.json');
const brandDealerMapper = require('./brand_dealer.json');

//get Brand Listing Data
// async function getBrandData() {
//     async function getExistingBrands() {
//       return await fetch("https://p5.tractorjunction.in/api/brands?fields[0]=slug");
//     }
  
//     const existingBrands = await getExistingBrands(); 
//     const data = await existingBrands.json();
//     const existingBrandList =  data?.data?.map((item => item.attributes.slug));
//     const remainingBrands = brands.filter(item => !existingBrandList.includes(item.slug));
//     const output = remainingBrands.map((item) => ({
//       name:item.name,
//       slug:item.slug
//     }))

//     for(let i=0; i<output.length;i++){
//       const res = await fetch("https://p5.tractorjunction.in/api/brands",{
//         method:"POST",
//         body: JSON.stringify({"data":output[i]}),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("API CALLED",res)
//     }
//     // const jsonData = JSON.stringify(output, null, 2);
    
//     // //create a json with the data which is not there in strapi
//     // fs.writeFile("./remainingbrands.json", jsonData, (err) => {
//     //     if (err) {
//     //       console.error('Error writing JSON file:', err);
//     //       return;
//     //     }
//     //     console.log('JSON file created successfully!');
//     //   });
// }



// async function getBrandDataImages(){
//   for(let i=0; i<remainingBrands.length;i++){
//     // console.log("url",`https://assets.tractorjunction.com/bike-junction/brands/${remainingBrands[i].image}${remainingBrands[i].image.includes('webp')?'?format=webp':''}`);
//     const response = await fetch(`https://assets.tractorjunction.com/bike-junction/brands/${remainingBrands[i].image}${remainingBrands[i].image.includes('webp')?'?format=webp':''}`);
//     const buffer = await response.buffer();
//     console.log(buffer, "Buffer");
//     fs.writeFileSync(`./brands/${remainingBrands[i].image}`, buffer);
//   }
// }

// getBrandDataImages();

// function createFileObjectFromImagePath(imagePath) {
//   const fileData = fs.readFileSync(imagePath);
//   const fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
//   const fileType = imagePath.substring(imagePath.lastIndexOf('.') + 1);

//   const file = new File([fileData], fileName, { type: `image/${fileType}` });
//   return file;
// }

// async function postImageData(){
//       async function getAllBrands() {
//       return await fetch("https://p5.tractorjunction.in/api/brands?fields[0]=slug");
//     }
//   const allBrands = await getAllBrands(); 
//   const data = await allBrands.json();

//   const remainingBrandList =  remainingBrands?.map((item => item.slug));
//   const brandsToUploadImageFor = data.filter(item => remainingBrandList.includes(item.slug));   
//   console.log(brandsToUploadImageFor, data);

//  for(let i=0; i<remainingBrands.length;i++){
//   const formdata = new FormData();
//   formdata.append("files",createFileObjectFromImagePath(`./brands/${}`));
//   formdata.append("ref","api::brand.brand");
//   formdata.append("refId",brandsToUploadImageFor[i].id);
//   formdata.append("field","logo");
//   const res = await fetch("https://p5.tractorjunction.com/api/upload",{
//     method:"POST",
//     body: formdata,
//     headers: {
//               "Content-Type": "application/json",
//     },
//   })
// }

// }

// postImageData();


// async function postBrandId() {
//       async function getExistingBrands() {
//       return await fetch("https://p5.tractorjunction.in/api/brands?fields[0]=slug&pagination[pageSize]=150");
//     }
      
//     const existingBrands = await getExistingBrands(); 
//     const data = await existingBrands.json();
//     const existingBrandList =  data?.data?.map((item => ({
//       slug:item.attributes.slug,
//       id:item.id
//     }) ));
//     const output = brands.map((item) => ({
//       brand_id:item.id,
//       slug:item.slug
//     }))

//     for(let i=0; i<existingBrandList.length;i++){
//       const data = output.find((item) => item.slug === existingBrandList[i].slug);
//       // console.log(data,"DATA to post");
//       const res = await fetch(`https://p5.tractorjunction.in/api/brands/${existingBrandList[i].id}`,{
//         method:"PUT",
//         body: JSON.stringify({"data":{
//           "brand_id":data.brand_id
//         }}),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log(res);
//     }
// }


// async function createbrandpages(){
//   const output = brandpages.map((item) => ({"slug":item.brandSlug}));
  
//     for(let i=0; i<output.length;i++){
//       const res = await fetch("https://p5.tractorjunction.in/api/brand-pages",{
//         method:"POST",
//         body: JSON.stringify({"data":output[i]}),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("API CALLED",res)
//     }
// }

// createbrandpages();

// async function getModelCoverImages(){
//   const filteredModels = models.filter((item) => item.cover != "");

//   for(let i=0; i<filteredModels.length;i++){
//     const response = await fetch(`https://assets.tractorjunction.com/bike-junction/bikes/${filteredModels[i].product_slug}/${filteredModels[i].cover}${filteredModels[i].cover.includes('webp')?'?format=webp':''}`).catch((e) => {
//       console.log(e, "Error occured at" ,filteredModels[i].cover);
//     });
//     const buffer = await response.buffer();
//     console.log(buffer, "Buffer", `https://assets.tractorjunction.com/bike-junction/bikes/${filteredModels[i].product_slug}/${filteredModels[i].cover}${filteredModels[i].cover.includes('webp')?'?format=webp':''}`);
//     fs.writeFileSync(`./bikes/${filteredModels[i].cover}`, buffer);
//   }
// }


// async function postModelImages() {
//   const filteredModels = models.filter((item) => item.cover != "");
//   for (let i = 0; i < filteredModels.length; i++) {
//     try {
//       const currentModel = await fetch(
//         `https://p5.tractorjunction.in/api/models?filters[model_id][$eq]=${filteredModels[i].id}`
//       );
//       const data = await currentModel.json();

//       const formdata = new FormData();
//       const fileBuffer = fs.readFileSync(`./bikes/${filteredModels[i].cover}`);
//       formdata.append("files", fileBuffer, `${filteredModels[i].cover}`);
//       formdata.append("ref", "api::model.model");
//       formdata.append("refId", data?.data[0].id);
//       formdata.append("field", "card_image");

//       const res = await fetch("https://p5.tractorjunction.com/api/upload", {
//         method: "POST",
//         body: formdata,
//         headers: formdata.getHeaders(),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to upload image.");
//       }

//       const result = await res.json();
//       console.log("Upload response:", result);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }
// }

// function createVariantsDirectries() {
//   for (let i = 0; i < variants.length; i++) {
//     fs.mkdirSync(`./variants/${variants[i].product_slug}`);
//   }
// }

// createVariantsDirectries();

// const getProductSlugFromBikeId = (bike_id) => {
//   return models?.filter((item) => item.id == bike_id)?.[0]?.product_slug
// }

// async function getVariantImages(){
//   for(let i=0; i<variants.length;i++){
//     let variantName = variants[i].product_slug;

//     const VariantImageData = variantsImages.filter((item) => item.bike_variant_id === variants[i].id);
//     for(let j=0; j<variantsImages.length;j++){
//       console.log("here",variantsImages[j].bike_variant_id, variants[i].product_slug, variants[i].id);
//       if(variantsImages[j].bike_variant_id === variants[i].id){
//         const response = await fetch(`https://assets.tractorjunction.com/bike-junction/bikes/${variantName
//       }/${variantsImages[j].image}${variantsImages[j].image.includes('webp')?'?format=webp':''}`).catch((e) => {
//           console.log(e, "Error occured at" ,variantsImages[j].image, variantName);
//         });
//         const buffer = await response.buffer();
//         fs.writeFileSync(`./variants/${variantName}/${variantsImages[j].image}`, buffer);
//       }
//       else{
//         console.log("not matched");
//       }
//     }

//   }
// }

// getVariantImages();

// const getIdFromStrapiVariants = async(id) => {
//   const res = await fetch(
//     `https://p5.tractorjunction.in/api/variants?filters[variant_id][$eq]=${id}&fields[0]=title`
//   );
//   const data = await res.json();
//   return data.data[0].id;
// }


// async function postVariantImages() {
//   for (let i = 1; i < variants.length; i++) {
//     try {
//       const id = await getIdFromStrapiVariants(variants[i].id);
//       const formdata = new FormData();
//       for (let j = 0; j < variantsImages.length; j++) {
//         if (
//           variantsImages[j].bike_variant_id === variants[i].id &&
//           variantsImages[j].image.includes(variants[i].product_slug)
//         ) {
//           console.log("found the image for", variants[i].product_slug);
//           const fileBuffer = fs.readFileSync(
//             `./variants/${variants[i].product_slug}/${variantsImages[j].image}`
//           );
//           formdata.append("files", fileBuffer, `${variantsImages[j].image}`);
//         }
//       }

//       formdata.append("ref", "api::variant.variant");
//       formdata.append("refId", id);
//       formdata.append("field", "images");

//       const res = await fetch("https://p5.tractorjunction.com/api/upload", {
//         method: "POST",
//         body: formdata,
//         headers: formdata.getHeaders(),
//       });

//       if (!res.ok) {
//         console.log(res);
//         throw new Error("Failed to upload image.");
//       }

//       const result = await res.json();
//       console.log("Upload response:", result);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }
// }

// postVariantImages();

// const getStateId = async (stateid) => {
//   if (stateid) {
//     const data = await fetch(
//       `https://p5.tractorjunction.in/api/states?filters[stateid]=${stateid}&fields[0]=name`
//     );
//     const res = await data.json();
//     console.log("State ",res.data[0].id);
//     return res.data[0].id;
//   }
//   return null;
// };

// const getBrandId = async(dealerId) => {
//   if(dealerId){
//   const brand = brandDealerMapper.filter((item) => item.dealer_id == dealerId);
//   const id = brand[0].brand_id;
//   console.log(id,"id");
//   const data = await fetch(`https://p5.tractorjunction.in/api/brands?filters[brand_id]=${id}&fields[0]=name`);
//   const res = await data.json();
//   return res.data[0].id;
//   }
//   return null
// }

// async function postDealerData() {
//   for (let i = 18378; i < dealer.length; i++) {
//     const stateId = await getStateId(dealer[i]?.state_id);
//     const brandId = await getBrandId(dealer[i]?.id);
//     const data = {
//       dealer_id: dealer[i].id,
//       name: dealer[i].name,
//       slug: dealer[i].slug,
//       address: dealer[i]?.address,
//       pincode: dealer[i]?.pincode,
//       state: { connect: [{ id: stateId }] },
//       brands: { connect: [{ id: brandId }] },
//     };
//     if(dealer[i].mobile){
//       data['mobile1'] = dealer[i]?.mobile;
//     }
//     if(dealer[i].mobile1){
//       data['mobile2'] = dealer[i]?.mobile1;
//     }
//     const res = await fetch("https://p5.tractorjunction.in/api/dealers", {
//       method: "POST",
//       body: JSON.stringify({ "data": data }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("API CALLED",JSON.stringify(data,null, 2), res, i);
//   }
// }

// postDealerData(1);
