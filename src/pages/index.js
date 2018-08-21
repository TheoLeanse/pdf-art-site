import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => <div />

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    markdownRemark {
      frontmatter {
      }
    }
  }
`
