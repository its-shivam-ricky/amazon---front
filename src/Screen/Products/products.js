import React from 'react'
import './products.css'
import ProductDetail from './products.json'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart=(item)=>{

        toast.success("Added To Cart", {
            position:"bottom-right"
          })
          
        dispatch(addToCart(item));
    }
    return (
        <div className='productPage'>
            <div className='productTopBanner'>
                <div className='productTopBannerItems'>Electronics</div>
                <div className='productTopBannerItemsSubMenu'>Mobile & Accessories</div>
                <div className='productTopBannerItemsSubMenu'>Laptops & Accessories</div>
                <div className='productTopBannerItemsSubMenu'>TV & Home Entertainment</div>
                <div className='productTopBannerItemsSubMenu'>Audio</div>
                <div className='productTopBannerItemsSubMenu'>Cameras</div>
                <div className='productTopBannerItemsSubMenu'>Computer Peripherals</div>
                <div className='productTopBannerItemsSubMenu'>Smart Technology </div>
                <div className='productTopBannerItemsSubMenu'>Musical Instruments</div>
                <div className='productTopBannerItemsSubMenu'>Office & Stationary</div>

            </div>
            <div className='productsPagesMain'>
                <div className='productsPageMainLeftCategory'>
                    <div className='productsPageMainLeftCategoryTitle'>Category</div>
                    <div className='productsPageMainLeftCategoryTitle2'>Electronic</div>
                    <div className='productsPageMainLeftCategoryContent'>
                        <div className='productsPageMainLeftCategoryTitleContent'>Computers & Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Cameras & Photography </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Car & Vehicle Electronics </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Computers & Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>GPS & Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Home Audio </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Home Theater, TV & Video </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Mobiles & Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Portable Media Players </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Tablets </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Telephones & Accessories</div>
                        <div className='productsPageMainLeftCategoryContentSub'>Warranties</div>
                        <div className='productsPageMainLeftCategoryContentSub'>eBook Readers & Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Wearable Technology </div>
                        <div className='productsPageMainLeftCategoryContentSub'>General Purpose Batteries & Battery Chargers </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Headphones, Earbuds & Accessories </div>
                        <div className='productsPageMainLeftCategoryContentSub'>Power Accessories </div>
                    </div>

                    <div className='productsPageMainLeftCategoryTitle2'>Customer Review </div>

                    <div className='ratingLeftBox'>
                        < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                        < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                        < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                        < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />

                        < StarOutlineOutlinedIcon sx={{ fontSize: "20px", color: "#de7921" }} /><span >& Up</span>

                    </div>

                    <div className='productsPageMainLeftCategoryTitle2'>Amazon Prime</div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>

                    <div className='productsPageMainLeftCategoryTitle2'>Delivery Day</div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>

                    <div className='productsPageMainLeftCategoryTitle2'>Brands</div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>
                    <div className='checkBox'>
                        < CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "20px", color: "grey" }} />
                    </div>

                </div>

                <div className='productsPageMainRight'>
                    <div className='productsPageMainRightTopBanner'>
                        1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>MacBooks</span>
                    </div>
                    <div className='itemsImageProductPage'>

                        {
                            ProductDetail.product.map((item, index) => {
                                return (
                                    <div className='itemsImageProductPageOne' key={item.id}>
                                        <div className='imgBlockItemsImageProductPageOne'>
                                            <img src={item.imageUrl} className='productImageProduct' alt="" />
                                        </div>
                                        <div className='productNameProduct'>
                                            <div>{item.name}</div>
                                            <div className='productNameProductRating'>
                                                < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                                                < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                                                < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                                                < StarRateIcon sx={{ fontSize: "20px", color: "#de7921" }} />

                                                < StarOutlineOutlinedIcon sx={{ fontSize: "20px", color: "#de7921" }} />
                                            </div>
                                            <div className='priceProductDetailPage'>
                                                <div className='currencyText'>₹</div>
                                                <div className='rateHomeDetail'>{item.price}<span className='offProductPage'> M.R.P : ₹71,773  (23% off)</span></div>
                                            </div>
                                            <span>No Cost EMI available on select cards.</span>
                                            <span className='freeDeliveryHomepage'>FREE delivery By Amazon</span>
                                            <div className='addToBasketBtn' onClick={() => { handleAddToCart(item) }}> Add to cart </div>
                                        </div>

                                    </div>
                                );
                            })


                        }


                    </div>

                </div>


            </div>
            <ToastContainer />
        </div>
    )
}

export default Products