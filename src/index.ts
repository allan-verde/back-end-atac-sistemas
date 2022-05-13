import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'


async function main() {
    try {
        await AppDataSource.initialize()
        console.log('Database conected')
        app.listen(3000, () => console.log('Server is runnig'))
    } catch (error) {
        console.log(error)
    }
}

main()