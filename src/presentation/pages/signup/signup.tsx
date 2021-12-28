import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Styles from './signup-styles.scss'
import Context from '@/presentation/context/form/form-context'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
      <div className={Styles.signup}>
        <LoginHeader/>
        <Context.Provider value={{ state: {} }}>
          <form data-testid="form" className={Styles.form}>
            <h2>Criar Conta</h2>
            <Input type="text" name="name" placeholder="Digite seu nome"/>
            <Input type="password" name="password" placeholder="Digite sua senha"/>
            <Input type="password" name="passwordConfirmatio" placeholder="Repita sua senha"/>
            <button type="submit" className={Styles.submit}>Entrar</button>
            <Link to="/signup" className={Styles.link}>Voltar para Login</Link>
            <FormStatus/>
          </form>
        </Context.Provider>
        <Footer/>
      </ div>
  )
}

export default SignUp
