import cors from 'cors'
import express from 'express'
import morgan from 'morgan'


const app= express()

app.use(morgan('dev'))
app.use(cors())

app.listen(3000, () => 'Server is listening on port 3000')