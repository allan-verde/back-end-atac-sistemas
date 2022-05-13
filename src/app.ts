import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import toolRoute from './routes/tool.routes'


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(toolRoute)

export default app