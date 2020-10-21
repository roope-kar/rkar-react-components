import React from 'react';

export function useOptionListAccessibilityControls(optionListRef: React.RefObject<HTMLUListElement>) {
  React.useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.keyCode === 36) {
        (optionListRef.current?.firstChild as HTMLLIElement)?.focus();
      }

      if (event.keyCode === 35) {
        (optionListRef.current?.lastChild as HTMLLIElement)?.focus();
      }

      if (event.keyCode === 40) {
        if (optionListRef.current?.contains(document.activeElement)) {
          (document.activeElement?.nextSibling as HTMLLIElement)?.focus();
        }
      }

      if (event.keyCode === 38) {
        if (optionListRef.current?.contains(document.activeElement)) {
          (document.activeElement?.previousSibling as HTMLLIElement)?.focus();
        }
      }
    };

    window.document.addEventListener('keyup', handleKeyUp);
    return () => {
      window.document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
}
