import React from "react";
import { useState } from 'react';
import {Collapse} from 'react-bootstrap';
import Funny from "../../components/animalpara/data/funny.json"

const FunnyPage = () => {
  const [open, setOpen] = useState(
    Funny.reduce((acc, _, index) => {
      acc[index] = false;
      return acc;
    }, {})
  );

  const toggleCollapse = (index) => {
    setOpen(prevStates => ({
      ...prevStates,
      [index]: !prevStates[index]
    }));
  };

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          {Funny.map((v, i) => (
            <div key={i}>
              <div className="accordion-header accordion-button" 
                  onClick={() => toggleCollapse(i)}
                  aria-controls={`collapseText${i}`}
                  aria-expanded={open[i]}>
                  {v.title}
              </div>
              <Collapse in={open[i]}>
                <div id={`collapseText${i}`} className="row">
                  <div className="col-12 col-lg-4">
                    <img src={v.image} alt={v.title} className="w-100" />
                  </div>
                  <div className="col-12 col-lg-8 p-5" style={{whiteSpace:"pre-wrap"}}>
                    {v.describe}
                  </div>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default FunnyPage;