import { cart } from "../assets/shopcart.png"

export const CartWidget = () => {
  return (
    <div className="cartWidget">
    <img src= {cart} alt="Cart" />
    <span>1</span>
    </div>
  )
}