import React from 'react'
import { AiOutlineMail} from "react-icons/ai";
export default function Logins() {
  return (
    <>
    <div className="login-container">
        <div className="login">
            <div className="logo">
              <img src="/Icon.png" alt="dont" width={169} height={169}/>
            </div>
            <div className="logins">
              <span>ورود</span>
              <div className="content">
              <form>
                <div className="name">
                <i><AiOutlineMail size={18}/></i>
                <input type="text" placeholder='آدرس ایمیل'/>
                
                </div>
                <div className="password">
                <i>
                    <AiOutlineMail size={18}/>
                  </i>
                  <input type="text" placeholder='رمز عبور' />
                  
                  
                </div>
                <a href="#">رمز عبور خودرافراموش کرده ام</a>
                  <button>ورود</button>
                  <button >
                  <img src="/icons/Icon=google.png" alt="" style={{verticalAlign:"middle"}}/>
                    ورود با حساب گوگل
                  </button>
                  <span>
                     حساب کاربری ندارید؟
                    <a href="#">ثبت نام</a>
                  </span>
                

                </form>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
