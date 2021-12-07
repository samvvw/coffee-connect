import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || '#000000'};
    color: ${(props) => props.textColor || '#ffffff'};
    border-radius: ${(props) => props.borderRadius || '20px'};
    padding: ${(props) => props.padding || '8px 13px'};
    border: none;
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border || '1px solid'};
    border-color: ${(props) => props.borderColor || '#000000'};

    &:hover{
        background-color: ${(props) => props.hoverBackgroundColor || props.backgroundColor};
        color: ${(props) => props.hoverTextColor || props.textColor };
        border-color: ${(props) => props.hoverBorderColor || props.borderColor};
    }
    &:active{
        background-color: ${(props) => props.activeBackgroundColor || props.backgroundColor};
        border-color: ${(props) => props.activeBorderColor || props.borderColor};
    }
`
