import React, { useRef } from 'react';

export function blurOnEnter<
  T extends { onKeyPress?: unknown },
  E extends { blur?: unknown } = HTMLInputElement
>(
  WrappedComponent: React.ComponentType<T>,
  refProp: string = 'ref',
): React.FunctionComponent<T> {
  const BlurOnEnter: React.FunctionComponent<T> = (props) => {
    const elementRef = useRef<E>(null);
    const handleKeyPress = (e: React.KeyboardEvent<E>) => {
      if (typeof props.onKeyPress === 'function') {
        props.onKeyPress(e);
      }
      if (
        e.key === 'Enter' &&
        typeof elementRef?.current?.blur === 'function'
      ) {
        elementRef.current.blur();
      }
    };

    return (
      <WrappedComponent
        {...props}
        {...{ [refProp]: elementRef }}
        onKeyPress={handleKeyPress}
      />
    );
  };

  return BlurOnEnter;
}
