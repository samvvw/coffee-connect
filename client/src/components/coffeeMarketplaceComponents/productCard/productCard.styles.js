import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
`

export const InfoContainer = styled.div``

export const Metadata = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    & > p {
        margin-bottom: 0;
    }
`

export const Description = styled.div`
    & > p {
        width: 55ch;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    & > p {
        margin-bottom: 0;

        & > span {
            margin-left: 10px;
            position: relative;
            top: 1px;
        }
    }
`

export const ProductName = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
`

export const ProductPrice = styled.p`
    font-weight: bold;
    font-size: 1.5rem;

    & > span {
        font-size: 1rem;
        font-weight: normal;
    }
`
