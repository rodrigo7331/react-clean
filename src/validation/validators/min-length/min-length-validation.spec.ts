import { InvalidFieldError } from '@/validation/errors'
import { fieldNameMock } from '@/validation/test'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (minLength: number): MinLengthValidation => new MinLengthValidation(fieldNameMock,minLength)
describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(minLength - 1))
    expect(error).toEqual(new InvalidFieldError(fieldNameMock))
  })
  test('Should return falsy if valud is valid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(minLength))
    expect(error).toBeFalsy()
  })
})
