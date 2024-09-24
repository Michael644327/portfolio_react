import React from "react";
import { Link } from "react-router-dom";
import routes1 from "../../routes";

const AnimalParaNavbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="./index">動物樂園</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="./index">首頁</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="./about">關於動物</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="../">常見問題FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="./store">門市介紹</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="./product-list">商品一覽</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="./contact">聯絡我們</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="position-relative"><Link to="javascript:;"><button type="button" className="btn btn-primary"
              data-bs-toggle="modal" data-bs-target="#loginbtn">
              <i className="bi bi-person-circle"></i></button></Link></li>
        <li className="position-relative"><Link to="javascript:;"><button type="button" className="btn btn-primary"><i
                className="bi bi-chat-left-dots-fill"></i></button></Link>
          <span className="bg-danger text-white position-absolute noticeicon px-2 rounded-circle">3</span>
        </li>
        <li className="position-relative"><Link to="javascript:;"><button type="button" className="btn btn-primary"><i
                className="bi bi-cart2"></i></button></Link></li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default AnimalParaNavbar