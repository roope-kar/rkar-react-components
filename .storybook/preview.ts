import { addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { themes } from '@storybook/theming';
import results from '../.test-results.json';

addDecorator(
  withTests({
    results,
  }),
);

addParameters({
  docs: {
    theme: themes.dark,
  },
});
