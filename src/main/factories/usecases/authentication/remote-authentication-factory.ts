import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  const remoteAuthentication = new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
  return remoteAuthentication
}
