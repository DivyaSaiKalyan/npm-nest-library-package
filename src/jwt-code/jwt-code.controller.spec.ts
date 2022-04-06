import { Test, TestingModule } from '@nestjs/testing';
import { JwtCodeController } from './jwt-code.controller';

describe('JwtCodeController', () => {
  let controller: JwtCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JwtCodeController],
    }).compile();

    controller = module.get<JwtCodeController>(JwtCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
