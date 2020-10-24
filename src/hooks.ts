import React from 'react';

const HOME: number = 36;
const END: number = 35;
const UP_ARROW: number = 38;
const DOWN_ARROW: number = 40;

export function useListNavigation(optionListRef: React.RefObject<HTMLUListElement>) {
  React.useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case HOME:
          (optionListRef.current?.firstElementChild as HTMLElement)?.focus();
          break;
        case END:
          (optionListRef.current?.lastElementChild as HTMLElement)?.focus();
          break;
        case DOWN_ARROW:
          (document.activeElement?.nextElementSibling as HTMLElement)?.focus();
          break;
        case UP_ARROW:
          (document.activeElement?.previousElementSibling as HTMLElement)?.focus();
          break;
      }
    };
    optionListRef.current?.addEventListener('keyup', handleKeyUp);
    return () => {
      optionListRef.current?.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
}
