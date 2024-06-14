import "./information.css";

function Information() {
  return (
    <div className="container marketing">
      <div className="row featurette" id="palworld">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1 text-light">
            Palworld
            <span className="text-light"> ¡Atrévete a explorar!</span>
          </h2>
          <p className="lead text-light">
            Descubre un vasto mundo lleno de criaturas únicas. Captura, construye y
            lucha para sobrevivir en un entorno sorprendente. ¡La aventura te
            espera en cada rincón!
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="/Images/palworld.png"
            alt="Placeholder: 400x400"
            width="400"
            height="400"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette" id="tekken">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1 text-light">
            Tekken n8
            <span className="text-light"> ¡Pelea sin límites!</span>
          </h2>
          <p className="lead text-light">
            Enfréntate a los mejores luchadores en Tekken 8. Domina nuevos
            movimientos y estrategias para demostrar tu habilidad. ¿Tienes lo
            necesario para ser el campeón?
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="/Images/tekken8.jpg"
            alt="Placeholder: 400x400"
            width="400"
            height="400"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette" id="stellar">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1 text-light">
            Stellar Blade
            <span className="text-light"> ¡Salva la humanidad!</span>
          </h2>
          <p className="lead text-light">
            Embárcate en una misión épica en un futuro distópico. Combate enemigos
            formidables y descubre secretos ocultos. La supervivencia de la
            humanidad está en tus manos.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="/Images/stellarBlade.webp"
            alt="Placeholder: 400x400"
            width="400"
            height="400"
          />
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}

export default Information;
