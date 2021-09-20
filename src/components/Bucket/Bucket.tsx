import React, { FC } from "react"
import { IProductsData } from "../../data/models"
import BucketItem from "../BucketItem"
import { IBucketComponentProps } from "./models"
import "./Bucket.scss"

const Bucket: FC<IBucketComponentProps> = ({ bucketList }) => {
  return (
    <div className="bucket">
      {bucketList?.map((bucketItem: IProductsData) => (
        <BucketItem {...{ bucketItem }} />
      ))}
    </div>
  )
}

export default Bucket
