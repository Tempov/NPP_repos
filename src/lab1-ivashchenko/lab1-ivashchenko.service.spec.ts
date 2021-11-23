import { Test, TestingModule } from '@nestjs/testing';
import { Lab1IvashchenkoService } from './lab1-ivashchenko.service';

describe('Lab1IvashchenkoService', () => {
  let service: Lab1IvashchenkoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lab1IvashchenkoService],
    }).compile();

    service = module.get<Lab1IvashchenkoService>(Lab1IvashchenkoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
