import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Tool extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
      id: string

    @Column()
      title: string

    @Column()
      link: string

    @Column()
      description: string

    @Column('text', { default: [], array: true })
      tags: string[]

    @CreateDateColumn()
      createdAt?: Date

    @UpdateDateColumn()
      updatedAt?: Date

    @ManyToOne(() => User, (user) => user.tools)
      user: User
}
