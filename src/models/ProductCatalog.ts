import { Product } from "./Product";
import type { ProductData } from "./Product";

export class ProductCatalog{
  private products: Product[];

  constructor(data: ProductData[]){
    this.products = data.map((product)=> new Product(product));
  }

  // get all info
  getAllProducts(): Product[]{
    return this.products;
  }

  // for link
  getProductBySlug(slug: string): Product | undefined{
    return this.products.find((product)=> product.getSlug() === slug);
  }

  // after add getCategory()
  // getProductsByCategory(category: string): Product[] {
  //   return this.products.filter(
  //     (product) => product.getCategory() === category
  //   );
  // }

}