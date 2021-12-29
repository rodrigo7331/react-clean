import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (field: string, minLength: number): MinLengthValidation => new MinLengthValidation(field,minLength)
describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const minLength = 5
    const sut = makeSut(field, minLength)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(minLength - 1) })
    expect(error).toEqual(new InvalidFieldError(field))
  })
  test('Should return falsy if valud is valid', () => {
    const field = faker.database.column()
    const minLength = 5
    const sut = makeSut(field, minLength)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(minLength) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exists in schema', () => {
    const minLength = 5
    const sut = makeSut(faker.database.column(), minLength)
    const error = sut.validate({ [faker.database.column()]: faker.random.alphaNumeric(minLength) })
    expect(error).toBeFalsy()
  })
})
