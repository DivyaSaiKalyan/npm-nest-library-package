import { Test, TestingModule } from '@nestjs/testing';
import { JwtCodeService } from './jwt-code.service';

describe('JwtCodeService', () => {
  let service: JwtCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtCodeService],
    }).compile();

    service = module.get<JwtCodeService>(JwtCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
