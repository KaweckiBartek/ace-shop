import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Shop from "../components/Shop"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <Shop />
  </Layout>
)

export default HomePage
