import { InvalidFieldError } from '../../errors'
import faker from 'faker'
import { CompareFieldsValidation } from './compare-fields-validation'

type SutParams = {
  field: string
  valueToCompare: string
}

let defaultSutParams: SutParams = {
  field: faker.database.column(),
  valueToCompare: faker.random.words()
}

const makeSut = (params?: SutParams): CompareFieldsValidation => (new CompareFieldsValidation(params.field, params.valueToCompare))
describe('CompareFieldsValidation', () => {
  afterEach(() => {
    defaultSutParams = {
      field: faker.database.column(),
      valueToCompare: faker.random.words()
    }
  })
  test('Should return error if compare is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut({ ...defaultSutParams, field: field })
    const error = sut.validate(faker.random.words())
    expect(error).toEqual(new InvalidFieldError(field))
  })

  test('Should return falsy if compare is valid', () => {
    const value = faker.random.words()
    const sut = makeSut({ ...defaultSutParams, valueToCompare: value })
    const error = sut.validate(value)
    expect(error).toBeFalsy()
  })
})
