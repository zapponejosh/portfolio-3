import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="links">
          <a
            className="footer-link"
            href="https://github.com/zapponejosh/"
            target="blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/josh-zappone-60bb85196/"
            target="blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
        </div>
        <div>
          <p>
            Copyright <i className="far fa-copyright fa-xs"></i> 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
