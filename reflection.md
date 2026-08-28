# Reflection

Site: (https://astro-project-jewelry-shop-miu.netlify.app/)

## Product Pages

I chose dynamic routing with `[slug].astro` and `getStaticPaths()` for the individual product pages.

I chose this approach because each product has a unique slug in `products.json`. `getStaticPaths()` allows me to automatically generate a page for each product without manually creating 10 separate pages.

The main benefit is that the approach is scalable. If more products are added to the JSON file, their pages can be generated automatically.

One limitation is that the pages are statically generated at build time. If the product data changes, the site needs to be rebuilt and redeployed.

## What I Learned

I used TypeScript interfaces and OOP classes to transform the product data into `Product` objects and manage them with `ProductCatalog`.

I also created reusable Astro components and implemented a category filter using vanilla TypeScript and DOM APIs.