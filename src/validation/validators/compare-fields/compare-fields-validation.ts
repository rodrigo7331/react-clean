
import { InvalidFieldError } from '../../errors'
import { FieldValidation } from '../../protocols/field-validation'

export class CompareFieldsValidation implements FieldValidation {
  constructor (readonly field: string,
    private readonly fieldToCompare: string) {}

  validate (input: object): Error {
    return input[this.field] !== input[this.fieldToCompare] ? new InvalidFieldError(this.field) : null
  }
}
