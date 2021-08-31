import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('BOARD')
export class Board {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({
    type: 'text',
    name: 'NAME',
  })
  name: string;

  @Column({
    type: 'text',
    name: 'TITLE',
  })
  title: string;

  @Column({
    type: 'text',
    name: 'CONTENT',
  })
  content: string;

  @CreateDateColumn()
  create_at?: Date;

  @UpdateDateColumn()
  update_at: Date;
}
