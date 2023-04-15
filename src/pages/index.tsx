import { Flex } from 'rebass'

import { Main } from '../components/main'

import { Section } from '../components/sections'
import { Formik } from 'formik'
import { FormContainer } from '../components/forms'
import { FormInput } from '../components/input'
import { Button } from '../components/button'
import { Carousel } from 'components/carousel'

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
        <Section
          title="Contact Us"
          contentProps={{
            flexDirection: 'row',
            sx: { gap: 3 },
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Carousel carouselContent={[]}></Carousel>
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
                    name="subject"
                    placeholder="Subject"
                    value={values.subject}
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
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
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
