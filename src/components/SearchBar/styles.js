import styled from 'styled-components';

export const Search = styled.div`
    position: relative;
    top: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 25%;
    gap: 1rem;

    input {
        position: relative;
        border-radius: 15px;
        outline: none;
        cursor: pointer;
        padding: 10px 0 10px 5px;
        width: 25vw;
    }

    svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;