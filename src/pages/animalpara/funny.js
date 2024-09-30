import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import Funny from "../../components/animalpara/data/funny.json"

const FunnyPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            {Funny.map((v, i) => (
              <Button
                onClick={() => setOpen(!open)}
                className="accordion-button"
                aria-controls={`collapseText${i}`}
                data-bs-target={`#collapseText${i}`}
                aria-expanded={open}>
                {v.title}
              </Button>
            ))}
          </h2>
          {Funny.map((v, i) => (
            <Collapse in={open}>
              <div id={`collapseText${i}`} className="row">
                <div className="col-12 col-lg-4">
                  <img src={v.image} alt={v.title} width='100%' />
                </div>
                <div className="col-12 col-lg-8">
                  {v.describe}
                </div>
              </div>
            </Collapse>
          ))}
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            click
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}


export default FunnyPage;