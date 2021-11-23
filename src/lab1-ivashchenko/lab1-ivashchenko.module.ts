import { Module } from '@nestjs/common';
import { Lab1IvashchenkoService } from './lab1-ivashchenko.service';
import { Lab1IvashchenkoController } from './lab1-ivashchenko.controller';

@Module({
  providers: [Lab1IvashchenkoService],
  controllers: [Lab1IvashchenkoController]
})
export class Lab1IvashchenkoModule {}
