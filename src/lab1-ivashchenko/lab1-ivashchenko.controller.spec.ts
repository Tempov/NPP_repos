import { Test, TestingModule } from '@nestjs/testing';
import { Lab1IvashchenkoController } from './lab1-ivashchenko.controller';

describe('Lab1IvashchenkoController', () => {
  let controller: Lab1IvashchenkoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lab1IvashchenkoController],
    }).compile();

    controller = module.get<Lab1IvashchenkoController>(Lab1IvashchenkoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
