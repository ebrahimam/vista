import React from 'react'
import "/src/styles/style.css"
export default function Header() {
  return (
    <>
    <div className="header">
        <div className="actions">
            <button className='buttons'>ثبت نام</button>
            <button className='buttons-emp'>ورود</button>
        </div>
        <div className="right">
            <div className="icon"></div>
            <div className="menu">
                <ul>
                <li><a href="#">
                    <img src="/icons/Icon=Logo Dark.png" alt="" /></a></li>
                    <li><a href="#">معامله P2P</a></li>
                    <li><a href="#">معامله سریع</a></li>
                    <li><a href="#">ثبت درخواست معامله</a></li>
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
