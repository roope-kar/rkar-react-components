import React from 'react';
import { Button } from 'lib';
import { render, cleanup } from '@testing-library/react';

describe('Button', () => {

    afterEach(cleanup);

    it('renders', () => {

        const container: HTMLElement = render(
            <Button>Primary</Button>
        ).container;

        const buttonElement = container.querySelector('.rkar-Button') as HTMLElement;

        expect(buttonElement.textContent).toEqual('Primary');

    });

});
