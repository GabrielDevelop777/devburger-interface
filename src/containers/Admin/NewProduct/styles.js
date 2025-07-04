import ReactSelect from "react-select";
import styled from "styled-components";
import { Button } from "../../../components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
    border-radius: 20px;
    background-color: #484848;
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;

`;
export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    padding: 0 12px;
    border: none;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label`
    color: #f0f0f0;
    font-size: 14px;

`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed #f0f0f0;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    color: #f0f0f0;
    margin: 20px 0;

    > svg {
        width: 20px;
        height: 20px;
        fill: #f0f0f0;
        margin-right: 4px;
    }

    input {
        display: none;
    }
`;

export const Select = styled(ReactSelect)`

`;

export const SubmitButton = styled(Button)`
    margin-top: 40px;
`;

export const ErrorMessage = styled.span`
    color: #cf3057;
    font-size: 14px;
    line-height: 80%;
    font-weight: 600;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;

    input {
        cursor: pointer;

    }
`;
