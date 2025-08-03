import React from 'react'
import './cart.css'
const Cart = () => {
  return (
    <div className='Cart'>
      <div className='topLeftCart'>
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className='deselectAllCart'>Deselect all items</div>
        <div className='cartPriceTextDivider'> Price</div>

        <div className="cartItemsDiv">
          <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="cartItemLeftBlockImage">
                <img src="https://m.media-amazon.com/images/I/41NPsGtO-zL.AC_SX250.jpg" alt="" className="cartItemLeftBlockImg" />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">Pigeon Healthy fry Digital Air Fryer, 360° High Speed Air Circulation Technology 1200 W with Non-Stick 4.2 L Basket - Green</div>
                <div className="inStockCart">In Stock</div>
                <div className="elgFreeShp">Eligible for FREE Shipping</div>
                <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" className="fullFillImg" /></div>
                <div className="removeFromCart">Remove From Basket</div>
              </div>
            </div>
            <div className="cartItemRightBlock">₹ 4,999.00 </div>        
          </div>

          <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="cartItemLeftBlockImage">
                <img src="https://m.media-amazon.com/images/I/41NPsGtO-zL.AC_SX250.jpg" alt="" className="cartItemLeftBlockImg" />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">Pigeon Healthy fry Digital Air Fryer, 360° High Speed Air Circulation Technology 1200 W with Non-Stick 4.2 L Basket - Green</div>
                <div className="inStockCart">In Stock</div>
                <div className="elgFreeShp">Eligible for FREE Shipping</div>
                <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" className="fullFillImg" /></div>
                <div className="removeFromCart">Remove From Basket</div>
              </div>
            </div>
            <div className="cartItemRightBlock">₹ 4,999.00 </div>        
          </div>

        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">Subtotal ({2} items): <span className='subTotalTitleSpan'> Rs {45000}</span></div>
        <div className="giftAddTo">
          <input type="checkbox" />
          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedToBuy">proceed To Buy</div>
        
      </div>

    </div>

  )

}

export default Cart