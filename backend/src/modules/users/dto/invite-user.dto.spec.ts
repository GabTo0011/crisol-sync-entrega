import {
  expectDtoValid,
  expectDtoInvalid,
} from '../../../../test/helpers/dto-validation.helper';
import { InviteUserDto } from './invite-user.dto';

describe('InviteUserDto', () => {
  const validDto = {
    businessId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Diego Araya',
    email: 'diego@crysol.cl',
    role: 'operador',
  };

  describe('campos requeridos', () => {
    it('debe ser válido con todos los campos correctos', async () => {
      await expectDtoValid(InviteUserDto, validDto);
    });

    it('debe fallar si falta businessId', async () => {
      await expectDtoInvalid(
        InviteUserDto,
        { name: 'X', email: 'x@x.cl', role: 'admin' },
        ['businessId'],
      );
    });

    it('debe fallar si falta name', async () => {
      await expectDtoInvalid(
        InviteUserDto,
        { businessId: validDto.businessId, email: 'x@x.cl', role: 'admin' },
        ['name'],
      );
    });

    it('debe fallar si falta email', async () => {
      await expectDtoInvalid(
        InviteUserDto,
        { businessId: validDto.businessId, name: 'X', role: 'admin' },
        ['email'],
      );
    });

    it('debe fallar si falta role', async () => {
      await expectDtoInvalid(
        InviteUserDto,
        { businessId: validDto.businessId, name: 'X', email: 'x@x.cl' },
        ['role'],
      );
    });
  });

  describe('validación de tipos', () => {
    it('debe fallar si businessId no es UUID', async () => {
      await expectDtoInvalid(
        InviteUserDto,
        { ...validDto, businessId: 'invalid' },
        ['businessId'],
      );
    });

    it('debe fallar si email no es válido', async () => {
      await expectDtoInvalid(
        InviteUserDto,
        { ...validDto, email: 'not-an-email' },
        ['email'],
      );
    });

    it('debe fallar si name tiene menos de 2 caracteres', async () => {
      await expectDtoInvalid(InviteUserDto, { ...validDto, name: 'X' }, [
        'name',
      ]);
    });

    it('debe aceptar role admin', async () => {
      await expectDtoValid(InviteUserDto, { ...validDto, role: 'admin' });
    });

    it('debe aceptar role operador', async () => {
      await expectDtoValid(InviteUserDto, { ...validDto, role: 'operador' });
    });

    it('debe aceptar role visor', async () => {
      await expectDtoValid(InviteUserDto, { ...validDto, role: 'visor' });
    });

    it('debe fallar con role inválido', async () => {
      await expectDtoInvalid(InviteUserDto, { ...validDto, role: 'OWNER' }, [
        'role',
      ]);
    });
  });
});
