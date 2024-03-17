
function ProductsIphone(props: any) {
   return (
      <div className='card'>
         <div className="card-img">
            <img src={props.url} />
         </div>
         <p>{props.status}</p>
         <h3>{props.name}</h3>
         <h4>{props.price}</h4>
         <Link className="py-2 px-6 w-28 m-auto text-white bg-[#3858d6] rounded-lg block" to={`/product/${props.id}`}>Buy</Link>
      </div>
   )
}

export default ProductsIphone