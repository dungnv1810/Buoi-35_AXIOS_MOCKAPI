import React from "react";
import { ButtonWrapper } from "./style";
const Button = (props) => {
    const {name, type, onClick, className} = props;
    return(
        <>
            <ButtonWrapper className={className} type={type} onClick={onClick}>
                {name}
            </ButtonWrapper>
        </>
    )
}
export default Button;