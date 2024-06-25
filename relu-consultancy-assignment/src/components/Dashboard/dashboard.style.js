import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: 0.3125fr 1fr 0.3125fr;
    gap: 2rem;
    background: #F5F5F5;
`

export const FirstCol = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`


export const LogoContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
background: #fff;
height: 5rem;
padding: 1rem 2rem;
p {
    font-size: 2rem;
};
border-radius: 0.5rem;
font-family: Mongolian Baiti
`

export const Sidebar = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 0.5rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`
export const SidebarItemsList = styled.div``

export const TabMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    &:hover {
        background: #F5F5F5;
    }
`
export const TabIcon = styled.img``
export const TabTitle = styled.span`
    color: #8D8D8D;
    font-weight: 500;
`

export const LogoutBtn = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    &:hover {
        background: #F5F5F5;
    }
`

export const SecondCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const SearchContainer = styled.div`
    width: 100%;
    height: 5rem;
    background: #fff;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    gap: 0.5rem;
`

export const SearchField = styled.input`
width: 100%;
border: none;
padding: 1rem 0;
outline: none;
font-size: 1rem;

`

export const ThirdCol = styled.div`

`

export const BecomeSellerBtn = styled.button`
    width: 100%;
    height: 5rem;
    border-radius: 0.5rem;
    background: #88C2BB;
    font-weight: 600;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
        background: #0EC297;
    }
`