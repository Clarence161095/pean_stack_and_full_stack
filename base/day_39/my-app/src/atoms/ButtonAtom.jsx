import React from 'react';
import toast from 'react-hot-toast';

export default function ButtonAtom({ name = 'Click' }) {
  return (
    <button onClick={() => {
      toast.success('Successfully toasted! ' + name)
    }}>{name}</button>
  );
}
