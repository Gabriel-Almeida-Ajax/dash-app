import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100px;

    padding: 0 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #DFDFDF;
    & > * {
        margin: 18px;
    }
`

export const Name = styled.p`
    font-size: 24px;
`

export const Image = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;

    cursor: pointer;
    
`
interface IUploadProp {
    ref: any;
}
export const Upload = styled.input<IUploadProp>`
    display: none;
`