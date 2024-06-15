import styled from "styled-components";

export const GoBackBtn = styled.button`
    border: none;
    background-color: #00000080;
    border-radius: 10px;
    padding: 10px;
    height: 36px;
    width: 95px;
    margin: 30px 0 0 50px;
    & a{
    color: #ffffff;
    text-decoration: none;
    }
    & svg{
        margin-bottom: -2px;
    }
`
export const Info = styled.section`
    font-family: monospace;
    display: flex;
    font-size: 150%;
    & img{
        height: 450px;
    }
    & div{
        padding: 30px 30px;
        & p{
            margin-top: 30px;
        }
        & li{
            margin-top: 30px;;
        }
    }
`
export const Addictional = styled.section`
    border-top: solid gray;
`