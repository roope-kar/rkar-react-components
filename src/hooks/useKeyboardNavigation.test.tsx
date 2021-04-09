import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import { useKeyboardNavigation } from 'src/hooks';

describe('useKeyboardNavigation', () => {
  it('works', () => {
    const listRef = React.createRef<HTMLOListElement>();

    const list: React.FunctionComponent = () => (
      <ol ref={listRef}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    );

    renderHook(() => useKeyboardNavigation(listRef), { wrapper: list });

    fireEvent.keyUp(listRef.current as HTMLOListElement, { keyCode: 9 });

    expect(window.document.activeElement?.innerHTML).toBe(1);
  });
});
