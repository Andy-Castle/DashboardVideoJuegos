import "./gridGames.css";

function GridGames() {
  return (
    <>
      <div className="container py-4">
        <h1 className="text-center text-light">Lista de juegos</h1>
        <div className="row row-cols-lg-4 row-cols-md-3 g-4 py-5 justify-content-center content">
          <div className="col">
            <div className="cardItem">
              <img src="/Images/caja-reach-halo_u3my.png" alt="Halo Reach" />
              <button className="ship">Popular</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/SB2.png" alt="Halo Reach" />
              <button className="ship">Novedad</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/palworld-5861112(1).png" alt="Halo Reach" />
              <button className="ship">Popular</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/BIOSHOCK(1).jpg" alt="Halo Reach" />
              <button className="ship">Oferta</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/tekken-8-cover(1).png" alt="Halo Reach" />
              <button className="ship">Novedad</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/haloinfinito-1(1).png" alt="Halo Reach" />
              <button className="ship">Popular</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/bloodborne(1).jpg" alt="Halo Reach" />
              <button className="ship">Popular</button>
            </div>
          </div>
          <div className="col">
            <div className="cardItem">
              <img src="/Images/35(1).jpg" alt="Halo Reach" />
              <button className="ship">Oferta</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridGames;
