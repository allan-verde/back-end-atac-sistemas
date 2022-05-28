import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  ssl: { rejectUnauthorized: false },
  entities: ['./src/entities/*.{js,ts}'],
  migrations: ['./src/migrations/*.{js,ts}']
})
