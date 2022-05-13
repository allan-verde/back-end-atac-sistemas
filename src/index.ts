import dotenv from 'dotenv'
import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'


dotenv.config()

const port = process.env.PORT || 3333

async function main() {
    try {
        await AppDataSource.initialize()
        console.log('Database conected')
        app.listen(port, () => console.log('Server is runnig'))
    } catch (error) {
        console.log(error)
    }
}

main()