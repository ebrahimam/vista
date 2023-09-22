import React from 'react'
import '/src/styles/style.css'
import { AiOutlineEye, AiOutlineLock, AiOutlineMail,AiOutlineUsergroupAdd } from 'react-icons/ai'
export default function Signin() {
  /////////////onsubmit//////////
  const handlesubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <>
    
    <div className="signin-container">
        <div className="signin">
            <div className="logo">
              <img src="/Icon.png" alt="dont" width={169} height={169}/>
            </div>
           <div className="right">
            <h3>ثبت نام</h3>
            <form onSubmit={handlesubmit}>
                <div className="email">
                <input type="text" name='email' />
                <AiOutlineMail size={22}/>
                </div>
                <div className="password">
                    <AiOutlineEye size={22}/>
                    <input type="text" />
                    <AiOutlineLock size={22}/>
                </div> 
                <input type="checkbox" id="rule" name="rule" value="accept rule"/>
  <label for="rule"> قوانین سایت را میپذیرم</label>
                        <div className="group">
                            <input type="text" name='group code' />
                            <AiOutlineUsergroupAdd size={22}/>
                        </div>
                        <button className='register-btn'>ثبت نام</button>
                        <button className='google-login'>ورود باحساب گوگل
                         <img src="/icons/Icon=google.png" alt="not found"  style={{verticalAlign:"middle",marginRight:'0.5rem'}}/>
                        </button>
                        <span >
            حساب کاربری دارید؟
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
