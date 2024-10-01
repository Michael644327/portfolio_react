import React from "react";
import { Link } from "react-router-dom";
import Products from '../../components/animalpara/data/products.json'

const ProductPage = () => {

  return (
    <div className="row bg-info bg-opacity-50 py-3">
      {Products.map((v, i) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={v.id}>
            <Link to={`./${v.id}`}>
              <div className="bg-success rounded-circle bg-opactity-25">
                <img src={v.image} alt={v.product} className="w-100" />
              </div>
              <p className="textCenter">{v.product}<br />
              ${v.price}</p>
            </Link>
          </div>
      ))}
    </div>
  )
}

export default ProductPage;