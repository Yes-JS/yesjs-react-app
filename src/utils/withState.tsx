import React, { useEffect, useState } from 'react';

export function withState<
  T extends {
    value?: unknown;
    onChange?: unknown;
    onBlur?: unknown;
    onKeyPress?: unknown;
  },
  E extends { value?: unknown } = HTMLInputElement
>(WrappedComponent: React.ComponentType<T>): React.FunctionComponent<T> {
  const WithState: React.FunctionComponent<T> = (props) => {
    const [value, setValue] = useState(props.value);

    const reset = () => setValue(props.value);

    useEffect(() => {
      reset();
    }, [props.value]);

    const makeHandle = (fn: unknown) => async (e: unknown) => {
      try {
        if (typeof fn === 'function') {
          await fn(e);
        }
      } catch (error) {
        reset();
      }
    };

    const handleChangeWithoutSetValue = makeHandle(props.onChange);

    const handleChange = (e: React.ChangeEvent<E>) => {
      setValue(e.target.value);
      handleChangeWithoutSetValue(e);
    };

    const handleBlur = makeHandle(props.onBlur);

    const handleKeyPress = makeHandle(props.onKeyPress);

    return (
      <WrappedComponent
        {...props}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
    );
  };

  return WithState;
}
