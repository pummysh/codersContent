import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('question')
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    topicId: Number

    @Column()
    qusetion: string

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
        this.topicId=0;
        this.qusetion="";
        this.isActive=true;
        this.createdBy=0;
        this.updatedBy=0;
    }
}