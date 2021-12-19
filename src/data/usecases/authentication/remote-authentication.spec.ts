import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import faker from 'faker'
type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const mockedUrl = faker.internet.url()

const makeSut = (url: string = mockedUrl): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}
describe('RemoteAuthentication',() => {
  test('Should call HttpClient with correct URL', () => {
    const url = mockedUrl
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
