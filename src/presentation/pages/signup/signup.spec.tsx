import { Helper, ValidationStub } from '@/presentation/test/'
import { RenderResult, render, cleanup, fireEvent } from '@testing-library/react'
import faker from 'faker'
import React from 'react'
import { SignUp } from '..'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <SignUp validation={validationStub} />
  )
  return { sut }
}

const populateField = (sut: RenderResult,fieldName: string, email: string = faker.internet.email(), value: string = faker.internet.email()): void => {
  const input = sut.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}
describe('SignUp Component', () => {
  afterEach(cleanup)
  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'email', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório')
  })

  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })

    populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
