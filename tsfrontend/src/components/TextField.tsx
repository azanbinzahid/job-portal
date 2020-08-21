import React, { FC } from "react";
import { Form } from "react-bootstrap";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: any;
  error: any;
  label?: string;
};
const TextField: FC<Props> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
}) => {
  return (
    <>
      <Form.Group>
        {label ? <Form.Label>{label}</Form.Label> : null}
        <Form.Control
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
      {error}
    </>
  );
};

export default TextField;
