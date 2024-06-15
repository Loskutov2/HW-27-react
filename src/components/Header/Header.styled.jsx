import styled from "styled-components";

export const HeadSection = styled.section`
    padding: 0;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
`

export const HeadList = styled.ul`
    display: flex;
    & li{
        margin: 20px 0 20px 40px;
        font-size: 24px;
        font-family: fantasy;
        & a{
            color: black;
            text-decoration: none;
        }
    }
`