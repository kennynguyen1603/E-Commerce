import React from "react";

function ProductsApplewatch(props: any) {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={props.url} />
        </div>
        <p>{props.status}</p>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default ProductsApplewatch;
