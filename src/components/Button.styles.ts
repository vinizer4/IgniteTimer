import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    ${props => {
        return `background-color: ${buttonVariants[props.variant]}`
    }}
`