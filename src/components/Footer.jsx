import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/logo.jpg";
import category from "../assets/fake-data/category";
import { footerAboutLinks } from '../constants/footer'

const footerCustomerLinks = category
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Điện thoại</div>
            <div className="footer__content">
              <p>Hotline: 0379.031.479</p>
            </div>
          </div>
          <div>
            <div className="footer__title">Về CHAI LỌ CHENCHEN</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  {item.path && <Link to={item.path}>{item.display}</Link>}

                  {item.href && <a href={item.href}>{item.display}</a>}
                </p>
              ))}
            </div>
          </div>
          
          <div>
            <div className="footer__title">Về sản phẩm</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={`/products?category=${item.category}`}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>Chuyên cung cấp SỈ & LẺ CHAI NHỰA CÁC LOẠI.</p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
