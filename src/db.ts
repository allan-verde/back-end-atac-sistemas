import dotenv from 'dotenv'
import { DataSource } from 'typeorm'


dotenv.config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    port: 5432,
    database: process.env.DATABASE,
    entities: [],
    logging: true,
    synchronize: true
})
