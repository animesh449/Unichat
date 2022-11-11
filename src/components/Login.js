import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Vibez Messen<span style={{color:'red'}}>ger</span></h2>
        <p style={{fontSize:'10px'}}>Due to Chat Engine's basic plan only 25 users can be registered currently..</p>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

        <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  )
}