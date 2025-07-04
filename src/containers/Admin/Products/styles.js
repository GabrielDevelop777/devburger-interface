import styled from "styled-components";

export const Container = styled.div`

`;

export const EditButton = styled.button`
    background-color: #f4f4f4;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 18px;
        width: 18px;
    }

    &:hover {
        background-color: #9758a6;

        svg {
            fill: #f4f4f4
        }
    }
`;

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;
