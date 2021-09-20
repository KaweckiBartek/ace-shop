import React, { FC, useState } from "react"
import { IProductsData } from "../../data/models"
import { discountsCodesData } from "../../data/discountsCodes"
import { HiOutlineShoppingBag } from "react-icons/hi"
import BucketItem from "../BucketItem"
import { IBucketComponentProps } from "./models"
import "./Bucket.scss"
import DiscountCode from "../DiscountCode"

const Bucket: FC<IBucketComponentProps> = ({
  bucketList,
  handleAddToBucket,
  handleRemoveFromBucket,
}) => {
  const [input, setInput] = useState<string>("")

  console.log(discountsCodesData)

  const calculateTotalPrice = bucketList.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  )

  return (
    <div className="bucket">
      <div className="bucket__header border-bottom">
        <HiOutlineShoppingBag />
        <p className="header-bucket">
          <strong>Koszyk</strong>
        </p>
      </div>

      <div className="bucket__total-price border-bottom">
        <p>Cena:</p>
        <p>
          <strong>{calculateTotalPrice}</strong>
        </p>
      </div>
      <div className="bucket__items">
        <p className="items-heading">
          <strong>Twój koszyk</strong>
        </p>
        {bucketList?.map((bucketItem: IProductsData) => (
          <BucketItem
            {...{ bucketItem, handleAddToBucket, handleRemoveFromBucket }}
          />
        ))}
      </div>

      <DiscountCode {...{ input }} onChange={setInput} />
    </div>
  )
}

export default Bucket
