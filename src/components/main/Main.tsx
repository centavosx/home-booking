import { Flex, FlexProps } from 'rebass'

import { theme } from '../../utils/theme'

import { Text } from '../text'

import { Header } from '../header'
import { BaseHead } from '../basehead'

export const Main = ({
  pageTitle,
  children,
}: { pageTitle?: string } & FlexProps) => {
  return (
    <>
      <BaseHead
        title="Hampton C6"
        pageTitle={pageTitle}
        description="Set your booking"
      />
      <Flex
        width={'100%'}
        sx={{ position: 'unset', height: '100%' }}
        justifyContent="center"
        backgroundColor={theme.colors.white}
      >
        <Flex
          flexDirection={'column'}
          sx={{
            flex: 1,
            position: 'unset',
            height: '100%',
            overflow: 'auto',
            width: '100%',
          }}
          maxWidth={2250}
          alignSelf="center"
          backgroundColor={theme.colors.white}
        >
          {children}
          <Header
            id={'footer'}
            backgroundColor={theme.colors.black90}
            padding={20}
            flexDirection={'column'}
            sx={{ alignItems: 'start', gap: 3 }}
          >
            <Text.HeaderV2
              sx={{
                color: theme.colors.white,
              }}
            >
              Hampton Villa Tagaytay C6
            </Text.HeaderV2>
            <Text.DescriptionV2
              sx={{
                color: theme.colors.white,
              }}
            >
              Email: sseethpan@yahoo.com
            </Text.DescriptionV2>
            <Text.DescriptionV2
              sx={{
                color: theme.colors.white,
              }}
            >
              Contact number: +639258482797
            </Text.DescriptionV2>
            <Text.DescriptionV2
              sx={{
                color: theme.colors.white,
              }}
            >
              Copyright@2023
            </Text.DescriptionV2>
          </Header>
        </Flex>
      </Flex>
    </>
  )
}
