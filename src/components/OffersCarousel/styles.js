import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }
    overflow-x: hidden;


    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 30px;
        top: 5px;
    }
    .react-multiple-carousel__arrow--right {
        top: 5px;
    }

    padding-left: 40px;
    padding-bottom: 40px;
    border-radius: 10px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #61a120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0px;
    margin-top: 70px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #61a120;

    }
`;
