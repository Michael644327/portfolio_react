import React from "react";
import { Link } from "react-router-dom";

const SalesProduct = () => {

    const salesItem = [
        { src: './img/animalpara/catfood_01.jpg', href: './product/5', name: '貓咪肉條', states: 'HOT' },
        { src: './img/animalpara/littlefood_01.jpg', href: './product/9', name: '倉鼠飼料', states: 'SALE' },
        { src: './img/animalpara/catfood_03.jpg', href: './product/7', name: '貓凍乾鬆', states: 'soldout' },
        { src: './img/animalpara/dogfood_04.jpg', href: './product/4', name: '狗飼料 - 運動配方', states: '' },
    ]


    return (
        <>
            <div className="bg-info bg-opacity-50 pb-5">
                <div className="container">
                    <div className="row">
                        <h2 className="col-12 text-center my-5 py-3">熱銷商品</h2>
                        {salesItem.map((s, i) => (
                            <div key={i} className="col-12 col-md-6 col-xl-3 mb-5">
                                <div className="position-relative">
                                    <Link to={s.href}>
                                        <img src={s.src} className="w-100" alt={s.name} />
                                        <div className="text-center">{s.name}</div>
                                    </Link>
                                    {s.states === "HOT" && (
                                        <div className="bg-danger text-white position-absolute hoticon p-2">HOT!</div>)}
                                    {s.states === "SALE" && (
                                        <div className="bg-info text-white position-absolute saleicon p-2">-10%</div>)}
                                    {s.states === "soldout" && (
                                        <div className="badge top-0 soldouticon rounded-pill bg-danger position-absolute">soldout!</div>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}

export default SalesProduct;