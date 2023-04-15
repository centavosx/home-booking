import { Button as ButtonComponent, ButtonProps as Props } from '@mui/material'
import styled from '@emotion/styled'
import { theme } from 'utils/theme'

export type ButtonProps = {
  backgroundcolor?: string
  activecolor?: string
  hovercolor?: string
  textcolor?: string
  hovertextcolor?: string
  activetextcolor?: string
  custom?: any
} & Props

const StyledButton = ({ className, sx, ...props }: ButtonProps) => {
  return (
    <ButtonComponent className={className} {...props}>
      {props?.children}
    </ButtonComponent>
  )
}
export const Button = styled(StyledButton)`
  && {
    font-family: MavenPro;
    font-weight: bold;
    background-color: ${({ backgroundcolor }) =>
      backgroundcolor ?? theme.colors.black};
    color: ${({ textcolor }) => textcolor ?? theme.colors.white};
    :disabled {
      background-color: gray;
      color: white;
    }
    :hover {
      background-color: ${({ hovercolor }) =>
        hovercolor ?? theme.colors.black60};
      color: ${({ hovertextcolor }) => hovertextcolor ?? theme.colors.white};
    }
    :active {
      background-color: ${({ activecolor }) =>
        activecolor ?? theme.colors.black80};
      color: ${({ activetextcolor }) => activetextcolor ?? theme.colors.white};
    }

    ${({ custom }) => custom}
  }
`
