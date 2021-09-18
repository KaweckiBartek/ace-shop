import React, { FC } from "react"
import { IProductsData } from "../../data/models"
import ProductCard from "../ProductCard"

import { IProductsComponentProps } from "./models"
import "./Products.scss"

const Products: FC<IProductsComponentProps> = ({ productsList }) => {
  return (
    <div className="products">
      {productsList.map((product: IProductsData) => (
        <ProductCard {...{ product }} />
      ))}
    </div>
  )
}

export default Products
