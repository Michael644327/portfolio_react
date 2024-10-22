import React from "react";
import Birds from "../../components/animalpara/data/birds.json"
const AboutPage = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center py-5">鳥兒人氣投票</h2>
          </div>
          {Birds.map((v, i) => (
            <div key={i} className="row rounded">
              <div className="bg-info p-2 bg-opacity-25 col-4">
                <img src={v.src} width="100%" alt={v.alt} />
              </div>
              <div className="col-8 bg-warning align-middle py-5 px-5">
                <h3>{v.name}</h3>
                <p>{v.describe}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutPage;