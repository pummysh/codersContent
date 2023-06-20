import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('topic')
export class TopicEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    topicName: string

    @Column({default:true})
    isActive: boolean
    
    @Column()
    @CreateDateColumn()
    createdAt!: Date

    @Column()
    @UpdateDateColumn()
    updatedAt!: Date

    @Column({nullable:true})
    createdBy: Number

    @Column({nullable:true})
    updatedBy: Number

    constructor(){
        this.id=0;
        this.topicName="";
        this.isActive=true;
        this.createdBy=0;
        this.updatedBy=0;
    }
}