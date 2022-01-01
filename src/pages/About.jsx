import React from "react";
import { Link } from "react-router-dom";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import PolicyCard from "../components/PolicyCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import banner from "../assets/images/banner/about.png";

const About = () => {
  return (
    <Helmet title="Trang chủ">
      <div className="about">
        <Section>
          <div className="title">1. Địa chỉ Chailo Chenchen</div>

          <SectionBody>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3918.9260959600338!2d106.58138856539705!3d10.816967692294043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMjMyLzI4IEjGsMahbmcgbOG7mSA4MCwgQsOsbmggSMawbmcgSMOyYSBCLCBCw6xuaCBUw6JuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1641019028380!5m2!1svi!2s"
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
