import styled from 'styled-components'
import BookmarkIcon from '@material-ui/icons/Bookmark'

const FarmCard = (props) => {
    return (
        <article className={props.className}>
            <div className="farm-img-wrapper">
                <img src={props.farm.image} alt={props.farm.name} />
                <span onClick={props.handleBookmark}>
                    <BookmarkIcon />
                </span>
            </div>
            <div className="farm-content">
                <h3>{props.farm.name}</h3>
                <div className="farm-properties">
                    <p>
                        Origin: <span>{props.farm.origin}</span>
                    </p>
                    <p>
                        Location: <span>{props.farm.location}</span>
                    </p>
                    <p>
                        Altitude: <span>{props.farm.altitude}</span>
                    </p>
                </div>
            </div>
        </article>
    )
}

export const DashboardFarmCard = styled((props) => <FarmCard {...props} />)`
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.pallette.black[100]};
    overflow: hidden;
    .farm-img-wrapper {
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
        span {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background-color: #fff;
            border: 1px solid ${({ theme }) => theme.pallette.black[50]};
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        svg {
            width: 24px;
            height: 24px;
            fill: ${({ theme }) => theme.pallette.black[700]};
        }
        span:hover {
            background-color: #f0f0f0;
        }
    }
    .farm-content {
        padding: 1rem;
        h3 {
            font-size: 1.125rem;
            font-weight: bold;
            &::first-letter {
                text-transform: capitalize;
            }
        }
        .farm-properties {
            p {
                margin: 0;
                font-size: 0.875rem;
                font-weight: 500;
                color: ${({ theme }) => theme.pallette.black[400]};
                span {
                    color: ${({ theme }) => theme.pallette.black[900]};
                }
            }
        }
    }
`
