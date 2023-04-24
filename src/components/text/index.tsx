import { Text as TextComp, TextProps } from 'rebass'
import styled, { StyledComponent } from '@emotion/styled'
import { boldTextStyle, regularTextStyle } from '../../utils/theme'
import React from 'react'
import mediaQueries from '../views/media'
import { Theme } from '@emotion/react'

const Styled = styled(TextComp)({
  ...regularTextStyle,
  fontSize: [1],
})

const StyledHeader = styled(TextComp)({
  fontFamily: 'MavenPro-Bold',
  fontSize: [24, 26, 32],
})

const StyledHeaderFooter = styled(TextComp)({
  fontFamily: 'MavenPro-Bold',
  fontSize: [16, 18, 24],
})

const StyledDescription = styled(TextComp)({
  fontFamily: 'MavenPro',
  fontSize: [16, 18, 24],
})

const StyledDescriptionV2 = styled(TextComp)({
  fontFamily: 'MavenPro',
  fontSize: [14, 16, 18],
})

const Text: React.FC<TextProps> & {
  Header: StyledComponent<
    TextProps & {
      theme?: Theme | undefined
    },
    {},
    {}
  >
  HeaderV2: StyledComponent<
    TextProps & {
      theme?: Theme | undefined
    },
    {},
    {}
  >
  Description: StyledComponent<
    TextProps & {
      theme?: Theme | undefined
    },
    {},
    {}
  >
  DescriptionV2: StyledComponent<
    TextProps & {
      theme?: Theme | undefined
    },
    {},
    {}
  >
} = (prop: TextProps) => <Styled {...prop} />

Text.Header = StyledHeader
Text.HeaderV2 = StyledHeaderFooter
Text.Description = StyledDescription
Text.DescriptionV2 = StyledDescriptionV2

export { Text }
