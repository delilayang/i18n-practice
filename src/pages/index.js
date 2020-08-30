import React from "react";
import Hero from "../sections/landing3/Hero";
import CTA from "../sections/landing3/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
