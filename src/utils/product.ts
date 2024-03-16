export function convertDataProductAddToCart(cartItems: cartItemsServerType[], product: any): cartItemsServerType[] {
   return [...cartItems, {
      productId: product._id,
      title: product.name,
      price: product.price,
      quantity: 1,
      description: "",
      stock: product.stock,
      thumbnail: product.image,
      category: product.category,
      image: product.image,
      discountPercentage: 0,
      rating: 4.69,
      images: []
   }]
}

export function saveInfoToLocalStorage(infoUser: InfoUserType | null) {
   if (!infoUser)
      return localStorage.removeItem('infoUser')

   let dataSave = JSON.stringify(infoUser)
   dataSave = btoa(dataSave)
   localStorage.setItem('infoUser', dataSave)
}

export function getInfoToLocalStorage(): InfoUserType | null {
   const dataGet = localStorage.getItem('infoUser')
   if (!dataGet)
      return null
   return JSON.parse(atob(dataGet))
}
