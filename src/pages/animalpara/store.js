import React from "react";
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Store from '../../components/animalpara/data/store.json'

const StorePage = () => {

  const [activeNav, setActiveNav] = useState(0)

  const toggleNav = (index) => {
    setActiveNav(index);
  }
  return (
    <>
      <Nav variant="underline">
        {Store.map((v, i) => (
          <Nav.Item key={v.id}>
            <Nav.Link
              eventKey={v.id}
              active={activeNav === i}
              onClick={() => toggleNav(i)}>{v.store}</Nav.Link>
          </Nav.Item>
        )
        )}
      </Nav>
      {Store.map((v, i) => (
        <div className={`tab-pane ${activeNav === i ? 'active' : "d-none"}`} key={v.id}>
          <h3>{v.store}</h3>
          <div className="row">
            <div className="col-md-8">
              <p>{v.info}</p>
            </div>
            <div className="col-md-4">
              <img src={v.image} className="w-100" alt={`img-${v.store}`} />
            </div>
          </div>
        </div>
      )
      )}
    </>
  )
}

export default StorePage;