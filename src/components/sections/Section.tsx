import { Loading } from 'components/loading'
import { Flex, FlexProps, TextProps } from 'rebass'

import { Text } from '../text'
import { theme } from 'utils/theme'

export const Section = ({
  title,
  children,
  textProps,
  contentProps,
  isFetching,
  ...other
}: {
  title?: string
  textProps?: TextProps
  contentProps?: FlexProps
  isFetching?: boolean
} & FlexProps) => {
  return (
    <Flex
      flexDirection="column"
      padding={26}
      width={'100%'}
      height={'100%'}
      sx={{ gap: 4 }}
      {...other}
    >
      {!!title && (
        <Text.Header color={theme.colors.black} {...textProps}>
          {title}
        </Text.Header>
      )}
      {isFetching && <Loading />}
      <Flex
        alignItems={'center'}
        flexDirection="column"
        width={'100%'}
        sx={{ gap: 4 }}
        {...contentProps}
      >
        {children}
      </Flex>
    </Flex>
  )
}
