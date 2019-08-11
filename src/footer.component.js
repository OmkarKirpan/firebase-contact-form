import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container fluid className="fooTop">
        <Row>
          <Col sm={6} className="fooAdd">
            <div className="fooTitle">The WallArt Store "Imajjo"</div>
            <p>
              <span class="strong">Phone:</span>{" "}
              <a href="tel:+91 (067) 124 77 77">+91 (067) 124 77 77</a>
            </p>
            <p>
              <span class="strong">Email:</span>{" "}
              <a
                href="javascript:noSpam('info', 'coolart.ua')"
                rel="nofollow"
                data-none-preloader=""
              >
                info@imajjo.com
              </a>
            </p>
            <p>
              <span class="strong">Address:</span>{" "}
              <span itemprop="addressCountry">Ukraine</span>,{" "}
              <span itemprop="addressLocality">Dnipro</span>{" "}
              <span itemprop="streetAddress">Panikahy st., 18</span>
            </p>
          </Col>
          <Col sm={6}>
            <div className="fooTitle newsletter">
              Subscribe for news and promotions
            </div>
            <form action="" method="post" _lpchecked="1">
              <input
                type="hidden"
                name="form"
                value="subscribe"
                autocomplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                value=""
                autocomplete="off"
              />
              <input
                type="submit"
                className="a-button a-button-auto a-button-small a-button-black"
                value="Subscribe"
                autocomplete="off"
              />
            </form>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container fluid>
          <div className="float-left">
            <p> Copyright © Imjjo 2019. All right reserved. </p>
          </div>
          <div className="float-right">
            <ul className="list-unstyled list-inline social">
              <li className="list-inline-item">
                <i className="fa fa-facebook" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-twitter" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-instagram" />
              </li>
              <li className="list-inline-item">
                <i className="fa fa-google-plus" />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
