import { IProductsData } from "./../../data/models.d"

export interface IProductsComponentProps {
  productsList: IProductsData[]
  handleAddToBucket: (arg: IProductsData) => void
}
