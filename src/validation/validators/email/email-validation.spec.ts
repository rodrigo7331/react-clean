import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'
import faker from 'faker'
import { fieldNameMock } from '@/validation/test/mock-field'

const makeSut = (): EmailValidation => new EmailValidation(fieldNameMock)

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('asdasdasa1232@')
    expect(error).toEqual(new InvalidFieldError(fieldNameMock))
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })

  test('Should return falsy if email is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
