import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'
import faker from 'faker'

const fieldName = faker.random.word()

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation(fieldName)
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Should return falsy if email is valid', () => {
    const sut = new EmailValidation(fieldName)
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
