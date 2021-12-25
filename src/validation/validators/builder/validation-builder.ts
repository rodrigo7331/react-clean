import { FieldValidation } from '@/validation/protocols/field-validation'
import { MinLengthValidation, RequiredFieldValidation } from '..'
import { EmailValidation } from '../email/email-validation'

export class ValidationBuilder {
  private constructor (private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  build (): FieldValidation[] {
    return this.validations
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (min: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, 3))
    return this
  }
}
