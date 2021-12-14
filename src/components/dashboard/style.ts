import { IDashConfig } from './../../hooks/AppProvider';
import styled from "styled-components";

export const Container = styled.section`
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    background-color: #e5e5e5;

    margin-left: 100px;

    padding-left: 30px;

`

interface IItemProp {
    gridArea: string
}

export const Item = styled.div<IItemProp>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    overflow: hidden;
    overflow-y: auto;
    border-radius: 10px;
    grid-area: ${props => props.gridArea};

`

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    
    padding: 20px 0 10px 0;

    height: 55px;
    
    & span:first-child {
        font-size: 18px;
        color: #858585;
    }
    
    & span:hover {
        color: #858585;
        cursor: pointer;
    }
    
    & span {
        padding-left: 10px;
        font-size: 18px;
        color: #c4c4c4;
    }
`

export const ContainerDash = styled.div<IDashConfig>`
    padding: 0 10px 10px;
    width: 100%;
    height: calc(100% - 55px);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: "receber  movimento" "pagar movimento" "saldo movimento";
    grid-gap: 25px;

    ${props => {
        if(props.layout)
            return props.layout
    }}
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-template-areas: "receber" "pagar" "saldo" "movimento" "movimento";
    }
    
`

export const ItemTitle = styled.h1`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 10px 0;
    width: 95%;

    position: sticky;
    top: 0;

    background-color: #fff;

    border-bottom: 1px solid #e5e5e5;
`

export const ItemDashCotent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    color: ${props => props.color};

    font-size: 32px;

    width: 100%;
    height: 180%;

`

export const Move = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    cursor: pointer;

    width: 100%;
    padding: 0 20px;
    margin-top: 15px;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        background-color: #f5f5f5;
    }
`
export const MoveTitle = styled.div`
    font-size: 22px;
    color: #858585;
`

interface IMoveItemProp {
    value: string
}

export const MoveContent = styled.div<IMoveItemProp>`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    font-size: 18px;
    color: ${props => new RegExp('[+]', 'u').test(props.value) ? '#08e600' : '#d30000'};
`