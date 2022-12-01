import Navbar from '../../component/Home/Navbar/Navbar';
import Product from '../../component/Home/Product/Product';
import {useEffect, useState} from 'react';

function Home(){
    const [productData, setProductData] = useState([]);
    const [itemCount, setItemCount]=useState([0]);
    
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Raw Data");
        console.log(res);
       
        return res.json();
      })
      .then((convertedData) => {
        convertedData.forEach(o=>{
          o.qty=1;})
        setProductData(convertedData);
      
        
      });
      notifyAboutCartAdd();
  }, []);

  function notifyAboutCartAdd(){
    let cartItems = localStorage.getItem("cartItems");
    if(cartItems){
      let parsedCartItems = JSON.parse(cartItems);
      setItemCount(parsedCartItems.length);
    }
  }
    return(
        <div className="wrapper">
           
            <Navbar  count={itemCount}/>
             
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 borderstyle">
        <h1 className="text-center fw-bold my-4 ">Latest Products</h1>
        <hr />  
        <div className="buttons">
          <button className="btn btn-outline-dark mx-3 fw-semibold" >ALL</button>
          <button className="btn btn-outline-dark mx-3 fw-semibold" >Men's Clothings</button>
          <button className="btn btn-outline-dark mx-3 fw-semibold">
            Women's Clothings
          </button>
          <button className="btn btn-outline-dark mx-3 fw-semibold">Jewelery</button>
          <button className="btn btn-outline-dark fw-semibold">Electronics</button>
        </div>
      </div>
    </div>
  </div>
  
            <div className="container-fluid">
              <div className="row">
               
                {
                productData.map((data)=>(
                    <Product content={data}  notify={notifyAboutCartAdd}/>
                   
                ))
            }
               
              </div>
            </div>
           
           
      </div>
    );
}
export default Home;