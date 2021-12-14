import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 168, 0, 0.8);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;

    width: 100px;
    height: 100%;
    
    transition: all 0.2s ease-in-out;

    &:hover {
        width: 275px;
    }

    & > * {
        margin-bottom: 10px;
    }

    & :first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        height: 100px;
        
    }

    & :last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin-top: auto;

        width: 100%;
        height: 100px;
        
    }
`;

export const MenuItem = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(255, 168, 0, 0.8);
        cursor: pointer;
        font-weight: 400;
    }

    padding: 10px;
`