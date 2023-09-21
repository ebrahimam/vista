import React from 'react'
import { AiOutlineMail} from "react-icons/ai";
export default function Logins() {
  return (
    <>
    <div className="login-container">
        <div className="login">
            <div className="logo">
              <img src="/icons/Icon=Logo Dark.png" alt="dont" width={100} height={200}/>
            </div>
            <div className="logins">
              <span>ورود</span>
              <div className="content">
              <form>
                <div className="name">
                <input type="text" placeholder='D'/>
                <i><AiOutlineMail/></i>
                </div>
                <div className="password">
                  <input type="text" />
                  <i></i>
                  <a href="#">رمز عبور خودرافراموش کرده ام</a>
                  <button>ورود</button>
                  <button>ورود با حساب گوگل</button>
                  <span>
                    حساب کاربری ندارید
                    <a href="#">ثبت نام</a>
                  </span>
                </div>
                

                </form>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
