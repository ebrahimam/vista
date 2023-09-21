import React from 'react'
import { AiOutlineEye, AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
export default function Signin() {
  return (
    <>
    <div className="login-container">
        <div className="login">
            <div className="logo">
              <img src="/Icon.png" alt="dont" width={169} height={169}/>
            </div>
           <div className="sigin">
            <h1>ثبت نام</h1>
            <form>
                <div className="email">
                <input type="text" name='email' />
                <AiOutlineMail/>
                </div>
                <div className="password">
                    <AiOutlineEye/>
                    <input type="text" />
                    <AiOutlineLock/>
                </div>
                        <label htmlFor="rule">
                            <input type="checkbox" />
                            قوانین سایت را میپذیرم
                        </label>
                        <div className="group">
                            <input type="text" />
                        </div>
                        <button className='register-btn'>ثبت نام</button>
                        <button className='google-login'>ورود باحساب گوگل</button>
                        <span>
            حساب کاربری دارید
            <a href="#">
                وارد شوید
            </a>
            </span>
            </form>
           </div>
             
        </div>
    </div>

    
    </>
  )
}
