/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 0;
  padding-top: 0;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageWrapper>
        <main>{children}</main>
      </PageWrapper>
      <Footer 
        title={'Contáctanos'}
        email={'hello@faendi.co'}
        phone={'+57 311 213 4580'}
        date={new Date().getFullYear()}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
