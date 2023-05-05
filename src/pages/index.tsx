import React, { useEffect, useRef, useState } from 'react'
import { Flex, Image } from 'rebass'

import { Main } from '../components/main'
import { Text } from '../components/text'

import { Section } from '../components/sections'
import { Formik } from 'formik'
import { FormContainer } from '../components/forms'
import { FormInput } from '../components/input'
import { Button } from '../components/button'
import { Carousel, SecondCarousel } from 'components/carousel'
import { theme } from 'utils/theme'

type RoomAndTitle = {
  title: string
  uri: string[]
  description: string
}

const roomsUri: RoomAndTitle[] = [
  {
    title: 'Living Room',
    uri: ['/assets/rooms/living-room.jpg', '/assets/rooms/living-room2.jpg'],
    description:
      'An elegant, modernized room where you can relax, watch TV, or play games with your family or friends.',
  },
  {
    title: 'Bed Room',
    uri: ['/assets/rooms/bedroom1.jpg', '/assets/rooms/bedroom2.jpg'],
    description:
      "What makes for a good night's sleep? A bed that is warm and cozy, a room that is cool and tranquil, and a window that offers views of the moon and the sun.",
  },
  {
    title: 'Kitchen',
    uri: ['/assets/rooms/kitchen.jpg'],
    description:
      "No utensils for cooking? Don't worry our kitchen is complete on set. A stove, refrigerator, cooking pan, and everything that you need!",
  },
  {
    title: 'Dining Room',
    uri: ['/assets/rooms/kitchen.jpg'],
    description:
      'Enjoy meals in our relaxed and joyful atmosphere in our dinner room.',
  },
]

type ContactUsForm = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Home() {
  return (
    <Main id="home" style={{ flex: 1 }}>
      <Flex flexDirection={'column'} alignItems="center">
        <Flex sx={{ width: '100%', backgroundColor: theme.colors.black20 }}>
          <Carousel
            nextOrPrevColor={theme.colors.white}
            carouselContent={Array(5)
              .fill(null)
              .map((_, i) => (
                <Image
                  key={i}
                  src={`/assets/landscape-carousel/${i}.jpg`}
                  alt="ming"
                  width={'100%'}
                  height={[350, 450, 650]}
                />
              ))}
            loop={true}
            backgroundColor={theme.colors.black20}
            contentProps={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Flex sx={{ flexDirection: 'column', gap: 3 }}>
              <Flex alignItems={'center'} sx={{ width: [130, 180, 220] }}>
                <Button
                  style={{
                    borderRadius: 100,
                    padding: 24,
                    borderColor: theme.colors.white,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    width: '100%',
                  }}
                  backgroundcolor={theme.colors.black75}
                  hovercolor={theme.colors.black90}
                  activecolor={theme.colors.black70}
                >
                  <Text.HeaderV2
                    sx={{ color: theme.colors.white, fontSize: [12, 16, 18] }}
                  >
                    BOOK NOW
                  </Text.HeaderV2>
                </Button>
              </Flex>
            </Flex>
          </Carousel>
        </Flex>
        <Section
          title="Description"
          contentProps={{
            flexDirection: 'column',
            sx: { gap: '21px' },
            justifyContent: 'left',
            alignItems: 'flex-start',
          }}
        >
          <Text.Description>
            In Unit C6 Hampton Villa which is located in Barangay Sungay East,
            4120 Tagaytay, Philippines. You, your family or friends can have an
            affordable enjoyable vacation while also experiencing the beauty and
            elegance of the village and nature.
          </Text.Description>
          {roomsUri.map((v, i) => (
            <Flex sx={{ gap: 2, flexDirection: 'column' }} key={i}>
              <Text.HeaderV2>{v.title}</Text.HeaderV2>
              <Flex
                justifyContent={'left'}
                flexDirection={'row'}
                sx={{ gap: 2, flexWrap: 'wrap' }}
              >
                {v.uri.map((img, i) => (
                  <Image src={img} key={i} height={250} width={200} />
                ))}
              </Flex>
              <Text.DescriptionV2>{v.description}</Text.DescriptionV2>
            </Flex>
          ))}
        </Section>

        <Section
          title="Contact Us"
          contentProps={{
            flexDirection: 'row',
            sx: { gap: 3 },
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Formik<ContactUsForm>
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            onSubmit={() => {}}
          >
            {({ values }) => (
              <FormContainer flexProps={{ sx: { gap: '10px' } }}>
                <Flex
                  flexDirection={['column', 'row']}
                  sx={{ gap: ['10px', '8px'] }}
                >
                  <FormInput<ContactUsForm>
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    style={{ height: 56 }}
                  />
                  <FormInput<ContactUsForm>
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    style={{ height: 56 }}
                  />
                </Flex>
                <FormInput<ContactUsForm>
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
                  style={{ height: 56 }}
                />
                <FormInput<ContactUsForm>
                  name="message"
                  placeholder="Message"
                  value={values.message}
                  sx={{ textarea: { padding: 2, height: 200 } }}
                  maxRows={10}
                  minRows={10}
                  multiline={true}
                />
                <Button
                  style={{ minWidth: 'auto', width: 80, alignSelf: 'flex-end' }}
                >
                  Submit
                </Button>
              </FormContainer>
            )}
          </Formik>
        </Section>
      </Flex>
    </Main>
  )
}
