import type { StringOrUndefined } from 'src/types';

export function makeClassName(classNames: Array<StringOrUndefined>): string {
  return classNames
    .reduce((result: string, className?: string) => {
      return !!className ? `${result} ${className}` : result;
    }, '')
    .trim();
}
