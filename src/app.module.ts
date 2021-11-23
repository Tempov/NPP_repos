import { Module } from '@nestjs/common';
import { Lab1IvashchenkoModule } from './lab1-ivashchenko/lab1-ivashchenko.module';


@Module({
  imports: [Lab1IvashchenkoModule]
})
export class AppModule {}
