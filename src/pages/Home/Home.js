import Navbar from '../../component/Home/Navbar/Navbar';
import Product from '../../component/Home/Product/Product';
import {useEffect, useState} from 'react';

function Home(){
    const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Raw Data");
        console.log(res);
        return res.json();
      })
      .then((convertedData) => {
        setProductData(convertedData);
      });
  }, []);
    return(
        <div className="wrapper">
            <Navbar />
            <div className="container-fluid">
              <div className="row">
               
                {
                productData.map((data)=>(
                    <Product content={data}/>
                ))
            }
               
              </div>
            </div>
           
           
      </div>
    );
}
export default Home;