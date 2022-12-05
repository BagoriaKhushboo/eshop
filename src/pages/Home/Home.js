import Navbar from "../../component/Home/Navbar/Navbar";
import Product from "../../component/Home/Product/Product";
import { useEffect, useState } from "react";

function Home() {
  const [productData, setProductData] = useState([]);
  const [filterproductData, setFilterProductData] = useState([]);
  const [itemCount, setItemCount] = useState([0]);

  useEffect(() => {
    fetch("HomepageProducts.json")//https://fakestoreapi.com/products
      .then((res) => {
        console.log("Raw Data");
        console.log(res);

        return res.json();
      })
      .then((convertedData) => {
        convertedData.forEach((o) => {
          o.qty = 1;
        });
        setProductData(convertedData);
        setFilterProductData(convertedData);
      });
    
    notifyAboutCartAdd();
    
  }, []);
  
  function notifyAboutCartAdd() {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      let parsedCartItems = JSON.parse(cartItems);
      setItemCount(parsedCartItems.length);
    }
  }
  const filterItem=(cat)=>{
    const uplist=productData.filter((curele)=>{
      return curele.category===cat
      
    });
    console.log(uplist);
    setFilterProductData(uplist);
  };
  return (
    <div className="wrapper">
      <Navbar count={itemCount} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 borderstyle">
            <h1 className="text-center fw-bold my-4 ">Latest Products</h1>
            <hr />
            <div className="buttons">
              <button className="btn btn-outline-dark mx-3 fw-semibold"onClick={()=>{setFilterProductData(productData)}}>
                ALL
              </button>
              <button className="btn btn-outline-dark mx-3 fw-semibold" onClick={()=>filterItem("men's clothing")}>
                Men's Clothings
              </button>
              <button className="btn btn-outline-dark mx-3 fw-semibold" onClick={()=>filterItem("women's clothing")}>
                Women's Clothings
              </button>
              <button className="btn btn-outline-dark mx-3 fw-semibold" onClick={()=>filterItem("jewelery")}>
                Jewelery
              </button>
              <button className="btn btn-outline-dark fw-semibold" onClick={()=>filterItem("electronics")}>
                Electronics
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          
          {filterproductData.map((data) => (
         
            <Product content={data} notify={notifyAboutCartAdd} />
          ))}

        </div>
      </div>
    </div>
  );
}
export default Home;
