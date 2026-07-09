/**
 * Helper para validar DTOs con class-validator en tests.
 *
 * Uso:
 *   import { validateDto, expectValidationErrors } from '../../test/helpers/dto-validation.helper';
 *
 *   const errors = await validateDto(CreateExpenseDto, { amountTotal: -1 });
 *   expectValidationErrors(errors, ['amountTotal']);
 */
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

/**
 * Transforma un plain object en una instancia del DTO y ejecuta la validación.
 * Retorna los errores de validación encontrados.
 */
export async function validateDto<T extends object>(
  DtoClass: new () => T,
  data: Partial<Record<keyof T, any>> & Record<string, any>,
): Promise<ValidationError[]> {
  const instance = plainToInstance(DtoClass, data);
  return validate(instance, {
    whitelist: true,
    forbidNonWhitelisted: true,
  });
}

/**
 * Valida que existen errores en los campos esperados.
 */
export function expectValidationErrors(
  errors: ValidationError[],
  expectedFields: string[],
): void {
  const errorFields = errors.map((e) => e.property);
  for (const field of expectedFields) {
    expect(errorFields).toContain(field);
  }
}

/**
 * Valida que un DTO es válido (sin errores).
 */
export async function expectDtoValid<T extends object>(
  DtoClass: new () => T,
  data: Partial<Record<keyof T, any>> & Record<string, any>,
): Promise<void> {
  const errors = await validateDto(DtoClass, data);
  expect(errors).toHaveLength(0);
}

/**
 * Valida que un DTO tiene errores en los campos indicados.
 */
export async function expectDtoInvalid<T extends object>(
  DtoClass: new () => T,
  data: Partial<Record<keyof T, any>> & Record<string, any>,
  expectedFields: string[],
): Promise<void> {
  const errors = await validateDto(DtoClass, data);
  expect(errors.length).toBeGreaterThan(0);
  expectValidationErrors(errors, expectedFields);
}
