import React from "react";
import "../../css/notfound.css"; 

export default function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">	
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Estoy trabajando en mi proyecto</h3>
                <p>Porfavor vuelve y Sigue con tu experiencia</p>
                <a href="/" className="link_404">Volver a Casa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
