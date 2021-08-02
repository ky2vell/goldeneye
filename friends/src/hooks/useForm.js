import { useState } from 'react';

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = e => {
    if (e.target.type === 'number') {
      setValues({ ...values, [e.target.name]: Number(e.target.value) });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  return [values, setValues, handleChanges];
};
