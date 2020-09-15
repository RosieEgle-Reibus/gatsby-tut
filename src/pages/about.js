import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotImage"

const AboutPage = () => {
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
        <RobotImage src={"/robot1.png"} alt={"Robot 1"} />
        <RobotImage src={"/robot2.png"} alt={"Robot 2"} />
        <div><p>My very first gatsby page yayayayayayayyay!!!!!</p>
        <p>It's based on the index.js page</p></div>
      </section>
    </Layout>
  )
}


export default AboutPage