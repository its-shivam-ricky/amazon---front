import React from 'react'
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json'
const HomeBanner = () => {
    return (
        <div className='homeBanner'>
            <img className='homeBannerImg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/new/final/makeup_PC2x._CB548664881_.png' alt='offer' />
            <div className='grayBackgroundHomeBanner'></div>

            <div className='homeBannerItemDiv'>

                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, ind) => {
                                            return (
                                                <div className="imgBannerHomeDiv">
                                                    <img className="imgBannerHomeDivImg" src={it} />
                                                    <div className="imgBannerImgName">Products</div>
                                                </div>
                                            );

                                        })
                                    }

                                </div>

                                <div className="seeMoreHomeBanner">See More</div>
                            </div>
                        );
                    })
                }



            </div>
        </div>
    )
}

export default HomeBanner