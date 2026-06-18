import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @ApiTags('Health')
  @ApiOperation({ summary: 'Health check', description: 'Verifica que el backend está activo.' })
  @ApiResponse({ status: 200, description: 'Backend activo.' })
  getHealth() {
    return {
      status: 'ok',
      service: 'crisol-sync-backend',
      timestamp: new Date().toISOString(),
    };
  }
}
