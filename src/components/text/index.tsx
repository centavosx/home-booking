import { Text as TextComp, TextProps } from 'rebass'
import styled, { StyledComponent } from 'styled-components'
import { boldTextStyle, regularTextStyle } from '../../utils/theme'
import React from 'react'

const Styled = styled(TextComp)({
  ...regularTextStyle,
})

const StyledHeader = styled(TextComp)`
  font-family: MavenPro-Bold;
  font-size: 32px;
`

const StyledHeaderFooter = styled(TextComp)`
  font-family: MavenPro-Bold;
  font-size: 24px;
`

const StyledDescription = styled(TextComp)`
  font-family: MavenPro;
  font-size: 24px;
`

const StyledDescriptionV2 = styled(TextComp)`
  font-family: MavenPro;
  font-size: 18px;
`

const Text: React.FC<TextProps> & {
  Header: StyledComponent<React.FunctionComponent<TextProps>, any, {}, never>
  HeaderV2: StyledComponent<React.FunctionComponent<TextProps>, any, {}, never>
  Description: StyledComponent<
    React.FunctionComponent<TextProps>,
    any,
    {},
    never
  >
  DescriptionV2: StyledComponent<
    React.FunctionComponent<TextProps>,
    any,
    {},
    never
  >
} = (prop: TextProps) => <Styled {...prop} />

Text.Header = StyledHeader
Text.HeaderV2 = StyledHeaderFooter
Text.Description = StyledDescription
Text.DescriptionV2 = StyledDescriptionV2

export { Text }
