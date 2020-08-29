const { Router } = require('express')
const router = Router()

const assets = require('../../dist/assets.json')

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    assets
  })
})

module.exports = router
