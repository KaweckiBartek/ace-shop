import React, { FC } from "react"
import { IProductCardComponentProps } from "./models"
import "./ProductCard.scss"
import Button from "../Button"

const ProductCard: FC<IProductCardComponentProps> = ({
  product,
  handleAddToBucket,
}) => {
  const { name, imageUrl, description, price } = product

  return (
    <div className="product-card">
      <div className="product-card__price-wrapper">
        <p className="price">{price} $</p>
      </div>
      <p>{name}</p>
      <img
        className="product-card__image"
        src={imageUrl}
        width={200}
        alt="product image"
      />
      <Button
        handler={() => handleAddToBucket(product)}
        btnColorVariant="outline-rose"
        ariaLabel="add to busket"
      >
        Do koszyka
      </Button>
    </div>
  )
}

export default ProductCard
