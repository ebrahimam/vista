import React from 'react'
import { BiLogoTelegram,BiLogoTwitter,BiLogoWhatsapp,BiLogoInstagram } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="footer">
        <div className="footers">
            <div className="social">
                <a href="#">
                    <BiLogoTelegram  size={22}/>
                    </a>
                    <a href="#">
                        <BiLogoInstagram size={22}/>
                    </a>
                <a href="#">
                    <BiLogoWhatsapp size={22}/>
                </a>
                <a href="#">
                      <BiLogoTwitter size={22}/>
                </a>
              
            </div>
            <h5>ویستا،پلتفرم جامع معاملات ارز دیجیتال</h5>
        </div>
    </div>
  )
}
