import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '../../usecases/authentication/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '../../usecases/save-access-token/local-save-access-token-factory'

export const makeSignUoValidation: React.FC = () => {
  return (
    <Login saveAccessToken={makeLocalSaveAccessToken()}
     authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}/>
  )
}
