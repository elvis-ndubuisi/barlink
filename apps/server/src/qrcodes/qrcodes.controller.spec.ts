import { Test, TestingModule } from '@nestjs/testing';
import { QrcodesController } from './qrcodes.controller';
import { QrcodesService } from './qrcodes.service';

describe('QrcodesController', () => {
  let controller: QrcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrcodesController],
      providers: [QrcodesService],
    }).compile();

    controller = module.get<QrcodesController>(QrcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
