const request = require('supertest')
const expect = require('chai').expect
const app = require('../src/app')

describe('GET /', () => {
  it('Should return is palidrome', async () => {
    const response = await request(app).get('/iecho?text=Level')
    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal(
      {
        text: 'leveL',
        normalText: 'Level',
        palindrome: true
      }
    )
  })
  it('Should return is not palidrome', async () => {
    const response = await request(app).get('/iecho?text=Hello')
    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal(
      {
        text: 'olleH',
        normalText: 'Hello',
        palindrome: false
      }
    )
  })
  it('Should return not text', async () => {
    const response = await request(app).get('/iecho?text=')
    expect(response.status).to.equal(400)
    expect(response.body).to.deep.equal({ error: 'no text' })
  })
})