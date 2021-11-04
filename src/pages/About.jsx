import React from "react";
import { Link } from "react-router-dom";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import PolicyCard from "../components/PolicyCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import banner from "../assets/images/banner/about.jpg";

const About = () => {
  return (
    <Helmet title="Trang chủ">
      <div className="about">
        <Section>
          <div className="title">1. Địa chỉ Chailo Chenchen</div>

          <SectionBody>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.956478631198!2d106.57867371539699!3d10.814642592295613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b759dd73311%3A0x79301c52d092fb73!2zMjMyLCA1IMSQSDgwLCBCw6xuaCBIxrBuZyBIb8OgIEIsIELDrG5oIENow6FuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1636014640255!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </SectionBody>
        </Section>

        <Section>
          <div className="title">2. Thông tin thêm về Chailo Chenchen</div>

          <SectionBody>
            <div className="img-wrapper">
              <img src={banner} />
            </div>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default About;
