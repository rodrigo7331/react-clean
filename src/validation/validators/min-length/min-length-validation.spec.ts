import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const fieldName = faker.random.word()

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation(fieldName, 5)
    const error = sut.validate('1234')
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })
})
