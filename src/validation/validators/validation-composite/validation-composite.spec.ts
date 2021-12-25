import { ValidationComposite } from './validation-composite'
import faker from 'faker'
import { FieldValidationSpy } from '@/validation/test'
type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(fieldValidationsSpy)
  return { sut, fieldValidationsSpy }
}

describe('ValidationComposite', () => {
  test('Should retur error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut,fieldValidationsSpy } = makeSut(fieldName)
    const errorMessage1 = faker.random.words()
    const errorMessage2 = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage1)
    fieldValidationsSpy[1].error = new Error(errorMessage2)

    const error = sut.validate(fieldName, faker.random.words())
    expect(error).toBe(errorMessage1)
  })

  test('Should return falsy if there is no error', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, 'any_value')
    expect(error).toBeFalsy()
  })
})
