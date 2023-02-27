/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, por{" "}
          <a
            href="https://vipobra.wixsite.com/vipingenieria"
            target="_blank"
          >
            VIP INGENIERÍA S.A. DE C.V.
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
