import faker from 'faker'
import { AccountModel } from '../models/account-model'
import { AuthenticationParams } from '../usecases/add-account'

export const mockAuthentication = (): AuthenticationParams => ({ email: faker.internet.email(), password: faker.internet.password() })
export const mockAccountModel = (): AccountModel => ({ accessToken: faker.datatype.uuid() })
