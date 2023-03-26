import {createClient} from "@sanity/client";

export const sanityClient = {
  projectId: "o0r3m4wx",  
  dataset: "production",  
  useCdn: true,
  apiVersion : "2023-03-26"
};

export default createClient(sanityClient);


// import createImageUrlBuilder from "@sanity/image-url";

// import {createClient} from "@sanity/client";

// export const config = {
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2023-03-26",
//   useCdn: process.env.NODE_ENV === "production",
// };

// export const sanityClient = createClient(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
