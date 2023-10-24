import React from "react";
import {
  Header,
  Footer,
  SEO,
} from "../../components"

export default function Layout({ siteTitle, siteDescription, primaryMenu, footerMenu, children }) {

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      {children}
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}
