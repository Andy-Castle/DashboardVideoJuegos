import "./footer.css";

function Footer() {
  return (
    <footer className="border-top d-flex justify-content-between align-items-center py-3">
      <div className="d-flex align-items-center gap-3 logo">
        <img
          src="/game-controller.svg"
          alt="game-controller"
          className="logo-image"
        />
        <p className="fs-1 text-light bold logo-text">GYGO</p>
      </div>
      <div className="social-media d-flex align-items-center gap-3">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/facebook.svg" alt="Facebook" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="social-icon" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/twitter.svg" alt="Twitter" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
