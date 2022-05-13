import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Tool extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    link: string

    @Column()
    description: string
    
    @Column('text', { default: [], array: true })
    tags: string[]
}
