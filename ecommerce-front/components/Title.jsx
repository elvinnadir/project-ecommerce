import { styled } from "styled-components";

const StyleTitle = styled.h1`
font-size: 1.5rem;
`


export default function Title(props) {
    return <StyleTitle {...props} />
}