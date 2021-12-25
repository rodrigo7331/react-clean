import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

const fieldName = 'email'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation(fieldName)
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })
})
