import React from 'react';
import Button from './styles';

export default function index(props) {
  return (
    <div>
      <Button type="submit">{props.children}</Button>
    </div>
  );
}
