import React, { useRef } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import InputMask from "react-input-mask"; // Certifique-se de ter a versão mais recente

import stylesInput from "../input.module.css";
import { Flex } from "antd";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  mask?: string;
  max?: number;
}

const TextInput: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "Digite aqui...",
  max,
  mask,
}) => {
  const inputRef = useRef<HTMLInputElement | undefined>(undefined); // Criando o ref com useRef

  return (
    <Flex className={`${stylesInput.input}`}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }: FieldProps) =>
          mask ? (
            <InputMask
              {...field}
              id={name}
              type={type}
              mask={mask}
              maxLength={max}
              placeholder={placeholder}
              className={stylesInput.maskedInput}
              ref={inputRef as any} // Passando o ref diretamente para o InputMask
            />
          ) : (
            <input
              {...field}
              id={name}
              type={type}
              maxLength={max}
              placeholder={placeholder}
              className={stylesInput.textInput}
              ref={inputRef as any} // Passando o ref diretamente para o input
            />
          )
        }
      </Field>
      <ErrorMessage name={name} component="div" className={stylesInput.error} />
    </Flex>
  );
};

export default TextInput;
