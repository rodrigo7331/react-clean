import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'
import { AddAccount } from '@/domain/usecases'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeRemoteAddAccount = (): AddAccount => {
  const remoteAddAccount = new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
  return remoteAddAccount
}
