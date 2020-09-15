import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="About this site"
        description="Info about the sitew"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section>
        <h1>About this site</h1>
        <div><p>My very first gatsby page yayayayayayayyay!!!!!</p>
        <p>It's based on the index.js page</p></div>
      </section>
    </Layout>
  )
}


export default IndexPage