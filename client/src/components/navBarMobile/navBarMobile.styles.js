import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.div`

    ul {
        list-style: none;
        padding-left: 0;
    }

    .navbar {
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .menu-bars {
        font-size: 3rem;
        background: none;
        padding: 0.5rem;
    }

    .nav-menu {
        background-color: #ffffff;
        width: 320px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -100%;
        transition: 850ms;
        z-index: 100000;
    }

    .nav-menu.active {
        left: 0;
        transition: 350ms;
    }

    .nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 0px;
        list-style: none;
        height: 60px;
        border-top: 0.5px solid  ${theme.pallette.black[100]}
    }

    .nav-text:last-child {
        border-bottom: 0.5px solid  ${theme.pallette.black[100]}
    }

    .nav-bottom:last-child {
        border-bottom: none;
    }

    .nav-bottom.green a {
        color: ${theme.pallette.primary[500]}
    } 

    .nav-bottom.green a:hover {
        color: ${theme.pallette.primary.dark}
        font-weight: bold;
    } 

    .nav-text a {
        text-decoration: none;
        color: ${theme.pallette.black[900]};
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    .nav-text a:hover {
        // background-color: lightblue;
        font-weight: bold;
    }

    .nav-menu-items {
        width: 100%;
        height:100%;
        padding: 0;
        border-top-right-radius: 10px; 
    }

    .nav-menu-items.bottom{
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-item: stretch;
    }

    .navbar-toggle {
        width: 100%;
        height: 173px;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        justify-content: center;
    }

    .logged-in {
        display: grid;
        grid-template-columns: 75% 25%;
        align-items: center;
        justify-content: center;
    }

    .navbar-toggle a {
        font-size: 0.8rem;
        margin: 0 0.5rem 0 0;
        text-align: right;
        text-decoration: none;
        color: ${theme.pallette.primary[500]};
    }

    .navbar-toggle a:hover {
        color: ${theme.pallette.primary.dark};
        font-weight: bold;
    }

    .profile__badge {
        display: grid;
        place-items: center;

        background-color: ${(props) => {
            if (props.type === 'consumer') {
                return theme.pallette.primary.light
            } else {
                return theme.pallette.secondary.light
            }
        }};

        color: ${(props) => {
            if (props.type === 'consumer') {
                return theme.pallette.primary.dark
            } else {
                return theme.pallette.secondary.dark
            }
        }};

        font-weight: 600;
        font-size: 14px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

`