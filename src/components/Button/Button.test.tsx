import React from 'react';
import { Button } from 'src/components';
import { render, cleanup, getByText } from '@testing-library/react';

describe('Button', () => {

    afterEach(cleanup);
    
    it('renders', () => {

        const container: HTMLElement = render(
            <Button size={'medium'}>Primary</Button>
        ).container;

        expect(getByText(container, 'Primary').textContent).toStrictEqual('Primary');

    });

});
