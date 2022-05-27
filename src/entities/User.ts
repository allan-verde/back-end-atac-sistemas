import { compare } from 'bcrypt'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
      id?: string

    @Column({ unique: true })
      email: string

    @Column({ default: false })
      isAdmin?: boolean

    @Column()
      password: string

    comparePwd = async (pwdString: string): Promise<boolean> => {
      return await compare(pwdString, this.password)
    }
}