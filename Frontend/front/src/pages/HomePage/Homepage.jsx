import React from "react";
import "./HomePage.css";

function Homepage() {
  return (
    <>
<Helmet>

  
  <title>HomePage</title>
</Helmet>

      <div className="container">
        <div className="home">
          {" "}
          <div className="rigth1">
            <div className="img">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
                alt=""
              />
            </div>
          </div>
          <div className="left">
            <div className="text">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Card></Card>
    </>
  );
}

export default Homepage;
