import mongoose from 'mongoose'

const mongooseConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/programming-quotes', mongooseConfig)

const db = mongoose.connection

db.on('connected', () => console.log('connected to database'))
db.on('disconnected', () => console.log('disconnected from database'))
db.on('error', error=> console.error('database error', error))

export default db
