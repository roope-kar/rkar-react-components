import React from 'react';
import { Link } from 'lib/components';
import { render, cleanup } from '@testing-library/react';

describe('Link', () => {

    afterEach(cleanup);
    
    it('renders', () => {

        const container: HTMLElement = render(
            <Link>My Link</Link>
        ).container;

        const buttonElement = container.querySelector('.rkar-Link') as HTMLElement;

        expect(buttonElement.textContent).toStrictEqual('My Link');

    });

});
