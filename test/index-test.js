const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('index', () => {
  before(done => {
    const html = path.resolve(__dirname, '..', 'index.html')
    const src = path.resolve(__dirname, '..', 'index.js')

    jsdom.env(html, [src], (err, window) => {
      if (err) {
        return done(err)
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      })

      done()
    })
  })

  it('does not commit token', () => {
    expect(getToken()).toEqual('')
  })

  describe('index.html', () => {
    it('creates a div with an id of "issues"', () => {
      expect(document.getElementById('issues')).toExist()
    })
  })

  
})
