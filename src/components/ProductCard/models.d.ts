import { IProductsData } from "../../data/models"

export interface IProductCardComponentProps {
  product: {
    id: string
    name: string
    imageUrl: string
    description: string
    price: number
  }
}
