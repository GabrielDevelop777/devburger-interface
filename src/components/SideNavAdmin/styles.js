import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #363636;

    img {
        width: 60%;
        margin: 40px 0;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: #fff;
    background-color: ${(props) => (props.$isActive ? "#9758a6" : "transparent")};

    &:hover {
        background-color: #9758a6;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
`;
