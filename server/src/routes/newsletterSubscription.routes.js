const express = require('express')
const newsletterSubscriptionRouter = express.Router()
const { createNewsletterSubscription, getNewsletterSubscriptions, getNewsletterSubscriptionById } = require('../controllers/NewsletterSubscription.controller')

// POST Contact - Create a new message
newsletterSubscriptionRouter.post('/', createNewsletterSubscription)

// GET Contacts - Gets all Contacts
newsletterSubscriptionRouter.get('/', getNewsletterSubscriptions)

// GET Contact - Gets a single contact
newsletterSubscriptionRouter.get('/:id', getNewsletterSubscriptionById)



module.exports = newsletterSubscriptionRouter