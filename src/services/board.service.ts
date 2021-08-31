import { Injectable } from '@nestjs/common';
import { Board } from '../entities/board.entity';
import { BoardDto } from './dto/board.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async createBoard(data: BoardDto): Promise<Board> {
    return this.boardRepository.save(data);
  }
}
