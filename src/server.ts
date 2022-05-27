import app from './app'
import { AppDataSource } from './data-source'
import * as dotenv from 'dotenv'

dotenv.config()

AppDataSource.initialize().then(() => {
  console.log('Database connected!')

  const port = process.env.RUN_PORT ?? 3000

  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`)
  })
}).catch(err => console.log(err))
