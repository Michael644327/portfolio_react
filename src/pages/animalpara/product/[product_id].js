import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Products from '../../../components/animalpara/data/products.json'

const ProductDetailPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = Products.find(p => p.id === product_id);
    setProduct(foundProduct);
  }, [product_id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-info bg-opacity-50">
      <div className="container mx-auto p-4">
        <h3 className="my-4">{product.product}</h3>
        <div className="row">
          <div className="col-12 col-lg-4">
            <img src={product.image} alt={product.product} className="w-100" layout="responsive" />
          </div>
          <div className="col-12 col-lg-8">
          <h2 className="font-bold">{product.fullName}</h2>
            <ul className="list-disc list-inside">
              {product.describe.map((item, index) => (
                <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: item }} style={{whiteSpace:"pre-wrap"}} />
              ))}
            </ul>
            <p className="text-xl font-semibold mb-2">價格: ${product.price}</p>
            <p className="mb-4">分類: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage;