/* eslint-disable no-param-reassign */
import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container, Content, Label } from './styles';

export default function index(props) {
  const { fieldName, defaultValue, registerField } = useField(props.name);
  const inputEl = useRef(null);
  const [focused, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputEl,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container focused={focused}>
        <Content>
          <div>
            <Label htmlFor="inputEl">{props.label}</Label>
            <input
              autoComplete="off"
              defaultValue={defaultValue}
              name={props.name}
              onClick={() => handleFocus()}
              onBlur={() => handleBlur()}
              ref={inputEl}
              type={props.type}
              placeholder={props.placeholder}
            />
          </div>
        </Content>
        {props.children && props.children}
      </Container>
    </>
  );
}
