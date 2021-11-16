import styled from 'styled-components'

export const Container = styled.div`
    width: ${(props) => props.width || '100%'};
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.438rem;
    .team-member-image-wrapper {
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto 2rem auto;
        height: 324px;
        width: 324px;
    }
    img {
        width: 100%;
        height: auto;
    }

    button {
        background-color: transparent;
        max-width: 100px;
        border: none;
        cursor: pointer;
        text-decoration: underline;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    h4 {
        font-weight: bold;
        font-size: 1.125rem;
    }
    h5 {
        font-size: 1rem;
        font-weight: normal;
    }

    h3,
    h4 {
        padding-bottom: 0.5rem;
    }

    @media only screen and (min-width: 401px) {
        .team-member-image-wrapper {
            width: 270px;
            height: 270px;
        }

        h3 span {
            display: block;
            font-size: 1rem;
            font-weight: normal;
        }

        h4 {
            font-weight: normal;
        }
    }
`
export const IconsContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-between;

    a {
        width: 24px;
        height: 24px;
    }
`
