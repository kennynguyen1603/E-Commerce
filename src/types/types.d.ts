export {}
export declare global {
   interface Product {
      _id: string;
      image: string;
      image1: string;
      image2: string;
      image3: string;
      image4: string;
      name: string;
      desc1: string;
      desc2: string;
      price: number;
      stock: number;
      category: string;
      createdAt: string;
      updatedAt: string;
   }

   interface cartItemsType {
      productId: string;
      title: string;
      price: number;
      quantity: number;
      description: string;
      discount: number;
      rating: number;
      stock: number;
      thumbnail: string;
      category: string;
      image: Array<string>;
    }

    interface cartItemsServerType {
      productId: string;
      title: string;
      quantity: number;
      image: string;
      price: number;
      description: string;
      discountPercentage: number;
      rating: number;
      stock: number;
      thumbnail: string;
      category: string;
      images: string[];
    }
    
    interface wishItemsType {
      productId: string;
      title: string;
      price: number;
      quantity: number;
      description: string;
      discount: number;
      rating: number;
      stock: number;
      thumbnail: string;
      category: string;
      image: Array<string>;
    }

    interface InfoUserType {
      _id: string,
      name: string,
      email: string,
      createdAt: string,
      accessToken: string
    }
}
