import React from "react";
import Button from "../Button";
import Input from "../Input";
import { FormWrapper } from "./style";
const Form = (props) => {
    const{onClick, state, handleMultiChangeInput} = props;
    return(
        <div>
            <FormWrapper>
                <h2 className="title">Quản lý list UserName</h2>
                <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="formControl"
                    nameLabel="Username:"
                    onChange={handleMultiChangeInput}
                    // value={null}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="formControl"
                    nameLabel="Email:"
                    onChange={handleMultiChangeInput}
                    // value={null}
                />
                <Button
                    name="Add"
                    onClick={onClick}
                    type="add"
                    className="btn"
                />
            </FormWrapper>
        </div>
    )
}
export default Form