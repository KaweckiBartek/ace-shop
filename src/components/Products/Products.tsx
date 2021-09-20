import React, { FC } from "react"
import { IProductsData } from "../../data/models"
import ProductCard from "../ProductCard"

import { IProductsComponentProps } from "./models"
import "./Products.scss"

const Products: FC<IProductsComponentProps> = ({
  productsList,
  handleAddToBucket,
}) => {
  return (
    <div className="products">
      {productsList.map((product: IProductsData) => (
        <ProductCard {...{ product, handleAddToBucket }} />
      ))}
    </div>
  )
}

export default Products
