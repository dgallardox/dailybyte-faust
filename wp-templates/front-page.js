import React from 'react';
import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Main,
  Container,
  NavigationMenu,
  Hero,
  Layout
} from '../components';

export default function Component() {

  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <Layout
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        primaryMenu={primaryMenu}
        footerMenu={footerMenu}
      >
        <Main>
          <Container>
            <Hero title={"Front Page"} />
            <div className='text-center'>
              <p>This page is utilizing the "front-page" WordPress template.</p>
              <code>wp-templates/front-page.js</code>
            </div>
          </Container>
        </Main>
      </Layout>
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
