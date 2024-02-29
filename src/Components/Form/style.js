import styled from 'styled-components'
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 2rem auto;
    padding: 0.75rem 0.85rem;
    border: 1px solid #cacaca;
    border-radius: 5px;
    .title{
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.5rem;
    }
    .btn{
        padding: 6px 0px;
        border: none;
        cursor: pointer;
        background: #0D6EFD;
        border-radius: 5px;
        color: #fff;
        font-size: 1rem;
    }
    .formControl{
        padding: 7px 0px;
        outline: none;
    }
`;