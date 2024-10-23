import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* <div className='container'> */}
        <div className="row pt-3 px-3">
        <h1 className='aligncenter'>作品集</h1>
        <div className='col-12 col-lg-6 px-5'>
        <Link to="https://knock2-frontend-3qms.vercel.app/" target="_blank">
        <h3 className='aligncenter'>密室逃脫 - 悄瞧</h3></Link>
        <Link to="https://knock2-frontend-3qms.vercel.app/" target="_blank">
          <img src="./img/knockhp.png" width="100%" alt="" /></Link>
          <p className='pt-3 px-5'>於資展國際 前端工程師就業養成班，期末發表的專案<br />
          個人負責揪團、留言功能</p>
        </div>
        <div className='col-12 col-lg-6 px-5'>
        <Link to="https://michael644327.github.io/portfolio/#/animalpara">
        <h3 className='aligncenter'>動物樂園</h3></Link>
        <Link to="https://michael644327.github.io/portfolio/#/animalpara">
          <img src="./img/aniparahp.png" width="100%" alt="" /></Link>
          <p className='pt-3 px-5'>Bootstrap5元件練習專案，會員登入、購物車功能</p>
          <p className='px-5'><em>會員登入標題連點3下有快速登入功能</em></p>

        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Home;
