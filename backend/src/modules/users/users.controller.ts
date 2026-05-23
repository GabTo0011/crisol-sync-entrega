import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OptionalAuthGuard } from '../../common/guards/optional-auth.guard';
import { BusinessGuard } from '../../common/guards/business.guard';
import { BusinessId } from '../../common/decorators/business-id.decorator';
import { InviteUserDto } from './dto/invite-user.dto';
import { UsersService } from './users.service';

@ApiTags('Usuarios (Users)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar usuarios de un negocio' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios retornada.' })
  findAll(@BusinessId() businessId: string) {
    return this.usersService.findAll(businessId);
  }

  @Post('invite')
  @ApiOperation({ summary: 'Invitar un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario invitado exitosamente.' })
  @ApiResponse({ status: 409, description: 'El email ya está registrado.' })
  invite(@Body() dto: InviteUserDto) {
    return this.usersService.invite(dto);
  }

  @Patch(':id/toggle-status')
  @ApiOperation({ summary: 'Alternar estado de un usuario' })
  @ApiParam({ name: 'id', description: 'UUID del usuario' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Estado actualizado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  toggleStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
  ) {
    return this.usersService.toggleStatus(id, businessId);
  }
}
