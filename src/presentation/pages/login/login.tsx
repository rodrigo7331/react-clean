import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import React from 'react'
import Styles from './login-styles.scss'
const Login: React.FC = () => {
  return (
      <div className={Styles.login}>
        <LoginHeader/>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail"/>
          <Input type="password" name="email" placeholder="Digite sua senha"/>
          <button className={Styles.submit} type="button">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus/>
        </form>
        <Footer/>
      </ div>
  )
}

export default Login
