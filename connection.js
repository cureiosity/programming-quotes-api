import mongoose from 'mongoose'

const mongooseConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}
const connectionString = process.env.DB_URL || 'mongodb://localhost:27017/programming-quotes'
mongoose.connect(connectionString, mongooseConfig)
const db = mongoose.connection

mongoose.set('returnOriginal', false)

db.on('connected', () => console.log('connected to database'))
db.on('disconnected', () => console.log('disconnected from database'))
db.on('error', error=> console.error('database error', error))

export default db
