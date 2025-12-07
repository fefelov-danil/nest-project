import { registerDecorator, type ValidationOptions } from 'class-validator';

export function StartWidth(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'startWidth',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage(): string {
          return `Строка должна начинаться с ${prefix}`;
        },
      },
    });
  };
}
