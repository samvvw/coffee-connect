const express = require('express')
const contactRouter = express.Router()
const { createContact, getContacts, getContactById } = require('../controllers/contact.controller')

// POST Contact - Create a new message
contactRouter.post('/', createContact)

// GET Contacts - Gets all Contacts
contactRouter.get('/', getContacts)

// GET Contact - Gets a single contact
contactRouter.get('/:id', getContactById)



module.exports = contactRouter