import styled from 'styled-components';
import Select from 'react-select';
import { Fragment } from "react";
export const SearchContainer = styled.main`
    text-align: center;
    margin: auto;
    width: 50%;
    overflow: auto;
    position: relative;
    padding-bottom: 100px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SearchInputField = styled(Select)`
    margin:15px 0;
    padding:15px 10px;
    width:100%;
    outline:none;
    display:inline-block;
    text-align: center;
    width: 50%;
    margin: auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SearchResultContainer = styled.section`
    padding: 2rem;
    color: white;
`;

export const NewsCellContainer = styled(Fragment)`

`;