import "./header.css";

function Header() {
  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-3 logo">
            <img
              src="/game-controller.svg"
              alt="game-controller"
              className="logo-image"
            />
            <p className="fs-1 text-light bold logo-text">GYGO</p>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link text-light fs-3" aria-current="page">
                Mas Populares
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-light fs-3">
                Novedades
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-light fs-3">
                Ofertas
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;
