import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border: 16px;
`;

export const ButtonGroup = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: transparent;
    border: none;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: #9758a6;
        transition: all 0.4s;
        border: none;

        &:hover{
            background-color: #6f357b;
        }
    }
`;

export const EmptyCart = styled.div`
    position: absolute;
    left: 28%;
    top: 45%;
    padding: 40px 20px;
    width: 500px;
    
    svg {
        width: 100%;
        max-width: 500px;  // tamanho máximo
        height: auto;
    }
`;

export const ProductTotalPrice = styled.div`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;
