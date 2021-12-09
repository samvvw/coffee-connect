import styled from 'styled-components'

export const Container = styled.div`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    /* display: flex;
    flex-direction: column; */
    margin: 0 auto;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.pallette.black[100]};
    overflow: hidden;
    color: ${({ theme }) => theme.pallette.black[900]};

    .product-img-wrapper {
        position: relative;
        height: 216px;
        width: 368px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center left;
        }
    }

    .product-content {
        padding: 1rem;

        h3 {
            font-size: 1.125rem;
            font-weight: bold;
            &::first-letter {
                text-transform: capitalize;
            }
        }
        .product-properties {
            p {
                margin-bottom: 0.2rem;
                font-size: 0.875rem;
                font-weight: 500;
                color: ${({ theme }) => theme.pallette.black[400]};
                span {
                    color: ${({ theme }) => theme.pallette.black[900]};
                }
            }
        }
        .product-price {
            margin-top: 1rem;
            h4 {
                font-size: 1rem;
                font-weight: bold;
                span {
                    font-weight: normal;
                }
            }
        }
    }
`
