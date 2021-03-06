import { compare } from 'bcrypt'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Tool } from './Tool'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
      id?: string

    @Column()
      name: string

    @Column({ unique: true })
      email: string

    @Column({ default: false })
      isAdmin?: boolean

    @Column()
      password: string

    @OneToMany(() => Tool, (tool) => tool.user)
      tools: Tool[]

    comparePwd = async (pwdString: string): Promise<boolean> => {
      return await compare(pwdString, this.password)
    }
}
