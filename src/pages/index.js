import React from 'react'
import Link from 'next/link'
import "/src/styles/style.css"
export default function index() {
  return (
    <React.Fragment>
      
        <Link href="/">New Page</Link>
        <br/>
        <Link href="/Login">Log in</Link>
        <br/>
        <Link href="/Signin">Sign in</Link>
        <br/>
        <Link href="/Chat">Chat</Link>
    </React.Fragment>
    )
}
