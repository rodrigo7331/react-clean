import React, { useContext } from 'react'
import Styles from './submit-button-styles.scss'
import Context from '@/presentation/context/form/form-context'

type Props = {
  text: string
}
const SubmitButton: React.FC<Props> = ({ text }) => {
  const { state } = useContext(Context)

  return (
    <button disabled={state.isFormInvalid} className={Styles.submit} data-testid="submit" type="submit">{text}</button>
  )
}

export default SubmitButton
