import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Shop from "../components/Shop"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Shop />
  </Layout>
)

export default HomePage
