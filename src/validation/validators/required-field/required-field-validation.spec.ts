import { RequiredFieldError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'
import faker from 'faker'

const makeSut = (fieldName: string): RequiredFieldValidation => new RequiredFieldValidation(fieldName)
describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
