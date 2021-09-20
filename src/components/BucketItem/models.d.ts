import { IProductsData } from "../../data/models"

export interface IBucketItemComponentProps {
  bucketItem: IBucketList
  handleAddToBucket: (arg: IBucketList) => void
  handleRemoveFromBucket: (arg: IBucketList) => void
}
