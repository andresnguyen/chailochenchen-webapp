import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import category from "../assets/fake-data/category";
import heroSliderData from "../constants/banner";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSliderV1";
import ProductCard from "../components/ProductCard";
import Section, {
  SectionBody,
  SectionTitle,
  SectionTitleV1,
} from "../components/Section";
import Service from "../components/Service";
import useProduct from "../hooks/useProduct";
import Loading from "../components/Loading";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Home = () => {
  const [getAllProducts, getProducts, getProductsBySlug, getProductById] =
    useProduct();

  return (
    <Helmet title="Trang chủ - Chailo Chenchen">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <div style={{ padding: "40px 0px" }}>
            <Service />
          </div>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitleV1>giới thiệu shop</SectionTitleV1>

        <SectionBody>
          <YoutubeEmbed embedId="13BJ117IsJQ" />
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      {/* <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section> */}
      {/* end best selling section */}

      {/* new arrival section */}
      {/* <Section>
        <SectionTitle>Toàn bộ sản phẩm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard key={item.id || index} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section> */}

      {!getAllProducts && <Loading />}

      {getAllProducts &&
        category.map((item) => (
          <Fragment>
            {getProductsBySlug &&
              getProductsBySlug(item.category, 8).length > 0 && (
                <Section>
                  <SectionTitleV1 path={`/products?category=${item.category}`}>
                    {item.display}
                  </SectionTitleV1>
                  <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                      {getProductsBySlug(item.category, 8).map(
                        (item, index) => (
                          <ProductCard key={item.id || index} data={item} />
                        )
                      )}
                    </Grid>
                  </SectionBody>
                </Section>
              )}
          </Fragment>
        ))}
      {/* end new arrival section */}

      {/* banner
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            end banner */}

      {/* popular product section 
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            end popular product section  */}
    </Helmet>
  );
};

export default Home;
