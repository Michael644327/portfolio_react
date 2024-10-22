import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from '../../components/animalpara/data/products.json'
import { Button } from "react-bootstrap";

const ProductPage = () => {

  const [category, setCategory] = useState();
  const [price, setPrice] = useState("");

  const categoryFilter = (category) => {
    setCategory(category)
  }

  const filterProducts = Products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    return matchesCategory;
  })


  return (
    <>
      <div className=" bg-info bg-opacity-50">
        <div className="container">
          <div className="row py-3">
            <div className="row py-3">
              <div className="col-12 col-lg-6">
                <div className="filterArea">
                  <Button onClick={() => categoryFilter("")}>所有商品</Button>
                  <Button onClick={() => categoryFilter("dog")}>犬類飼料</Button>
                  <Button onClick={() => categoryFilter("cat")}>貓咪飼料</Button>
                  <Button onClick={() => categoryFilter("little")}>小型動物飼料</Button>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                搜尋:
                <input />
              </div>
            </div>
            {/* {Products.map((v, i) => ( */}
            {
              filterProducts.map((v, i) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={v.id}>
                  <Link to={`./${v.id}`}>
                    <div className="bg-success rounded-circle bg-opactity-25">
                      <img src={v.image} alt={v.product} className="w-100" />
                    </div>
                    <p style={{ textAlign: "center" }}>{v.product}<br />
                      ${v.price}</p>
                  </Link>
                </div>
              ))
            }
          </div>
        </div></div>
    </>
  )
}

export default ProductPage;