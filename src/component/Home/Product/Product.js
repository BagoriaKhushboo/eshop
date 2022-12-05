
import "./Product.css";
function Product(props) {
  const tdata = props.content;
  let stars = [];
  for (let i = 0; i <= Number(tdata.rating.rate); i++) {
    stars[i] = 1;
  }

  function AddtoCart() {
    // cartItems is the key.
    const products = localStorage.getItem("cartItems");

    // if there are no cartitems
    if (!products) {
      let cartItems = [];
      cartItems.push(tdata);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      // there are some existing data.
      let cartItems = JSON.parse(products);
      cartItems.push(tdata);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  return (
    <>
 
      <div className="col-md-3" >
        <div className="product">
          <div className="card">
            <div className="photo">
              <img src={tdata.image} alt="" />
            </div>

            <div className="card-body">
              {/* <span>{ tdata.category}</span> */}
              <h5 className="card-title ">{tdata.title.substring(0, 25)}...</h5>
              <h5 className="card-title"> ${tdata.price}</h5>
              <span className="stars ">
                {stars.map((i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
              </span>

              {/* <p className="card-text">
                { tdata.description}
                </p> */}
              <a href="" className="btn btn-success btnset" onClick={AddtoCart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
