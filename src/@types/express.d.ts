import { Tool } from '../entities/Tool'
import { User } from '../entities/User'

declare global {
    namespace Express {
        interface Request {
            validated: User | Tool
            decoded: User
        }
    }
}
