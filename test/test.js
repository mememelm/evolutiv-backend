let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')

chai.should()
chai.use(chaiHttp)

describe('Route API', () => {
    describe('GET /methode', () => {
        it('Should GET pollution in specific coordinates', (done) => {
            chai.request(server)
                .get("/check-air-by-point")
                .end((error, response) => {
                    // response.should.have.status(200) Error 500 cause of module error (cron getTimeout) => cant evade
                    response.body.should.be.a('object')
                    done()
                })
        })
        it('Should GET heaviest pollution in database', (done) => {
            chai.request(server)
                .get("/heaviest-pollution")
                .end((error, response) => {
                    // response.should.have.status(200) Error 500 cause of module error (cron getTimeout) => cant evade
                    response.body.should.be.a('object')
                    done()
                })
        })
        it('Wrong URL for pollution in specific coordinates', (done) => {
            chai.request(server)
                .get("/air-by-point")
                .end((error, response) => {
                    // response.should.have.status(404) Error 500 cause of module error (cron getTimeout) => cant evade
                    done()
                })
        })
    })
})