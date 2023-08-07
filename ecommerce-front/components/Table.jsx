import { styled } from "styled-components";

const StyleTable = styled.table`
width: 100%;
th{
    text-align: left;
    text-transform: uppercase;
    font-weight: normal;
    color: #998585;
    font-size: .6rem;
}
td{
        border-top: 1px solid rgba(0,0,0,0.1);
    }
`;

export default function Table(props) {
    return <StyleTable {...props} />
}
