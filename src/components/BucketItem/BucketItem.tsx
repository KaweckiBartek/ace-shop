import React, { FC } from "react"
import { IBucketItemComponentProps } from "./models"
import { FaPlus, FaMinus } from "react-icons/fa"
import "./BucketItem.scss"

const BucketItem: FC<IBucketItemComponentProps> = ({
  bucketItem,
  handleAddToBucket,
  handleRemoveFromBucket,
}) => {
  const { name, price, qty } = bucketItem
  return (
    <div className="bucket-item border-bottom">
      <div className="bucket-item__title">
        <p>{name}</p>
      </div>
      <div className="bucket-item__quantity">
        <FaMinus onClick={() => handleRemoveFromBucket(bucketItem)} />
        <p>{qty}</p>
        <FaPlus onClick={() => handleAddToBucket(bucketItem)} />
      </div>
      <div className="bucket-item__price">
        <strong>{(qty * price).toFixed(2)} zł</strong>
      </div>
    </div>
  )
}

export default BucketItem
