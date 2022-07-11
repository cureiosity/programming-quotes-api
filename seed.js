import axios from 'axios'
import mongoose from 'mongoose'
import db from './connection.js'
import Quote from './Quote.js'

async function fetchQuotes() {
  try {
    const response = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/')
    const filteredData = response.data.map(element => {
      return {
        quote: element.en,
        author: element.author
      }
    })

    await Quote.deleteMany()
    await Quote.insertMany(filteredData)
    mongoose.disconnect()

  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

fetchQuotes()
