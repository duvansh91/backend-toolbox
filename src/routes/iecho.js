const express = require('express')
const router = express.Router()

const isPalindrome = (text) => {
  const textNoSpaces = text.replace(/\s+/g, '').toLowerCase()
  const reverseTextNoSpaces = text.replace(/\s+/g, '').split('').reverse().join('').toLowerCase()
  return removeDiacritics(textNoSpaces) === removeDiacritics(reverseTextNoSpaces)
}

const removeDiacritics = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

router.get('/', function (req, res, next) {
  const { text } = req.query
  if (text) {
    const reverseText = text.split('').reverse().join('')
    const palindrome = isPalindrome(text)
    res.status(200).json({ text: reverseText, palindrome })
  } else {
    res.status(400).json({ error: 'no text' })
  }
})

module.exports = router
