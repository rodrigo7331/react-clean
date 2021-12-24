import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import React, { useState } from 'react'
import Styles from './login-styles.scss'
import Context from '@/presentation/context/form/form-context'
type StateProps = {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
      <div className={Styles.login}>
        <LoginHeader/>
        <Context.Provider value={state}>
          <form className={Styles.form}>
            <h2>Login</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail"/>
            <Input type="password" name="email" placeholder="Digite sua senha"/>
            <button className={Styles.submit} type="button">Entrar</button>
            <span className={Styles.link}>Criar conta</span>
            <FormStatus/>
          </form>
        </Context.Provider>
        <Footer/>
      </ div>
  )
}

export default Login
