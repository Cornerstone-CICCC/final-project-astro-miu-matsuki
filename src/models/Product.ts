export interface ProductData{
id: number;
title: string;
slug: string;
price: number;
category: string;
image: string;
description: string;
inStock: boolean
}

export class Product{
  constructor(private data: ProductData){}

  getFormattedPrice(): string{
    return `$${this.data.price.toFixed(2)}`;
  }
  
  getSlug(): string{
    return this.data.slug;
  }
  
  isInStock(): boolean{
    return this.data.inStock;
  }

}