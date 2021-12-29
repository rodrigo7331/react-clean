import faker from 'faker'

const baseUrl: string = Cypress.config().baseUrl

describe('Login', () => {
  beforeEach(() => {
    cy.server()
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('email').should('have.attr', 'readOnly')
    cy.getByTestId('email-status').should('have.attr', 'title', 'Campo obrigatório').should('contain.text', ':)')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    cy.getByTestId('password-status').should('have.attr', 'title', 'Campo obrigatório').should('contain.text', ':)')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    cy.getByTestId('email-status').should('have.attr', 'title', 'Campo email inválido').should('contain.text', ':)')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(2))
    cy.getByTestId('password-status').should('have.attr', 'title', 'Campo password inválido').should('contain.text', ':)')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Tudo certo!').should('contain.text', ':(')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Tudo certo!').should('contain.text', ':(')

    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error if invalid credentials are provided', () => {
    cy.route({
      status: 401,
      method: 'POST',
      url: /login/,
      response: {
        error: faker.random.words()
      }
    })

    cy.getByTestId('email').focus().type(faker.internet.email())

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))

    cy.getByTestId('submit').click()
    cy.getByTestId('spinner').should('not.exist')
      .getByTestId('main-error').should('contain.text', 'Invalid Credentials')

    cy.url().should('eq', `${baseUrl}/login`)
  })

  it('Should save accessToken if valid credentials are provided', () => {
    cy.route({
      status: 200,
      method: 'POST',
      url: /login/,
      response: {
        accessToken: faker.random.uuid()
      }
    })

    cy.getByTestId('email').focus().type('mango@gmail.com')
    cy.getByTestId('password').focus().type('12345')
    cy.getByTestId('submit').click()
    cy.getByTestId('main-error').should('not.exist')
      .getByTestId('spinner').should('not.exist')

    cy.url().should('eq', `${baseUrl}/`)

    cy.window().then(window => assert.isOk(window.localStorage.getItem('accessToken')))
  })

  it('Should save accessToken if valid credentials are provided', () => {
    cy.route({
      status: 200,
      method: 'POST',
      url: /login/,
      response: {
        accessToken: faker.random.uuid()
      }
    })

    cy.getByTestId('email').focus().type('mango@gmail.com')
    cy.getByTestId('password').focus().type('12345')
    cy.getByTestId('submit').click()
    cy.getByTestId('main-error').should('not.exist')
      .getByTestId('spinner').should('not.exist')

    cy.url().should('eq', `${baseUrl}/`)

    cy.window().then(window => assert.isOk(window.localStorage.getItem('accessToken')))
  })

  it('Should present UnexpectedError if invalid data is returned', () => {
    cy.route({
      status: 200,
      method: 'POST',
      url: /login/,
      response: {
        invalidProp: faker.random.uuid()
      }
    })

    cy.getByTestId('email').focus().type('mango@gmail.com')
    cy.getByTestId('password').focus().type('12345')
    cy.getByTestId('submit').click()
    cy.getByTestId('submit').click()
    cy.getByTestId('spinner').should('not.exist')
      .getByTestId('main-error').should('contain.text', 'Something went wrong :/')

    cy.url().should('eq', `${baseUrl}/login`)
  })
})