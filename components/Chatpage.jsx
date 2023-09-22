import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

export default function Chatpage() {
  return (
    <React.Fragment>
        <div className="chat-container">
            <div className="inner">
                <div className="chat">
                    <div className="top">
                        <div className="user-profile">
                            <div className="image">
                                <img src="/image 5(1).png" alt="not found" />
                            </div>
                            <div className="text">
                                <span>مرجان خلیل پور</span><br />
                                <span style={{color:"rgb(37,37,37)"}}>سطح 2 کاربری</span>
                            </div>
                        </div>
                    </div>
                    <div className="chat-dis">
                        <div className="notme">
                            <div className="chat-me">
                               <p>سلام!!<br /> میشه رسیدتون رو برام ارسال کنید؟</p>
                            </div>
                        </div>
                        <span className='chat-date'>12 june</span>
                        <div className="me">
                            <p>سلام <br />چشم حتما</p>
                            </div> 
                        <span className='chat-date'>13 Aug</span>
                    </div>
                    <div className="text-box">
                        <div className="input-box">
                             <input type="text" color='purple' />
                             <a href="#">
                                 <AiOutlineSend size={20} style={{verticalAlign:"middle",marginLeft:"0.6rem"}}/>
                             </a>
                       
                        </div>
                       
                    </div>
                </div>
                <div className="chats">
                    <span style={{direction:"rtl"}}>گفتگوها</span>
                    <div className="chat-item">
                        <div className="cal">6</div>
                        <div className="user-info">
                            <div className="text">
                                <span>مرجان خلیل پور</span>
                                
                                <span>21400/12/16 | 13:05</span>
                            </div>
                            <div className="image">
                                <img src="/image 5(1).png" alt="" />
                            </div>
                        </div>
                         
                    </div>
                    <div className="chat-item">
                        <div className="cal">6</div>
                        <div className="user-info">
                            <div className="text">
                                <span>مرجان خلیل پور</span>
                                
                                <span>21400/12/16 | 13:05</span>
                            </div>
                            <div className="image">
                                <img src="/image 5(1).png" alt="" />
                            </div>
                        </div>
                         
                    </div>
                    <div className="chat-item">
                        <div className="cal">6</div>
                        <div className="user-info">
                            <div className="text">
                                <span>مرجان خلیل پور</span>
                                
                                <span>21400/12/16 | 13:05</span>
                            </div>
                            <div className="image">
                                <img src="/image 5(1).png" alt="" />
                            </div>
                        </div>
                         
                    </div>
                    <div className="chat-item">
                        <div className="cal">6</div>
                        <div className="user-info">
                            <div className="text">
                                <span>مرجان خلیل پور</span>
                                
                                <span>21400/12/16 | 13:05</span>
                            </div>
                            <div className="image">
                                <img src="/image 5(1).png" alt="" />
                            </div>
                        </div>
                         
                    </div>
                    <div className="chat-item">
                        <div className="cal">
                            6
                        </div>
                        <div className="user-info">
                            <div className="text">
                                <span>مرجان خلیل پور</span>
                                
                                <span>21400/12/16 | 13:05</span>
                            </div>
                            <div className="image">
                                <img src="/image 5(1).png" alt="" />
                            </div>
                        </div>
                         
                    </div>
                    
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}
