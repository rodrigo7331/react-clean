import { RequiredFieldValidation, ValidationBuilder } from '..'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation', () => {
    const validations = ValidationBuilder.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('Should return MinLengthValidation', () => {
    const validations = ValidationBuilder.field('any_field').min(3).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 3)])
  })
})
