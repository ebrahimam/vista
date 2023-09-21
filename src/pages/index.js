import React from 'react'
import Link from 'next/link'
import "/src/styles/style.css"
export default function index() {
  return (
    <React.Fragment>
      
        <Link href="/">New Page</Link>
        <Link href="/Login">Log in</Link>
        <Link href="/Signin">Sign in</Link>
        <Link href="/Chat">Chat</Link>
    </React.Fragment>
    )
}
