import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('answer')
export class AnswerEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    questionId: Number

    @Column()
    answer: string

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
        this.questionId=0;
        this.answer=""
        this.isActive=true;
        this.createdBy=0;
        this.updatedBy=0;
    }
}