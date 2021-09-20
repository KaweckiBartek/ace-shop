import { IBucketList } from "./../Shop/models.d"

export interface IBucketComponentProps {
  bucketList: IBucketList[]
  handleAddToBucket: (arg: IBucketList) => void
  handleRemoveFromBucket: (arg: IBucketList) => void
}
