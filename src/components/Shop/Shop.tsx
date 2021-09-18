import React, { FC, useEffect, useState } from "react"
import { IProductsData } from "../../data/models"
import { productsData } from "../../data/products"
import Header from "../Header"

import { IShopComponentProps } from "./models"
import "./Shop.scss"

const Shop: FC<IShopComponentProps> = () => {
  const [input, setInput] = useState<string>("")
  const [productsListDefault, setProductsListDefault] = useState<
    IProductsData[]
  >([])
  const [productsList, setProductsList] = useState<IProductsData[]>([])

  useEffect(() => {
    setProductsListDefault(productsData)
    setProductsList(productsData)
  }, [])

  const updateInput = async (input: string) => {
    setInput(input)
    const filteredTitle = productsListDefault.filter(
      product =>
        product.name.toLowerCase().includes(input.toLowerCase()) ||
        product.id.toLowerCase().includes(input.toLowerCase())
    )
    setProductsList(filteredTitle)
  }

  console.log(productsList)
  console.log(productsListDefault)

  return (
    <div className="shop">
      <Header {...{ input, updateInput, productsList, productsListDefault }} />
      {/* {input.length > 0 && open && (
        <SearchList {...{ productsList, searchRef }} />
      )} */}

      {/* ProductList */}
      {/* Bucket */}
    </div>
  )
}

export default Shop
