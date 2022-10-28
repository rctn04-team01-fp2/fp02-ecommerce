import * as React from 'react';

export default function useTextInput(initialValue: any) {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [value, setValue],
  );

  return [value, onChange];
}
