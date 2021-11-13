import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";
import zalo from "../assets/images/zalo.png";
import message from "../assets/images/icon_messenger.svg";
import phoneRing from "../assets/images/phone-call-red.gif";
import phone from "../assets/images/icon_click_to_call.svg";
import delivery from "../assets/images/delivery-truck.svg";
import shoppe from "../assets/images/shoppe.png";


import Routes from "../routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />

            <div className="phone-fixed">
              <div className="phone-fixed__content">
                <a href="tel:(037)9031479" className="phone-fixed__link">
                  <div
                    style={{ backgroundImage: `url('${phoneRing}')` }}
                    alt=""
                    className="phone-fixed__img"
                  />
                  <div className="phone-fixed__text">
                    <span clas>0379.031.479</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="cta">
              <div class="ctaitem">
                {/* <div class="ctacontent">Gọi điện</div> */}
                <div class="ctaimg">
                  <a href="tel:0387440192">
                    <img src={phone} alt="Gọi điện" />
                  </a>
                </div>
              </div>

              <div class="ctaitem">
                {/* <div class="ctacontent">Gọi điện</div> */}
                <div class="ctaimg">
                  <a href="https://shopee.vn/changchang2612" >
                    <img src={shoppe} alt="Shoppe" target="_blank" style={{borderRadius: '50%'}} />
                  </a>
                </div>
              </div>

              <div class="ctaitem">
                {/* <div class="ctacontent">Zalo</div> */}
                <div class="ctaimg">
                  <a href="https://zalo.me/0379031479" target="_blank" alt="">
                    <img src={zalo} alt="Zalo" />
                  </a>
                </div>
              </div>

              {/* <div class="ctaitem">
                <div class="ctacontent">Giao hàng</div>
                <div class="ctaimg">
                  <a href="tel:0387440192">
                    <img src={delivery} alt="Giao hàng" />
                  </a>
                </div>
              </div> */}

              <div class="ctaitem">
                {/* <div class="ctacontent">Message</div> */}
                <div class="ctaimg">
                  <a
                    href="https://www.facebook.com/messages/t/461711184326747"
                    target="_blank"
                    alt=""
                  >
                    <img src={message} alt="Message" />
                  </a>
                </div>
              </div>
            </div>

            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
