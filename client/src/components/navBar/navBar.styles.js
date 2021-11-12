import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const Menu = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    margin-bottom: 0;
`

export const MenuItem = styled.li`
    margin: auto 1rem;
    align-self: center;

    & > a {
        text-decoration: none;
        color: #000000;
        font-size: 1.1rem;
    }
`
