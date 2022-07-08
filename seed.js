import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

// async function fetchData() {
//   const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes/')
//   const format = await response.json()
//   const data = await ((format) => fsPromises.writeFile('./quotes.json', JSON.stringify(format)))
// }

fetch('https://programming-quotes-api.herokuapp.com/Quotes/')
  .then(response => response.json())
  .then(data => fsPromises.writeFile('./quotes.json', JSON.stringify(data)))

import mongoose from 'mongoose'
import db from './connection.js'
// import Quote from './Quote.js'
// import data from './quotes.json' assert {type: 'json'}

// Quote.deleteMany({})
//   .then(() => Quote.insertMany(data))
//   .then(() => mongoose.disconnect())
