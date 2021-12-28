import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Styles from './signup-styles.scss'
import Context from '@/presentation/context/form/form-context'
import React, { useEffect, useState } from 'react'
import { Validation } from '@/presentation/protocols/validation'
type Props = {
  validation: Validation
}
const SignUp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })
  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name)
    })
  }, [state.name])
  return (
      <div className={Styles.signup}>
        <LoginHeader/>
        <Context.Provider value={{ state, setState }}>
          <form data-testid="form" className={Styles.form}>
            <h2>Criar Conta</h2>
            <Input type="text" name="name" placeholder="Digite seu nome"/>
            <Input type="email" name="email" placeholder="Digite seu e-mail"/>
            <Input type="password" name="password" placeholder="Digite sua senha"/>
            <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha"/>
            <button data-testid="submit" disabled type="submit" className={Styles.submit}>Entrar</button>
            <span className={Styles.link}>Voltar para Login</span>
            <FormStatus/>
          </form>
        </Context.Provider>
        <Footer/>
      </ div>
  )
}

export default SignUp
