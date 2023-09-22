import React from 'react'
import "/src/styles/style.css"
import { MdExpandMore,MdNotificationsNone,MdOutlineChatBubbleOutline } from "react-icons/md";
export default function Header() {
  return (
    <>
    <div className="header">
        <div className="dash-actions">
            <button className='dashbord-button'>
                مرجان خلیل پور
                <MdExpandMore size={18} style={{verticalAlign:"middle",marginLeft:"0.5rem"}} className='icon'/>
            </button>
           <a href="#">
            <MdNotificationsNone size={22} className='icon' />
           </a>
            <a href="#">
                <MdOutlineChatBubbleOutline size={22} className='icon' />
            </a>
            
        </div>
        <div className="right">
            <div className="icon"></div>
            <div className="menu">
                <ul>
                <li><a href="#">
                    <img src="/icons/Icon=Logo Dark.png" alt="" /></a></li>
                    <li><a href="#">معامله p2p</a></li>
                    <li><a href="#">معامله سریع</a></li>
                    <li><a href="#">ثبت درحواست معامله</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">وبلاگ</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
