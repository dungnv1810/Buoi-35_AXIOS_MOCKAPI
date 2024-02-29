import React from "react";
import { InputWrapper } from "./style";
const Input = ({id, type, name, placeholder, className, nameLabel, onChange, value}) => {
    return(
        <>
            <InputWrapper htmlFor={id}>
                {nameLabel}
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={className}
                    onChange={onChange}
                    value={value}
                />
            </InputWrapper>
        </>
    )
}
export default Input