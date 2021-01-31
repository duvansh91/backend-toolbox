const router = require('express').Router()
const iecho = require('./iecho')

router.use('/iecho', iecho)

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Server running' })
})

module.exports = router
