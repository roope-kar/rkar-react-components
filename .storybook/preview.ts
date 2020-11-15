import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../.test-results.json';

addDecorator(
  withTests({
    results,
  }),
);
