import { AuthContext } from "@/context/AuthContext"
import { Helmet } from 'react-helmet';
export default function Wishlist() {
    const authContext = useContext<any>(AuthContext)
    const { wishlist } = authContext
    useEffect(() => {
        console.log("🚀 ~ Wishlist ~ wishlist:", wishlist)
    }
        , [wishlist])

    return (
        <div className="wishlist">
            <Helmet>
                <title>wishlist</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1>Wishlist</h1>
            <div className="wishlist-container">
                {wishlist.length > 0 ? wishlist.map((product: any) => (
                    <div key={product.productId} className="flex items-center justify-between p-2 border-b border-gray-200">
                        <div className="flex items-center">
                            <img src={product.thumbnail} alt={product.title} className="w-16 h-16" />
                            <div>
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>
                        <button className="btn-blue" onClick={() => authContext.setWishlist(authContext.wishlist.filter((id: string) => id !== product.productId))}>Remove</button>
                    </div>
                )) : <h3>No items in wishlist</h3>}
            </div>
        </div>
    )
}
