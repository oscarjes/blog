import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import SEO from '../components/SEO'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next, slug } = this.props.pageContext
    return (
      <>
        <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt || 'nothin’'}
        article
        pathname={slug}
        />
        <Layout location={this.props.location}>
          <h1
            style={{
              color: '#551A8B',
              textDecoration: 'underline',
              // marginBottom: '10px'
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              color: '#334854',
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              background: '#8899a6',
              color: 'white',
              marginBottom: rhythm(1),
            }}
          />
          <Bio />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Layout>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
