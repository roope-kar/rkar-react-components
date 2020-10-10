import { makeClassName } from 'src/utils';
import { StringOrUndefined } from 'src/types';

describe('Utility Functions', () => {
  test('returns empty string if classNames is empty', () => {
    // Setup
    const classNames: Array<StringOrUndefined> = [];

    // Test
    const className: string = makeClassName(classNames);

    // Assert
    expect(className).toStrictEqual('');
  });

  test('creates className string from array of classNames joined by a space character', () => {
    // Setup
    const classNames: Array<StringOrUndefined> = ['a', 'b', 'c'];

    // Test
    const className: string = makeClassName(classNames);

    // Assert
    expect(className).toStrictEqual('a b c');
  });
});
