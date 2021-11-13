import React, { useMemo, useEffect } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import useProduct from "../hooks/useProduct";

const Product = (props) => {
  const [getAllProducts, getProducts, getProductsBySlug, getProductById] =
    useProduct();

  const slug = props.match.params.slug.split("-");
  const product =
    useMemo(
      () => (getProductById && getProductById(slug[slug.length - 1])) || {},
      [getProductById, slug]
    );

  const relatedProducts = useMemo(
    () => (getProducts && getProducts(8)) || [],
    [getProducts]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.name}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard key={item.id || index} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
