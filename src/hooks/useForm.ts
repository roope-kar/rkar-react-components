import React from 'react';

export default function useForm() {
  const [values, setValues] = React.useState({});
  const setValue = (field: string, value: any) => setValues({ ...values, [field]: value });
  return [values, setValue];
}
