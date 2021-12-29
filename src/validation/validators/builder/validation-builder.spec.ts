import { RequiredFieldValidation, ValidationBuilder } from '..'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import faker from 'faker'
import { CompareFieldsValidation } from '../compare-fields/compare-fields-validation'
describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return CompareFieldsValidation', () => {
    const field = faker.database.column()
    const compareField = faker.database.column()
    const validations = ValidationBuilder.field(field).sameAs(compareField).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, compareField)])
  })
  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.field(field).required().email().min(length).build()
    expect(validations).toEqual([new RequiredFieldValidation(field),new EmailValidation(field),new MinLengthValidation(field, length)])
  })
})
