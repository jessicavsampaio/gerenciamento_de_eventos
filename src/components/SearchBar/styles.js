import styled from 'styled-components';

export const Search = styled.div`
    position: relative;
    top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 25%;
    gap: 1rem;
    color: #ffffff;

    .searchBar {
        display: flex;
        align-items: center;
    }

    .searchBar button {
        width: 35px;
        height: 35px;
        border-radius: 5px;
    }

    svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    input {
        position: relative;
        border-radius: 15px;
        outline: none;
        cursor: pointer;
        padding: 10px 0 10px 5px;
        width: 25vw;
    }

    fieldset {
        text-align: center;
    }

    fieldset div {
        padding: 15px;
        display: flex;
        gap: 10px;

    }

    input[type="radio"] {
        width: 12px;
    }

    input[type="date"] {
        margin: 10px;
        width: 50%;
        align-self: center;
    }
`;