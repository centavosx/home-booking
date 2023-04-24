import React from 'react'
import Head from 'next/head'

type BaseHeadProps = {
  title: string
  description: string
  pageTitle?: string
}

export const BaseHead = ({ title, description, pageTitle }: BaseHeadProps) => (
  <Head>
    <title>{`${title} ${pageTitle ? ` - ${pageTitle}` : ''}`}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="preload"
      href="/fonts/maven-pro-regular.ttf"
      as="font"
      crossOrigin=""
      type="font/truetype"
    />
    <link
      rel="preload"
      href="/fonts/maven-pro-bold.ttf"
      as="font"
      crossOrigin=""
      type="font/truetype"
    />
    <link
      rel="preload"
      href="/fonts/maven-pro-black.ttf"
      as="font"
      crossOrigin=""
      type="font/truetype"
    />

    <link
      rel="preload"
      href="/fonts/maven-pro-medium.ttf"
      as="font"
      crossOrigin=""
      type="font/truetype"
    />
  </Head>
)
