import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('debe estar definido', () => {
    expect(appController).toBeDefined();
  });

  it('getHello debe retornar "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });

  it('getHealth debe retornar status ok', () => {
    const result = appController.getHealth();
    expect(result.status).toBe('ok');
    expect(result.service).toBe('crisol-sync-backend');
    expect(result).toHaveProperty('timestamp');
  });
});
