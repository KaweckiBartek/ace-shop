import React, { FC } from "react"
import { IBucketItemComponentProps } from "./models"
import "./BucketItem.scss"

const BucketItem: FC<IBucketItemComponentProps> = ({ bucketItem }) => {
  console.log(bucketItem)

  return (
    <div className="bucket-item">
      <div className="bucket-item__header">
        <p>Koszyk</p>
      </div>
    </div>
  )
}

export default BucketItem
