import { FieldValidation } from '../protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  constructor (readonly field: string) {}
  error: Error = null

  validate (input: object): Error {
    return this.error
  }
}
