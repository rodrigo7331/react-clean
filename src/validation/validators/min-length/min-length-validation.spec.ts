import { InvalidFieldError } from '@/validation/errors'
import { fieldNameMock } from '@/validation/validators/test/mock-field'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => new MinLengthValidation(fieldNameMock,minLength)
const minLength = 5
describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(minLength - 1))
    expect(error).toEqual(new InvalidFieldError(fieldNameMock))
  })
  test('Should return falsy if valud is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(minLength))
    expect(error).toBeFalsy()
  })
})
