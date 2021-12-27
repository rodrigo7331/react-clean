import { InvalidFieldError } from '../../errors'
import faker from 'faker'
import { CompareFieldsValidation } from './compare-fields-validation'
const field = faker.database.column()
const value = faker.random.words()
const makeSut = (valueToCompare: string = value): CompareFieldsValidation => (new CompareFieldsValidation(field, value))
describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(value)
    const error = sut.validate(faker.random.words())
    expect(error).toEqual(new InvalidFieldError(field))
  })
})
