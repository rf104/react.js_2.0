import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import  authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'


function Login() {
  return (
    <div>Login</div>
  )
}

export default Login