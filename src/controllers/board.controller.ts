import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardDto } from '../services/dto/board.dto';
import { Board } from '../entities/board.entity';
import { BoardService } from '../services/board.service';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/boards')
  async getBoards(): Promise<Board[]> {
    return await this.boardService.findAll();
  }

  @Post('/boards')
  async saveBoards(@Body() data: BoardDto): Promise<Board> {
    return await this.boardService.createBoard(data);
  }
}
