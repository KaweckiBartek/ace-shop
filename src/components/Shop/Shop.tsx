import React, { FC, useEffect, useState } from "react"
import { IProductsData } from "../../data/models"
import { productsData } from "../../data/products"
import Bucket from "../Bucket"
import Header from "../Header"
import useLocalStorage from "../hooks/useLocalStorage"
import Products from "../Products"

import { IBucketList, IShopComponentProps } from "./models"
import "./Shop.scss"

const Shop: FC<IShopComponentProps> = () => {
  const [input, setInput] = useState<string>("")
  const [productsListDefault, setProductsListDefault] = useState<
    IProductsData[]
  >([])
  const [bucketLocalStorage, setBucketLocalStorage] = useLocalStorage(
    "bucket",
    ""
  )
  const [productsList, setProductsList] = useState<IProductsData[]>([])
  const [bucketList, setBucketList] =
    useState<IBucketList[]>(bucketLocalStorage)

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

  const handleAddToBucket = (product: IProductsData) => {
    const exist = bucketList.find(bucketItem => bucketItem.id === product.id)

    if (exist) {
      setBucketList(
        bucketList.map(bucketItem =>
          bucketItem?.id === product?.id
            ? { ...exist, qty: exist.qty + 1 }
            : bucketItem
        )
      )
    } else {
      setBucketList([...bucketList, { ...product, qty: 1 }])
    }
  }

  const handleRemoveFromBucket = (product: IProductsData) => {
    const exist = bucketList.find(bucketItem => bucketItem.id === product.id)

    if (exist?.qty === 1) {
      setBucketList(
        bucketList.filter(bucketItem => bucketItem.id !== product.id)
      )
    } else {
      setBucketList(
        bucketList.map(bucketItem =>
          bucketItem?.id === product?.id
            ? { ...exist, qty: exist?.qty - 1 }
            : bucketItem
        )
      )
    }
  }

  useEffect(() => {
    setBucketLocalStorage(bucketList)
  }, [bucketList])

  // localStorage.clear()

  return (
    <div className="shop">
      <div className="shop__left">
        <Header
          {...{ input, updateInput, productsList, productsListDefault }}
        />

        <Products {...{ productsList, handleAddToBucket }} />
      </div>
      <div className="shop__right">
        <Bucket
          {...{ bucketList, handleAddToBucket, handleRemoveFromBucket }}
        />
      </div>
    </div>
  )
}

export default Shop
