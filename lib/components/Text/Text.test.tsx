import React from 'react';
import { Text } from 'lib/components';
import { render, cleanup } from '@testing-library/react';

describe('Text', () => {

    afterEach(cleanup);
    
    it('renders', () => {

        const container: HTMLElement = render(
            <Text>My Text</Text>
        ).container;

        const buttonElement = container.querySelector('.rkar-Text') as HTMLElement;

        expect(buttonElement.textContent).toStrictEqual('My Text');

    });

});
