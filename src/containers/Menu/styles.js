import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/background.svg";
import BannerHamburguer from "../../assets/banner-hamburguer.svg";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(
         rgba(255,255,255, 0.5),
         rgba(255,255,2555, 0.5)
         ),
        url('${Background}');
`;

export const Banner = styled.div`
    background: url('${BannerHamburguer}') no-repeat;
    background-position: center;
    background-color: #1f1f1f;
    background-size: cover;

    height: 480px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 60px;
        color: #ffffff;
        position: absolute;


        right: 20%;
        top: 100px;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? "#9758a6" : "#696969")};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && "2px solid #9758a6"};

`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 90px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;

export const LinkBack = styled.div`
    text-decoration: none;
    text-align: center;
`;

export const ButtonVoltar = styled(Link)`
    display: inline-block;
    margin-top: -40px;

    text-decoration: none;
    cursor: pointer;
    background: none;
    color:rgb(91, 11, 111);
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 30px;
    line-height: 20px;
    border: none;

    &:hover {
        text-decoration: underline ;
    }
`;
