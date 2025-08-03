import React from 'react'
import './footer.css';
import amazonLogo from '../../Assets/amazonLogo.png'
const Footer = () => {
    return (


        <div className="footer">
            <div className="footerHeader">
                <div className="footerHeaderTitle">Back to top</div>
            </div>
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                    <div className="contentFooterSubTitleDiv">
                        <div className="contentFooterSubTitleCont">About Amazon</div>
                        <div className="contentFooterSubTitleCont">Careers</div>
                        <div className="contentFooterSubTitleCont">Press Releases</div>
                        <div className="contentFooterSubTitleCont">Amazon Science</div>
                    </div>

                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitleDiv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>
                    <div className="contentFooterSubTitleDiv">
                        <div className="contentFooterSubTitleCont">Sell on Amazon</div>
                        <div className="contentFooterSubTitleCont">Sell under Amazon Accelerator</div>
                        <div className="contentFooterSubTitleCont">Protect and Build Your Brand</div>
                        <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                        <div className="contentFooterSubTitleCont">Supply to Amazon</div>
                        <div className="contentFooterSubTitleCont">Become an Affiliate</div>
                        <div className="contentFooterSubTitleCont">Fulfillment by Amazon</div>
                        <div className="contentFooterSubTitleCont">Advertise Your Products</div>
                        <div className="contentFooterSubTitleCont">Amazon Pay on Merchants</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Lets Us Help You</div>
                    <div className="contentFooterSubTitleDiv">
                        <div className="contentFooterSubTitleCont">Your Account</div>
                        <div className="contentFooterSubTitleCont">Returns Centre</div>
                        <div className="contentFooterSubTitleCont">Recalls and Product Safety Alerts</div>
                        <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
                        <div className="contentFooterSubTitleCont">Amazon App Download</div>
                        <div className="contentFooterSubTitleCont">Help</div>
                    </div>
                </div>
            </div>

            <div className="amazonImg">
                <img className='amazonImgFooter' src={amazonLogo} />
            </div>

            <div className='end'>
                <div className='endLine'>
                  <div> Conditions of Use & Sale &nbsp; Privacy Notice &nbsp; Interest-Based Ads</div>
                    <div className='endLine2'> © 1996-2025, Amazon.com, Inc. or its affiliates </div>
                </div>
            </div>
        </div>
    )
}

export default Footer