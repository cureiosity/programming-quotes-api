import mongoose from 'mongoose'
import express from 'express'
import db from './connection.js'
import Quote from './Quote.js'

const app = express()

app.use(express.json())

app.listen(4000, () => console.log('successfully listening on port 4000'))

app.get('/', (req, res) => {
  Quote.find({})
    .then(quotes => res.json(quotes))
    .catch(err => res.json(`Error: ${err}`))
})

app.get('/author/:author', (req, res) => {
  Quote.find({"author": req.params.author})
    .then(quotes => res.json(quotes))
    .catch(err => res.json(`Error: ${err}`))
})

app.get('/quotes/:id', (req, res) => {
  Quote.findById(req.params.id)
    .then(quote => res.json(quote))
    .catch(err => res.json(`Error: ${err}`))
})

app.post('/quotes', (req, res) => {
  Quote.create(req.body)
      .then(quote => res.json(quote))
      .catch(err => res.json(`Error: ${err}`))
})

app.put('/quotes/:id', (req, res) => {
  Quote.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedQuote => res.json(updatedQuote))
    .catch(err => res.json(`Error: ${err}`))
})

app.delete('/quotes/:id', (req, res) => {
  Quote.findByIdAndDelete(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.json(`Error: ${err}`))
})
