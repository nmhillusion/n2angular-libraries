export function throwIfMissingAttribute(
  instance: unknown,
  attributeName: string
) {
  console.log(`validate attribute [${attributeName}] on instance: `, instance);
}
